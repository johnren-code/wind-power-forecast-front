<template>
    <Layout header-class="header-transparent" buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-6 shape-right height-750">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                        <div class="inner text-start">
                            <h1 class="title color-white" data-aos="fade-up" data-aos-delay="100">
                                Trending <br />Business
                            </h1>
                            <p class="description color-white" data-aos="fade-up" data-aos-delay="150">
                                We help our clients succeed by creating brand identities, digital experiences, and print materials.
                            </p>
                            <div class="button-group mt--30 mt_sm--20" data-aos="fade-up" data-aos-delay="200">
                                <a class="btn-default btn-medium btn-icon btn-border"
                                   href="#">
                                    Purchase Now <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2">
                        <div class="thumbnail" data-aos="fade-up" data-aos-delay="100">
                            <img src="../../assets/images/banner/banenr-image-02.png" alt="Banner Images"/>
                        </div>
                    </div>
                    <div class="shape-image w-auto">
                        <img src="../../assets/images/banner/white-shape.svg" alt="Banner Images"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start CTA Area -->
        <CallToAction
            :style-type="6"
            title="Ready to start creating a standard website?"
            btn-text="Purchase Doob"
        />
        <!-- End CTA Area -->

        <Separator/>

        <!-- Start Timeline Area -->
        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            textAlign="center"
                            subtitle="Timeline"
                            title="Working Process"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 mt--50">
                        <Timeline :timeline-data="timelineData" :timeline-style="2"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Timeline Area -->

        <Separator/>

        <!-- Start About Area -->
        <AboutTwo/>
        <!-- End About Area -->

        <Separator/>

        <!-- Start Pricing Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Take a Pricing"
                            title="Our Pricing Plan"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingData" :pricing-style="5"/>
            </div>
        </div>
        <!-- End Pricing Area -->

        <Separator/>

        <!-- Start Brand Area -->
        <div class="rwt-brand-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Awesome Client"
                            title="Our Awesome Clients"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt--40">
                        <Brand :brand-list="brandList"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area  -->
    </Layout>
</template>

<script>
    import Layout from "../../components/common/Layout";
    import Separator from "../../components/elements/separator/Separator";
    import SectionTitle from "../../components/elements/sectionTitle/SectionTitle";
    import AboutTwo from "../../components/elements/about/AboutTwo";
    import Icon from "../../components/icon/Icon";
    import CallToAction from "../../components/elements/callToAction/CallToAction";
    import Timeline from "../../components/elements/timeline/Timeline";
    import Pricing from "../../components/elements/pricing/Pricing";
    import Brand from "../../components/elements/brand/Brand";

    export default {
        name: 'SeoAgency',
        components: {Brand, Pricing, Timeline, CallToAction, Icon, AboutTwo, SectionTitle, Separator, Layout},
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
                        title: 'Basic Plan',
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
                        title: 'Standard Plan',
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
                        title: 'Advanced Plan',
                        currency: '$',
                        price: '500',
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
                    }
                ],
            }
        }
    }
</script>