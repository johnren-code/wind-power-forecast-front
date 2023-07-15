import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/scss/bootstrap.scss'
import 'animate.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './assets/scss/style.scss'
import store from './store'
import 'bootstrap'
import CoolLightBox from 'vue-cool-lightbox'
import VueScrollActive from 'vue-scrollactive'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueTypedJs from 'vue-typed-js'
import {loading,borderBox13,digitalFlop,capsuleChart,borderBox8} from '@jiaminghi/data-view'
import { Radio,Button,RadioGroup } from 'element-ui'
import Echart from './components/echart/index.vue'
import ItemWrap from './components/item-wrap/item-wrap.vue'
import Message from './components/message/message.vue'
import Reacquire from './components/reacquire/reacquire.vue'
import Messages from './components/message/message'
import "vue-easytable/libs/theme-default/index.css";
import ElementUI from 'element-ui'
import * as filters from '@/directives/filters'
import * as echarts from 'echarts'
import 'vue-js-modal/dist/styles.css'
import IdentifyCode from './components/login/IdentifyCode'
import VModal from 'vue-js-modal/dist/index.nocss.js'
import Storage from 'vue-ls'
const storageOptions = {
  namespace: 'vue_',
  name: 'ls',
  storage: 'local'
}
Vue.use(Storage, storageOptions)
require('./mock/mock')//是否使用mock
// 自定义组件
Vue.component("Echart",Echart)
Vue.component("ItemWrap",ItemWrap)
Vue.component("Message",Message)
Vue.component("Reacquire",Reacquire)
Vue.component('s-identify', IdentifyCode)
Vue.prototype.$Message =  Messages
// element组件
Vue.use(VModal)
Vue.use(Radio);
Vue.use(Button);
Vue.use(RadioGroup)
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
// datav组件
Vue.use(loading)
Vue.use(borderBox13)
Vue.use(borderBox8)
Vue.use(digitalFlop)
Vue.use(capsuleChart)
// 全局数据过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

Vue.config.productionTip = false
Vue.use(CoolLightBox)
Vue.use(VueScrollActive)
Vue.use(VueTypedJs)

new Vue({
  router,
  store,
  created () {
    AOS.init({
      duration: 800,
      once: true,
    })
  },
  render: h => h(App)
}).$mount('#app')
