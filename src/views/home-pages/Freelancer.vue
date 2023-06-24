<template>
    <Layout header-class="header-left-align header-transparent" nav-alignment="left" buy-button-class="btn-default btn-small" :show-top-header="false" :footer-style="2" :show-footer="false">
        <!-- Start Slider area -->
        <div class="slider-area slider-style-2 variation-3 height-850 bg_image bg_image_fixed theme-shape"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-png-01.png`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="inner text-left">
                            <h1 class="title" data-aos="fade-up" data-aos-delay="100">
                                Hi there, I am‍ <br/>
                                <span class="theme-gradient">Liam Noah!</span>
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="150">
                                I am an outstanding Product Designer from Lagos, Fatima. You will find me smiling almost
                                every time while designing thoughtful products, and experiences that people love and
                                businesses value.</p>
                            <div class="button-group mt--40 mt_sm--20" data-aos="fade-up" data-aos-delay="200">
                                <router-link class="btn-default btn-border" to="#">
                                    Click For Hire Me
                                </router-link>
                                <router-link class="btn-default btn-icon" to="/about">
                                    About Me
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider area -->

        <AboutSix/>

        <div class="rwt-timeline-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Timeline :timeline-data="timelineData" :timeline-style="4"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="rwt-portfolio-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--10">
                        <SectionTitle
                            title="My Recent Works."
                            :section-title-style="2"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <ServiceFive
                    service-style="gallery-style"
                    text-align="left"
                />
            </div>
        </div>

        <div class="rwt-portfolio-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            title="My Pricing Plan."
                            :section-title-style="2"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingData"/>
            </div>
        </div>

        <!-- Start Brand Area  -->
        <div class="rwt-brand-area pb--90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Brand :brand-list="brandList" :brand-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area  -->

        <!-- Start Elements Area  -->
        <div class="rwt-testimonial-area rn-section-gapBottom">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            title="My Clients Review."
                            :section-title-style="2"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12"
                         v-for="(testimonial, index) in testimonialData"
                         :key="index">
                        <Testimonial :testimonial="testimonial" :testimonial-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area  -->

        <div class="contact-area rn-section-gapBottom">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            title="Contact With Me."
                            :section-title-style="2"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row row--30 mt--40">
                    <div class="col-lg-6 order-2 oder-lg-1 mt_md--30 mt_sm--30">
                        <ContactForm/>
                    </div>
                    <div class="col-lg-6 order-1 oder-lg-2">
                        <div class="thumbnail">
                            <img class="radius w-100"
                                 src="../../assets/images/about/contact-image.jpg"
                                 alt="Corporate"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Icon from '../../components/icon/Icon'
    import AboutSix from '../../components/elements/about/AboutSix'
    import Timeline from '../../components/elements/timeline/Timeline'
    import ServiceFive from '../../components/elements/service/ServiceFive'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import Pricing from '../../components/elements/pricing/Pricing'
    import Brand from '../../components/elements/brand/Brand'
    import Testimonial from '../../components/elements/testimonial/Testimonial'
    import ContactForm from '../../components/elements/contact/ContactForm'

    export default {
        name: 'Freelancer',
        components: {
            ContactForm,
            Testimonial,
            Brand,
            Pricing,
            SectionTitle,
            ServiceFive,
            Timeline,
            AboutSix,
            Icon,
            Layout
        },
        data() {
            return {
                timelineData: [
                    {
                        id: '1',
                        title: 'Knowledge',
                        description: 'Present all available features in Essentials.',
                    },
                    {
                        id: '2',
                        title: 'Working',
                        description: 'All Feature available features in Essentials.',
                    },
                    {
                        id: '3',
                        title: 'Solution',
                        description: 'Popular Feature available features in Essentials.',
                    },
                    {
                        id: '4',
                        title: 'Process',
                        description: 'Latest Feature available features in Essentials.',
                    },
                ],
                pricingData: [
                    {
                        title: 'Free',
                        currency: '$',
                        price: '29',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Digital Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '#'
                        }
                    },
                    {
                        title: 'Business',
                        currency: '$',
                        price: '50',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Keep 100% Royalties'},
                            {title: 'App Development'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '#'
                        },
                        isActive: true
                    },
                    {
                        title: 'Advanced',
                        currency: '$',
                        price: '100',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'SEO Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'Application Manage'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '#'
                        }
                    }
                ],
                brandList: [
                    {
                        image: require(`@/assets/images/brand/brand-01.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-02.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-03.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-04.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-05.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-06.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-07.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-08.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-01.png`)
                    },

                ],
                testimonialData: [
                    {
                        image: 'testimonial-01',
                        name: 'Sr Janen Sara',
                        designation: 'Sr Product Designer',
                        location: 'CO Miego, AD, USA',
                        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
                    },
                    {
                        image: 'testimonial-02',
                        name: 'Afsana Nila',
                        designation: 'App Developer',
                        location: 'Bangladesh',
                        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
                    },
                    {
                        image: 'testimonial-03',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                        location: 'Poland',
                        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
                    },
                ],
            }
        }
    }
</script>