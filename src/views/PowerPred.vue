<template>
  <div style="margin-top: 20px">
    <!--            <SectionTitle text-align="center" :title="'风场' + farmId" description="" data-aos="fade-up"/>-->
    <div v-loading="loading"></div>
    <div v-if="isFarmData && showContent">
      <div style="margin-left: 20px">
        <span style="color: #d3d6dd;margin-top:10px">历史日期</span>
        <div>
          <el-date-picker
              v-model="startDate"
              type="date"
              style="margin-top:10px"
              placeholder="选择开始日期">
          </el-date-picker>
          <el-time-select
              v-model="startTime"
              :picker-options="{start: '00:00',step: '00:15',end: '23:45'}"
              placeholder="选择开始时间"
              style="margin-top:10px">
          </el-time-select>

          <el-select v-model="daysValue" placeholder="请选择历史天数" style="margin-top:10px">
            <el-option
                v-for="item in daysOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div style="margin-left: 20px;margin-top: 10px">
        <span style="color: #d3d6dd">预测天数</span>
        <div>
          <el-select v-model="predDays" placeholder="请选择预测天数">
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
          <div style="display: inline;margin-left: 10px">
            <el-button type="primary" @click="showBarChart">
              <i class="iconfont icon-zhifangtu">误差频率分布直方图</i>
            </el-button>
            <el-button type="primary" @click="showScatterChart">
              <i class="iconfont icon-canchatu">预测残差图</i>
            </el-button>
            <el-button type="primary" @click="showTableChart">
              <i class="iconfont icon-biaoge">误差分析指标表</i>
            </el-button>
          </div>
          <Button :read-more-button="true">
                    <span style="color: grey;margin-left: 40px"
                          @click="moveToDataProcess">点击进入数据处理</span>
          </Button>
        </div>
      </div>
      <div style="margin-left: 20px;margin-top: 10px">
        <el-button type="primary" @click="queryPower">预 测</el-button>
        <download-excel
            :fields="jsonFields"
            :data="mytable"
            name='导出数据'
            :before-generate="startDownload"
            :before-finish="finishDownload"
            worksheet="sheet1"
            style="display:inline;margin-left: 10px"
            type="xls">
          <el-button type="primary">导 出 数 据</el-button>
        </download-excel>

        <!--              时这个图骂是的-->
      </div>
      <div id="echart-graph" class="echarts-chart"></div>
    </div>
    <div v-if="!isFarmData && showContent">
      <div class="col-lg-12">
        <SectionTitle text-align="center" title="您还未对风场数据进行预处理" description="" data-aos="fade-up"/>
        <div class="mybutton">
          <el-button type="primary" round @click="moveToDataProcess">点击进行数据处理</el-button>
        </div>
      </div>
    </div>
    <el-dialog :title="'误差频率分布直方图'" :visible="barVisible"
               :before-close="handleBarClose" class="dialog" top="23vh" :close-on-press-escape="false"
               :close-on-click-modal="false" width="750px">
      <div id="echart-graph-bar" class="echarts-chart-bar"></div>
    </el-dialog>

    <el-dialog :title="'预测残差图'" :visible="scatterVisible"
               :before-close="handleScatterClose" class="dialog" top="23vh" :close-on-press-escape="false"
               :close-on-click-modal="false" width="750px">
      <div id="echart-graph-scatter" class="echarts-chart-scatter"></div>
    </el-dialog>

    <el-dialog :title="'误差分析指标表'" :visible="tableVisible"
               :before-close="handleTableClose" class="dialog" top="23vh" :close-on-press-escape="false"
               :close-on-click-modal="false" width="750px">
      <el-table
          :data="tableJsonData"
          stripe
          style="width: 100%"
          cell-style="text-align:center">
        <el-table-column
            prop="zb"
            label="指标"
            width="200"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="sz"
            label="数值"
            width="300"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="pd"
            label="判断"
            header-align="center">
        </el-table-column>
      </el-table>
      <span style="color: #FFFFFF">{{analysisStatement}}</span>
    </el-dialog>
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
      mytable: [],
      jsonFields: {            //重命名
        '时间': 'time',
        '真实功率': 'realPower',
        '预测功率': 'predPower',
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
      isFarmData: false,
      processUrl: '',
      loading: false,
      showContent: false,
      barVisible:false,
      barData:{},
      scatterData:{},
      scatterVisible:false,
      tableJsonData:{},
      tableVisible:false,
      analysisStatement:''
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
              return [+new Date(datum.DATATIME), datum.YD15];
            });

            // 更新 series
            this.chartOption.series[0].data = data;
            axios.post('/flask/pred', {
              // tid: this.farmId,
              file: this.processUrl,
              tid: this.farmId,
              start: this.currentPowerList[this.lastIndex].DATATIME.replace("T", " "),
              input: 3,
              output: 1
            }).then(res => {
              console.log('pred的返回数据', res)
              let timeData = res.time_list
              let powerData = res.pred_list
              this.barData = res.bar
              this.scatterData = res.scatter;
              this.analysisStatement = res.statement
              var tempJsonData = res.table_json
              console.log(tempJsonData.sz[0])
              var tempTableData = []
              for(var i=0;i<6;i++){
                tempTableData.push({
                  pd:(tempJsonData.pd)[i],
                  sz:(tempJsonData.sz)[i],
                  zb:(tempJsonData.zb)[i],
                })
              }
              this.tableJsonData = tempTableData
              let newChartData = timeData.map((time, index) => [time, powerData[index]]);
              this.currentPredPowerList = this.currentPredPowerList.concat(newChartData)
              console.log('this.currentPredPowerList', this.currentPredPowerList)
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
          this.analysisStatement = res.statement
          var tempJsonData = res.table_json
          console.log(tempJsonData.sz[0])
          var tempTableData = []
          for(var i=0;i<6;i++){
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
::v-deep .el-dialog {
  background-color: rgb(0,0,0,0.7);
}
::v-deep .el-dialog__title{
  color: white !important;
}

.echarts-chart-bar {
  display: inline-block;
  height: 400px;
  width: 700px;
}

.echarts-chart-scatter {
  display: inline-block;
  height: 400px;
  width: 700px;
}


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
  height: 500px;
  width: 100%;
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

.mybutton {
  margin: 0 auto;
  text-align: center;
}
.el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}


.el-table th {
  background-color: transparent !important;
}

.el-table tr,
.el-table td {
  background-color: transparent !important;
  border: none !important;

}

::v-deep .el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}

::v-deep .el-table tr {
  background-color: transparent !important;
}

::v-deep .el-table tbody tr:hover > td {
  background-color: transparent !important
}

::v-deep .el-table--enable-row-transition .el-table__body td,
.el-table .cell {
  background-color: transparent !important;
}

/*最外层透明*/
::v-deep .el-table,
::v-deep .el-table__expanded-cell {
  background-color: transparent !important;
}

/* 表格内背景颜色 */
::v-deep .el-table th,
::v-deep .el-table tr,
::v-deep .el-table td {
  background-color: transparent !important;
  border: 0; //去除表格
}

/*去除底边框*/
::v-deep.el-table td.el-table__cell {
  border: 0 !important;
}

// 表格顶部边框
::v-deep.el-table th.el-table__cell.is-leaf {
  // border: 0 !important;
}

/*去除底部灰条.el-table::before*/
::v-deep .el-table::before {
  // display: none;
}
::v-deep .el-table{
  color: #FFFFFF;
}
</style>