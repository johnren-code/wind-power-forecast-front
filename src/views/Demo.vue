<template>
    <Layout :footer-style="2">
        <!-- Start Slider Area -->
        <div class="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <div class="react-image mb--20" data-aos="fade-up">
                                <img src="../assets/images/demo/badge-vue-js.png" alt="Doob Vue"/>
                            </div>
                            <h1 class="title display-two" data-aos="fade-up" data-aos-delay="100">
                                Next-gen all-in-one <br/>
                                <span class="theme-gradient">Business</span> &
                                <span class="theme-gradient">Consulting</span>
                                <br/>
                                Vue.js Template.
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="150">
                                We help our clients succeed by creating brand identities, digital
                                experiences, and print materials.
                            </p>
                            <div class="button-group" data-aos="fade-up" data-aos-delay="200">
                                <a class="btn-default btn-large round btn-icon" href="#demo">View Demo
                                    <Icon name="arrow-down"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <Separator/>

        <!-- Start Our Demo -->
        <div class="rn-demo-area rn-section-gap" id="demo">
            <div class="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="All Demo Here"
                            title="Doob All Demo."
                            description="We create a business and consulting Vue.js template with 50+ elements features. <br /> 19+ demo pages, faster loading and well documentated code."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12 mt--40"
                         v-for="(page, index) in demoPages"
                         :key="index"
                         data-aos="fade-up"
                         :data-aos-delay="100 + index">
                        <div class="single-demo">
                            <router-link :to="page.url">
                                <div class="thumbnail">
                                    <img class="image-dark" :src="page.image" alt="Corporate images"/>
                                    <img class="image-light" :src="page.imageLight" alt="Corporate images"/>
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

        <Separator/>

        <!-- Start Inner Pages -->
        <div class="rn-inner-pages rn-section-gap">
            <div class="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="All Others Pages"
                            title="All Others Pages."
                            description="Have a nice inner pages include in doob template."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 mt--40"
                         v-for="(page, index) in innerPages"
                         :key="index"
                         data-aos="fade-up"
                         :data-aos-delay="100 + index">
                        <div class="single-demo">
                            <router-link :to="page.url">
                                <div class="thumbnail">
                                    <img class="image-dark" :src="page.image" alt="Corporate images"/>
                                    <img class="image-light" :src="page.imageLight" alt="Corporate images"/>
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
        <!-- End Inner Pages -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Icon from '../components/icon/Icon'
    import Separator from '../components/elements/separator/Separator'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'

    export default {
        name: 'Demo',
        components: {Icon, Layout, Separator, SectionTitle},
        data() {
            return {
                demoPages: [
                    {
                        url: '/business-consulting',
                        image: require('@/assets/images/demo/business-consulting.png'),
                        imageLight: require('@/assets/images/demo/business-consulting-light.png'),
                        title: 'Business Consulting',
                        badge: '',
                    },
                    {
                        url: '/business-consulting-2',
                        image: require('@/assets/images/demo/business-consulting-2.png'),
                        imageLight: require('@/assets/images/demo/business-consulting-2-light.png'),
                        title: 'Business Consulting 2',
                        badge: '',
                    },
                    {
                        url: '/corporate',
                        image: require('@/assets/images/demo/corporate.png'),
                        imageLight: require('@/assets/images/demo/corporate-light.png'),
                        title: 'Corporate',
                        badge: '',
                    },
                    {
                        url: '/startup',
                        image: require('@/assets/images/demo/startup.png'),
                        imageLight: require('@/assets/images/demo/startup-light.png'),
                        title: 'Startup',
                        badge: 'Trendy',
                    },
                    {
                        url: '/web-agency',
                        image: require('@/assets/images/demo/web-agency.png'),
                        imageLight: require('@/assets/images/demo/web-agency-light.png'),
                        title: 'Web Agency',
                        badge: 'Trendy',
                    },
                    {
                        url: '/international-consulting',
                        image: require('@/assets/images/demo/international-consulting.png'),
                        imageLight: require('@/assets/images/demo/international-consulting-light.png'),
                        title: 'International Consulting',
                        badge: 'Trendy',
                    },
                    {
                        url: '/consulting',
                        image: require('@/assets/images/demo/consulting.png'),
                        imageLight: require('@/assets/images/demo/consulting-light.png'),
                        title: 'Consulting',
                        badge: 'Hot',
                    },
                    {
                        url: '/finance',
                        image: require('@/assets/images/demo/finance.png'),
                        imageLight: require('@/assets/images/demo/finance-light.png'),
                        title: 'Finance',
                        badge: '',
                    },
                    {
                        url: '/digital-agency',
                        image: require('@/assets/images/demo/digital-agency.png'),
                        imageLight: require('@/assets/images/demo/digital-agency-light.png'),
                        title: 'Digital Agency',
                        badge: '',
                    },
                    {
                        url: '/seo-agency',
                        image: require('@/assets/images/demo/seo-agency.png'),
                        imageLight: require('@/assets/images/demo/seo-agency-light.png'),
                        title: 'SEO Agency',
                        badge: '',
                    },
                    {
                        url: '/company',
                        image: require('@/assets/images/demo/company.png'),
                        imageLight: require('@/assets/images/demo/company-light.png'),
                        title: 'Company',
                        badge: '',
                    },
                    {
                        url: '/personal-portfolio',
                        image: require('@/assets/images/demo/portfolio.png'),
                        imageLight: require('@/assets/images/demo/portfolio-light.png'),
                        title: 'Personal Portfolio',
                        badge: '',
                    },
                    {
                        url: '/freelancer',
                        image: require('@/assets/images/demo/freelancer.png'),
                        imageLight: require('@/assets/images/demo/freelancer-light.png'),
                        title: 'Freelancer',
                        badge: 'Hot',
                    },
                    {
                        url: '/marketing-agency',
                        image: require('@/assets/images/demo/marketing.png'),
                        imageLight: require('@/assets/images/demo/marketing-light.png'),
                        title: 'Marketing Agency',
                        badge: '',
                    },
                    {
                        url: '/travel-agency',
                        image: require('@/assets/images/demo/travel-agency.png'),
                        imageLight: require('@/assets/images/demo/travel-agency-light.png'),
                        title: 'Travel Agency',
                        badge: '',
                    },
                    {
                        url: '/business',
                        image: require('@/assets/images/demo/business.png'),
                        imageLight: require('@/assets/images/demo/business-light.png'),
                        title: 'Business',
                        badge: '',
                    },
                    {
                        url: '/event-conference',
                        image: require('@/assets/images/demo/event-conference.png'),
                        imageLight: require('@/assets/images/demo/event-conference-light.png'),
                        title: 'Event Conference',
                        badge: '',
                    },
                    {
                        url: '/creative-portfolio',
                        image: require('@/assets/images/demo/creative-portfolio.png'),
                        imageLight: require('@/assets/images/demo/creative-portfolio-light.png'),
                        title: 'Creative Portfolio',
                        badge: '',
                    },
                    {
                        url: '/about',
                        image: require('@/assets/images/demo/about-us.png'),
                        imageLight: require('@/assets/images/demo/about-us-light.png'),
                        title: 'Corporate About',
                        badge: '',
                    },
                    {
                        url: '#demo',
                        image: require('@/assets/images/demo/coming-soon.png'),
                        imageLight: require('@/assets/images/demo/coming-soon.png'),
                        title: 'Finance Consulting',
                        badge: '',
                    },
                    {
                        url: '#demo',
                        image: require('@/assets/images/demo/coming-soon.png'),
                        imageLight: require('@/assets/images/demo/coming-soon.png'),
                        title: 'Finance Consulting',
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