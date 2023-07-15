<template>
  <modal name="login-modal"
         :width="800"
         :height="500"
         :adaptive="true">
    <div class="login_form">
      <div class="login_form_left">
        <img src="../../assets/images/logo/logo.png" alt="Doob Vue" style="display: inline-block;"/>
        <p class="description" style="color: #E4E6EA">
        <h5><br/>&nbsp风电功率智能预测<br/><br/></h5>
        </p>
        <img src="../../assets/images/modal/login.png" alt="Doob Vue" style="display: inline-block;"/>
      </div>
      <div class="login_form_right" v-if="login">
        <div class="contact-form-1">
          <div v-if="this.email">
            邮箱
            <div class="form-group">
              <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  required
                  v-model="loginData.email"
              />
            </div>
          </div>
          <div v-if="!this.email">
            用户名
            <div class="form-group">
              <input
                  type="text"
                  name="email"
                  placeholder="User Name"
                  required
                  v-model="loginData.username"
              />
            </div>
          </div>

          <div v-if="!email">
            密码
            <div class="form-group">
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  v-model="loginData.password"
              />
            </div>
          </div>

          验证码
          <div class="verify-code">
            <input
                type="text"
                name="verifyCode"
                placeholder="Verify Code"
                v-model="loginData.writeCode"
                required
            />
            <div class="code" @click="refreshCode" v-if="!email">
              <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
            <div v-if="email">
              <!-- <Button :read-more-button="true">
                  <span @click="sendVerifyCode(loginData.email)">点击发送验证码</span>
              </Button> -->
              <Button :title="countDown>0?countDown+'s':'发送验证码'"
                      :style="{cursor:countDown>0?'not-allowed !important':'', pointerEvents:countDown>0?'none':''}"
                      size="small" :outlined="true" @click.native="sendVerifyCode(loginData.email)"></Button>
            </div>
          </div>
          <div style="display: flex;flex-direction: row;align-items: center;justify-content: space-between">
            <div class="form-group" style="margin-top: 30px;">
              <button
                  class="btn-default"
                  @click="doLogin"
                  v-loading.fullscreen.lock="fullscreenLoading">立即登录
              </button>
            </div>
            <Button :read-more-button="true" v-if="!email">
              <span @click="switchLogin">邮箱验证登录</span>
            </Button>
            <Button :read-more-button="true" v-if="email">
              <span @click="switchLogin">账号密码登录</span>
            </Button>
          </div>
          <div class="form-group">
            还没有账号?
            <Button :read-more-button="true">
              <span @click="switchModal">立即注册</span>
            </Button>
          </div>
        </div>
      </div>
      <div class="login_form_right" v-if="!login">
        <div action="" @submit="doRegister" class="contact-form-1">
          用户名
          <div class="register-input" style="margin-bottom: 10px;">
            <input
                type="text"
                name="username"
                placeholder="User Name"
                required
                v-model="registerData.username"
                @blur="checkExist"
            />
          </div>
          邮箱
          <div class="register-input">
            <input
                type="text"
                name="email"
                placeholder="Email Address"
                required
                v-model="registerData.email"
            />
          </div>
          <div class="psw-form">
            <div>
              密码
              <div class="register-input">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    v-model="registerData.password"
                />
              </div>
            </div>
            <div style="margin-left: 30px;">
              确认密码
              <div class="register-input">
                <input
                    type="password"
                    name="repassword"
                    placeholder="Password"
                    required
                    v-model="repsw"
                    @blur="checkPsw"
                />
              </div>
            </div>
          </div>
          验证码
          <div class="verify-code">
            <input
                type="text"
                name="verifyCode"
                placeholder="Verify Code"
                required
                v-model="registerData.verifyCode"
            />
            <div style="margin-left: 20px;">
              <!-- <Button :read-more-button="true">
                  <span @click="sendVerifyCode(registerData.email)">发送验证码</span>
              </Button> -->
              <Button :title="countDown>0?countDown+'s':'发送验证码'"
                      :style="{cursor:countDown>0?'not-allowed !important':'', pointerEvents:countDown>0?'none':''}"
                      size="small" :outlined="true" @click.native="sendVerifyCode(registerData.email)"></Button>
            </div>
          </div>
          <div class="form-group" style="margin-top: 30px;">
            <button
                class="btn-default"
                @click="doRegister"
                v-loading.fullscreen.lock="fullscreenLoading">立即注册
            </button>
          </div>
          <div class="form-group">
            已有账号？
            <Button :read-more-button="true">
              <span @click="switchModal">马上登录</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </modal>

</template>

<script>
import Button from "../elements/button/Button";
import eventBus from "../../global/eventBus";
import axios from "axios";

