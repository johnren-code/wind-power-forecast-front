<template>
    <Layout buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-8 height-650">
            <div class="single-slide">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="inner text-center">
                                <span class="subtitle theme-gradient" data-aos="fade-up" data-aos-delay="100">Hello! This is WebAgency</span>
                                <h1 class="title" data-aos="fade-up" data-aos-delay="150">
                                    Our Web <br /> Agecny Plan.
                                </h1>
                                <p class="description" data-aos="fade-up" data-aos-delay="200">
                                    We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.
                                </p>
                                <div class="button-group mt--30" data-aos="fade-up" data-aos-delay="250">
                                    <router-link class="btn-default btn-large round"
                                       to="#">
                                        Explore Now
                                    </router-link>
                                    <router-link class="btn-default btn-border btn-large round" to="/contact">
                                        Contact Us
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start Counterup Area -->
        <div class="our-counterup-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="thumbnail" data-aos="fade-up">
                            <img class="radius w-100" src="../../assets/images/bg/bg-image-21.jpg" alt="Images"/>
                        </div>
                        <div class="rwt-counterup-area ptb--60">
                            <div class="col-lg-12">
                                <Counter
                                    :counter-style="5"
                                    text-align="center"
                                    :counter-data="counterData"
                                    column="col-lg-3 col-md-6 col-sm-6 col-12"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Counterup Area -->

        <Separator/>

        <!-- Start Service Area -->
        <div class="service-area rn-section-gapTop">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="content" data-aos="fade-up">
                            <h3 class="title">We are creative digital agency working for our company brands.</h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="mb--10" data-aos="fade-up">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis?
                        </p>
                        <div class="readmore-btn" data-aos="fade-up">
                            <router-link class="btn-read-more" to="#">
                                <span>View More</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Service Area -->

        <!-- Start Service Area -->
        <div class="rn-service-area rn-section-gapTop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <ServiceOne
                    service-style="service__style--1 icon-circle-style"
                    text-align="center"
                    icon-size="39"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <AboutFour :image="require(`@/assets/images/about/contact-image.jpg`)"/>

        <!-- Start Pricing Area -->
        <div class="rwt-pricingtable-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Pricing Plan"
                            title="Web Pricing Plan."
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
        <!-- End Pricing Area -->

        <!-- Start Brand Area -->
        <div class="rwt-brand-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Awesome Client"
                            title="Our Awesome Client."
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
        <!-- End Brand Area -->
    </Layout>
</template>

<script>
    import Layout from "../../components/common/Layout";
    import Separator from "../../components/elements/separator/Separator";
    import SectionTitle from "../../components/elements/sectionTitle/SectionTitle";
    import AboutFour from "../../components/elements/about/AboutFour";
    import AdvancePricing from "../../components/elements/pricing/AdvancePricing";
    import Brand from "../../components/elements/brand/Brand";
    import Counter from "../../components/elements/counterUp/Counter";
    import ServiceOne from "../../components/elements/service/ServiceOne";
    export default {
        name: 'WebAgency',
        components: {ServiceOne, Counter, Brand, AdvancePricing, AboutFour, SectionTitle, Separator, Layout},
        data() {
            return {
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
                counterData: [
                    {
                        number: 199,
                        title: 'Happy Clients',
                    },
                    {
                        number: 575,
                        title: 'Employees',
                    },
                    {
                        number: 69,
                        title: 'Useful Programs',
                    },
                    {
                        number: 500,
                        title: 'Useful Programs',
                    }
                ]
            }
        }
    }
</script>