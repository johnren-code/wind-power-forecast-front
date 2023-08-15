<template>
  <div class="content">
    <div class="content-left">
      <div style="margin-top: 80px;margin-left: 30px">
        <span style="position: absolute;left: 0;top: 0;margin: 10px">设备信息</span>
        <span>风场ID：{{ $route.params.id }}</span>
        <br>
        <span>设备型号：{{ currentFarm.model }}</span>
        <br>
        <span>风场所在地：{{ currentFarm.location }}</span>
        <br>
        <span>时间：{{ curInfo.time }}</span>
        <br>
        <span>运行状态：</span>
        <i v-if="curInfo.state === '正常'" class="el-icon-circle-check" style="color:#67C23A">正常</i>
        <i v-if="curInfo.state === '良好'" class="el-icon-circle-check" style="color:#67C23A">良好</i>
        <i v-if="curInfo.state === '异常'" class="el-icon-warning" style="color:#E6A23C">异常</i>
        <i v-if="curInfo.state === '故障'" class="el-icon-error" style="color:#F56C6C">故障</i>
        <el-button type="primary" style="position: absolute;right: 0;top: 0;margin: 10px" @click="showHistoryWarn">历史报警</el-button>
      </div>
    </div>
    <div class="content-right">
      <div style="margin-top: 50px;margin-left: 30px">
        <span style="position: absolute;left: 0;top: 0;margin: 10px">实时数据</span>
        <span>风速：{{ curData.fs[0] }}{{ curData.fs[1] }}</span>
        <br>
        <span>风向：{{ curData.fx[0] }}{{ curData.fx[1] }}</span>
        <br>
        <span>湿度：{{ curData.sd[0] }}{{ curData.sd[1] }}</span>
        <br>
        <span>压强：{{ curData.yq[0] }}{{ curData.yq[1] }}</span>
        <br>
        <span>转速：{{ curData.zs[0] }}{{ curData.zs[1] }}</span>
        <br>
        <span>温度：{{ curData.wd[0] }}{{ curData.wd[1] }}</span>
        <br>
        <span>电压：{{ curData.dy[0] }}{{ curData.dy[1] }}</span>
        <br>
        <span>电流：{{ curData.dl[0] }}{{ curData.dl[1] }}</span>
        <br>
        <span>功率：{{ curData.gl[0] }}{{ curData.gl[1] }}</span>
        <el-button type="primary" style="position: absolute;right: 0;top: 0;margin: 10px" @click="showHistoryData">历史数据</el-button>
      </div>
    </div>
    <el-dialog :title="'历史报警信息'" :visible="historyWarningVisible"
               :before-close="handleHistoryWarningClose" class="dialog" top="23vh" :close-on-press-escape="false"
               :close-on-click-modal="false" width="80vw"
               lock-scroll="false">
      <el-table
          :data="historyWarningData"
          stripe
          height="450" 
          style="width: 100%"
          cell-style="text-align:center">
        <el-table-column
            fixed
            prop="alarm_time"
            label="报警时间"
            width="180"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="alarm_type"
            label="报警类型"
            width="100"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="alarm_level"
            label="报警级别"
            width="100"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="alarm_description"
            label="报警描述"
            width="100"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="process_time"
            label="处理时间"
            width="180"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="process_name"
            label="处理人"
            width="100"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="process_way"
            label="处理方式"
            width="260"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="process_result"
            label="处理结果"
            width="100"
            header-align="center">
          <template slot-scope="scope">
            <i v-if="scope.row.process_result === '已解决'" class="el-icon-circle-check" style="color:#67C23A">已解决</i>
            <i v-if="scope.row.process_result === '处理中'" class="el-icon-more" style="color:#E6A23C;">处理中</i>
            <i v-if="scope.row.process_result === '待处理'" class="el-icon-circle-close" style="color:#F56C6C;">待处理</i>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog :title="'历史数据'" :visible="historyDataVisible"
               :before-close="handleHistoryDataClose" class="dialog" top="23vh" :close-on-press-escape="false"
               :close-on-click-modal="false" width="80vw" lock-scroll="false">
      <el-table
          :data="historyData"
          stripe
          height="450" 
          style="width: 100%"
          cell-style="text-align:center">
        <el-table-column
            fixed
            prop="time"
            label="时间"
            width="110"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="wind_speed"
            label="风速"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="wind_dir"
            label="风向"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="humidity"
            label="湿度"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="pressure"
            label="压强"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="rot_speed"
            label="转速"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="temperature"
            label="温度"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="voltage"
            label="电压"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="power"
            label="功率"
            header-align="center">
        </el-table-column>
        <el-table-column
            prop="current"
            label="电流"
            header-align="center">
        </el-table-column>
      </el-table>
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
  name: 'DetailSingle',
  components: {Layout, Button, Menu, SectionTitle, 'download-excel': JsonExcel},
  data() {
    return {
      curInfo: '',
      curData: '',
      historyWarningVisible:false,
      historyWarningData:'',
      currentFarm:'',
      historyDataVisible:false,
      historyData:''

    };
  },
  watch: {
    '$route.params.id': async function (to, from) {
      // 清空数据
      axios.get('/flask/get_now_warn_info').then(res => {
        console.log(res)
        this.curInfo = res.cur_info
        this.curData = res.cur_data
      })
      axios.post('/api/windFarmUrl/getByFarmId',{
        farmId:this.$route.params.id
      }).then(res=>{
        this.currentFarm = res.data
      })
    },
  },
  created() {

  },
  mounted() {
    axios.get('/flask/get_now_warn_info').then(res => {
      console.log(res)
      this.curInfo = res.cur_info
      this.curData = res.cur_data
    })
    axios.get('/api/windFarmUrl/getAllFarm').then(res=>{
      console.log(res.data)
    })
  },
  beforeDestroy() {
    // 组件销毁时移除事件监听器，避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleHistoryDataClose(){
      this.historyDataVisible = false
    },
    handleHistoryWarningClose(){
      this.historyWarningVisible=false
    },
    showHistoryWarn() {
      this.historyWarningVisible = true
      this.$nextTick(() => {
        axios.get('/flask/get_hist_warn_info').then(res => {
          this.historyWarningData = res.his_info
        })
      })
    },
    showHistoryData() {
      this.historyDataVisible = true
      this.$nextTick(() => {
        axios.get('/flask/get_hist_warn_data').then(res => {
          this.historyData = res.his_data
        })
      })
    },
    showTableChart() {
      this.tableVisible = true
      this.$nextTick(() => {
        var chartScatter = echarts.init(document.getElementById('echart-graph-scatter'), 'dark', {renderer: 'canvas'});
        chartScatter.setOption(this.scatterData)
      })
    },
    handleTableClose() {
      this.tableVisible = false
    },
    showScatterChart() {
      this.scatterVisible = true
      this.$nextTick(() => {
        var chartScatter = echarts.init(document.getElementById('echart-graph-scatter'), 'dark', {renderer: 'canvas'});
        chartScatter.setOption(this.scatterData)
      })
    },
    handleBarClose() {
      this.barVisible = false
    },
    handleScatterClose() {
      this.scatterVisible = false
    },
    showBarChart() {
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
      console.log('this.totalPowerList', this.totalPowerList)
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
          for (var i = 0; i < 5; i++) {
            tempTableData.push({
              pd: (tempJsonData.pd)[i],
              sz: (tempJsonData.sz)[i],
              zb: (tempJsonData.zb)[i],
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

// 屏幕大于 1100px 使用该样式
@media screen and (min-width: 1100px){
  .content-left {
    color: #FFFFFF;
    font-size: 20px;
    width: 450px;
    height: 370px;
    margin-top: 50px;
    /* 为其整体设置接近透明的效果*/
    background-color: rgba(255, 255, 255, 0.05);
    /* 设置box-shadow使其有立体感 */
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
    border: 1px solid transparent;
    border-radius: 15px;
    margin-left: 50px;
    position: relative;
  }

  .content-right {
    color: #FFFFFF;
    font-size: 20px;
    margin-left: 10%;
    height: 370px;
    margin-top: 50px;
    width: 450px;
    background-color: rgba(255, 255, 255, 0.05);
    /* 设置box-shadow使其有立体感 */
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
    border: 1px solid transparent;
    border-radius: 15px;
    position: relative;
  }
  .content {
    display: flex;
    flex-direction: row;
  }
}

@media screen and (max-width: 1100px) {
    .content-left {
    color: #FFFFFF;
    font-size: 15px;
    width: 80%;
    height: 300px;
    margin-top: 50px;
    /* 为其整体设置接近透明的效果*/
    background-color: rgba(255, 255, 255, 0.05);
    /* 设置box-shadow使其有立体感 */
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
    border: 1px solid transparent;
    border-radius: 15px;
    margin-left: 10%;
    position: relative;
  }

  .content-right {
    color: #FFFFFF;
    font-size: 15px;
    margin-left: 10%;
    height: 300px;
    margin-top: 20px;
    width: 80%;
    background-color: rgba(255, 255, 255, 0.05);
    /* 设置box-shadow使其有立体感 */
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
    border: 1px solid transparent;
    border-radius: 15px;
    position: relative;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
}


</style>