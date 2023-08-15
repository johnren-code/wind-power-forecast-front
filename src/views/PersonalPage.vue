<template>
  <Layout>
    <SectionTitle
        text-align="center"
        subtitle="Personal Information"
        title="个人信息"
        description=""
        data-aos="fade-up"
    />
    <center>
      <div class="edit_form" data-aos="fade-up">
        <form class="contact-form-1" action="" @submit.prevent="sendEditInformation">
          <div class="form-group">
            <el-upload
                class="avatar-uploader"
                action="/api/file/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
              <img v-model="userData.avatarUrlBack" v-if="userData.avatarUrlBack" :src="userData.avatarUrlBack" class="avatar" >
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="form-title">用户名</div>
          <div class="form-group">
            <input
                type="text"
                name="username"
                placeholder="请输入新用户名"
                required
                v-model="userData.username"
            />
          </div>
          <div class="form-title">邮箱</div>
          <div class="form-group">
            <input
                type="text"
                name="phone"
                placeholder="请输入新邮箱"
                required
                v-model="userData.email"
            />
          </div>
          <div class="form-title">新密码</div>
          <div class="form-group">
            <input
                type="password"
                name="password"
                placeholder="请输入新密码"
                required
                v-model="userData.password"
            />
          </div>
          <div class="form-title">个人简介</div>
          <div class="form-group">
            <input
                type="text"
                name="description"
                placeholder="请输入个人简介"
                required
                v-model="userData.description"
            />
          </div>
          <div class="form-group">
            <button class="btn-default btn-large">保存</button>
          </div>
        </form>
      </div>
    </center>
  </Layout>
</template>

<script>
import Layout from '../components/common/Layout.vue'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle.vue'
import axios from "axios";
import eventBus from "@/global/eventBus";
export default{
  name:'PersonalPage',
  components:{Layout,SectionTitle},
  data() {
    return {
      // avatarUrl:this.$global.apiUrl+'file/uploadAvatar/'+this.$ls.get('userInfo').id,
      userData:{
        avatarUrl:'',
        username:'',
        phone:'',
        password:'',
        description:'',
        avatarUrlBack:''
      },
      id:''
    };
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo(){
      this.userData.avatarUrlBack = 'http://124.220.56.38:8888'+this.$ls.get('userInfo').avatar.substring(1)
      this.userData.avatarUrl = this.$ls.get('userInfo').avatar
      this.userData.username = this.$ls.get('userInfo').account
      this.userData.email = this.$ls.get('userInfo').email
      this.userData.password = this.$ls.get('userInfo').password
      this.userData.description = this.$ls.get('userInfo').description || '这家伙很懒，什么都没有留下'
      this.id = this.$ls.get('userInfo').id
    },
    handleAvatarSuccess(res, file) {
      // console.log(res)
      this.userData.avatarUrl = res.url
      this.userData.avatarUrlBack = 'http://124.220.56.38:8888'+res.url.substring(1)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    sendEditInformation(){
      axios.post('/api/user/editInfo',{
        id:this.id,
        account:this.userData.username,
        password:this.userData.password,
        email:this.userData.email,
        description:this.userData.description,
        avatar:this.userData.avatarUrl
      }).then(res=>{
        if(!res.status){
          this.$message.error(res.message)
        }else {
          this.$message.success('修改成功')
          this.$ls.set('userInfo',res.data)
          eventBus.$emit('userLogin',true)
          this.$router.push('/')
        }
      }).catch(error=>{
        this.$message.error('发生错误，请稍后再试')
      })
    }
  }
}
</script>

<style>
.edit_form{
  width: 750px;

}
.form-title{
  font-size: 20px;
  font-weight: 600;
  font-family:"Times New Roman",Times,serif;
  margin-bottom: 5px;
  margin-left: -650px;
}
.avatar-uploader .el-upload {
  border: 2px dashed #d9d9d9;
  border-radius: 90px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 103px;
  line-height: 178px;
  text-align: center;
  margin-top: 75px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
