<template>
  <Layout header-class="header-transparent" :show-newsletter="true" :show-cta="false">
    <div class="service-area rn-section-gapTop">
      <el-container>
        <Menu></Menu>
        <el-main>
          <div class="container">
            <!--            <SectionTitle text-align="center" :title="'风场' + farmId" description="" data-aos="fade-up"/>-->
            <div>
              <el-upload action="/api/upload" :show-file-list="false" :on-success="handleUploadRawSuccess"
                         :before-upload="addData" :data="additionalData">
                <i class="el-icon-folder-opened" title="上传原文件"
                   style="font-size:28px;margin-top: 5px;margin-right: 10px"></i>
              </el-upload>
            </div>
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
import SectionTitle from "@/components/elements/sectionTitle/SectionTitle";

export default {
  name: 'DataProcess',
  components: {Layout, Button, Menu, SectionTitle},
  data() {
    return {
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      option: {},
      pageflag: false,
      timer: null,
      value: '',
      farmId: ''
    };
  },
  watch:{
    '$route.params.id': async function (to, from) {
      console.log(to);
      this.farmId=to
      var powerList
      await axios.get('/api/windFarm/getFarmDataById', {
        params: {
          farm_id: to
        }
      }).then(res => {
        powerList = res.data
        console.log(res)
      })
      console.log('powerList', powerList)
      let data = powerList.map(datum => {
        return [+new Date(datum.datetime), datum.yd15];
      });
      var chartDom = document.getElementById('echart-graph');
      var myChart = echarts.init(chartDom, 'dark');
      var option;
      option = {
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
            end: 20
          },
          {
            start: 0,
            end: 20
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
      myChart.setOption(option)
    },
  },
  created() {

  },
  mounted() {

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