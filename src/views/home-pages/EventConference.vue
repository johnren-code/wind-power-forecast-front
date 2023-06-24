<template>
    <Layout buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-6 shape-left inheader-not-transparent height-750">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                        <div class="inner text-left">
                            <h1 class="title color-white" data-aos="fade-up" data-aos-delay="100">
                                Doob event conference.
                            </h1>
                            <p class="description color-white" data-aos="fade-up" data-aos-delay="150">
                                We help our clients succeed by creating brand identities, digital experiences, and print
                                materials.
                            </p>
                            <div class="button-group mt--30 mt_sm--20" data-aos="fade-up" data-aos-delay="200">
                                <a class="btn-default btn-medium btn-icon btn-border"
                                   href="#">
                                    Purchase Now
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2">
                        <Video :video-data="videoData" column="col-12"/>
                    </div>
                    <div class="shape-image w-auto">
                        <img src="../../assets/images/banner/white-shape.svg" alt="Banner Images"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start Service Area -->
        <div class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Main Goal Our Event Conference."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <ServiceThree
                    service-style="service__style--2"
                    text-align="center"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <Separator/>

        <AboutFour :image="require(`@/assets/images/about/about-4.png`)"/>

        <!-- Start Split Area -->
        <div class="rwt-split-area">
            <div class="wrapper">
                <Split :split-data="splitData" :split-style="3"/>
            </div>
        </div>
        <!-- End Split Area -->

        <!-- Start Brand Area -->
        <div class="rwt-brand-area ptb--90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Brand :brand-list="brandList" :brand-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area -->

        <Separator/>

        <!-- Start Team Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--15">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts."
                            title="Our Experts Team."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-3 col-md-6 col-12 mt--30"
                         v-for="(teamMember, index) in teamData"
                         :key="index">
                        <Team :team-member="teamMember" :team-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Team Area -->

        <Separator/>

        <!-- Start Pricing Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row mb--40 mb_sm--0">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Pricing"
                            title="Our Pricing Plan."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingData"/>
            </div>
        </div>
        <!-- End Pricing Area -->

        <Separator/>

        <div class="blog-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Latest News"
                            title="Our Event News."
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
    import Icon from '../../components/icon/Icon'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import Separator from '../../components/elements/separator/Separator'
    import ServiceThree from '../../components/elements/service/ServiceThree'
    import AboutFour from '../../components/elements/about/AboutFour'
    import Split from '../../components/elements/split/Split'
    import Brand from '../../components/elements/brand/Brand'
    import Team from '../../components/elements/team/Team'
    import Pricing from '../../components/elements/pricing/Pricing'
    import BlogPost from '../../components/blog/BlogPost'
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    import Video from '../../components/elements/video/Video'

    export default {
        name: 'EventConference',
        components: {
            Video,
            BlogPost,
            Pricing,
            Team,
            Brand,
            Split,
            AboutFour,
            ServiceThree,
            Separator,
            SectionTitle,
            Icon,
            Layout
        },
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
                teamData: [
                    {
                        image: 'team-04',
                        name: 'Sr Janen Sara',
                        designation: 'Sr Product Designer',
                    },
                    {
                        image: 'team-05',
                        name: 'Afsana Nila',
                        designation: 'App Developer',
                    },
                    {
                        image: 'team-06',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                    },
                    {
                        image: 'team-07',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
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
                videoData: [
                    {
                        thumb: require(`@/assets/images/about/about-6.png`),
                        src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
                    }
                ]
            }
        }
    }
</script>