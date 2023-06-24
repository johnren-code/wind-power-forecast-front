<template>
    <Layout header-class="header-left-align header-transparent" nav-alignment="left" buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow">
            <VueSlickCarousel v-bind="sliderSetting">
                <div v-for="(slider, index) in sliderData" :key="index" class="single-slide">
                    <div class="height-950 bg-overlay bg_image"
                         :style="{'background-image': `url(${require(`@/assets/images/bg/${slider.image}.jpg`)})`}">
                        <div class="container">
                            <div class="row row--30 align-items-center">
                                <div class="col-12">
                                    <div class="inner text-center">
                                        <h1 class="title" v-html="slider.title"/>
                                        <p class="description" v-html="slider.description"/>
                                        <div class="button-group mt--30">
                                            <a class="btn-default"
                                               href="#">
                                                PURCHASE NOW
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>
        <!-- End Slider Area -->

        <!-- Start Service Area  -->
        <div class="rn-service-area rn-section-gapBottom pt--100">
            <div class="container">
                <ServiceOne
                    service-style="service__style--1 icon-circle-style"
                    text-align="center"
                    icon-size="39"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <Separator/>

        <AboutFour :image="require(`@/assets/images/about/contact-image.jpg`)"/>

        <!-- Start Elements Area -->
        <div class="rwt-gallery-area rn-section-gapBottom">
            <div class="container">
                <Gallery :gallery-data="galleryData" column="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-testimonial-area rn-section-gap">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            textAlign="center"
                            subtitle="Client Feedback"
                            title="Our Clients Feedback."
                            description="We provide company and finance service for <br /> startups and company business."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Testimonial :testimonial="testimonialData" :testimonial-style="5"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <div class="blog-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Latest News"
                            title="Blogs On Travellings."
                            description="We provide company and finance service for <br /> startups and company business."
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
    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Separator from '../../components/elements/separator/Separator'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import ServiceOne from '../../components/elements/service/ServiceOne'
    import AboutFour from '../../components/elements/about/AboutFour'
    import VueSlickCarousel from 'vue-slick-carousel'
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    import BlogPost from '../../components/blog/BlogPost'
    import Gallery from '../../components/elements/gallery/Gallery'
    import Testimonial from '../../components/elements/testimonial/Testimonial'

    export default {
        name: "TravelAgency",
        components: {
            Testimonial,
            Gallery, BlogPost, AboutFour, ServiceOne, SectionTitle, Separator, Layout, VueSlickCarousel},
        mixins: [BlogPostMixin],
        data() {
            return {
                sliderSetting: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 993,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 580,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                },
                sliderData: [
                    {
                        image: 'bg-image-7',
                        title: 'Summer Season.',
                        description: `We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.`
                    },
                    {
                        image: 'bg-image-8',
                        title: 'Winter Season.',
                        description: `We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.`
                    },
                    {
                        image: 'bg-image-9',
                        title: 'Startup Agency.',
                        description: `We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.`
                    },
                ],
                galleryData: [
                    {
                        id: 1,
                        thumb: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        type: 'image'
                    },
                    {
                        id: 2,
                        thumb: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
                        type: 'video'
                    },
                    {
                        id: 3,
                        thumb: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        type: 'image'
                    },
                    {
                        id: 4,
                        thumb: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        type: 'image'
                    },
                    {
                        id: 5,
                        thumb: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        type: 'image'
                    },
                    {
                        id: 6,
                        thumb: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        type: 'image'
                    }
                ],
                testimonialData: [
                    {
                        form: 'Poland',
                        description: 'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
                        name: 'John Due',
                        subtitle: 'App Developer',
                        image: 'testimonial-dark-01'
                    },
                    {
                        form: 'Germany',
                        description: 'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
                        name: 'John Due',
                        subtitle: 'App Developer',
                        image: 'testimonial-dark-02'
                    },
                    {
                        form: 'USA',
                        description: 'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
                        name: 'Janen',
                        subtitle: 'App Developer',
                        image: 'testimonial-dark-03'
                    },
                ]
            }
        }
    }
</script>