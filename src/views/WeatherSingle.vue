<template>
  <div>
    <div id="echart-graph-weather" class="echarts-chart-weather"></div>
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

export default {
  name: 'PowerPred',
  components: {Layout, Button, Menu, SectionTitle, 'download-excel': JsonExcel},
  data() {
    return {

    };
  },
  watch: {
    '$route.params.id': async function (to, from) {
      // 清空数据
      axios.get('/flask/weather').then(res=>{
        console.log(res)
        var chartWeather = echarts.init(document.getElementById('echart-graph-weather'), 'dark', {renderer: 'canvas'});
        chartWeather.setOption(res)
      })
    },
  },
  created() {

  },
  mounted() {
    axios.get('/flask/weather').then(res=>{
      console.log(res)
    })
  },
  beforeDestroy() {
    // 组件销毁时移除事件监听器，避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    showTableChart(){
      this.tableVisible = true
      this.$nextTick(() => {
        var chartScatter = echarts.init(document.getElementById('echart-graph-scatter'), 'dark', {renderer: 'canvas'});
        chartScatter.setOption(this.scatterData)
      })
    },
    handleTableClose(){
      this.tableVisible = false
    },
    showScatterChart(){
      this.scatterVisible = true
      this.$nextTick(() => {
        var chartScatter = echarts.init(document.getElementById('echart-graph-scatter'), 'dark', {renderer: 'canvas'});
        chartScatter.setOption(this.scatterData)
      })
    },
    handleBarClose(){
      this.barVisible = false
    },
    handleScatterClose(){
      this.scatterVisible = false
    },
    showBarChart(){
      this.barVisible = true
      this.$nextTick(() => {
        var chartBar = echarts.init(document.getElementById('echart-graph-bar'), 'dark', {renderer: 'canvas'});
        chartBar.setOption(this.barData)
      })
    },
    handleResize() {
      if (this.myChart) {
        this.myChart.resize();
      }
    },
    startDownload() {
      console.log('导出前')
      var timeList = []
      var realPowerList = []
      var predPowerList = []
      var tempList = this.currentPredPowerList
      var tempTotalList = this.totalPowerList
      console.log('this.totalPowerList',this.totalPowerList)
      for (var i = 0; i < tempList.length; i++) {
        timeList.push(tempList[i][0])
        predPowerList.push(tempList[i][1])
      }
      for (var i = 0; i < tempTotalList.length; i++) {
        if (tempTotalList[i].DATATIME.replace("T", " ") === timeList[0]) {
          for (var j = 0; j < tempList.length; j++) {
            realPowerList.push(tempTotalList[i + j].YD15)
          }
          break;
        }
      }
      for (var i = 0; i < timeList.length; i++) {
        this.mytable.push({
          time: timeList[i],
          realPower: realPowerList[i],
          predPower: predPowerList[i]
        })
      }
    },
    finishDownload() {
      this.$message.success('导出成功')
    },
    async initChart(to) {
      this.showContent = false
      this.loading = true
      this.processUr = ''
      this.isFarmData = false
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.mytable = []
      this.totalPowerList = []
      this.currentPowerList = []
      this.currentPredPowerList = []
      if (this.myChart != null) {
        this.myChart.dispose();
      }
      this.chartOption = null;
      this.myChart = null;
      console.log(to);
      this.farmId = to
      var powerList
      await axios.post('/flask/getFarmData', {
        farmId: to
      }).then(res => {
        if (res.status) {
          this.showContent = true
          this.isFarmData = true
          powerList = res.data
          this.totalPowerList = res.data
          this.processUrl = res.full_url
          console.log('powerList', powerList.length)
          console.log(res)
        } else {
          this.showContent = true
        }
      })
      this.loading = false
      // await axios.get('/api/windFarm/getFarmDataById', {
      //   params: {
      //     farm_id: to
      //   }
      // }).then(res => {
      //   powerList = res.data
      //   this.totalPowerList = res.data
      //   console.log('powerList', powerList.length)
      //   console.log(res)
      // })
      let halfPowerList = powerList.slice(0, Math.floor(powerList.length / 10));
      this.currentPowerList = halfPowerList
      this.lastIndex = halfPowerList.length - 1;
      console.log('powerList', powerList)
      let data = halfPowerList.map(datum => {
        return [+new Date(datum.DATATIME), datum.YD15];
      });
      // var chartDom = document.getElementById('echart-graph');
      // var myChart = echarts.init(chartDom, 'dark');
      this.myChart = echarts.init(document.getElementById('echart-graph'), 'dark');
      // var option;
      this.chartOption = {
        legend: {
          left: 'left',
          top: 'top',
          data: ['真实功率', '预测功率', '误差']  // 数据项的名字需要与 series 中对应项的 name 一致
        },
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        title: {
          left: 'center',
          text: '功率-时间图像'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'time',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            name: '真实功率',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: data
          }
        ]
      };
      this.myChart.setOption(this.chartOption)
      window.addEventListener('resize', this.handleResize);
    },
    concatenateDateTime() {
      if (this.startDate && this.startTime) {
        let d = new Date(this.startDate);
        let year = d.getFullYear();
        let month = ("0" + (d.getMonth() + 1)).slice(-2); // Months are 0 based so add 1 and slice last 2 digits
        let date = ("0" + d.getDate()).slice(-2);
        let formattedDate = `${year}-${month}-${date}`;
        return `${formattedDate} ${this.startTime}:00`;
      } else {
        return '';
      }
    },
    moveToDataProcess() {
      let text = this.$router.resolve({
        path: `/dataProcess/${this.$route.params.id}`
      });
      // 打开一个新的页面
      window.open(text.href, '_blank')
    },

    queryPower() {
      if (!this.startDate || !this.startTime || !this.daysValue || !this.predDays) {
        this.$message.error('请选择完整的预测所需要的信息')
      } else {
        axios.post('/flask/pred', {
          file: this.processUrl,
          tid: this.farmId,
          start: this.concatenateDateTime(),
          input: this.daysValue,
          output: this.predDays
        }).then(res => {
          console.log(res)
          let timeData = res.time_list
          let powerData = res.pred_list
          this.barData = res.bar
          this.scatterData = res.scatter;
          var tempJsonData = res.table_json
          console.log(tempJsonData.sz[0])
          var tempTableData = []
          for(var i=0;i<5;i++){
            tempTableData.push({
              pd:(tempJsonData.pd)[i],
              sz:(tempJsonData.sz)[i],
              zb:(tempJsonData.zb)[i],
            })
          }
          this.tableJsonData = tempTableData
          console.log(this.tableJsonData)
          // this.tableJsonData.push({
          //   zb:{
          //
          //   }
          // })
          let chartData = timeData.map((time, index) => [time, powerData[index]]);
          var predSeries = {
            name: '预测功率',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: chartData
          };
          this.chartOption.series.push(predSeries);
          this.myChart.setOption(this.chartOption);

        })
        const datetime = this.concatenateDateTime();
        console.log(datetime);
      }
    }
  },
}

</script>
<style lang='scss' scoped>
.echarts-chart-weather {
  display: inline-block;
  height: 600px;
  width: 1000px;
  margin: 50px;
}
</style>