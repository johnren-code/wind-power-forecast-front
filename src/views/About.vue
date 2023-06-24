<template>
    <Layout header-class="header-transparent" :show-newsletter="true" :show-cta="false">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-1 height-850 bg_image"
             data-black-overlay="7"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-image-12.jpg`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner pt--80 text-center">
                            <div>
                                <h3 class="rn-sub-badge" data-aos="fade-up" data-aos-delay="100">
                                    <span class="theme-gradient">Our Company's About Details.</span>
                                </h3>
                            </div>
                            <h1 class="title display-one" data-aos="fade-up" data-aos-delay="150">
                                We are a Corporate <br/> Business Agency.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start Service Area -->
        <div class="service-area rn-section-gapTop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="content" data-aos="fade-up">
                            <h3 class="title">We are creative digital agency working for our company brands.</h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="mb--10" data-aos="fade-up">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam
                            accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque
                            itaque expedita officiis rem ipsa! Ratione, rem reiciendis?
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Service Area -->

        <!-- Start Brand Area -->
        <div class="rwt-brand-area pb--60 pt--30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mt--10">
                        <Brand :brand-list="brandList" :brand-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area -->

        <Separator/>

        <!-- Start Service Area -->
        <div class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <ServiceOne
                    service-style="service__style--1 bg-color-blackest radius mt--25"
                    icon-size="62"
                    text-align="center"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <div class="rwt-timeline-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Timeline :timeline-data="timelineData" :timeline-style="3"/>
                    </div>
                </div>
            </div>
        </div>

        <Separator/>

        <AboutFour :image="require(`@/assets/images/about/contact-image.jpg`)"/>

        <!-- Start Elements Area -->
        <div class="rwt-counterup-area pb--100">
            <div class="container mt_dec--30">
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
        <div class="rwt-team-area rn-section-gap">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Corporate Team."
                            title="Corporate Team Member."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                         v-for="(teamMember, index) in teamData"
                         :key="index">
                        <Team :team-member="teamMember" :team-style="4"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Separator from '../components/elements/separator/Separator'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import AboutFour from '../components/elements/about/AboutFour'
    import ServiceOne from '../components/elements/service/ServiceOne'
    import Timeline from '../components/elements/timeline/Timeline'
    import Counter from '../components/elements/counterUp/Counter'
    import Brand from '../components/elements/brand/Brand'
    import Team from '../components/elements/team/Team'

    export default {
        name: 'About',
        components: {Team, Brand, Counter, Timeline, ServiceOne, AboutFour, SectionTitle, Separator, Layout},
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
                    },
                    {
                        image: require(`@/assets/images/brand/brand-01.png`)
                    },

                ],
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