<template>
  <div style="margin-top: 20px">
    <div v-loading="loading"></div>
    <div v-if="isFarmData && showContent">
      <div style="margin-left: 20px">
        <span style="color: #d3d6dd; margin-top: 10px">历史日期</span>
        <div>
          <el-date-picker
            v-model="startDate"
            type="date"
            style="margin-top: 10px"
            placeholder="选择开始日期"
          >
          </el-date-picker>
          <el-time-select
            v-model="startTime"
            :picker-options="{ start: '00:00', step: '00:15', end: '23:45' }"
            placeholder="选择开始时间"
            style="margin-top: 10px"
          >
          </el-time-select>

          <el-select
            v-model="daysValue"
            placeholder="请选择历史天数"
            style="margin-top: 10px"
          >
            <el-option
              v-for="item in daysOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <!--动静预测+进入数据处理-->
      <div style="margin-left: 20px; margin-top: 10px;">
        <span style="color: #d3d6dd">预测天数</span>
        <div>
          <el-select v-model="predDays" placeholder="请选择预测天数" style="margin-right: 20px;">
            <el-option
              v-for="item in predDaysOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-radio-group v-model="predType" style="margin-right: 20px; margin-top: 10px">
            <el-radio :label="1">静态预测</el-radio>
            <el-radio :label="2">实时滚动预测</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div style="margin-left: 10px; margin-top: 20px">
          <div style="display: inline; margin-left: 10px;">
            <el-button type="primary" @click="showBarChart" style="margin-bottom: 10px">
              <i class="iconfont icon-zhifangtu" >误差频率直方图</i>
            </el-button>
            <el-button type="primary" @click="showScatterChart" style="margin-bottom: 10px">
              <i class="iconfont icon-canchatu">预测残差图</i>
            </el-button>
            <el-button type="primary" @click="showTableChart" style="margin-bottom: 10px; margin-right: 40px;">
              <i class="iconfont icon-biaoge">误差分析指标表</i>
            </el-button>
          </div>
          <Button :read-more-button="true">
            <span
              style="color: grey; margin-left: 10px"
              @click="moveToDataProcess"
              >点击进入数据处理</span
            >
          </Button>
        </div>

      <!--预测+导出数据-->
      <div style="margin-left: 20px; margin-top: 10px">
        <el-button type="primary" @click="queryPower">开 始 预 测</el-button>
        <download-excel
          :fields="jsonFields"
          :data="mytable"
          name="导出数据"
          :before-generate="startDownload"
          :before-finish="finishDownload"
          worksheet="sheet1"
          style="display: inline; margin-left: 10px"
          type="xls"
        >
          <el-button type="primary">导 出 数 据</el-button>
        </download-excel>
      </div>
      <div id="echart-graph" class="echarts-chart"></div>
    </div>

    <div v-if="!isFarmData && showContent">
      <div class="col-lg-12">
        <SectionTitle
          text-align="center"
          title="您还未对风场数据进行预处理"
          description=""
          data-aos="fade-up"
        />
        <div class="mybutton">
          <el-button type="primary" round @click="moveToDataProcess"
            >点击进行数据处理</el-button
          >
        </div>
      </div>
    </div>

    <el-dialog
      :title="'误差频率分布直方图'"
      :visible="barVisible"
      :before-close="handleBarClose"
      class="dialog"
      top="23vh"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      lock-scroll="false"

    >
      <div id="echart-graph-bar" class="echarts-chart-bar"></div>
    </el-dialog>

    <el-dialog
      :title="'预测残差图'"
      :visible="scatterVisible"
      :before-close="handleScatterClose"
      class="dialog"
      top="23vh"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      lock-scroll="false"

    >
      <div id="echart-graph-scatter" class="echarts-chart-scatter"></div>
    </el-dialog>

    <el-dialog
      :title="'误差分析指标表'"
      :visible="tableVisible"
      :before-close="handleTableClose"
      class="dialog"
      top="23vh"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      lock-scroll="false"
    >
      <el-table
        :data="tableJsonData"
        stripe
        style="width: 100%"
        cell-style="text-align:center"
        
      >
        <el-table-column
          prop="zb"
          label="指标"
          width="200"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="sz"
          label="数值"
          width="300"
          header-align="center"
        >
        </el-table-column>
        <el-table-column prop="pd" label="判断" header-align="center">
        </el-table-column>
      </el-table>
      <span style="color: #ffffff">{{ analysisStatement }}</span>
    </el-dialog>
  </div>
</template>

<script>
import Layout from "../components/common/Layout";
import Button from "@/components/elements/button/Button";
import { currentGET } from "api/modules";
import { graphic } from "echarts";
import axios from "axios";
import Menu from "@/components/menu/Menu";
import * as echarts from "echarts";
import SectionTitle from "@/components/elements/sectionTitle/SectionTitle";
import JsonExcel from "vue-json-excel";

