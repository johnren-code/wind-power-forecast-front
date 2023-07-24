<!--
 * @Author: daidai
 * @Date: 2022-02-28 16:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-25 09:18:22
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-center.vue
-->
<template>
  <Echart id="leftCenter" :options="options" class="left_center_inner" v-if="pageflag" ref="charts" />
  <Reacquire v-else @onclick="getData" style="line-height:200px">
    重新获取
  </Reacquire>
</template>

<script>
import { currentGET } from 'api/modules'
export default {
  data() {
    return {
      options: {},
      countUserNumData: {
        lockNum: 0,
        onlineNum: 0,
        offlineNum: 0,
        totalNum: 0
      },
      pageflag: true,
      timer: null
    };
  },
  created() {
    this.getData()
  },
  mounted() {
  },
  beforeDestroy() {
    this.clearData()

  },
  methods: {
    clearData() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    getData() {
      this.pageflag = true
      // this.pageflag =false

      currentGET('big1').then(res => {
        //只打印一次
        if (!this.timer) {
          console.log("设备总览", res);
        }
        if (res.success) {
          this.countUserNumData = res.data
          this.$nextTick(() => {
            this.init()
          })

        } else {
          this.pageflag = false
          this.$Message({
            text: res.msg,
            type: 'warning'
          })
        }
      })
    },
    //轮询
    switper() {
      if (this.timer) {
        return
      }
      let looper = (a) => {
        this.getData()
      };
      this.timer = setInterval(looper, this.$store.state.setting.echartsAutoTime);
      let myChart = this.$refs.charts.chart
      myChart.on('mouseover', params => {
        this.clearData()
      });
      myChart.on('mouseout', params => {
        this.timer = setInterval(looper, this.$store.state.setting.echartsAutoTime);
      });
    },
    init() {
      let total = this.countUserNumData.totalPower.toFixed(1);
      let colors = [
          "#ECA444",
          "#33A1DB",
          "#56B557",
          "#C661D0",
          "#F05A51",
          "#8AC147",
          "#F7A321",
          "#4898D3",
          "#E9573F",
          "#9CC85E"
      ];
      let piedata = {
        name: "上年度发电总量（万千瓦时）",
        type: "pie",
        radius: ["42%", "65%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 4,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 2,
        },

        color: colors,
        data: [
          {
            value: this.countUserNumData.wind_power1.toFixed(1),
            name: "风场11",
            label: {
              shadowColor: colors[0],
            },
          },{
            value: this.countUserNumData.wind_power2.toFixed(1),
            name: "风场12",
            label: {
              shadowColor: colors[1],
            },
          },{
            value: this.countUserNumData.wind_power3.toFixed(1),
            name: "风场13",
            label: {
              shadowColor: colors[2],
            },
          },{
            value: this.countUserNumData.wind_power4.toFixed(1),
            name: "风场14",
            label: {
              shadowColor: colors[3],
            },
          },{
            value: this.countUserNumData.wind_power5.toFixed(1),
            name: "风场15",
            label: {
              shadowColor: colors[4],
            },
          },{
            value: this.countUserNumData.wind_power6.toFixed(1),
            name: "风场16",
            label: {
              shadowColor: colors[5],
            },
          },{
            value: this.countUserNumData.wind_power7.toFixed(1),
            name: "风场17",
            label: {
              shadowColor: colors[6],
            },
          },{
            value: this.countUserNumData.wind_power8.toFixed(1),
            name: "风场18",
            label: {
              shadowColor: colors[7],
            },
          },
          // {
          //   value: this.countUserNumData.wind_power9.toFixed(1),
          //   name: "风场19",
          //   label: {
          //     shadowColor: colors[8],
          //   },
          // },{
          //   value: this.countUserNumData.wind_power10.toFixed(1),
          //   name: "风场20",
          //   label: {
          //     shadowColor: colors[9],
          //   },
          // },
        ],
      };
      this.options = {
        title: {
          // zlevel: 0,
          text: ["{value|" + total + "}", "{name|万千瓦时}"].join("\n"),
          top: "center",
          left: "center",
          textStyle: {
            rich: {
              value: {
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "bold",
                lineHeight: 20,
              },
              name: {
                color: "#ffffff",
                lineHeight: 20,
              },
            },
          },
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,.6)",
          borderColor: "rgba(147, 235, 248, .8)",
          textStyle: {
            color: "#FFF",
          },
        },
        legend: {
          show: false,
          top: "5%",
          left: "center",
        },
        series: [
          //展示圆点
          {
            ...piedata,
            tooltip: { show: true },
            label: {
              formatter: "   {b|{b}}   \n   {c|{c}}   {per|{d}%}  ",
              //   position: "outside",
              rich: {
                b: {
                  color: "#fff",
                  fontSize: 12,
                  lineHeight: 26,
                },
                c: {
                  color: "#31ABE3",
                  fontSize: 14,
                },
                per: {
                  color: "#31ABE3",
                  fontSize: 14,
                },
              },
            },
            labelLine: {
              length: 20, // 第一段线 长度
              length2: 36, // 第二段线 长度
              show: true,
            
            },
              emphasis: {
                show: true,
              },
          },
          {
            ...piedata,
            tooltip: { show: true },
            itemStyle: {},
            label: {
              backgroundColor: "inherit", //圆点颜色，auto：映射的系列色
              height: 0,
              width: 0,
              lineHeight: 0,
              borderRadius: 2.5,
              shadowBlur: 8,
              shadowColor: "auto",
              padding: [2.5, -2.5, 2.5, -2.5],
            },
            labelLine: {
              length: 20, // 第一段线 长度
              length2: 36, // 第二段线 长度
              show: false,
            },
          },
        ],
      };
    },
  },
};
</script>
<style lang='scss' scoped>
</style>