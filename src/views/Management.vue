<template>
  <div class="user_skills">
    <el-table :data="tableData" style="width: 100%;background-color:transparent"
              element-loading-background="rgba(0,0,0,0.5)" cell-style="color:white;text-align:center" width="400">
      <el-table-column prop="farmId" label="风场编号" width="200" header-align="center">
      </el-table-column>
<!--      </el-table-column>-->
<!--      <el-table-column prop="desc_" label="描述" width="200" header-align="center">-->
<!--      </el-table-column>-->
<!--      <el-table-column prop="date" label="时间" width="150" header-align="center" :formatter="dateFormatter">-->
<!--      </el-table-column>-->
      <el-table-column label="原始风场数据" width="300" header-align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" v-if="scope.row.originFileUrl"
                     @click="downloadRawFile(scope.row.originFileUrl)">下载文件
          </el-button>
        </template>
      </el-table-column>

        <el-table-column label="处理风场数据" width="300" header-align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" v-if="scope.row.processFileUrl"
                       @click="downloadProcessFile(scope.row.processFileUrl)">下载文件
            </el-button>
            <span v-if="!scope.row.processFileUrl">暂无数据</span>
          </template>
        </el-table-column>

      <el-table-column label="操作" width="300" header-align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="deleteFarm(scope.row.id)">删除风场</el-button>
        </template>
      </el-table-column>
<!--      <el-table-column prop="status" label="完成状态" width="280" header-align="center">-->
<!--        <template slot-scope="scope">-->
<!--          <i v-if="scope.row.status" class="el-icon-circle-check" style="color:#67C23A"></i>-->
<!--          <i v-if="!scope.row.status" class="el-icon-circle-close" style="color:#F56C6C;"></i>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Management",
  data(){
    return{
      tableData:[]
    }
  },
  mounted() {
    axios.get('/api/windFarmUrl/getAllFarm').then(res=>{
      console.log('得到的全部风场数据',res)
      this.tableData = res.data
    })
  },
  methods:{
    deleteFarm(id){
      this.$confirm('此操作将永久删除该风场, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        axios.post('/api/windFarmUrl/deleteFarm',{
          id:id
        }).then(res=>{
          if(res.status){
            this.$message.success('删除成功')
            location.reload()
          }
        })
      })
    },
    downloadRawFile(url){
      var downloadUrl = 'http://124.220.56.38:8888' + url.substring(1)
      let a = document.createElement('a')
      a.href = downloadUrl
      a.click();
    },
    downloadProcessFile(url){
      var downloadUrl = 'http://127.0.0.1:5000' + url.substring(1)
      let a = document.createElement('a')
      a.href = downloadUrl
      a.click();
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.el-radio__inner) {
  border-radius: 2px;
}

:deep(.el-radio__input.is-checked) .el-radio__inner::after {
  content: "";
  width: 10px;
  height: 5px;
  border: 1px solid white;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  display: block;
  position: absolute;
  top: 2px;
  left: 0px;
  vertical-align: middle;
  transform: rotate(-45deg);
  border-radius: 0px;
  background: none;
}

::v-deep th.el-table__cell.is-leaf {
  border-bottom: 1px solid grey !important;
}

.el-table::before {
//border: 1px solid grey !important;
// color: #043cbd;
  height: 0px;
}

.projname {
  width: 400px;
}


.fileUpload {
  display: flex;
}

.submitButton {
  margin-top: 50px;
}

.user_skills {
  margin: auto;
  height: auto;
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

// 去除row的白底
   ::v-deep .el-descriptions-item__cell,
   ::v-deep .el-descriptions-item__content {
     background-color: transparent !important;
     border: 0; //去除表格
   }

::v-deep .el-descriptions__body {
  background-color: transparent !important;
  border: 0;
}

// 字体颜色
   ::v-deep .el-descriptions-item__label.is-bordered-label {
     color: white !important;
   }

::v-deep .el-descriptions__body {
  color: white !important;
  font-size: 15px;
}

.peopleDes {
  display: flex;
  width: 99%;
}

::v-deep .el-descriptions .is-bordered .el-descriptions-item__cell {
  border: 1px solid #868e96;
}

.deleHistory {
  position: relative;
  top: -10px;
}

.desc {
  width: 60%;
  margin-right: 30px;
}

::v-deep .el-descriptions {
  color: #9ccef9;
  font-size: 20px;
}

.historyTitle {
  color: #9ccef9;
  font-weight: bold;
  font-size: 20px;
}


::v-deep .el-table .cell {
  line-height: 40px !important
}

.echarts-chart {
  width: 400px;
  height: 250px;
  right: 50px;
  top: 90px
}
</style>