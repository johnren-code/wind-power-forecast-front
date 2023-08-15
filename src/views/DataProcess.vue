<template>
  <Layout header-class="header-transparent" :show-newsletter="true" :show-cta="false">
    <div class="service-area rn-section-gapTop">
      <el-container>
        <MenuProcess></MenuProcess>
        <el-main>
          <div class="container">
            <!--            <SectionTitle text-align="center" :title="'风场' + farmId" description="" data-aos="fade-up"/>-->
            <div>
              <div>
                <el-upload
                    class="upload-demo"
                    action="/api/file/upload"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="handleAvatarSuccess"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed">
                  <el-button type="primary">重新上传文件</el-button>
                </el-upload>
                <div>
                  <span style="color: #d3d6dd;margin-top: 10px">数据可视化：</span>
                  <el-button type="primary" round @click="showMissInfo" style="margin-top: 10px">
                    <i class="iconfont icon-butongguo_cailiaoqueshi">缺失值统计</i>
                  </el-button>
                  <el-button type="primary" round @click="showDescriptive" style="margin-top: 10px">
                    <i class="iconfont icon-shujumiaoshuxingtongji">描述性统计</i>
                  </el-button>
                  <el-button type="primary" round @click="showBoxPlot" style="margin-top: 10px">
                    <i class="iconfont icon-hexutu">离群值分析</i>
                  </el-button>
                  <el-button type="primary" round @click="showCorrelation" style="margin-top: 10px">
                    <i class="iconfont icon-juxingrelitu">相关性分析</i>
                  </el-button>
                  <el-button type="primary" round @click="showScatter2dDialog" style="margin-top: 10px">
                    <i class="iconfont icon-sandiantu">二维散点图</i>
                  </el-button>
                  <el-button type="primary" round @click="showScatter3dDialog" style="margin-top: 10px">
                    <i class="iconfont icon-tubiaofenxi_sanweisandiantu">三维散点图</i>
                  </el-button>
                </div>
              </div>
              <div>
                <span style="color: #d3d6dd;margin-top: 10px">数据预处理：</span>
                <el-select v-model="beforeImpute" placeholder="请选择检测前的填充算法" style="margin-top: 10px">
                  <el-option
                      v-for="item in beforeImputeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="detection" placeholder="请选择异常值检测方法" style="margin-top: 10px">
                  <el-option
                      v-for="item in detectionOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="afterImpute" placeholder="请选择检测后的填充算法" style="margin-top: 10px">
                  <el-option
                      v-for="item in afterImputeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
                <el-button type="primary" round @click="doDataProcess" style="margin-top: 10px">点击进行数据处理</el-button>
                <el-button type="primary" round @click="saveProcessFile" style="margin-top: 10px">保存下载</el-button>
                <div class="charts">
                  <div id="echart-graph-beforeImpute" class="echarts-chart"></div>
                  <div id="echart-graph-afterImpute" class="echarts-chart"></div>
                </div>
              </div>
            </div>
          </div>
          <el-dialog :title="'缺失值统计'" :visible="missInfoVisible"
                     :before-close="handleMissInfoClose" class="dialog" top="23vh" :close-on-press-escape="false"
                     :close-on-click-modal="false" lock-scroll="false">
            <div id="echart-graph-missinfo" class="echarts-chart-missinfo"></div>
          </el-dialog>

          <el-dialog :title="'描述性统计'" :visible="descriptiveVisible"
                     :before-close="handleDescriptiveClose" class="dialog" top="23vh" :close-on-press-escape="false"
                     :close-on-click-modal="false" lock-scroll="false">
            <el-table
                :data="descriptiveTableData"
                stripe
                style="width: 100%"
                cell-style="text-align:center">
              <el-table-column
                  prop="zb"
                  label="指标"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="windspeed"
                  label="WINDSPEED"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="prepower"
                  label="PREPOWER"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="winddirection"
                  label="WINDDIRECTION"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="temperature"
                  label="TEMPERATURE"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="humidity"
                  label="HUMIDITY"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="pressure"
                  label="PRESSURE"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="ws"
                  label="ROUND(A.WS,1)"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="power"
                  label="ROUND(A.POWER,0)"
                  width="100"
                  header-align="center">
              </el-table-column>
              <el-table-column
                  prop="yd15"
                  label="YD15"
                  width="100"
                  header-align="center">
              </el-table-column>
            </el-table>
          </el-dialog>

          <el-dialog :title="'盒须图'" :visible="boxPlotVisible"
                     :before-close="handleBoxPlotClose" class="dialog" top="23vh" :close-on-press-escape="false"
                     :close-on-click-modal="false" lock-scroll="false">

            <div id="echart-graph-boxplot" class="echarts-chart-boxplot"></div>
          </el-dialog>

          <el-dialog :title="'相关性热力图'" :visible="correlationVisible"
                     :before-close="handleCorrelationClose" class="dialog" top="23vh" :close-on-press-escape="false"
                     :close-on-click-modal="false" lock-scroll="false">
            <div id="echart-graph-correlation" class="echarts-chart-correlation"></div>
          </el-dialog>

          <el-dialog :title="'二维散点图'" :visible="scatter2dVisible"
                     :before-close="handleScatter2dClose" class="dialog" top="23vh" :close-on-press-escape="false"
                     :close-on-click-modal="false" lock-scroll="false">
            <el-select v-model="xValue" placeholder="请选择特征1">
              <el-option
                  v-for="item in xyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="yValue" placeholder="请选择特征2">
              <el-option
                  v-for="item in xyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary" round @click="showScatter2D">绘制二维散点图</el-button>
            <div id="echart-graph-scatter2d" class="echarts-chart-scatter2d"></div>
          </el-dialog>

          <el-dialog :title="'三维散点图'" :visible="scatter3dVisible"
                     :before-close="handleScatter3dClose" class="dialog" top="23vh" :close-on-press-escape="false"
                     :close-on-click-modal="false" lock-scroll="false">
            <el-select v-model="xValue" placeholder="请选择特征1" style="width: 25%;">
              <el-option
                  v-for="item in xyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="yValue" placeholder="请选择特征2" style="width: 25%;">
              <el-option
                  v-for="item in xyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="zValue" placeholder="请选择特征3" style="width: 25%;">
              <el-option
                  v-for="item in zOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary" round @click="showScatter3D">绘制三维散点图</el-button>
            <div id="echart-graph-scatter3d" class="echarts-chart-scatter3d"></div>
          </el-dialog>
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
import 'echarts-gl';
import SectionTitle from "@/components/elements/sectionTitle/SectionTitle";
import MenuProcess from "@/components/menu/MenuProcess";

