<template>
    <Layout :header-transparency="true" :topbar-style="2" :footer-style="3" buy-button-class="btn-default btn-small">
        <!-- Start Slider area  -->
        <div class="slider-area slider-style-2 height-950 bg_image"
             data-black-overlay="2"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-image-5.jpg`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-left">
                            <h4 class="subtitle" data-aos="fade-up" data-aos-delay="100">
                                <span class="theme-gradient">DIGITAL CONSULTING AGENCY</span>
                            </h4>
                            <h1 class="title display-one" data-aos="fade-up" data-aos-delay="130">Join Corporate Meeting.</h1>
                            <ul class="list-icon" data-aos="fade-up" data-aos-delay="160">
                                <li>
                                    <Icon name="check" size="20" icon-class="icon"/>
                                    Track your teams progress with mobile app.
                                </li>
                                <li>
                                    <Icon name="check" size="20" icon-class="icon"/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </li>
                                <li>
                                    <Icon name="check" size="20" icon-class="icon"/>
                                    Your teams progress with mobile app.
                                </li>
                            </ul>
                            <div class="button-group mt--40 mt_sm--20" data-aos="fade-up" data-aos-delay="190">
                                <a class="btn-default btn-icon"
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
        <!-- End Slider area  -->

        <!-- Start Service Area  -->
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
                <ServiceTwo
                    card-style="card-style-1"
                    text-align="left"
                />
            </div>
        </div>
        <!-- End Service Area  -->

        <Separator/>

        <!-- Start About Area  -->
        <about-two/>
        <!-- End About Area  -->

        <Separator/>

        <!-- Start Elements Area  -->
        <div class="rwt-counterup-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Clients Feedback"
                            title="Global Clients Around the World"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Counter
                    :counter-style="2"
                    text-align="center"
                    :counter-data="counterData"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                />
            </div>
        </div>
        <!-- End Elements Area  -->

        <Separator/>

        <!-- Start Elements Area  -->
        <div class="rwt-team-area rn-section-gap">
            <div class="wrapper plr--65 plr_md--15 plr_sm--15">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts"
                            title="Our Experts Team"
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
        <!-- End Elements Area  -->

        <Separator/>

        <!-- Start Elements Area  -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row mb--35">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Pricing"
                            title="Our Pricing Plan"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingData"/>
            </div>
        </div>
        <!-- End Elements Area  -->

        <!-- Start Call To Action Area  -->
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
        <!-- End Call To Action Area  -->
    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Icon from '../../components/icon/Icon'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import ServiceThree from '../../components/elements/service/ServiceThree'
    import Separator from '../../components/elements/separator/Separator'
    import Counter from '../../components/elements/counterUp/Counter'
    import Team from '../../components/elements/team/Team'
    import Pricing from '../../components/elements/pricing/Pricing'
    import CallToAction from '../../components/elements/callToAction/CallToAction'
    import AboutTwo from "../../components/elements/about/AboutTwo";
    import ServiceTwo from "../../components/elements/service/ServiceTwo";

    export default {
        name: 'Corporate',
        components: {
            ServiceTwo,
            AboutTwo, CallToAction, Pricing, Team, Counter, Separator, ServiceThree, SectionTitle, Icon, Layout},
        data() {
            return {
                counterData: [
                    {
                        number: 199,
                        title: 'Happy Clients',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                    },
                    {
                        number: 575,
                        title: 'Employees',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                    },
                    {
                        number: 69,
                        title: 'Useful Programs',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
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
            }
        }
    }
</script>