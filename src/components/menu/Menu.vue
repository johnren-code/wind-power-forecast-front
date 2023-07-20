<template>
  <div>
    <el-aside class="side-menu" :width="isCollapse ? '65px' : '200px'">
      <i v-show="!isCollapse" class="el-icon-s-fold" style="font-size: 30px;margin-left: 160px;cursor: pointer"
         @click="isCollapse = true"></i>
      <i v-show="isCollapse" class="el-icon-s-unfold" style="font-size: 30px;margin-left: 20px;cursor: pointer"
         @click="isCollapse = false"></i>
      <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse" background-color="transparent" text-color="#EBEEF5" router
               :collapse-transition="false" style="border: none">
        <el-menu-item index="/pred/new">
          <el-button icon="el-icon-plus" type="text">新建风电场</el-button>
        </el-menu-item>
        <el-menu-item :index="'/pred/' + item.id.toString()" v-for="item in tableData"
                      @click="savePath(item.id)">
          <i class="iconfont icon-fengji"></i>
          <span slot="title" style="margin-left: 10px">风电场{{ item.id }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Menu",
  data() {
    return {
      isCollapse: false,
      tableData: [{id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16}, {id: 17}, {id: 18}, {id: 19}, {id: 20}],
      defaultActive: sessionStorage.getItem('path')
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    savePath(path) {
      sessionStorage.setItem('path', `/powerPred/${path}`)
    }
  },
  mounted() {
    this.defaultActive = sessionStorage.getItem('path')
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/iconfont-expand/iconfont.css";

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
  border: none !important;
  text-align: center;
}

::v-deep .el-button--text {
  background-color: #202123 !important;
  width: 150px
}

.el-button--text {
  /* position: relative;
  left: 20px; */
  background-color: #202123;
  border: none;
}
</style>