<template>
    <Layout header-class="header-left-align header-transparent" nav-alignment="left" :topbar-style="2" buy-button-class="btn-default btn-small">
        <!-- Start Slider area -->
        <div class="slider-area slider-style-2 variation-2 height-850 bg_image"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-image-10.jpg`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-xl-6">
                        <div class="inner text-start">
                            <h1 class="title display-one" data-aos="fade-up" data-aos-delay="100">
                                We provide <br/>reliable business <br/> consulting help.
                            </h1>
                            <h6 class="tag-title" data-aos="fade-up" data-aos-delay="150">
                                SOLUTION FOR YOUR BUSINESS
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider area -->

        <AboutFour :image="require(`@/assets/images/about/contact-image.jpg`)"/>

        <!-- Start Elements Area -->
        <div class="rwt-counterup-area rn-section-gapBottom mt_dec--30">
            <div class="container">
                <Counter
                    :counter-style="5"
                    text-align="center"
                    :counter-data="counterData"
                    column="col-lg-3 col-md-6 col-sm-6 col-12"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-advance-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Consulting Report"
                            title="Report Our Consulting Business."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <AdvancedTab :tab-data="tabData" :tab-style="2"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="wrapper plr--65 plr_sm--15">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts."
                            title="Our Experts"
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
        <!-- End Elements Area -->

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gapBottom">
            <div class="wrapper">
                <CallToAction
                    :style-type="5"
                    title="Ready to start creating a standard website?"
                    subtitle="Finest choice for your home & office"
                    btn-text="Purchase Doob"
                />
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Separator from '../../components/elements/separator/Separator'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import AboutFour from '../../components/elements/about/AboutFour'
    import Counter from '../../components/elements/counterUp/Counter'
    import AdvancedTab from '../../components/elements/tab/AdvancedTab'
    import Team from '../../components/elements/team/Team'
    import CallToAction from '../../components/elements/callToAction/CallToAction'

    export default {
        name: 'Consulting',
        components: {CallToAction, Team, AdvancedTab, Counter, AboutFour, SectionTitle, Separator, Layout},
        data() {
            return {
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
                ],
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
                ]
            }
        }
    }
</script>