<template>
    <ul class="mainmenu">
        <li><router-link to="/home">首页</router-link></li>
<!--        <li><router-link to="/about">About</router-link></li>-->
<!--        <li><router-link to="/button">Button</router-link></li>-->
        <li><router-link to="/digitalScreen">数字化大屏</router-link></li>
        <li><router-link to="/pred/">功率预测</router-link></li>
<!--        <li><router-link to="/contact">Contact</router-link></li>-->
      <li><router-link to="/personal">个人信息测试</router-link></li>
    </ul>
</template>

<script>
    import Icon from "../../icon/Icon";
    export default {
        name: 'Nav',
        components: {Icon}
    }
</script>