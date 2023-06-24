<template>
    <Layout :topbar-style="2" :footer-style="2">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-1 bg-transparent variation-2 height-750">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
                        <div class="inner text-left">
                            <h1 class="title theme-gradient display-two" data-aos="fade-up" data-aos-delay="100">
                                Marketing Agency <br/>For
                                <vue-typed-js class="d-inline-block"
                                              :strings="['Freelancer.', 'Developer.', 'Startup.']"
                                              :loop="true"
                                              :type-speed="80"
                                              :start-delay="1000"
                                              :back-speed="50">
                                    <span class="typing"></span>
                                </vue-typed-js>
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="150">
                                We help our clients succeed by creating brand identities, digital experiences, and print
                                materials.
                            </p>
                            <div class="button-group" data-aos="fade-up" data-aos-delay="200">
                                <router-link class="btn-default btn-medium round btn-icon" to="#">
                                    New Customer
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                                <router-link class="btn-default btn-medium btn-border round btn-icon" to="/contact">
                                    Contact Us
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 order-1 order-lg-2">
                        <div class="thumbnail" data-aos="fade-up" data-aos-delay="250">
                            <img src="../../assets/images/bg/bg-image-16.png" alt="Banner Images"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <Separator/>

        <!-- Start Service Area -->
        <div class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you"
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <ServiceFour
                    service-style="service__style--1 icon-circle-style with-working-process"
                    text-align="center"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-advance-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="You can acquire all"
                            title="Acquire new customers with Doob"
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <AdvancedTab :tab-data="tabData"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-pricingtable-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Pricing Table"
                            title="Advance Pricing Table"
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row mt--30">
                    <div class="col-lg-8 offset-lg-2">
                        <AdvancePricing/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <!-- Start Brand Area -->
        <div class="rwt-brand-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Awesome Clients"
                            title="Join over +10,000 happy clients!"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt--10">
                        <Brand :brand-list="brandList" :brand-style="2"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area -->
    </Layout>
</template>

<script>
    import Layout from "../../components/common/Layout";
    import Separator from "../../components/elements/separator/Separator";
    import SectionTitle from "../../components/elements/sectionTitle/SectionTitle";
    import Icon from "../../components/icon/Icon";
    import ServiceFour from "../../components/elements/service/ServiceFour";
    import AdvancedTab from "../../components/elements/tab/AdvancedTab";
    import AdvancePricing from "../../components/elements/pricing/AdvancePricing";
    import Brand from "../../components/elements/brand/Brand";

    export default {
        name: 'MarketAgency',
        components: {Brand, AdvancePricing, AdvancedTab, ServiceFour, Icon, SectionTitle, Separator, Layout},
        data() {
            return {
                tabData: {
                    tabContent: [
                        {
                            id: 1,
                            menu: 'market-research',
                            title: 'Market Research.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-02.jpg`),
                        },
                        {
                            id: 2,
                            menu: 'corporate-report',
                            title: 'Corporate Report.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-03.jpg`),
                        },
                        {
                            id: 3,
                            menu: 'app-development',
                            title: 'App Development.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-04.jpg`),
                        }
                    ]
                },
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
                        image: require(`@/assets/images/brand/brand-07.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-08.png`)
                    },
                ],
            }
        }
    }
</script>