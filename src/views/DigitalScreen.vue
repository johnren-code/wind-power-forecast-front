<template>
  <Layout header-class="header-transparent" :show-newsletter="true" :show-cta="false">
    <ScaleScreen
        :width="1920"
        :height="1080"
        class="scale-wrap"
        :selfAdaption="$store.state.setting.isScale"
    >
      <div class="bg">
        <dv-loading v-if="loading">Loading...</dv-loading>
        <div v-else class="host-body">
          <!-- 头部 s -->
          <div class="d-flex jc-center title_wrap">
            <div class="zuojuxing"></div>
            <div class="youjuxing"></div>
            <div class="guang"></div>
            <div class="d-flex jc-center">
              <div class="title">
                <span class="title-text">龙源风电功率预测平台</span>
              </div>
            </div>
            <div class="timers">
              {{ dateYear }} {{ dateWeek }} {{ dateDay }}

              <el-select v-model="value" placeholder="请选择风场" style="width: 150px;margin-left: 20px">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <!-- 头部 e-->
          <!-- 内容  s-->
          <div class="contents">
            <div class="contetn_left">
              <div class="pagetab">
                <!-- <div class="item">实时监测</div> -->

              </div>
              <ItemWrap class="contetn_left-top contetn_lr-item" title="风机总览">
                <LeftTop/>

              </ItemWrap>
              <ItemWrap class="contetn_left-center contetn_lr-item" title="用户总览">
                <LeftCenter />
              </ItemWrap>
              <ItemWrap
                  class="contetn_left-bottom contetn_lr-item"
                  title="设备提醒"
                  style="padding: 0 10px 16px 10px"
              >
                <LeftBottom />
              </ItemWrap>
            </div>
            <div class="contetn_center">
              <CenterMap class="contetn_center_top" />
              <ItemWrap class="contetn_center-bottom" title="安装计划">
                <CenterBottom />
              </ItemWrap>
            </div>
            <div class="contetn_right">
              <ItemWrap
                  class="contetn_left-bottom contetn_lr-item"
                  title="报警次数"
              >
                <RightTop />
              </ItemWrap>
              <ItemWrap
                  class="contetn_left-bottom contetn_lr-item"
                  title="报警排名(TOP8)"
                  style="padding: 0 10px 16px 10px"
              >
                <RightCenter />
              </ItemWrap>
              <ItemWrap
                  class="contetn_left-bottom contetn_lr-item"
                  title="数据统计图 "
              >
                <RightBottom />
              </ItemWrap>
            </div>
          </div>
          <!-- 内容 e -->
        </div>
      </div>
<!--      <Setting ref="setting" />-->
    </ScaleScreen>
  </Layout>
</template>

<script>
import { formatTime } from "@/utils";
import Setting from "./setting.vue";
import ScaleScreen from "../components/scale-screen/scale-screen";
import LeftTop from "@/views/indexs/left-top";
import LeftCenter from "@/views/indexs/left-center";
import LeftBottom from "@/views/indexs/left-bottom";
import CenterMap from "@/views/indexs/center-map";
import RightTop from "@/views/indexs/right-top";
import RightCenter from "@/views/indexs/right-center";
import RightBottom from "@/views/indexs/right-bottom";
import CenterBottom from "@/views/indexs/center-bottom";
import Layout from "@/components/common/Layout";
export default {
  name: 'DigitalScreen',
  components: { Setting, ScaleScreen, LeftTop,
    LeftCenter,
    LeftBottom,
    CenterMap,
    RightTop,
    RightCenter,
    RightBottom,
    CenterBottom,
    Layout},
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
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
      }],
      value: ''
    };
  },
  filters: {
    numsFilter(msg) {
      return msg || 0;
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  methods: {
    showSetting() {
      this.$refs.setting.init();
    },
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      let timer = setTimeout(() => {
        this.loading = false;
        clearTimeout(timer);
      }, 500);
    },
  }
}
</script>
<style lang="scss" scoped>
@import "./home.scss";
@import  '../assets/css/public.scss';
@import "../assets/css/index.scss";
@import "../assets/css/modules/reset.scss";
@import '../assets/css/theme/index.css';
@import '../assets/iconfont/iconfont.css';
// 内容
.contents {
  .contetn_left,
  .contetn_right {
    width: 540px;
    box-sizing: border-box;
    // padding: 16px 0;
  }

  .contetn_center {
    width: 720px;
  }

  //左右两侧 三个块
  .contetn_lr-item {
    height: 310px;
  }

  .contetn_center_top {
    width: 100%;
  }

  // 中间
  .contetn_center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .contetn_center-bottom {
    height: 315px;
  }

  //左边 右边 结构一样
  .contetn_left,
  .contetn_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;


  }

  @keyframes rotating {
    0% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
    }
    50% {
      -webkit-transform: rotate(180deg) scale(1.1);
      transform: rotate(180deg) scale(1.1);
    }
    100% {
      -webkit-transform: rotate(360deg) scale(1);
      transform: rotate(360deg) scale(1);
    }
  }
}
</style>