export default {
  name: "Login",
  components: {Button},
  data() {
    return {
      fullscreenLoading: false,//加载状态
      login: true,//用户是否在登录
      email: false,//用户是否选择手机登录
      identifyCodes: "1234567890",
      identifyCode: "",//生成的验证码
      loginData: {//登录相关
        email: '',
        password: '',
        writeCode: '',//用户输入的验证码
        username: ''
        // phoneCode:''
      },
      registerData: { //注册相关
        username: '',
        email: '',
        password: '',
        verifyCode: ''
      },
      repsw: '',//用户再次输入的密码
      countDown: 0//发送验证码倒计时
    }
  },
  methods: {
    //模态框相关方法
    show() {
      this.$modal.show('login-modal');
      // document.body.style.position='fixed';
    },
    hide() {
      // console.log('关闭了modal')
      this.$modal.hide('login-modal');
      // document.body.style.position='static';
    },
    checkExist() {
      if (this.registerData.username !== '') {
        var that = this
        this.$axios.get(this.$global.apiUrl + 'isExist', {
          params: {
            name: that.registerData.username
          }
        }).then(res => {
          if (res.data === true)
            that.$message.error('用户名已存在，换一个吧');
        }).catch(function (error) {
          // console.log(error);
          that.$message.error('网络错误，稍后再试');
        });
      }
    },
    //登录
    doLogin() {
      if (this.loginData.email === '' && this.loginData.username === '') {
        this.$message.error('请输入账号信息');
      } else if (!this.email && this.loginData.writeCode !== this.identifyCode) {
        this.$message.error('验证码错误')
      } else {
        var loginInfo
        var urlInfo
        if (this.email) { //邮箱验证码
          urlInfo = 'login2'
          loginInfo = JSON.stringify({email: this.loginData.email, verity: this.loginData.writeCode})
        } else { //账号密码
          urlInfo = 'login'
          loginInfo = JSON.stringify({name: this.loginData.username, password: this.loginData.password})
        }
        axios.post('/api/user/login', {
          account: this.loginData.username,
          password: this.loginData.password
        }).then(res => {
          console.log(res)
          if(!res.status){
            this.$message.error(res.message)
          }else {
            this.$message.success('登陆成功')
            this.hide()
          }
          // this.fullscreenLoading = false
          // if (res.data.code === 400) {
          //   this.$message.error(res.data.message)
          // } else {
          //   this.$message.success('登录成功')
          //   this.hide()
          //   this.$ls.set('userInfo', res.data.result)
          //   eventBus.$emit('userLogin', true)
          // }
        }).catch(error => {
          this.fullscreenLoading = false
          this.$message.error('登录错误，请稍后再试')
        })
        // this.$axios({
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   method: 'post',
        //   url: this.$global.apiUrl + urlInfo,
        //   data: loginInfo
        // }).then(res => {
        //   that.fullscreenLoading = false
        //   // console.log('登录成功')
        //   if (res.data.code === 0) {
        //     that.$message({
        //       message: '登录成功！',
        //       type: 'success'
        //     });
        //     this.hide()
        //     this.$ls.set('userInfo', res.data.data)
        //     // location.reload()
        //     eventBus.$emit('userLogin', true)
        //   } else {
        //     that.$message.error(res.data.message);
        //   }
        //
        // }).catch(function (error) {
        //   that.fullscreenLoading = false
        //   console.log(error);
        //   that.$message.error('网络错误，稍后再试');
        // });
      }

    },
    // 注册
    checkPsw() {
      if (this.registerData.password !== this.repsw) {
        this.$message.error('两次输入密码不一致');
      }
    },
    doRegister() {
      // console.log(JSON.stringify(this.registerData))
      if (this.registerData.username === '' || this.registerData.email === '') {
        this.$message.error('请填写用户信息');
      } else if (this.registerData.password !== this.repsw) {
        this.$message.error('两次输入密码不一致');
      } else {
        var that = this
        axios.post('/api/register', {
          email: this.registerData.email,
          username: this.registerData.username,
          password: this.registerData.password,
          repassword: this.repsw,
          code: this.registerData.verifyCode
        }).then(res => {
          if (res.data.code === 400) {
            this.$message.error(res.data.message)
          } else {
            this.fullscreenLoading = false
            this.$message.success('注册成功')
            this.hide();
            axios.post('/api/login', {
              username: this.registerData.username,
              password: this.registerData.password
            }).then(res => {
              this.fullscreenLoading = false
              if (res.data.code === 200) {
                this.$ls.set('userInfo', res.data.data)
                eventBus.$emit('userLogin', true)
              }
            })
          }
        }).catch(error => {
          this.$message.error('注册失败')
        })
        // this.$axios({
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   method: 'post',
        //   url: this.$global.apiUrl + 'register?code=' + that.registerData.verifyCode,
        //   data: JSON.stringify({
        //     name: that.registerData.username,
        //     email: that.registerData.email,
        //     password: that.registerData.password
        //   })
        // }).then(res => {
        //   that.fullscreenLoading = false
        //   // console.log('注册成功')
        //   that.$message({
        //     message: '注册成功！',
        //     type: 'success'
        //   });
        //   this.hide()
        //
        //   //注册后直接登录
        //   let urlInfo = 'login'
        //   let loginInfo = JSON.stringify({name: this.registerData.username, password: this.registerData.password})
        //   this.$axios({
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     method: 'post',
        //     url: this.$global.apiUrl + urlInfo,
        //     data: loginInfo
        //   }).then(res => {
        //     that.fullscreenLoading = false
        //     if (res.data.code === 0) {
        //       this.$ls.set('userInfo', res.data.data)
        //       eventBus.$emit('userLogin', true)
        //     }
        //   })
        //
        // }).catch(function (error) {
        //   that.fullscreenLoading = false
        //   console.log(error);
        //   that.$message.error('注册失败');
        // });
      }
    },
    // 切换登录、注册
    switchModal() {
      this.login = !this.login
    },
    // 发送验证码
    sendVerifyCode(email) {
      var that = this
      if (email === '') {
        this.$message.error('输入邮箱为空');
      } else {
        // console.log('开始发送验证码了，是否在登录',that.login)
        axios.post('/api/sendCode', {
          email: email
        }).then(res => {
          console.log('没有跳转到error')
          console.log(res)
          if (res.data.code === 400) {
            this.$message.error(res.data.message)
          } else {
            this.$message.success('发送成功')
            that.countDown = 180
            var interval = setInterval(function () {
              that.countDown = that.countDown - 1
              if (that.countDown === 0) {
                clearInterval(interval)
              }
            }, 1000)
          }
        }).catch(error => {
          console.error(error)
          this.$message.error('发送失败，请稍后再试')
        })
        // var url = this.login ? 'sendCode' : 'sendRegister'
        // this.$axios.get(this.$global.apiUrl + 'code/' + url, {
        //   params: {memPhone: email}
        // }).then(res => {
        //   // console.log(res.data)
        //   if (res.data.message === '手机号未注册！') {
        //     that.$message.error('手机号未注册');
        //   } else {
        //     that.$message({message: '发送成功！', type: 'success'});
        //     //开始倒计时
        //     that.countDown = 60
        //     var interval = setInterval(function () {
        //       that.countDown--
        //       if (that.countDown == 0) {
        //         clearInterval(interval)
        //       }
        //     }, 1000)
        //   }
        // }).catch(function (error) {
        //   that.$message.error('发送失败，请稍后再试');
        // });
      }
    },
    // 验证码相关方法
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
      }
      // console.log(this.identifyCode);
    },
    // 切换手机号登录、账号密码登录
    switchLogin() {
      this.email = !this.email
      // this.loginData.password=''
      // this.loginData.email=''
      this.loginData.writeCode = '' //需要清空验证码
    }
  },
  mounted() {
    // this.show()
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  }
}
</script>

