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
        <el-menu-item :index="'/detail/' + item.farmId" v-for="item in tableData"
                      @click="savePath(item.farmId)">
          <i class="iconfont icon-fengji"></i>
          <span slot="title" style="margin-left: 10px">风电场 {{item.farmId}} </span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MenuDetail",
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
      sessionStorage.setItem('path', `/detail/${path}`)
    }
  },
  watch: {
    '$route.params': function (to, from) {
      axios.get('/api/windFarmUrl/getAllFarm').then(res=>{
        this.tableData = res.data
        console.log(res)
      })
    },
  },
  mounted() {
    // axios.post('/api/proj/my', { permission: 'all' }).then(res => {
    //   // this.form = res.data.result
    //   this.tableData = res.data.result
    //   console.log(res.data);
    // }, err => {
    //   console.log(err);
    // })
    axios.get('/api/windFarmUrl/getAllFarm').then(res=>{
      this.tableData = res.data
      console.log(res)
    })
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
.wind-management {
  color: #ffffff;  /* 这是字体颜色，你可以更改为你想要的颜色 */
  padding-left: 10px; /* 这是<i>标签和文字之间的距离，你可以更改为你想要的距离 */
}
</style>