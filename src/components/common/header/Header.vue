<template>
  <div :class="{'header-transparent-with-topbar': data.headerTransparency}">
    <!-- Start Header Top Area -->
    <!--        <div v-if="data.showTopHeader && data.topbarStyle === 1"-->
    <!--             class="header-top-news"-->
    <!--             :style="{'background-image': `url(${require(`@/assets/images/bg/top-banner.png`)})`}">-->
    <!--            <div class="wrapper">-->
    <!--                <div class="container">-->
    <!--                    <div class="row">-->
    <!--                        <div class="col-lg-12">-->
    <!--                            <div class="inner">-->
    <!--                                <div class="content">-->
    <!--                                    <span class="rn-badge">Limited Time Offer</span>-->
    <!--                                    <span class="news-text">Intro price. Get Doob for Big Sale -95% off.</span>-->
    <!--                                </div>-->
    <!--                                <div class="right-button">-->
    <!--                                    <a class="btn-read-more"-->
    <!--                                       href="#">-->
    <!--                                        <span>Purchase Now <Icon name="arrow-right"/></span>-->
    <!--                                    </a>-->
    <!--                                </div>-->
    <!--                            </div>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--            <div class="icon-close">-->
    <!--                <button class="close-button bgsection-activation"-->
    <!--                        @click.prevent="AppFunctions.addClass('.header-top-news', 'deactive')">-->
    <!--                    <Icon name="x"/>-->
    <!--                </button>-->
    <!--            </div>-->
    <!--        </div>-->
    <!-- End Header Top Area -->

    <div v-if="data.showTopHeader && data.topbarStyle === 2"
         class="header-top-bar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-12 col-12">
            <div class="header-left">
              <p><a href="#">Get the most advanced template
                <Icon name="chevron-right"/>
              </a></p>
            </div>
          </div>
          <div class="col-lg-8 col-md-12 col-12">
            <div class="header-right">
              <div class="address-content">
                <p>
                  <Icon name="map-pin"/>
                  <span>Alabama, USA</span></p>
                <p>
                  <Icon name="phone"/>
                  <span><a href="#">+06 58 49 99 56</a></span></p>
              </div>
              <div class="social-icon-wrapper">
                <ul class="social-icon social-default icon-naked">
                  <li><a target="_blank" href="https://www.facebook.com/">
                    <Icon name="facebook"/>
                  </a></li>
                  <li><a target="_blank" href="https://www.twitter.com">
                    <Icon name="twitter"/>
                  </a></li>
                  <li><a target="_blank" href="https://www.instagram.com">
                    <Icon name="instagram"/>
                  </a></li>
                  <li><a target="_blank" href="https://www.linkedin.com">
                    <Icon name="linkedin"/>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Header Area -->
    <header :class="[`rn-header header-default header-not-transparent header-sticky ${data.headerClass}`]">
      <div class="container position-relative">
        <div class="row align-items-center row--0">
          <template v-if="data.navAlignment === 'right'">
            <div class="col-lg-3 col-md-6 col-4">
              <Logo/>
            </div>
            <div class="col-lg-9 col-md-6 col-8 position-static">
              <div class="header-right">
                <nav class="mainmenu-nav d-none d-lg-block">
                  <Nav/>
                </nav>

                <!-- Start Header Btn -->
                <div class="header-btn">
                  <a :class="data.buyButtonClass" href="#" @click="showDialog" v-if="!login">
                    注册/登录
                  </a>
