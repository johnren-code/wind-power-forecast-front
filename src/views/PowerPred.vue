<template>
  <Layout header-class="header-transparent" :show-newsletter="true" :show-cta="false">

    <div class="service-area rn-section-gapTop">
      <div class="container" style="height: 900px">
        <div style="margin-left: 20px">
          <span style="color: #d3d6dd">风电场：</span>
          <el-select v-model="value" filterable placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
        <br>
        <div style="margin-left: 20px">
          <span style="color: #d3d6dd">日期</span>
          <el-date-picker
              v-model="startDate"
              type="date"
              placeholder="选择开始日期"
              style="margin-left: 20px">
          </el-date-picker>
          <el-time-select
              v-model="startTime"
              :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              placeholder="选择开始时间">
          </el-time-select>
          <span style="margin-left: 20px;color: #d3d6dd">至</span>
          <el-date-picker
              v-model="endDate"
              type="date"
              placeholder="选择结束日期"
              style="margin-left: 20px">
          </el-date-picker>
          <el-time-select
              v-model="endTime"
              :picker-options="{start: '00:00',step: '00:15',end: '23:45'}"
              placeholder="选择结束时间">
          </el-time-select>
        </div>
        <br>
        <div style="margin-left: 20px;">
          <el-button type="primary">查 询</el-button>
          <el-button type="primary">导 出 数 据</el-button>
        </div>
        <Echart
            id="rightTop"
            :options="option"
            class="right_top_inner"
            v-if="pageflag"
            ref="charts"
            style="height: 600px;margin-top: 20px"
        />
        <Reacquire v-else @onclick="getData" style="line-height: 200px">
          重新获取
        </Reacquire>
      </div>
    </div>
    <!-- End Elements Area -->
  </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import Button from "@/components/elements/button/Button";
import {currentGET} from "api/modules";
import {graphic} from "echarts"

