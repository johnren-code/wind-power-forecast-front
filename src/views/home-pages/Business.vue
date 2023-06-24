<template>
    <Layout header-class="header-left-align" nav-alignment="left" :footer-style="2" buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-3 height-850">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                        <div class="inner text-left">
                            <h1 class="title theme-gradient" data-aos="fade-up" data-aos-delay="100">Trending <br/>Business
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="130">
                                We help our clients succeed by creating brand identities, digital experiences, and print
                                materials.
                            </p>
                            <div class="button-group mt--30 mt_sm--20" data-aos="fade-up" data-aos-delay="160">
                                <a class="btn-default btn-medium btn-icon"
                                   href="#">
                                    Purchase Now
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="order-1 order-lg-2 col-lg-5" data-aos="fade-up" data-aos-delay="100">
                        <div class="thumbnail">
                            <img src="../../assets/images/about/about-2.png" alt="Banner Images"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Companies About"
                            title="What About Our Companies"
                            description="We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Tab :tab-data="tabData"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Timeline Area -->
        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Timeline"
                            title="Working Process"
                            description="We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 mt--50">
                        <Timeline :timeline-data="timelineData" :timeline-style="4"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Timeline Area -->

        <Separator/>

        <!-- Start About Area -->
        <div class="rwt-about-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-5">
                        <div class="thumbnail" data-aos="fade-up" data-aos-delay="250">
                            <img class="w-100" src="../../assets/images/about/about-1.png" alt="About Images">
                        </div>
                    </div>
                    <div class="col-lg-7 mt_md--40 mt_sm--40">
                        <div class="content">
                            <SectionTitle
                                subtitle="WORKFLOW INTEGRATION"
                                title="Companies Platform."
                                data-aos="fade-up"
                            />
                            <accordion
                                id="accordionExampleOne"
                                data-aos="fade-up"
                                data-aos-delay="60"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End About Area -->

        <Separator/>

        <!-- Start Pricing Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row mb--35">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Pricing Plan"
                            title="Business Pricing Plan"
                            description="We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingData" :pricing-style="3"/>
            </div>
        </div>
        <!-- End Pricing Area -->

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
                            description="We provide company and finance service for <br /> startups and company business"
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
    import Layout from '../../components/common/Layout'
    import Icon from '../../components/icon/Icon'
    import Separator from '../../components/elements/separator/Separator'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import Tab from '../../components/elements/tab/Tab'
    import Timeline from '../../components/elements/timeline/Timeline'
    import Accordion from '../../components/elements/accordion/Accordion'
    import Pricing from '../../components/elements/pricing/Pricing'
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    import BlogPost from '../../components/blog/BlogPost'

    export default {
        name: 'Business',
        components: {BlogPost, Pricing, Accordion, Timeline, Tab, SectionTitle, Separator, Icon, Layout},
        mixins: [BlogPostMixin],
        data() {
            return {
                tabData: {
                    tabImage: 'tabs-01.jpg',
                    tabContent: [
                        {
                            id: 1,
                            menu: 'strategy',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        },
                        {
                            id: 2,
                            menu: 'reporting',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        },
                        {
                            id: 3,
                            menu: 'development',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        }
                    ]
                },
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
                    }
                ],
            }
        }
    }
</script>