<style scoped>
.login_form {
  height: 100%;
  width: 800px;
  display: flex;
  flex-direction: row;
  /* background:rgba(64,141,229,0.1); */
}

.login_form_left {
  width: 300px;
  height: 100%;
  padding: 50px;
  opacity: 1;
  background-color: #008FD5;
  background: -webkit-linear-gradient(left top, #211013, #0B2F41); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(bottom right, #211013, #0B2F41); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(bottom right, #211013, #0B2F41); /* Firefox 3.6 - 15 */
  background: linear-gradient(to bottom right, #211013, #0B2F41); /* 标准的语法 */
}

.login_form_right {
  width: 500px;
  height: 100%;
  margin-left: 1px;
  padding: 50px;
  opacity: 1;
  background: -webkit-linear-gradient(left top, #211013, #0B2F41); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(bottom right, #211013, #0B2F41); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(bottom right, #211013, #0B2F41); /* Firefox 3.6 - 15 */
  background: linear-gradient(to bottom right, #211013, #0B2F41); /* 标准的语法 */
}

.verify-code {
  display: flex;
  justify-content: space-between;
}

.verify-code input {
  height: 40px;
  width: 50%;
}

.register-input input {
  height: 40px;
  /*margin-top: 20px;*/
}

.psw-form {
  height: 80px;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}

.code {
  /*margin: 400px auto;*/
  /*width: 114px;*/
  /*height: 40px;*/
  margin-left: 20px;
  /*border: 1px solid red;*/
}
</style>