export default {
  name: "PowerPred",
  components: {
    Layout,
    Button,
    Menu,
    SectionTitle,
    "download-excel": JsonExcel,
  },
  data() {
    return {
      mytable: [],
      jsonFields: {
        //重命名
        时间: "time",
        真实功率: "realPower",
        预测功率: "predPower",
      },
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      endindex: 0,
      option: {},
      pageflag: false,
      timer: null,
      value: "",
      farmId: "",
      daysOptions: [
        {
          value: "1",
          label: "1天",
        },
        {
          value: "3",
          label: "3天",
        },
        {
          value: "5",
          label: "5天",
        },
        {
          value: "7",
          label: "7天",
        },
        {
          value: "15",
          label: "15天",
        },
      ],
      predDaysOptions: [
        {
          value: "1",
          label: "1天",
        },
        {
          value: "2",
          label: "2天",
        },
        {
          value: "3",
          label: "3天",
        },
      ],
      daysValue: "",
      predDays: "",
      myChart: null,
      chartOption: null,
      predType: 1,
      showContent: false,
      barVisible: false,
      barData: {},
      lastIndex: "",
      intervalId: null,
      isFarmData: false,
      processUrl: "",
      loading: false,
      scatterData: {},
      scatterVisible: false,
      tableJsonData: {},
      tableVisible: false,
      analysisStatement: "",
      time_download: [],
      true_download: [],
      pred_download: [],
      chartBar:null,
      chartScatter:null,
    };
  },

  //动态预测
  watch: {
    predType(newVal, oldVal) {
      console.log(newVal);
      if (newVal === 1) {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      }
      if (newVal === 2) {
        this.intervalId = setInterval(() => {
          axios
            .post("/flask/pred_dynamic", {
              file: this.processUrl,
              tid: this.farmId,
              end: this.endindex,
              input: 3,
              output: 1,
            })
            .then((res) => {
              if (res.status) {
                this.barData = res.bar;
                this.scatterData = res.scatter;

                this.analysisStatement = res.statement;
                var tempJsonData = res.table_json;
                var tempTableData = [];
                for (var i = 0; i < 6; i++) {
                  tempTableData.push({
                    pd: tempJsonData.pd[i],
                    sz: tempJsonData.sz[i],
                    zb: tempJsonData.zb[i],
                  });
                }
                this.tableJsonData = tempTableData;

                for (var i = 0; i < res.time_list.length; i++) {
                  this.chartOption.series[0].data.push([
                    res.time_list[i],
                    res.true_list[i],
                  ]);
                  this.chartOption.series[1].data.push([
                    res.time_list[i],
                    res.pred_list[i],
                  ]);
                  this.chartOption.series[2].data.push(res.bardata[i]);
                  this.chartOption.xAxis[0].data.push(res.time_list[i]);
                  this.chartOption.xAxis[1].data.push(res.time_list[i]);
                  this.time_download.push(res.time_list[i]);
                  this.pred_download.push(res.pred_list[i]);
                  this.true_download.push(res.true_list[i]);
                }
                this.chartOption.dataZoom[0].start = 93;
                this.chartOption.dataZoom[1].start = 93;
                this.chartOption.dataZoom[0].end = 100;
                this.chartOption.dataZoom[1].end = 100;
                this.myChart.setOption(this.chartOption);
                this.$nextTick(() => {
                  this.chartScatter = echarts.init(
                    document.getElementById("echart-graph-scatter"),
                    "dark",
                    { renderer: "canvas" }
                  );
                  this.chartScatter.setOption(this.scatterData);
                });
                this.$nextTick(() => {
                  this.chartBar = echarts.init(
                    document.getElementById("echart-graph-bar"),
                    "dark",
                    { renderer: "canvas" }
                  );
                  this.chartBar.setOption(this.barData);
                });
              } else {
                clearInterval(this.intervalId);
              }
            });
          this.endindex = this.endindex + 96;
        }, 3000);
      }
    },
    "$route.params.id": async function (to, from) {
      // 清空数据
      await this.initChart(to);
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {
    // 组件销毁时移除事件监听器，避免内存泄漏
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    showTableChart() {
      this.tableVisible = true;
      this.$nextTick(() => {
        var chartScatter = echarts.init(
          document.getElementById("echart-graph-scatter"),
          "dark",
          { renderer: "canvas" }
        );
        chartScatter.setOption(this.scatterData);
      });
    },
    handleTableClose() {
      this.tableVisible = false;
    },
    showScatterChart() {
      this.scatterVisible = true;
      this.$nextTick(() => {
        this.chartScatter = echarts.init(
          document.getElementById("echart-graph-scatter"),
          "dark",
          { renderer: "canvas" }
        );
        this.chartScatter.setOption(this.scatterData);
      });
    },
    handleBarClose() {
      this.barVisible = false;
    },
    handleScatterClose() {
      this.scatterVisible = false;
    },
    showBarChart() {
      this.barVisible = true;
      this.$nextTick(() => {
        this.chartBar = echarts.init(
          document.getElementById("echart-graph-bar"),
          "dark",
          { renderer: "canvas" }
        );
        this.chartBar.setOption(this.barData);
      });
    },
    handleResize() {
            if (this.myChart) {
                this.myChart.resize();
            }
            if(this.chartBar){
                this.chartBar.resize();
            }
            if(this.chartScatter)
            {
                this.chartScatter.resize();
            }
        },

    startDownload() {
      for (var i = 0; i < this.time_download.length; i++) {
        this.mytable.push({
          time: this.time_download[i],
          realPower: this.true_download[i],
          predPower: this.pred_download[i],
        });
      }
    },
    finishDownload() {
      this.$message.success("导出成功");
    },
    //初始化图表
    async initChart(to) {
      this.showContent = false; //是否展示内容
      this.loading = true; //加载
      this.processUrl = ""; //处理文件路径
      this.endindex = 0;
      this.isFarmData = false; //风场数据
      this.pred_download = [];
      this.true_download = [];
      this.time_download = [];
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.mytable = []; //供下载的数据

      if (this.myChart != null) {
        this.myChart.dispose(); //销毁图表，释放内存
      }
      this.chartOption = null;
      this.myChart = null;
      this.farmId = to;
      var powerList;
      await axios
        .post("/flask/pred_prior", {
          farmId: to,
        })
        .then((res) => {
          if (res.status) {
            this.showContent = true;
            this.isFarmData = true;
            //powerList = res.data
            //this.totalPowerList = res.data
            this.processUrl = res.full_url;
            this.endindex = res.end;
            this.chartOption = res.grid;
          } else {
            this.showContent = true;
          }
        });
      this.loading = false;

      this.myChart = echarts.init(
        document.getElementById("echart-graph"),
        "dark"
      );
      if (this.chartScatter != null) {
          this.chartScatter.dispose();//销毁图表，释放内存
      }
      this.chartScatter = null;
      if (this.chartBar != null) {
          this.chartBar.dispose();//销毁图表，释放内存
      }
      this.chartBar = null;

      this.myChart.setOption(this.chartOption);
      window.addEventListener("resize", this.handleResize);
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
        return "";
      }
    },
    moveToDataProcess() {
      let text = this.$router.resolve({
        path: `/dataProcess/${this.$route.params.id}`,
      });
      // 打开一个新的页面
      window.open(text.href, "_blank");
    },

    //静态预测
    queryPower() {
      if (
        !this.startDate ||
        !this.startTime ||
        !this.daysValue ||
        !this.predDays
      ) {
        this.$message.error("请选择完整的预测所需要的信息");
      } else {
        axios
          .post("/flask/pred_static", {
            file: this.processUrl,
            tid: this.farmId,
            start: this.concatenateDateTime(),
            input: this.daysValue,
            output: this.predDays,
          })
          .then((res) => {
            //let timeData = res.time_list
            //let powerData = res.pred_list
            //wis set

            for (var i = 0; i < res.dtime_pred.length; i++) {
              this.time_download.push(res.dtime_pred[i]);
              this.pred_download.push(res.pred_data[i]);
              this.true_download.push(res.true_data[i]);
            }

            this.myChart.setOption(res.grid_data);
            this.barData = res.bar;
            this.scatterData = res.scatter;
            this.analysisStatement = res.statement;
            var tempJsonData = res.table_json;
            var tempTableData = [];
            for (var i = 0; i < 6; i++) {
              tempTableData.push({
                pd: tempJsonData.pd[i],
                sz: tempJsonData.sz[i],
                zb: tempJsonData.zb[i],
              });
            }
            this.tableJsonData = tempTableData;
          });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
::v-deep .el-dialog {
    background-color: #000000b3;
    height:70vh;
    width:55vw;
}

::v-deep .el-dialog__title {
  color: white !important;
}

.echarts-chart-bar {
  display: inline-block;
  height: 50vh;
  width: 50vw;
}

.echarts-chart-scatter {
  display: inline-block;
  height: 50vh;
  width: 50vw;
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
  height: 800px;
  width: 100%;
}

::v-deep .el-switch__label {
  transition: 0.2s;
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
  background-color: transparent !important;
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
::v-deep .el-table {
  color: #ffffff;
}
</style>