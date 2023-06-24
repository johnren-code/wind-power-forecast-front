<template>
    <Layout header-class="header-left-align" nav-alignment="left" buy-button-class="btn-default btn-small">
        <!-- Start Slider area -->
        <div class="slider-area slider-style-5 bg-overlay-solid height-850 bg_image"
             data-black-overlay="3"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-image-13.jpg`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-left">
                            <h4 class="subtitle" data-aos="fade-up" data-aos-delay="100">MEET CONSULTING</h4>
                            <h1 class="title display-one" data-aos="fade-up" data-aos-delay="150">Financial Analysis <br />Developing Meeting.</h1>
                            <div class="button-group mt--40 mt_sm--20" data-aos="fade-up" data-aos-delay="200">
                                <a class="btn-default"
                                   href="#">
                                    BUY DOOB NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider area -->

        <!-- Start CTA area -->
        <CallToAction
            :style-type="6"
            title="Ready to start creating a standard website?"
            btn-text="Purchase Doob"
        />
        <!-- End CTA area -->

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
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <ServiceOne
                    service-style="service__style--1 bg-color-blackest radius mt--25 rbt-border"
                    icon-size="62"
                    text-align="left"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <Separator/>

        <!-- Start About Area -->
        <about-two/>
        <!-- end About Area -->

        <!-- Start split Area  -->
        <div class="rwt-split-area">
            <div class="wrapper">
                <Split :split-data="splitData" :split-style="3"/>
            </div>
        </div>
        <!-- End split Area  -->

        <!-- Start Testimonial Area -->
        <div class="rwt-elements-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--10">
                        <SectionTitle
                            textAlign="center"
                            subtitle="Client Feedback"
                            title="What People Say About Us"
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
        <!-- End Testimonial Area -->

        <Separator/>

        <!-- Start Blog Area -->
        <div class="blog-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Latest News"
                            title="Our Latest News"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mt--30"
                         data-aos="slide-up"
                         data-aos-duration="800"
                         :data-aos-delay="100 + index"
                         v-for="(blog, index) in posts"
                         :key="index"
                         v-if="index < 3">
                        <BlogPost :blog="blog"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Blog Area -->
    </Layout>
</template>

<script>
    import Layout from "../../components/common/Layout";
    import Separator from "../../components/elements/separator/Separator";
    import SectionTitle from "../../components/elements/sectionTitle/SectionTitle";
    import BlogPostMixin from "../../mixins/BlogPostMixin";
    import BlogPost from "../../components/blog/BlogPost";
    import CallToAction from "../../components/elements/callToAction/CallToAction";
    import ServiceOne from "../../components/elements/service/ServiceOne";
    import AboutTwo from "../../components/elements/about/AboutTwo";
    import Split from "../../components/elements/split/Split";
    import Testimonial from "../../components/elements/testimonial/Testimonial";
    export default {
        name: 'Finance',
        components: {Testimonial, Split, AboutTwo, ServiceOne, CallToAction, BlogPost, SectionTitle, Separator, Layout},
        mixins: [BlogPostMixin],
        data() {
            return {
                splitData: {
                    image: 'split-03.jpg',
                    title: 'Continue Your Business With Us.',
                    description: `Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .`,
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
                },
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