<template>
    <div>
        <div class="col-lg-12">
            <SectionTitle text-align="center" title="欢迎来到风电场管理页面，快去创建新风电场吧！" description="" data-aos="fade-up" />
            <div class="mybutton"><router-link to="new"><el-button type="primary" round>创建风电场</el-button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Layout from '../components/common/Layout'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import BlogSidebar from '../components/blog/BlogSidebar'
import Menu from "@/components/menu/Menu";
export default {
    name: 'FarmCreate',
    components: { Layout, SectionTitle, BlogSidebar, Menu },

}
</script>

<style lang="scss" scoped>
.col-lg-12 {
    position: relative;
    top: 100px;
}

.mybutton {
    margin: 0 auto;
    text-align: center;
}

.el-button--primary {
    color: #f7f4f4;
    background-color: #067df5;
    border-color: #1E90FF;
    height: 50px;
    // line-height: 50px;
    font-size: large;
    // padding: 0 20px;
}
</style>