export default {
  name: 'PowerPred',
  components: {Layout,Button},
  data() {
    return {
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      option: {},
      pageflag: false,
      timer: null,
      options: [{
        value: '选项1',
        label: '风场1'
      }, {
        value: '选项2',
        label: '风场2'
      }, {
        value: '选项3',
        label: '风场3'
      }, {
        value: '选项4',
        label: '风场4'
      }, {
        value: '选项5',
        label: '风场5'
      }, {
        value: '选项6',
        label: '风场6'
      }, {
        value: '选项7',
        label: '风场7'
      }, {
        value: '选项8',
        label: '风场8'
      }, {
        value: '选项9',
        label: '风场9'
      }, {
        value: '选项10',
        label: '风场10'
      }],
      value: ''
    };
  },
  created() {

  },

  mounted() {
    this.getData();
  },
  beforeDestroy() {
    this.clearData();
  },
  methods: {
    clearData() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    getData() {
      this.pageflag = true;
      // this.pageflag =false
      currentGET("big4").then((res) => {
        if (!this.timer) {
          console.log("报警次数", res);
        }
        if (res.success) {
          this.countUserNumData = res.data;
          this.$nextTick(() => {
            this.init(res.data.dateList, res.data.numList, res.data.numList2),
                this.switper();
          });
        } else {
          this.pageflag = false;
          this.$Message({
            text: res.msg,
            type: "warning",
          });
        }
      });
    },
    //轮询
    switper() {
      if (this.timer) {
        return;
      }
      let looper = (a) => {
        this.getData();
      };
      this.timer = setInterval(
          looper,
          this.$store.state.setting.echartsAutoTime
      );
      let myChart = this.$refs.charts.chart;
      myChart.on("mouseover", (params) => {
        this.clearData();
      });
      myChart.on("mouseout", (params) => {
        this.timer = setInterval(
            looper,
            this.$store.state.setting.echartsAutoTime
        );
      });
    },
    init(xData, yData, yData2) {
      this.option = {
        xAxis: {
          type: "category",
          data: xData,
          boundaryGap: false, // 不留白，从原点开始
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(31,99,163,.2)",
            },
          },
          axisLine: {
            // show:false,
            lineStyle: {
              color: "rgba(31,99,163,.1)",
            },
          },
          axisLabel: {
            color: "#7EB7FD",
            fontWeight: "500",
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(31,99,163,.2)",
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(31,99,163,.1)",
            },
          },
          axisLabel: {
            color: "#7EB7FD",
            fontWeight: "500",
          },
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,.6)",
          borderColor: "rgba(147, 235, 248, .8)",
          textStyle: {
            color: "#FFF",
          },
        },
        grid: {
          //布局
          show: true,
          left: "10px",
          right: "30px",
          bottom: "10px",
          top: "28px",
          containLabel: true,
          borderColor: "#1F63A3",
        },
        series: [
          {
            data: yData,
            type: "line",
            smooth: true,
            symbol: "none", //去除点
            name: "实际功率",
            color: "rgba(252,144,16,.7)",
            // areaStyle: {
            //   //右，下，左，上
            //   color: new graphic.LinearGradient(
            //       0,
            //       0,
            //       0,
            //       1,
            //       [
            //         {
            //           offset: 0,
            //           color: "rgba(252,144,16,.7)",
            //         },
            //         {
            //           offset: 1,
            //           color: "rgba(252,144,16,.0)",
            //         },
            //       ],
            //       false
            //   ),
            // },
            markPoint: {
              data: [
                {
                  name: "最大值",
                  type: "max",
                  valueDim: "y",
                  symbol: "rect",
                  symbolSize: [60, 26],
                  symbolOffset: [0, -20],
                  itemStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                  label: {
                    color: "#FC9010",
                    backgroundColor: "rgba(252,144,16,0.1)",
                    borderRadius: 6,
                    padding: [7, 14],
                    borderWidth: 0.5,
                    borderColor: "rgba(252,144,16,.5)",
                    formatter: "实际功率：{c}",
                  },
                },
                {
                  name: "最大值",
                  type: "max",
                  valueDim: "y",
                  symbol: "circle",
                  symbolSize: 6,
                  itemStyle: {
                    color: "#FC9010",
                    shadowColor: "#FC9010",
                    shadowBlur: 8,
                  },
                  label: {
                    formatter: "",
                  },
                },
              ],
            },
          },
          {
            data: yData2,
            type: "line",
            smooth: true,
            symbol: "none", //去除点
            name: "预测功率",
            color: "rgba(9,202,243,.7)",
            // areaStyle: {
            //   //右，下，左，上
            //   color: new graphic.LinearGradient(
            //       0,
            //       0,
            //       0,
            //       1,
            //       [
            //         {
            //           offset: 0,
            //           color: "rgba(9,202,243,.7)",
            //         },
            //         {
            //           offset: 1,
            //           color: "rgba(9,202,243,.0)",
            //         },
            //       ],
            //       false
            //   ),
            // },
            markPoint: {
              data: [
                {
                  name: "最大值",
                  type: "max",
                  valueDim: "y",
                  symbol: "rect",
                  symbolSize: [60, 26],
                  symbolOffset: [0, -20],
                  itemStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                  label: {
                    color: "#09CAF3",
                    backgroundColor: "rgba(9,202,243,0.1)",

                    borderRadius: 6,
                    borderColor: "rgba(9,202,243,.5)",
                    padding: [7, 14],
                    formatter: "预测功率：{c}",
                    borderWidth: 0.5,
                  },
                },
                {
                  name: "最大值",
                  type: "max",
                  valueDim: "y",
                  symbol: "circle",
                  symbolSize: 6,
                  itemStyle: {
                    color: "#09CAF3",
                    shadowColor: "#09CAF3",
                    shadowBlur: 8,
                  },
                  label: {
                    formatter: "",
                  },
                },
              ],
            },
          },
        ],
      };
    },
  },
}

</script>
<style lang='scss' scoped>
.right_top_inner {
  margin-top: -8px;
}
</style>