<template>
    <Layout>
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-1 bg-transparent height-750">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                        <div class="inner text-left">
                            <span class="subtitle" data-aos="fade-up" data-aos-delay="100">
                                DIGITAL CONSULTING AGENCY
                            </span>
                            <h1 class="title theme-gradient display-one" data-aos="fade-up" data-aos-delay="150">
                                Doob Company.
                            </h1>
                            <ul class="list-icon" data-aos="fade-up" data-aos-delay="200">
                                <li>
                                    <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>
                                    Track your teams progress with mobile app.
                                </li>
                                <li>
                                    <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </li>
                                <li>
                                    <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>
                                    Your teams progress with mobile app.
                                </li>
                            </ul>
                            <div class="button-group mt--40" data-aos="fade-up" data-aos-delay="250">
                                <a class="btn-default btn-medium round btn-icon"
                                   href="#">
                                    Purchase Now
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </a>
                                <router-link class="btn-default btn-medium btn-border round btn-icon" to="/contact">
                                    Contact Us
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-xl-6 order-1 order-lg-2">
                        <div class="frame-image" data-aos="fade-up" data-aos-delay="100">
                            <img src="../../assets/images/about/about-3.png" alt="Banner Images"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start Service Area -->
        <div class="service-area rn-section-gapBottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="content">
                            <h3 class="title">We are creative digital agency working for our company brands.</h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="mb--10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium
                            dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque
                            expedita officiis rem ipsa! Ratione, rem reiciendis?
                        </p>
                        <div class="readmore-btn">
                            <router-link class="btn-read-more" to="#">
                                <span>View More</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Service Area -->

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
                <ServiceOne
                    service-style="service__style--1 icon-circle-style"
                    text-align="center"
                    icon-size="39"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <!-- Start Split Area -->
        <Split :split-data="splitData"/>
        <!-- End Split Area -->

        <!-- Start Portfolio Area -->
        <div class="rwt-portfolio-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Project"
                            title="Why People Choose Us!"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Portfolio :portfolio-data="portfolioData"/>
            </div>
        </div>
        <!-- End Portfolio Area -->

        <Separator/>

        <!-- Start Team Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="wrapper plr--65">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts"
                            title="Companies Team"
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                         v-for="(teamMember, index) in teamData"
                         :key="index">
                        <Team :team-member="teamMember" :team-style="4"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Team Area -->

        <!-- Start Brand Area -->
        <div class="rwt-brand-area pb--80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center" data-aos="fade-up">
                            <h3 class="title">Our Awesome Customer Relation Build a <br/> Long Term Relationship.</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt--10">
                        <Brand :brand-list="brandList2" :brand-style="2"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area -->
    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Separator from '../../components/elements/separator/Separator'
    import Icon from '../../components/icon/Icon'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import ServiceOne from '../../components/elements/service/ServiceOne'
    import Split from '../../components/elements/split/Split'
    import Portfolio from '../../components/elements/portfolio/Portfolio'
    import Team from '../../components/elements/team/Team'
    import Brand from '../../components/elements/brand/Brand'

    export default {
        name: 'Company',
        components: {Brand, Team, Portfolio, Split, ServiceOne, SectionTitle, Icon, Separator, Layout},
        data() {
            return {
                splitData: {
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
                teamData: [
                    {
                        image: 'team-dark-01',
                        name: 'Sr Janen Sara',
                        designation: 'Sr Product Designer',
                        location: 'CO Miego, AD, USA',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-02',
                        name: 'Corporate Jane',
                        designation: 'Manager',
                        location: 'Bangladesh',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-03',
                        name: 'Jara Saraif',
                        designation: 'Software Developer',
                        location: 'Poland',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-04',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                        location: 'Poland',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                ],
                brandList2: [
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
                portfolioData:  [
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
                        body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
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
                        body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
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