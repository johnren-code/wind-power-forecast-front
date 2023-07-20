<template>
  <div>
    <el-col :offset="9">
      <SectionTitle title="新建风电场"/>
    </el-col>

    <el-card class="new_proj">
      <div>
        <el-form direction="vertical" :label-position="labelPosition" label-width="80px" :model="formLabelAlign"
                 style="color: #ffffff">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item label="风电场ID">
                <el-input v-model="farmId" style="width: 70%;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传csv格式的文件</div>
              </el-upload>
            </el-col>
          </el-row>
        </el-form>

      </div>
      <el-col :offset="9">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="danger" @click="reset">重置</el-button>
      </el-col>
      <br><br>
    </el-card>
  </div>
</template>

<script>
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios";

export default {
  name: 'NewWindFarm',
  components: {SectionTitle},
  data() {
    return {
      labelPosition: 'top',
      farmId:'',
      // dialogImageUrl: 'D:/runajianbeiA3/front/3d-image-seg-front/src/assets/images/about/about-1.png',
      dialogVisible: false,
      disabled: false,
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onSubmit() {

    },
    reset() {
      this.form = []
    }
  }
}

</script>

<style scoped lang="scss">
.projname {
  width: 400px;
}

::v-deep .el-form-item__label {
  color: whitesmoke;
}

.new_proj {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 15px;
  padding-right: 30px;
  /* 为其整体设置接近透明的效果*/
  background-color: rgba(255, 255, 255, 0.03);
  /* 设置box-shadow使其有立体感 */
  box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
  position: relative;
  left: -15px;
}
::v-deep .el-upload-dragger{
  background-color: transparent;
}
</style>