export default {
  name: 'DataProcess',
  components: {MenuProcess, Layout, Button, Menu, SectionTitle},
  data() {
    return {
      scatter3dVisible: false,
      scatter2dVisible: false,
      correlationVisible: false,
      boxPlotVisible: false,
      missInfoVisible: false,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      option: {},
      pageflag: false,
      timer: null,
      value: '',
      farmId: this.$route.params.id,
      originFileUrl: '',
      xyOptions: [{
        value: 'WINDSPEED',
        label: 'WINDSPEED'
      }, {
        value: 'PREPOWER',
        label: 'PREPOWER'
      }, {
        value: 'WINDDIRECTION',
        label: 'WINDDIRECTION'
      }, {
        value: 'TEMPERATURE',
        label: 'TEMPERATURE'
      }, {
        value: 'HUMIDITY',
        label: 'HUMIDITY'
      }, {
        value: 'PRESSURE',
        label: 'PRESSURE'
      }, {
        value: 'ROUND(A.WS,1)',
        label: 'ROUND(A.WS,1)'
      }, {
        value: 'ROUND(A.POWER,0)',
        label: 'ROUND(A.POWER,0)'
      }, {
        value: 'YD15',
        label: 'YD15'
      }],
      zOptions: [{
        value: 'ROUND(A.POWER,0)',
        label: 'ROUND(A.POWER,0)'
      }, {
        value: 'YD15',
        label: 'YD15'
      }],
      beforeImputeOptions: [{
        value: 'KNN',
        label: 'KNN（K近邻算法）'
      }, {
        value: 'KNN_RF',
        label: 'KNN_RF（K近邻结合随机森林回归）'
      }],
      detectionOptions: [{
        value: 'IF',
        label: 'IF（孤立森林检测算法）'
      }, {
        value: 'LOF',
        label: 'LOF（局部离群因子）'
      }, {
        value: 'EllipticEnvelope',
        label: 'EE（椭圆包络检测算法）'
      }, {
        value: 'SVM',
        label: 'SVM（支持向量机算法）'
      }],
      afterImputeOptions: [{
        value: 'KNN',
        label: 'KNN（K近邻算法）'
      }, {
        value: 'RF',
        label: 'RF（随机森林回归算法）'
      }],
      xValue: '',
      yValue: '',
      zValue: '',
      beforeImpute: '',
      detection: '',
      afterImpute: '',
      currentProcessUrl: '',
      descriptiveVisible: false,
      descriptiveTableUrl: '',
      descriptiveTableData: {},
    };
  },
  created() {

  },
  mounted() {
    axios.get('/api/windFarmUrl/getOriginFileById', {
      params: {
        farm_id: this.$route.params.id
      }
    }).then(res => {
      let resultUrl = 'http://124.220.56.38:8888' + res.data.originFileUrl.substring(1)
      this.originFileUrl = 'http://124.220.56.38:8888' + res.data.originFileUrl.substring(1)
    })
  },
  methods: {
    handleDescriptiveClose() {
      this.descriptiveVisible = false
    },
    showDescriptive() {
      this.descriptiveVisible = true
      this.$nextTick(() => {
        axios.post('/flask/descriptive_table', {
          path: this.originFileUrl
        }).then(res => {
          var resData = res.table
          console.log(resData)
          resData['zb'] = ["样本量", "最大值", "最小值", "平均值", "标准差", "中位数", "方差", "峰度", "偏度", "变异系数(CV)"]
          console.log(resData)
          var tempTableData = []
          for (var i = 0; i < 10; i++) {
            tempTableData.push({
              zb: resData.zb[i],
              windspeed: resData.WINDSPEED[i],
              prepower: resData.PREPOWER[i],
              winddirection: resData.WINDDIRECTION[i],
              temperature: resData.TEMPERATURE[i],
              humidity: resData.HUMIDITY[i],
              pressure: resData.PRESSURE[i],
              ws: resData.ws[i],
              power: resData.power[i],
              yd15: resData.YD15[i]
            })
          }
          console.log(tempTableData)
          this.descriptiveTableData = tempTableData
          console.log(res)
        })
      })
    },
    handleAvatarSuccess(res, file) {
      let url = res.url
      this.originFileUrl = 'http://124.220.56.38:8888' + res.url.substring(1)
      console.log(res)
      axios.post('/api/windFarmUrl/updateFarm', {
        farmId: this.$route.params.id,
        originFileUrl: url
      }).then(res => {
        if (res.status) {
          this.$message.success('上传成功');
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    saveProcessFile() {
      if (!this.currentProcessUrl) {
        this.$message.error('还未进行数据处理，无法下载')
      } else {
        axios.post('/flask/save_process_file', {
          file_path: this.currentProcessUrl,
          farm_id: this.$route.params.id
        }).then(res => {
          if (res.status) {
            var downloadUrl = 'http://127.0.0.1:5000' + this.currentProcessUrl.substring(1)
            let a = document.createElement('a')
            a.href = downloadUrl
            a.click();
            this.$message.success('保存下载成功')
          } else {
            this.$message.error('保存下载失败,请稍后再试')
          }
        })
      }
    },
    showScatter3dDialog() {
      this.scatter3dVisible = true
    },
    handleScatter3dClose() {
      this.scatter3dVisible = false
    },
    handleScatter2dClose() {
      this.scatter2dVisible = false
    },
    showScatter2dDialog() {
      this.scatter2dVisible = true
    },
    showCorrelation() {
      this.correlationVisible = true
      this.$nextTick(() => {
        var chartCorrelation = echarts.init(document.getElementById('echart-graph-correlation'), 'dark', {renderer: 'canvas'});
        axios.post('/flask/correlation_analysis', {
          path: this.originFileUrl
        }).then(res => {
          chartCorrelation.setOption(res)
          window.addEventListener('resize', function () {
            chartCorrelation.resize();
          });
          console.log(res)
        })
      })
    },
    handleCorrelationClose() {
      this.correlationVisible = false
    },
    handleBoxPlotClose() {
      this.boxPlotVisible = false
    },
    showBoxPlot() {
      this.boxPlotVisible = true
      this.$nextTick(() => {
        var chartBoxPlot = echarts.init(document.getElementById('echart-graph-boxplot'), 'dark', {renderer: 'canvas'});
        axios.post('/flask/boxplot', {
          path: this.originFileUrl
        }).then(res => {
          chartBoxPlot.setOption(res)
          window.addEventListener('resize', function () {
            chartBoxPlot.resize();
          });
          console.log(res)
        })
      })
    },
    showMissInfo() {
      this.missInfoVisible = true
      this.$nextTick(() => {
        var chart = echarts.init(document.getElementById('echart-graph-missinfo'), 'dark', {renderer: 'canvas'});
        axios.post('/flask/miss_info', {
          path: this.originFileUrl
        }).then(res => {
          chart.setOption(res)
          window.addEventListener('resize', function () {
            chart.resize();
          });
          console.log(res)
        })
      })
    },
    handleMissInfoClose() {
      this.missInfoVisible = false
    },
    doDataProcess() {
      if (!this.beforeImpute || !this.detection || !this.afterImpute) {
        this.$message.error('请选择完整填充算法或异常检测算法')
      } else {
        var chartBeforeImpute = echarts.init(document.getElementById('echart-graph-beforeImpute'), 'dark', {renderer: 'canvas'});
        var chartAfterImpute = echarts.init(document.getElementById('echart-graph-afterImpute'), 'dark', {renderer: 'canvas'});
        const loading = this.$loading({
          lock: true,
          text: '数据处理中，请稍等',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        axios.post('/flask/data_preprocess', {
          file_path: this.originFileUrl,
          before_impute_method: this.beforeImpute,
          detection: this.detection,
          after_impute_method: this.afterImpute
        }).then(res => {
          console.log(res)
          loading.close()
          chartBeforeImpute.setOption(res.outliers)
          chartAfterImpute.setOption(res.impute)
          window.addEventListener('resize', function () {
            chartBeforeImpute.resize();
          });
          window.addEventListener('resize', function () {
            chartAfterImpute.resize();
          });
          this.currentProcessUrl = res.save_path
        })
      }
    },
    showScatter2D() {
      var chartScatter2D = echarts.init(document.getElementById('echart-graph-scatter2d'), 'dark', {renderer: 'canvas'});
      const loading = this.$loading({
        lock: true,
        text: '绘制二维散点图，请稍等',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      axios.post('/flask/scatter2d', {
        path: this.originFileUrl,
        x: this.xValue,
        y: this.yValue
      }).then(res => {
        loading.close()
        chartScatter2D.setOption(res)
        window.addEventListener('resize', function () {
          chartScatter2D.resize();
        });
        console.log(res)
      })
    },
    showScatter3D() {
      var chartScatter3D = echarts.init(document.getElementById('echart-graph-scatter3d'), 'dark', {renderer: 'canvas'});
      const loading = this.$loading({
        lock: true,
        text: '绘制三维散点图，请稍等',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      axios.post('/flask/scatter3d', {
        path: this.originFileUrl,
        x: this.xValue,
        y: this.yValue,
        z: this.zValue
      }).then(res => {
        console.log('3d', res)
        loading.close()
        chartScatter3D.setOption(res)
        window.addEventListener('resize', function () {
          chartScatter3D.resize();
        });
        console.log(res)
      })
    }
  },
}

</script>
<style lang='scss' scoped>
.right_top_inner {
  margin-top: -8px;
}
@media screen and (min-width: 1100px) {
  .charts{
    display: flex;
    flex-direction: row;
  }
  .echarts-chart {
    margin: 5vw;
    height: 50vh;
    width: 50vw;
  }
}

@media screen and (max-width: 1100px) {
  .charts{
    display: flex;
    flex-direction: column;
  }
  .echarts-chart {
    margin: 5vw;
    height: 50vh;
    width: 70vw;
  }
}

.echarts-chart-missinfo {
  height: 50vh;
  width: 45vw;
}

.echarts-chart-correlation {
  height: 50vh;
  width: 45vw;
}

.echarts-chart-boxplot {
  height: 50vh;
  width: 45vw;
}

.echarts-chart-scatter2d {
  height: 50vh;
  width: 45vw;
}

.echarts-chart-scatter3d {
  height: 50vh;
  width: 45vw;
}

::v-deep .el-dialog {
  background-color: rgb(0, 0, 0, 0.7);
}

::v-deep .el-dialog__title {
  color: white !important;
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

::v-deep .el-table {
  color: #FFFFFF;
}

</style>