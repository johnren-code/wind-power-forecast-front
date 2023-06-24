<template>
    <Layout :topbar-style="2" :show-footer="false">
        <!-- Start Slider area -->
        <div class="slider-area slider-style-7 height-750">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <h4 class="subtitle rn-sub-badge" data-aos="fade-up" data-aos-delay="100">
                                <span class="theme-gradient">Portfolio Box Layout</span>
                            </h4>
                            <h1 class="title" data-aos="fade-up" data-aos-delay="150">
                                Doob Creative Portfolio <br/> For Build Website.
                            </h1>
                            <div class="button-group mt--40 mt_sm--20" data-aos="fade-up" data-aos-delay="200">
                                <a class="btn-default btn-icon round btn-large"
                                   href="#">
                                    Purchase Now
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider area -->

        <Separator/>

        <!-- Start Portfolio Area -->
        <div class="rwt-portfolio-area rn-section-gapTop">
            <div class="container-fluid plr--60 plr_md--15 plr_sm--15">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Portfolio Box Layout"
                            title="You can customize everything!"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Portfolio :portfolio-data="portfolioData" column="col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay"/>
            </div>
        </div>
        <!-- End Portfolio Area -->

        <!-- Start Brand Area -->
        <div class="rwt-brand-area ptb--90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mt--10">
                        <Brand :brand-list="brandList" :brand-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area -->
    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Icon from '../../components/icon/Icon'
    import Separator from '../../components/elements/separator/Separator'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import Portfolio from '../../components/elements/portfolio/Portfolio'
    import Brand from '../../components/elements/brand/Brand'

    export default {
        name: 'CreativePortfolio',
        components: {Brand, Portfolio, SectionTitle, Separator, Icon, Layout},
        data() {
            return {
                portfolioData: [
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
            }
        }
    }
</script>