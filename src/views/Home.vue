<template>
  <Layout :footer-style="2">
    <!-- Start Slider Area -->
    <div class="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner text-center">
              <div class="react-image mb--20" data-aos="fade-up">
                <img src="../assets/images/demo/logo.png" alt="Doob Vue"/>
              </div>
              <h1 class="title display-two" data-aos="fade-up" data-aos-delay="100">
                风能视界风电管理与预测系统 <br/>
                <span class="theme-gradient">实时管理</span> &
                <span class="theme-gradient">功率预测</span>
                <br/>
              </h1>
              <p class="description" data-aos="fade-up" data-aos-delay="150">
                风险监控 / 可视分析 / 实时更新 / 滚动预测 / 决策支持
              </p>
              <div class="button-group" data-aos="fade-up" data-aos-delay="200">
                <a class="btn-default btn-large round btn-icon" href="#demo">查看详情
                  <Icon name="arrow-down"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Slider Area -->

    <Separator />

    <!-- Start Our Demo -->
    <div class="rn-demo-area rn-section-gap" id="demo">
      <div class="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div class="row">
          <div class="col-lg-12">
            <SectionTitle text-align="center" subtitle="Functions List" title="功能列表"
                          description="使用AI对风力发电赋能，是加速AI落地的重要举措" data-aos="fade-up" />
          </div>
        </div>
        <div class="row row--15">
          <div class="col-lg-4 col-md-6 col-12 mt--40" v-for="(page, index) in demoPages" :key="index" data-aos="fade-up"
               :data-aos-delay="100 + index">
            <div class="single-demo">
              <router-link :to="page.url">
                <div class="thumbnail">
                  <img class="image-dark" :src="page.image" alt="Corporate images" />
                  <img class="image-light" :src="page.imageLight" alt="Corporate images" />
                  <span v-if="page.badge" class="label-badge">{{ page.badge }}</span>
                </div>
              </router-link>
              <h4 class="title">
                <router-link :to="page.url">{{ page.title }}</router-link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Our Demo -->

    <Separator />

    <!-- Start Inner Pages -->
    <div class="rn-inner-pages rn-section-gap">
      <div class="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div class="row">
          <div class="col-lg-12">
            <SectionTitle text-align="center" subtitle="Statics Of Models" title="模型表现"
                          description="模型对10个风场的的平均预测分数为0.74468，其中14，18，19，20号风场预测精度尤佳" data-aos="fade-up" />
          </div>
        </div>
        <div class="row">
          <Counter text-align="center" :counter-data="counterOneData" column="col-lg-3 col-md-6 col-sm-6 col-12" />
        </div>
      </div>
    </div>
    <Separator />
    <section class="rn-service-area rn-section-gap">
      <div class="container">
        <div class="row row--30">
          <div class="col-lg-12">
            <SectionTitle class="mb--50" text-align="center" subtitle="Advantages of Product" title="产品优势"
                          description="相对于传统的风电功率预测方法<br/>基于神经网络的方法可以通过大数据充分逼近复杂的非线性关系，更好地协调多种输入信息关系，处理定量和定性的信息，具有更强的鲁棒性和准确性" data-aos="fade-up"
                          data-aos-delay="60" />
          </div>
        </div>
        <ServiceOne service-style="service__style--1 bg-color-blackest radius mt--25" icon-size="62"
                    text-align="center" />
      </div>
    </section>
    <!-- End Inner Pages -->
  </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import Icon from '../components/icon/Icon'
import Separator from '../components/elements/separator/Separator'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import Counter from "@/components/elements/counterUp/Counter";
import ServiceOne from "@/components/elements/service/ServiceOne";

