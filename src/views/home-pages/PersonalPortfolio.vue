<template>
    <Layout :header-transparency="true" :show-top-header="false">
        <!-- Start Slider Area -->
        <div class="slider-perosonal-portfolio height-750 bg_image"
             data-black-overlay="1"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-image-11.jpg`)})`}">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="col-12">
                        <div class="inner text-center">
                            <h1 class="title" data-aos="fade-up" data-aos-delay="100">
                                Hey! I'm <br/> <span class="theme-gradient">Jonnin Arra</span>
                            </h1>
                            <div class="button-group mt--30" data-aos="fade-up" data-aos-delay="150">
                                <router-link class="btn-default round btn-border btn-large" to="/contact">
                                    Contact Me
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start About Area -->
        <AboutFive/>
        <!-- End About Area -->

        <!-- Start Brand Area -->
        <div class="rwt-brand-area pb--90 mt_dec--30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <Brand :brand-list="brandList" :brand-style="4"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area -->

        <!-- Start Portfolio Area -->
        <div class="rwt-portfolio-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Project"
                            title="Check My Recent Works!"
                            description="We provide company and finance service for <br /> startups and company business."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Portfolio
                    column="col-lg-4 col-md-6 col-12 mt--30"
                    :portfolio-data="portfolioData"
                    button-class="btn btn-default btn-large btn-icon round"
                />
            </div>
        </div>
        <!-- End Portfolio Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-about-area rn-section-gap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <SectionTitle
                            subtitle="See my All Skill."
                            title="My Working Skill"
                            description="We provide company and finance service for <br /> startups and company business."
                            data-aos="fade-up"
                        />
                    </div>
                    <div class="col-lg-6">
                        <div class="rbt-progress-style-1">
                            <Progressbar :progress-data="progressData" :progress-style="2"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Testimonial Area -->
        <div class="rwt-testimonial-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--10">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Awesome Clients Feedback."
                            description="We provide company and finance service for <br /> startups and company business."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12 mt--30"
                         v-for="(testimonial, index) in testimonialData"
                         :key="index">
                        <Testimonial :testimonial="testimonial"/>
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
                            title="Read from the Blog."
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
        <!-- End Blog Area -->
    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Separator from '../../components/elements/separator/Separator'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import AboutFive from '../../components/elements/about/AboutFive'
    import Brand from '../../components/elements/brand/Brand'
    import Portfolio from '../../components/elements/portfolio/Portfolio'
    import Progressbar from '../../components/elements/progressbar/Progressbar'
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    import BlogPost from '../../components/blog/BlogPost'
    import Testimonial from '../../components/elements/testimonial/Testimonial'

    export default {
        name: 'PersonalPortfolio',
        components: {Testimonial, BlogPost, Progressbar, Portfolio, Brand, AboutFive, SectionTitle, Separator, Layout},
        mixins: [BlogPostMixin],
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
                ],
                progressData: [
                    {
                        id: 1,
                        title: 'Web Development',
                        percentage: 90,
                        progressClass: 'bar-color-1',
                    },
                    {
                        id: 2,
                        title: 'Photoshop Design',
                        percentage: 75,
                        progressClass: 'bar-color-2',
                    },
                    {
                        id: 3,
                        title: 'App Development',
                        percentage: 70,
                        progressClass: 'bar-color-3',
                    },
                    {
                        id: 4,
                        title: "Application Development",
                        percentage: 95,
                        progressClass: 'bar-color-4',
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
                portfolioData:  [
                    {
                        id: 1,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        title: 'App Development',
                        subtitle: 'Branded client',
                        date: '30 May 2022',
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
                        date: '01 March 2022',
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
                        date: '01 March 2022',
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
                        date: '01 March 2022',
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
                        date: '01 March 2022',
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
                        date: '01 March 2022',
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
                ]
            }
        }
    }
</script>