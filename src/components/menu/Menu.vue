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
        <el-menu-item index="/history/new">
          <el-button icon="el-icon-plus" type="text">新建项目</el-button>
        </el-menu-item>
        <el-menu-item :index="'/history/' + item.id.toString()" v-for="item in tableData"
                      @click="savePath(item.id)">
          <i class="el-icon-user-solid"></i>
          <span slot="title">病人{{ item.name }}</span>
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
      tableData: [],
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
      sessionStorage.setItem('path', `/history/${path}`)
    }
  },
  watch: {
    '$route.params': function (to, from) {
      axios.post('/api/proj/my', { permission: 'all' }).then(res => {
        // this.form = res.data.result
        this.tableData = res.data.result
        console.log(res.data);
      }, err => {
        console.log(err);
      })
    },
  },
  mounted() {
    axios.post('/api/proj/my', { permission: 'all' }).then(res => {
      // this.form = res.data.result
      this.tableData = res.data.result
      console.log(res.data);
    }, err => {
      console.log(err);
    })
    this.defaultActive = sessionStorage.getItem('path')
  }
}
</script>

<style scoped>
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