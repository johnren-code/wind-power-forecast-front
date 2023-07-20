<template>
  <div style="margin-top: 20px">
    <!--            <SectionTitle text-align="center" :title="'风场' + farmId" description="" data-aos="fade-up"/>-->
    <div style="margin-left: 20px">
      <span style="color: #d3d6dd">历史日期</span>
      <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="选择开始日期"
          style="margin-left: 20px">
      </el-date-picker>
      <el-time-select
          v-model="startTime"
          :picker-options="{start: '00:00',step: '00:15',end: '23:45'}"
          placeholder="选择开始时间">
      </el-time-select>

      <el-select v-model="daysValue" placeholder="请选择历史天数">
        <el-option
            v-for="item in daysOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div style="margin-left: 20px;margin-top: 10px">
      <span style="color: #d3d6dd">预测天数</span>
      <el-select v-model="predDays" placeholder="请选择预测天数" style="margin-left: 20px">
        <el-option
            v-for="item in predDaysOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-radio-group v-model="predType" style="margin-left: 20px">
        <el-radio :label="1">静态预测</el-radio>
        <el-radio :label="2">实时滚动预测</el-radio>
      </el-radio-group>
      <Button :read-more-button="true">
                    <span style="color: grey;margin-left: 40px"
                          @click="moveToDataProcess">点击进入数据处理</span>
      </Button>
    </div>
    <div style="margin-left: 20px;">
      <el-button type="primary" @click="queryPower">查 询</el-button>
      <download-excel
          :fields="jsonFields"
          :data="mytable"
          name='导出数据'
          :before-generate="startDownload"
          :before-finish="finishDownload"
          worksheet="sheet1"
          type="xls">
        <el-button type="primary">导 出 数 据</el-button>
      </download-excel>

      <!--              时这个图骂是的-->
    </div>
    <div id="echart-graph" class="echarts-chart"></div>
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
      mytable:[],
      jsonFields: {            //重命名
        '时间':'time',
        '真实功率':'realPower',
        '预测功率':'predPower',
      },
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      option: {},
      pageflag: false,
      timer: null,
      value: '',
      farmId: '',
      daysOptions: [{
        value: '1',
        label: '1天'
      }, {
        value: '3',
        label: '3天'
      }, {
        value: '5',
        label: '5天'
      }, {
        value: '7',
        label: '7天'
      }, {
        value: '15',
        label: '15天'
      }],
      predDaysOptions: [{
        value: '1',
        label: '1天'
      }, {
        value: '2',
        label: '2天'
      }, {
        value: '3',
        label: '3天'
      }],
      daysValue: '',
      predDays: '',
      myChart: null,
      chartOption: null,
      predType: 1,
      lastIndex: '',
      totalPowerList: [],
      currentPowerList: [],
      currentPredPowerList: [],
      intervalId: null,
    };
  },
  watch: {
    predType(newVal, oldVal) {
      if (newVal === 1) {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      }
      if (newVal === 2) {
        this.intervalId = setInterval(() => {
          // 从 powerList 中获取新的数据
          let newData = this.totalPowerList.slice(this.lastIndex + 1, this.lastIndex + 97);

          // 检查是否有新的数据
          if (newData.length > 0) {
            // 将新的数据添加到 halfPowerList
            this.currentPowerList = this.currentPowerList.concat(newData);

            // 更新 lastIndex
            this.lastIndex += 96;

            // 转换 halfPowerList 到需要的格式并更新图表
            let data = this.currentPowerList.map(datum => {
              return [+new Date(datum.datetime), datum.yd15];
            });

            // 更新 series
            this.chartOption.series[0].data = data;
            axios.post('/flask/pred', {
              tid: this.farmId,
              start: this.currentPowerList[this.lastIndex].datetime.replace("T", " "),
              input: 15,
              output: 1
            }).then(res => {
              console.log(res)
              let timeData = res[0]
              let powerData = res[1][0]
              let newChartData = timeData.map((time, index) => [time, powerData[index]]);
              this.currentPredPowerList = this.currentPredPowerList.concat(newChartData)
              console.log('this.currentPredPowerList',this.currentPredPowerList)
              var predSeries = {
                name: '预测功率',
                type: 'line',
                smooth: true,
                symbol: 'none',
                data: this.currentPredPowerList
              };
              if (this.chartOption.series[1]) {
                this.chartOption.series[1].data = this.currentPredPowerList
              } else {
                this.chartOption.series.push(predSeries);
              }
              this.myChart.setOption(this.chartOption);
              console.log(timeData)
            })
            // 使用 setOption 方法更新图表
            this.myChart.setOption(this.chartOption);
          } else {
            // 如果没有新的数据，清除定时任务
            clearInterval(this.intervalId);
          }
        }, 3000); // 每隔3秒执行一次

      }
    },
    '$route.params.id': async function (to, from) {
      // 清空数据
      await this.initChart(to)
    },
  },
  created() {

  },
  mounted() {

  },
  methods: {
    startDownload() {
      console.log('导出前')
      var timeList = []
      var readPowerList = []
      var predPowerList = []
      var tempList = this.currentPredPowerList
      var tempTotalList = this.totalPowerList
      for(var i=0;i<tempList.length;i++){
        timeList.push(tempList[i][0])
        predPowerList.push(tempList[i][1])
      }
      for(var i=0;i<tempTotalList.length;i++){
        if(tempTotalList[i].datetime.replace("T"," ")===timeList[0]){
          for(var j=0;j<tempList.length;j++){
            readPowerList.push(tempTotalList[i+j].yd15)
          }
          break;
        }
      }
      for(var i=0;i<timeList.length;i++){
        this.mytable.push({
          time:timeList[i],
          realPower:readPowerList[i],
          predPower:predPowerList[i]
        })
      }
    },
    finishDownload() {
      this.$message.success('导出成功')
    },
    async initChart(to) {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.mytable=[]
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
      await axios.get('/api/windFarm/getFarmDataById', {
        params: {
          farm_id: to
        }
      }).then(res => {
        powerList = res.data
        this.totalPowerList = res.data
        console.log('powerList', powerList.length)
        console.log(res)
      })
      let halfPowerList = powerList.slice(0, Math.floor(powerList.length / 10));
      this.currentPowerList = halfPowerList
      this.lastIndex = halfPowerList.length - 1;
      console.log('powerList', powerList)
      let data = halfPowerList.map(datum => {
        return [+new Date(datum.datetime), datum.yd15];
      });
      // var chartDom = document.getElementById('echart-graph');
      // var myChart = echarts.init(chartDom, 'dark');
      this.myChart = echarts.init(document.getElementById('echart-graph'), 'dark');
      // var option;
      this.chartOption = {
        legend: {
          left: 'left',
          top: 'top',
          data: ['真实功率', '预测功率']  // 数据项的名字需要与 series 中对应项的 name 一致
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
        path: `/dataProcess`
      });
      // 打开一个新的页面
      window.open(text.href, '_blank')
    },

    queryPower() {
      axios.post('/flask/pred', {
        tid: this.farmId,
        start: this.concatenateDateTime(),
        input: this.daysValue,
        output: this.predDays
      }).then(res => {
        console.log(res)
        let timeData = res[0]
        let powerData = res[1][0]
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
        console.log(timeData)


      })
      const datetime = this.concatenateDateTime();
      console.log(datetime);
    }
  },
}

</script>
<style lang='scss' scoped>
:deep(.el-radio__inner) {
  border-radius: 2px;
}

:deep(.el-radio__input.is-checked) .el-radio__inner::after {
  content: "";
  width: 10px;
  height: 5px;
  border: 1px solid white;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  display: block;
  position: absolute;
  top: 2px;
  left: 0px;
  vertical-align: middle;
  transform: rotate(-45deg);
  border-radius: 0px;
  background: none;
}

.right_top_inner {
  margin-top: -8px;
}

.echarts-chart {
  margin-top: 50px;
  margin-left: 150px;
  height: 500px;
  width: 1000px;
}

::v-deep .el-switch__label {
  transition: .2s;
  height: 20px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  vertical-align: middle;
  /* color: #303133; */
}
</style>