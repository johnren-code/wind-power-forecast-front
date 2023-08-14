<template>
  <ul class="mainmenu">
    <li>
      <router-link to="/home">首页</router-link>
    </li>
    <li>
      <router-link to="/digitalScreen" v-if="isLogin && (isMaintain || isSuper)">数字化大屏</router-link>
    </li>
    <li>
      <router-link to="/pred/" v-if="isLogin && (isDataAnalyse || isSuper)">风场管理</router-link>
    </li>
    <li>
      <router-link to="/weatherPred/" v-if="isLogin && (isMaintain || isSuper)">气象监控</router-link>
    </li>
    <li>
      <router-link to="/detail" v-if="isLogin && (isMaintain || isSuper)">风场详情</router-link>
    </li>
    <li>
      <router-link to="/feedback" v-if="isLogin && (isMaintain || isSuper)">异常反馈</router-link>
    </li>
    <li>
      <router-link to="/technical">技术要点介绍</router-link>
    </li>
  </ul>
</template>

<script>
import Icon from "../../icon/Icon";

export default {
  name: 'Nav',
  components: {Icon},
  data() {
    return {
      isLogin:false,
      isDataAnalyse:false,
      isMaintain:false,
      isSuper:false
    }
  },
  mounted() {
    if(this.$ls.get('userInfo').role === 2){
      this.isLogin = true
      this.isDataAnalyse = true
    }
    if(this.$ls.get('userInfo').role === 3){
      this.isLogin = true
      this.isMaintain = true
    }
    if(this.$ls.get('userInfo').role === 1){
      this.isLogin = true
      this.isSuper = true
    }
  }
}
</script>