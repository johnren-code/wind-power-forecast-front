<template>
  <div class="charts">
    <div id="echart-graph-weather" class="echarts-chart-weather"></div>
    <div id="echart-graph-weather-back" class="echarts-chart-weather"></div>
  </div>
</template>

<script>
import Layout from '../components/common/Layout'
import Button from "@/components/elements/button/Button";
import {currentGET} from "api/modules";
import {graphic} from "echarts"
import axios from "axios";
import Menu from "@/components/menu/Menu";
import * as echarts from 'echarts';
import SectionTitle from "@/components/elements/sectionTitle/SectionTitle";
import JsonExcel from 'vue-json-excel'
import $ from 'jquery'

export default {
  name: 'PowerPred',
  components: {Layout, Button, Menu, SectionTitle, 'download-excel': JsonExcel},
  data() {
    return {};
  },
  watch: {
    '$route.params.id': async function (to, from) {
      // 清空数据
      axios.get('/flask/weather').then(res => {
        console.log(res)
        var chartWeather = echarts.init(document.getElementById('echart-graph-weather'), 'dark', {renderer: 'canvas'});
        chartWeather.setOption(res)
        window.addEventListener('resize', function () {
          chartWeather.resize();
        });
      })
      axios.post('/api/windFarmUrl/getByFarmId', {
        farmId: this.$route.params.id
      }).then(res => {
        console.log('res',res)
        axios.post(
            '/flask/weather_pred', {
              path:'http://127.0.0.1:8888'+res.data.originFileUrl.substring(1)
            }).then(rawData => {
              const weatherIcons = {
                Showers: '/flask/static/showers_128.png',
                Sunny: '/flask/static/sunny_128.png',
                Cloudy: '/flask/static/cloudy_128.png'
              };
              const directionMap = {};
              // prettier-ignore
              ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'].forEach(function (name, index) {
                directionMap[name] = Math.PI / 8 * index;
              });
              const data = rawData.data.map(function (entry) {
                return [entry.time, entry.windSpeed, entry.R, entry.waveHeight];
              });
              const weatherData = rawData.forecast.map(function (entry) {
                return [
                  entry.localDate,
                  0,
                  weatherIcons[entry.skyIcon],
                  entry.minTemp,
                  entry.maxTemp
                ];
              });
              const dims = {
                time: 0,
                windSpeed: 1,
                R: 2,
                waveHeight: 3,
                weatherIcon: 2,
                minTemp: 3,
                maxTemp: 4
              };
              const arrowSize = 18;
              const weatherIconSize = 45;
              const renderArrow = function (param, api) {
                const point = api.coord([
                  api.value(dims.time),
                  api.value(dims.windSpeed)
                ]);
                return {
                  type: 'path',
                  shape: {
                    pathData: 'M31 16l-15-15v9h-26v12h26v9z',
                    x: -arrowSize / 2,
                    y: -arrowSize / 2,
                    width: arrowSize,
                    height: arrowSize
                  },
                  rotation: (api.value(dims.R) * Math.PI) / 180,
                  position: point,
                  style: api.style({
                    stroke: '#555',
                    lineWidth: 1
                  })
                };
              };
              const renderWeather = function (param, api) {
                const point = api.coord([
                  api.value(dims.time) + (3600 * 24 * 1000) / 2,
                  0
                ]);
                return {
                  type: 'group',
                  children: [
                    {
                      type: 'image',
                      style: {
                        image: api.value(dims.weatherIcon),
                        x: -weatherIconSize / 2,
                        y: -weatherIconSize / 2,
                        width: weatherIconSize,
                        height: weatherIconSize
                      },
                      position: [point[0], 110]
                    },
                    {
                      type: 'text',
                      style: {
                        text:
                            api.value(dims.minTemp) + ' - ' + api.value(dims.maxTemp) + '°',
                        textFont: api.font({fontSize: 14}),
                        textAlign: 'center',
                        textVerticalAlign: 'bottom'
                      },
                      position: [point[0], 80]
                    }
                  ]
                };
              };
              var option = {
                title: {
                  text: '天气 风向 风速 湿度 预报',
                  left: 'center'
                },
                tooltip: {
                  trigger: 'axis',
                  formatter: function (params) {
                    return [
                      echarts.format.formatTime(
                          'yyyy-MM-dd',
                          params[0].value[dims.time]
                      ) +
                      ' ' +
                      echarts.format.formatTime('hh:mm', params[0].value[dims.time]),
                      '风速：' + params[0].value[dims.windSpeed],
                      '风向：' + params[0].value[dims.R],
                      '湿度：' + params[0].value[dims.waveHeight]
                    ].join('<br>');
                  }
                },
                grid: {
                  top: 160,
                  bottom: 125
                },
                xAxis: {
                  type: 'time',
                  maxInterval: 3600 * 1000 * 24,
                  splitLine: {
                    lineStyle: {
                      color: '#ddd'
                    }
                  }
                },
                yAxis: [
                  {
                    name: '风速（m/s）',
                    nameLocation: 'middle',
                    nameGap: 35,
                    axisLine: {
                      lineStyle: {
                        color: '#666'
                      }
                    },
                    splitLine: {
                      lineStyle: {
                        color: '#ddd'
                      }
                    }
                  },
                  {
                    name: '湿度（%）',
                    nameLocation: 'middle',
                    nameGap: 35,
                    max: 100,
                    axisLine: {
                      lineStyle: {
                        color: '#015DD5'
                      }
                    },
                    splitLine: {show: false}
                  },
                  {
                    axisLine: {show: false},
                    axisTick: {show: false},
                    axisLabel: {show: false},
                    splitLine: {show: false}
                  }
                ],
                visualMap: {
                  type: 'piecewise',
                  // show: false,
                  orient: 'horizontal',
                  left: 'center',
                  bottom: 10,
                  pieces: [
                    {
                      gte: 10,
                      color: '#18BF12',
                      label: '大风（>=10m/s）'
                    },
                    {
                      gte: 5,
                      lt: 10,
                      color: '#f4e9a3',
                      label: '中风（5  ~ 10 m/s）'
                    },
                    {
                      lt: 5,
                      color: '#D33C3E',
                      label: '微风（小于 4 m/s）'
                    }
                  ],
                  seriesIndex: 1,
                  dimension: 1
                },
                dataZoom: [
                  {
                    type: 'inside',
                    xAxisIndex: 0,
                    minSpan: 5
                  },
                  {
                    type: 'slider',
                    xAxisIndex: 0,
                    minSpan: 5,
                    bottom: 50
                  }
                ],
                series: [
                  {
                    type: 'line',
                    yAxisIndex: 1,
                    showSymbol: false,
                    emphasis: {
                      scale: false
                    },
                    symbolSize: 10,
                    areaStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        global: false,
                        colorStops: [
                          {
                            offset: 0,
                            color: 'rgba(88,160,253,1)'
                          },
                          {
                            offset: 0.5,
                            color: 'rgba(88,160,253,0.7)'
                          },
                          {
                            offset: 1,
                            color: 'rgba(88,160,253,0)'
                          }
                        ]
                      }
                    },
                    lineStyle: {
                      color: 'rgba(88,160,253,1)'
                    },
                    itemStyle: {
                      color: 'rgba(88,160,253,1)'
                    },
                    encode: {
                      x: dims.time,
                      y: dims.waveHeight
                    },
                    data: data,
                    z: 2
                  },
                  {
                    type: 'custom',
                    renderItem: renderArrow,
                    encode: {
                      x: dims.time,
                      y: dims.windSpeed
                    },
                    data: data,
                    z: 10
                  },
                  {
                    type: 'line',
                    symbol: 'none',
                    encode: {
                      x: dims.time,
                      y: dims.windSpeed
                    },
                    lineStyle: {
                      color: '#aaa',
                      type: 'dotted'
                    },
                    data: data,
                    z: 1
                  },
                  {
                    type: 'custom',
                    renderItem: renderWeather,
                    data: weatherData,
                    tooltip: {
                      trigger: 'item',
                      formatter: function (param) {
                        return (
                            param.value[dims.time] +
                            ': ' +
                            param.value[dims.minTemp] +
                            ' - ' +
                            param.value[dims.maxTemp] +
                            '°'
                        );
                      }
                    },
                    yAxisIndex: 2,
                    z: 11
                  }
                ]
              };
              var chartWeatherBack = echarts.init(document.getElementById('echart-graph-weather-back'), 'dark', {renderer: 'canvas'});
              chartWeatherBack.setOption(option)
              window.addEventListener('resize', function () {
                chartWeatherBack.resize();
              });
            }
        );
      })
    },
  },
  created() {

  },
  mounted() {
    axios.get('/flask/weather').then(res => {
      console.log(res)
      var chartWeather = echarts.init(document.getElementById('echart-graph-weather'), 'dark', {renderer: 'canvas'});
      chartWeather.setOption(res)
      window.addEventListener('resize', function () {
        chartWeather.resize();
      });
    })
      axios.post(
          '/flask/weather_pred', {
            path:'http://127.0.0.1:8888//file/202307/-06fa9f42df1c4db2af5958cdb773a8d4.csv'
          }).then(rawData => {
            const weatherIcons = {
              Showers: '/flask/static/showers_128.png',
              Sunny: '/flask/static/sunny_128.png',
              Cloudy: '/flask/static/cloudy_128.png'
            };
            const directionMap = {};
            // prettier-ignore
            ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'].forEach(function (name, index) {
              directionMap[name] = Math.PI / 8 * index;
            });
            const data = rawData.data.map(function (entry) {
              return [entry.time, entry.windSpeed, entry.R, entry.waveHeight];
            });
            const weatherData = rawData.forecast.map(function (entry) {
              return [
                entry.localDate,
                0,
                weatherIcons[entry.skyIcon],
                entry.minTemp,
                entry.maxTemp
              ];
            });
            const dims = {
              time: 0,
              windSpeed: 1,
              R: 2,
              waveHeight: 3,
              weatherIcon: 2,
              minTemp: 3,
              maxTemp: 4
            };
            const arrowSize = 18;
            const weatherIconSize = 45;
            const renderArrow = function (param, api) {
              const point = api.coord([
                api.value(dims.time),
                api.value(dims.windSpeed)
              ]);
              return {
                type: 'path',
                shape: {
                  pathData: 'M31 16l-15-15v9h-26v12h26v9z',
                  x: -arrowSize / 2,
                  y: -arrowSize / 2,
                  width: arrowSize,
                  height: arrowSize
                },
                rotation: (api.value(dims.R) * Math.PI) / 180,
                position: point,
                style: api.style({
                  stroke: '#555',
                  lineWidth: 1
                })
              };
            };
            const renderWeather = function (param, api) {
              const point = api.coord([
                api.value(dims.time) + (3600 * 24 * 1000) / 2,
                0
              ]);
              return {
                type: 'group',
                children: [
                  {
                    type: 'image',
                    style: {
                      image: api.value(dims.weatherIcon),
                      x: -weatherIconSize / 2,
                      y: -weatherIconSize / 2,
                      width: weatherIconSize,
                      height: weatherIconSize
                    },
                    position: [point[0], 110]
                  },
                  {
                    type: 'text',
                    style: {
                      text:
                          api.value(dims.minTemp) + ' - ' + api.value(dims.maxTemp) + '°',
                      textFont: api.font({fontSize: 14}),
                      textAlign: 'center',
                      textVerticalAlign: 'bottom'
                    },
                    position: [point[0], 80]
                  }
                ]
              };
            };
            var option = {
              title: {
                text: '天气 风向 风速 湿度 预报',
                left: 'center'
              },
              tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                  return [
                    echarts.format.formatTime(
                        'yyyy-MM-dd',
                        params[0].value[dims.time]
                    ) +
                    ' ' +
                    echarts.format.formatTime('hh:mm', params[0].value[dims.time]),
                    '风速：' + params[0].value[dims.windSpeed],
                    '风向：' + params[0].value[dims.R],
                    '湿度：' + params[0].value[dims.waveHeight]
                  ].join('<br>');
                }
              },
              grid: {
                top: 160,
                bottom: 125
              },
              xAxis: {
                type: 'time',
                maxInterval: 3600 * 1000 * 24,
                splitLine: {
                  lineStyle: {
                    color: '#ddd'
                  }
                }
              },
              yAxis: [
                {
                  name: '风速（m/s）',
                  nameLocation: 'middle',
                  nameGap: 35,
                  axisLine: {
                    lineStyle: {
                      color: '#666'
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: '#ddd'
                    }
                  }
                },
                {
                  name: '湿度（%）',
                  nameLocation: 'middle',
                  nameGap: 35,
                  max: 100,
                  axisLine: {
                    lineStyle: {
                      color: '#015DD5'
                    }
                  },
                  splitLine: {show: false}
                },
                {
                  axisLine: {show: false},
                  axisTick: {show: false},
                  axisLabel: {show: false},
                  splitLine: {show: false}
                }
              ],
              visualMap: {
                type: 'piecewise',
                // show: false,
                orient: 'horizontal',
                left: 'center',
                bottom: 10,
                pieces: [
                  {
                    gte: 10,
                    color: '#18BF12',
                    label: '大风（>=10m/s）'
                  },
                  {
                    gte: 5,
                    lt: 10,
                    color: '#f4e9a3',
                    label: '中风（5  ~ 10 m/s）'
                  },
                  {
                    lt: 5,
                    color: '#D33C3E',
                    label: '微风（小于 4 m/s）'
                  }
                ],
                seriesIndex: 1,
                dimension: 1
              },
              dataZoom: [
                {
                  type: 'inside',
                  xAxisIndex: 0,
                  minSpan: 5
                },
                {
                  type: 'slider',
                  xAxisIndex: 0,
                  minSpan: 5,
                  bottom: 50
                }
              ],
              series: [
                {
                  type: 'line',
                  yAxisIndex: 1,
                  showSymbol: false,
                  emphasis: {
                    scale: false
                  },
                  symbolSize: 10,
                  areaStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(88,160,253,1)'
                        },
                        {
                          offset: 0.5,
                          color: 'rgba(88,160,253,0.7)'
                        },
                        {
                          offset: 1,
                          color: 'rgba(88,160,253,0)'
                        }
                      ]
                    }
                  },
                  lineStyle: {
                    color: 'rgba(88,160,253,1)'
                  },
                  itemStyle: {
                    color: 'rgba(88,160,253,1)'
                  },
                  encode: {
                    x: dims.time,
                    y: dims.waveHeight
                  },
                  data: data,
                  z: 2
                },
                {
                  type: 'custom',
                  renderItem: renderArrow,
                  encode: {
                    x: dims.time,
                    y: dims.windSpeed
                  },
                  data: data,
                  z: 10
                },
                {
                  type: 'line',
                  symbol: 'none',
                  encode: {
                    x: dims.time,
                    y: dims.windSpeed
                  },
                  lineStyle: {
                    color: '#aaa',
                    type: 'dotted'
                  },
                  data: data,
                  z: 1
                },
                {
                  type: 'custom',
                  renderItem: renderWeather,
                  data: weatherData,
                  tooltip: {
                    trigger: 'item',
                    formatter: function (param) {
                      return (
                          param.value[dims.time] +
                          ': ' +
                          param.value[dims.minTemp] +
                          ' - ' +
                          param.value[dims.maxTemp] +
                          '°'
                      );
                    }
                  },
                  yAxisIndex: 2,
                  z: 11
                }
              ]
            };
            var chartWeatherBack = echarts.init(document.getElementById('echart-graph-weather-back'), 'dark', {renderer: 'canvas'});
            chartWeatherBack.setOption(option)
            window.addEventListener('resize', function () {
              chartWeatherBack.resize();
            });
          }
      );
  },
  methods: {},
}

</script>
<style lang='scss' scoped>


@media screen and (min-width: 1100px){
  .echarts-chart-weather {
    height: 60vh;
    width: 35vw;
    margin: 5vh;
  }
  .charts {
    display: flex;
    flex-direction: row;
  }
}

@media screen and (max-width: 1100px){
  .echarts-chart-weather {
    height: 60vh;
    width: 50vw;
    margin: 5vh;
  }
  .charts {
    display: flex;
    flex-direction: column;
  }
}
</style>