<template>
  <Layout header-class="header-transparent" :show-newsletter="true" :show-cta="false">

    <div class="service-area rn-section-gapTop">
      <el-container>
        <Menu></Menu>
        <el-main>
          <div class="container">
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
              <el-button type="primary" @click="queryPower">查 询</el-button>
              <el-button type="primary">导 出 数 据</el-button>
            </div>
            <div id="echart-graph" class="echarts-chart"></div>
          </div>
        </el-main>
      </el-container>
    </div>
    <!-- End Elements Area -->
  </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import Button from "@/components/elements/button/Button";
import {currentGET} from "api/modules";
import {graphic} from "echarts"
import axios from "axios";
import Menu from "@/components/menu/Menu";
import * as echarts from 'echarts';

export default {
  name: 'PowerPred',
  components: {Layout, Button, Menu},
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
      value: '',

    };
  },
  created() {

  },

  mounted() {
    var chartDom = document.getElementById('echart-graph');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    let base = +new Date(1988, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let data = [[base, Math.random() * 300]];
    for (let i = 1; i < 20000; i++) {
      let now = new Date((base += oneDay));
      data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
    }
    option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: 'Large Ara Chart'
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
          end: 20
        },
        {
          start: 0,
          end: 20
        }
      ],
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          smooth: true,
          symbol: 'none',
          data: data
        }
      ]
    };
    myChart.setOption(option)
  },
  methods: {},
}

</script>
<style lang='scss' scoped>
.right_top_inner {
  margin-top: -8px;
}

.echarts-chart {
  margin-top: 50px;
  margin-left: 150px;
  height: 500px;
  width: 1000px;
}
</style>