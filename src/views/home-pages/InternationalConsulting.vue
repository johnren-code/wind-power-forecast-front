<template>
    <Layout header-class="header-left-align" nav-alignment="left" :header-transparency="true" :show-top-header="false" buy-button-class="btn-default btn-small">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-1 variation-default height-850 bg_image"
             data-black-overlay="7"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-image-18.jpg`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <h1 class="title display-one" data-aos="fade-up" data-aos-delay="100">
                                International <br/>
                                <span class="theme-gradient">Business</span>
                                &
                                <span class="theme-gradient">Consulting</span>.
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="150">
                                We help our clients succeed by creating brand identities, digital experiences, and print
                                materials.
                            </p>
                            <div class="button-group" data-aos="fade-up" data-aos-delay="200">
                                <router-link class="btn-default btn-medium btn-icon" to="#">
                                    Purchase Now
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                                <router-link class="btn-default btn-medium btn-border btn-icon" to="/contact">
                                    Contact Us
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start Elements Area -->
        <div class="rwt-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Business Strategy"
                            title="Our Business Strategy Here."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Tab :tab-data="tabData" :tab-style="3"/>
            </div>
        </div>
        <!-- End Elements Area -->


        <!-- Start Elements Area -->
        <div class="rwt-split-area no-radius">
            <div class="wrapper">
                <Split :split-data="splitOneData"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <!-- Start Elements Area -->
        <div class="rwt-split-area">
            <div class="wrapper">
                <Split :split-data="splitTwoData" :split-style="4"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <div class="main-content">
            <div class="rwt-elements-area rn-section-gap">
                <div class="container-fluid plr--30">
                    <div class="row">
                        <div class="col-lg-12">
                            <SectionTitle
                                text-align="center"
                                subtitle="Portfolio Box Layout"
                                title="Happily Clients Complete <br /> Our Business Project!"
                                data-aos="fade-up"
                            />
                        </div>
                    </div>
                    <Portfolio :portfolio-data="portfolioData" column="col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay"/>
                </div>
            </div>
        </div>

        <Separator/>

        <!-- Start Pricing Area -->
        <div class="rwt-pricingtable-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Pricing Table"
                            title="Business Pricing Plan."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row mt--40">
                    <div class="col-lg-8 offset-lg-2">
                        <AdvancePricing/>
                    </div>
                </div>
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
                            title="Latest News From The Digital World."
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
    import AdvancePricing from '../../components/elements/pricing/AdvancePricing'
    import BlogPost from '../../components/blog/BlogPost'
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    import Portfolio from '../../components/elements/portfolio/Portfolio'
    import Split from '../../components/elements/split/Split'
    import Tab from '../../components/elements/tab/Tab'

    export default {
        name: 'InternationalConsulting',
        components: {Tab, Split, Portfolio, BlogPost, AdvancePricing, Separator, SectionTitle, Icon, Layout},
        mixins: [BlogPostMixin],
        data() {
            return {
                splitOneData: {
                    image: 'split-01.jpg',
                    title: 'What is DOOB?',
                    description: `Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .`,
                    list: [
                        '- Doug DeMarco, Design Prototyping Manager',
                        '- 108 million paying subscribers',
                        '- Over 1.7 billion hours of music played monthly',
                        '- 4,000+ employees working across 16 offices'
                    ],
                    btn: {
                        text: 'Contact With Us',
                        link: '/contact'
                    }
                },
                splitTwoData: {
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
                portfolioData: [
                    {
                        id: 1,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        title: 'App Development',
                        subtitle: 'Branded client',
                        date: '30 May 2021',
                        client: 'Rainbow Themes',
                        category: 'development',
                        awards: ['2020 Design beautiful apps Finale Awards'],
                        excerpt: 'Design beautiful apps.',
                        body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                        btn: {
                            buttonText: 'View Projects',
                            link: '/'
                        },
                        largeImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        subContent: {
                            title: 'Digital Marketing.',
                            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent2: {
                            title: 'App Development.',
                            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent3: {
                            title: 'Solution.',
                            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        gallery: {
                            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                            imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                        }
                    },
                    {
                        id: 2,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        title: 'Business Development',
                        subtitle: 'Awesome portfolio',
                        date: '01 March 2021',
                        client: 'Rainbow Themes',
                        category: 'design',
                        awards: ['2020 Design beautiful apps Finale Awards'],
                        excerpt: 'Design beautiful apps.',
                        body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                        btn: {
                            buttonText: 'View Projects',
                            link: '/'
                        },
                        largeImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        subContent: {
                            title: 'Digital Marketing.',
                            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent2: {
                            title: 'App Development.',
                            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent3: {
                            title: 'Solution.',
                            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        gallery: {
                            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                            imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                        }
                    },
                    {
                        id: 3,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        title: 'Photoshop Design',
                        subtitle: 'Awesome portfolio',
                        date: '01 March 2021',
                        client: 'Rainbow Themes',
                        category: 'art',
                        awards: ['2020 Design beautiful apps Finale Awards'],
                        excerpt: 'Design beautiful apps.',
                        body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                        btn: {
                            buttonText: 'View Projects',
                            link: '/'
                        },
                        largeImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        subContent: {
                            title: 'Digital Marketing.',
                            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent2: {
                            title: 'App Development.',
                            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent3: {
                            title: 'Solution.',
                            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        gallery: {
                            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                            imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                        }
                    },
                    {
                        id: 4,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        title: 'Native Application',
                        subtitle: 'Awesome portfolio',
                        date: '01 March 2021',
                        client: 'Rainbow Themes',
                        category: 'development',
                        awards: ['2020 Design beautiful apps Finale Awards'],
                        excerpt: 'Design beautiful apps.',
                        body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                        btn: {
                            buttonText: 'View Projects',
                            link: '/'
                        },
                        largeImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        subContent: {
                            title: 'Digital Marketing.',
                            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent2: {
                            title: 'App Development.',
                            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent3: {
                            title: 'Solution.',
                            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        gallery: {
                            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                            imageThree: require(`@/assets/images/portfolio/portfolio-04.jpg`)
                        }
                    },
                    {
                        id: 5,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        title: 'Vue.js Development',
                        subtitle: 'Awesome portfolio',
                        date: '01 March 2021',
                        client: 'Rainbow Themes',
                        category: 'design',
                        awards: ['2020 Design beautiful apps Finale Awards'],
                        excerpt: 'Design beautiful apps.',
                        body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                        btn: {
                            buttonText: 'View Projects',
                            link: '/'
                        },
                        largeImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        subContent: {
                            title: 'Digital Marketing.',
                            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent2: {
                            title: 'App Development.',
                            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent3: {
                            title: 'Solution.',
                            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        gallery: {
                            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                            imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                        }
                    },
                    {
                        id: 6,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        title: 'App Installment',
                        subtitle: 'Awesome portfolio',
                        date: '01 March 2021',
                        client: 'Rainbow Themes',
                        category: 'design',
                        awards: ['2020 Design beautiful apps Finale Awards'],
                        excerpt: 'Design beautiful apps.',
                        body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                        btn: {
                            buttonText: 'View Projects',
                            link: '/'
                        },
                        largeImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        subContent: {
                            title: 'Digital Marketing.',
                            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent2: {
                            title: 'App Development.',
                            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        subContent3: {
                            title: 'Solution.',
                            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                        },
                        gallery: {
                            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                            imageThree: require(`@/assets/images/portfolio/portfolio-06.jpg`)
                        }
                    }
                ],
                tabData: [
                    {
                        id: 'strategy-menu',
                        text: 'Strategy',
                        dataList: [
                            {
                                image: 'service-01.jpg',
                                title: 'Awarded Design',
                                description: 'There are many variations variats  of passages of Lorem Ipsum available.'
                            },
                            {
                                image: 'service-02.jpg',
                                title: 'Design & Creative',
                                description: 'Passages there are many variatin Lorem Ipsum available have suffered.'
                            }
                        ],
                    },
                    {
                        id: 'development-menu',
                        text: 'Development',
                        dataList: [
                            {
                                image: 'service-03.jpg',
                                title: 'App Development',
                                description: 'There are many variations variats  of passages of Lorem Ipsum available.'
                            },
                            {
                                image: 'service-04.jpg',
                                title: 'Business Design',
                                description: 'Passages there are many variatin Lorem Ipsum available have suffered.'
                            }
                        ],
                    },
                    {
                        id: 'reporting-menu',
                        text: 'Reporting',
                        dataList: [
                            {
                                image: 'service-03.jpg',
                                title: 'App Development',
                                description: 'There are many variations variats  of passages of Lorem Ipsum available.'
                            },
                            {
                                image: 'service-04.jpg',
                                title: 'Business Design',
                                description: 'Passages there are many variatin Lorem Ipsum available have suffered.'
                            },
                            {
                                image: 'service-04.jpg',
                                title: 'Business Design',
                                description: 'Passages there are many variatin Lorem Ipsum available have suffered.'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>