<!--                  <div class="has-droupdown has-menu-child-item" v-if="login"-->
<!--                       style="display: flex;flex-direction: row;">-->
<!--                    <p style="margin-top: 30px;margin-right: 25px;">-->
<!--                      欢迎您，{{ username }}-->
<!--                    </p>-->
<!--                    <div @click="toPersonalPage" style="cursor: pointer;margin-top: 23px;" slot="reference">-->
<!--                      <el-avatar :src="avatar"></el-avatar>-->
<!--                    </div>-->
<!--                    <i class="el-icon-switch-button" v-if="login" title="登出" @click="logout"-->
<!--                       style="margin-top:35px;font-size: 20px;margin-left: 20px;cursor: pointer"></i>-->
<!--                  </div>-->
                </div>
                <!-- End Header Btn  -->

                <!-- Start Mobile-Menu-Bar -->
                <div class="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div class="hamberger">
                    <button class="hamberger-button"
                            @click.prevent="AppFunctions.toggleClass('.popup-mobile-menu', 'active')">
                      <Icon name="menu" size="21"/>
                    </button>
                  </div>
                </div>
                <!-- Start Mobile-Menu-Bar -->

                <div v-if="data.showThemeSwitcherButton" id="my_switcher" class="my_switcher">
                  <ul>
                    <li>
                      <a href="javascript: void(0);"
                         @click.prevent="AppFunctions.toggleClass('body', 'active-light-mode')">
                        <img class="light-icon"
                             src="../../../assets/images/icons/sun-01.svg"
                             alt="Sun images">
                        <img class="dark-icon"
                             src="../../../assets/images/icons/vector.svg"
                             alt="Moon Images">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
          <template v-if="data.navAlignment === 'left'">
            <div class="col-lg-9 col-md-6 col-4 position-static">
              <div class="header-left d-flex">
                <Logo/>
                <nav class="mainmenu-nav d-none d-lg-block">
                  <Nav/>
                </nav>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-8">
              <div class="header-right">
                <!-- Start Header Btn -->
                <div class="header-btn">
                  <a :class="data.buyButtonClass"
                     href="#">
                    BUY NOW
                  </a>
                </div>
                <!-- End Header Btn  -->

                <!-- Start Mobile-Menu-Bar -->
                <div class="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div class="hamberger">
                    <button class="hamberger-button"
                            @click.prevent="AppFunctions.toggleClass('.popup-mobile-menu', 'active')">
                      <Icon name="menu" size="21"/>
                    </button>
                  </div>
                </div>
                <!-- Start Mobile-Menu-Bar -->

                <div v-if="data.showThemeSwitcherButton" id="my_switcher" class="my_switcher">
                  <ul>
                    <li>
                      <a href="javascript: void(0);"
                         @click.prevent="AppFunctions.toggleClass('body', 'active-light-mode')">
                        <img class="light-icon"
                             src="../../../assets/images/icons/sun-01.svg"
                             alt="Sun images">
                        <img class="dark-icon"
                             src="../../../assets/images/icons/vector.svg"
                             alt="Moon Images">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </header>
    <!-- End Header Area -->

    <!-- Start Mobile Menu -->
    <MobileMenu/>
    <!-- End Mobile Menu -->

    <!-- Start Theme Style -->
    <div>
      <div class="rn-gradient-circle"/>
      <div class="rn-gradient-circle theme-pink"/>
    </div>
    <!-- End Theme Style -->
    <Login ref="loginPage"/>
  </div>
</template>

<script>
import Icon from '../../icon/Icon'
import MobileMenu from './MobileMenu'
import AppFunctions from '../../../helpers/AppFunctions'
import Nav from './Nav'
import Logo from '../../elements/logo/Logo'
import Login from "@/components/login/Login";
export default {
  name: 'Header',
  props: {
    data: {
      default: null
    }
  },
  components: {Logo, Nav, MobileMenu, Icon,Login},
  data() {
    return {
      AppFunctions,
      login:false
    }
  },
  methods: {
    showDialog(){
      this.$refs.loginPage.show()
    },
    toggleStickyHeader() {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        AppFunctions.addClass('.header-default', 'sticky');
      } else if (scrolled <= 100) {
        AppFunctions.removeClass('.header-default', 'sticky');
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.toggleStickyHeader);
  },
  mounted() {
    this.toggleStickyHeader();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleStickyHeader);
  }
}
</script>