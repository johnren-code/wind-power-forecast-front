<template>
  <Layout header-class="header-transparent" :show-newsletter="true" :show-cta="false">
      <el-col :offset="9" style="margin-top: 60px">
        <SectionTitle title="风场异常情况反馈"/>
      </el-col>

      <el-card class="new_proj">
        <div>
          <el-form direction="vertical" :label-position="labelPosition" label-width="80px" :model="formLabelAlign"
                   style="color: #ffffff">
            <el-row :gutter="24" style="margin-left: 150px">
              <el-col :span="8">
                <el-form-item label="风电场ID">
                  <el-input v-model="farmId" style="width: 70%;"></el-input>
                </el-form-item>
                <el-form-item label="运行状态">
<!--                  <el-input v-model="farmId" style="width: 70%;"></el-input>-->
                  <el-select v-model="stateValue" placeholder="请选择" style="width: 70%;">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="故障原因">
                  <el-input v-model="description" style="width: 70%;"></el-input>
                </el-form-item>
              </el-col>
<!--              <el-col :span="8">-->
<!--                <el-form-item label="运行状态">-->
<!--                  <el-input v-model="farmId" style="width: 70%;"></el-input>-->
<!--                </el-form-item>-->
<!--              </el-col>-->
<!--              <el-col :span="8">-->

<!--              </el-col>-->
              <el-col :span="16">
                <span>故障风场数据上传</span>
                <el-upload
                    class="upload-demo"
                    style="margin-top: 50px"
                    drag
                    action="/api/file/upload"
                    multiple
                    :on-success="handleAvatarSuccess">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
              </el-col>
            </el-row>
          </el-form>

        </div>
        <el-col :offset="9">
          <el-button type="primary" @click="onSubmit">立即上报</el-button>
          <el-button type="danger" @click="reset">重置</el-button>
        </el-col>
        <br><br>
      </el-card>
  </Layout>
</template>

<script>
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios";
import Layout from "@/components/common/Layout";

export default {
  name: 'FeedBack',
  components: {Layout, SectionTitle},
  data() {
    return {
      labelPosition: 'top',
      farmId: '',
      // dialogImageUrl: 'D:/runajianbeiA3/front/3d-image-seg-front/src/assets/images/about/about-1.png',
      dialogVisible: false,
      disabled: false,
      uploadFileUrl: '',
      options: [{
        value: '1',
        label: '正常'
      }, {
        value: '2',
        label: '良好'
      }, {
        value: '3',
        label: '异常'
      }, {
        value: '4',
        label: '故障'
      }],
      stateValue: '',
      description:''
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleAvatarSuccess(res, file) {
      console.log('成功上传', res)
      this.uploadFileUrl = res.url
    },
    onSubmit() {
      if (!this.farmId || !this.uploadFileUrl || !this.description || !this.stateValue) {
        this.$message.error('请输入完整的信息并上传文件')
      } else {
        axios.post('/api/feedback/createFeedback', {
          farmId: this.farmId,
          state:this.stateValue,
          description:this.description,
          fileUrl: this.uploadFileUrl
        }).then(res => {
          console.log(res.data)
          if (res.status) {
            this.$message.success('上报成功')
          } else {
            this.$message.error(res.message)
          }
          console.log(res)
        })
      }
    },
    reset() {
      this.uploadFileUrl = ''
      this.farmId = ''
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
  margin: 60px;
}

::v-deep .el-upload-dragger {
  background-color: transparent;
}
</style>