export default {
  name: 'Home',
  components: {Icon, Layout, Separator, SectionTitle, Counter, ServiceOne},
  data() {
    return {
      counterOneData: [
        {
          number: 96,
          title: '风场14',
        },
        {
          number: 97,
          title: '风场18',
        },
        {
          number: 97,
          title: '风场19',
        },
        {
          number: 96,
          title: '风场20',
        }
      ],
      demoPages: [
        {
          url: '/home',
          image: require('@/assets/images/home/picture1.png'),
          imageLight: require('@/assets/images/demo/business-consulting-light.png'),
          title: '风场管理',
          badge: '',
        },
        {
          url: '/home',
          image: require('@/assets/images/home/picture2.png'),
          imageLight: require('@/assets/images/demo/business-consulting-2-light.png'),
          title: '实时预测',
          badge: '',
        },
        {
          url: '/home',
          image: require('@/assets/images/home/picture3.png'),
          imageLight: require('@/assets/images/demo/corporate-light.png'),
          title: '数据处理',
          badge: '',
        },
      ],
      innerPages: [
        {
          id: '1',
          url: '/blog-grid',
          image: require('@/assets/images/demo/blog-grid.png'),
          imageLight: require('@/assets/images/demo/blog-grid-light.png'),
          title: 'Blog Grid'
        },
        {
          id: '2',
          url: '/blog-grid-sidebar',
          image: require('@/assets/images/demo/blog-grid-sidebar.png'),
          imageLight: require('@/assets/images/demo/blog-grid-sidebar-light.png'),
          title: 'Blog Grid Sidebar'
        },
        {
          id: '3',
          url: '/blog-list-view',
          image: require('@/assets/images/demo/blog-list-view.png'),
          imageLight: require('@/assets/images/demo/blog-list-view-light.png'),
          title: 'Blog List View'
        },
        {
          id: '4',
          url: '/blog-list-sidebar',
          image: require('@/assets/images/demo/blog-list-sidebar.png'),
          imageLight: require('@/assets/images/demo/blog-list-sidebar-light.png'),
          title: 'Blog List Sidebar'
        },
        {
          id: '5',
          url: '/blog-details/3',
          image: require('@/assets/images/demo/blog-details.png'),
          imageLight: require('@/assets/images/demo/blog-details-light.png'),
          title: 'Blog Details'
        },
        {
          id: '6',
          url: '/portfolio',
          image: require('@/assets/images/demo/portfolio.png'),
          imageLight: require('@/assets/images/demo/portfolio-light.png'),
          title: 'Portfolio'
        },
        {
          id: '7',
          url: '/portfolio-three-column',
          image: require('@/assets/images/demo/portfolio-three-column.png'),
          imageLight: require('@/assets/images/demo/portfolio-three-column-light.png'),
          title: 'Portfolio Three Column'
        },
        {
          id: '8',
          url: '/portfolio-full-width',
          image: require('@/assets/images/demo/portfolio-full-width.png'),
          imageLight: require('@/assets/images/demo/portfolio-full-width-light.png'),
          title: 'Portfolio Full Width'
        },
        {
          id: '9',
          url: '/portfolio-grid-layout',
          image: require('@/assets/images/demo/portfolio-grid-layout.png'),
          imageLight: require('@/assets/images/demo/portfolio-grid-layout-light.png'),
          title: 'Portfolio Grid Layout'
        },
        {
          id: '10',
          url: '/portfolio-box-layout',
          image: require('@/assets/images/demo/portfolio-box-layout.png'),
          imageLight: require('@/assets/images/demo/portfolio-box-layout-light.png'),
          title: 'Portfolio Box Layout'
        },
        {
          id: '11',
          url: '/portfolio-details/5',
          image: require('@/assets/images/demo/portfolio-details.png'),
          imageLight: require('@/assets/images/demo/portfolio-details-light.png'),
          title: 'Portfolio Details'
        },
        {
          id: '12',
          url: '/about-us',
          image: require('@/assets/images/demo/about-us.png'),
          imageLight: require('@/assets/images/demo/about-us-light.png'),
          title: 'About Us'
        },
        {
          id: '13',
          url: '/service',
          image: require('@/assets/images/demo/service.png'),
          imageLight: require('@/assets/images/demo/service-light.png'),
          title: 'Service'
        },
        {
          id: '14',
          url: '/team',
          image: require('@/assets/images/demo/team.png'),
          imageLight: require('@/assets/images/demo/team-light.png'),
          title: 'Team'
        },
        {
          id: '15',
          url: '/pricing',
          image: require('@/assets/images/demo/pricing.png'),
          imageLight: require('@/assets/images/demo/pricing-light.png'),
          title: 'Pricing'
        },
        {
          id: '16',
          url: '/testimonial',
          image: require('@/assets/images/demo/testimonial.png'),
          imageLight: require('@/assets/images/demo/testimonial-light.png'),
          title: 'Testimonial'
        },
        {
          id: '17',
          url: '/progressbar',
          image: require('@/assets/images/demo/progressbar.png'),
          imageLight: require('@/assets/images/demo/progressbar-light.png'),
          title: 'Progressbar'
        },
        {
          id: '18',
          url: '/tab',
          image: require('@/assets/images/demo/tab.png'),
          imageLight: require('@/assets/images/demo/tab-light.png'),
          title: 'Tab'
        },
        {
          id: '18',
          url: '/timeline',
          image: require('@/assets/images/demo/timeline.png'),
          imageLight: require('@/assets/images/demo/timeline-light.png'),
          title: 'Timeline'
        },
        {
          id: '19',
          url: '/button',
          image: require('@/assets/images/demo/button.png'),
          imageLight: require('@/assets/images/demo/button-light.png'),
          title: 'Button'
        },
        {
          id: '20',
          url: '/counter',
          image: require('@/assets/images/demo/counter.png'),
          imageLight: require('@/assets/images/demo/counter-light.png'),
          title: 'Counter'
        },
        {
          id: '21',
          url: '/social-share',
          image: require('@/assets/images/demo/social-share.png'),
          imageLight: require('@/assets/images/demo/social-share-light.png'),
          title: 'Social Share'
        },
        {
          id: '22',
          url: '/advance-tab',
          image: require('@/assets/images/demo/advance-tab.png'),
          imageLight: require('@/assets/images/demo/advance-tab-light.png'),
          title: 'Advance Tab'
        },
        {
          id: '23',
          url: '/call-to-action',
          image: require('@/assets/images/demo/call-to-action.png'),
          imageLight: require('@/assets/images/demo/call-to-action-light.png'),
          title: 'Call To Action'
        },
        {
          id: '24',
          url: '/error',
          image: require('@/assets/images/demo/error.png'),
          imageLight: require('@/assets/images/demo/error-light.png'),
          title: '404 Page'
        },
        {
          id: '25',
          url: '/video-popup',
          image: require('@/assets/images/demo/video-popup.png'),
          imageLight: require('@/assets/images/demo/video-popup-light.png'),
          title: 'Video Popup'
        },
        {
          id: '26',
          url: '/contact',
          image: require('@/assets/images/demo/contact.png'),
          imageLight: require('@/assets/images/demo/contact-light.png'),
          title: 'Contact'
        }
      ]
    }
  }
}
</script>