<template>
  <ul class="mainmenu">
    <li>
      <router-link to="/home">首页</router-link>
    </li>
    <li>
      <router-link to="/digitalScreen" v-if="isLogin">数字化大屏</router-link>
    </li>
    <li>
      <router-link to="/pred/" v-if="isLogin">风场管理</router-link>
    </li>
    <li>
      <router-link to="/weatherPred/" v-if="isLogin">气象监控</router-link>
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
      isLogin:false
    }
  },
  mounted() {
    if(this.$ls.get('userInfo')){
      this.isLogin = true
    }
  }
}
</script>