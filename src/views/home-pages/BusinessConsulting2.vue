<template>
    <Layout header-class="header-left-align" nav-alignment="left">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-1 bg-transparent height-850">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <span class="subtitle" data-aos="fade-up" data-aos-delay="100">DIGITAL CONSULTING AGENCY</span>
                            <h1 class="title theme-gradient display-two" data-aos="fade-up" data-aos-delay="150">
                                Unique Business <br />
                                <vue-typed-js class="justify-content-center"
                                              :strings="['Finance.', 'Consulting.', 'Agency.']"
                                              :loop="true"
                                              :type-speed="80"
                                              :start-delay="1000"
                                              :back-speed="50">
                                    <b class="is-visible theme-gradient typing">Finance.</b>
                                </vue-typed-js>
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="200">
                                We help our clients succeed by creating brand identities, digital
                                experiences, and print materials.
                            </p>
                            <div class="button-group" data-aos="fade-up" data-aos-delay="250">
                                <router-link class="btn-default btn-medium round btn-icon"
                                             to="#">
                                    Purchase Now
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                                <router-link class="btn-default btn-medium btn-border round btn-icon"
                                             to="/contact">
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

        <Separator/>

        <!-- Start About Area -->
        <div class="rwt-about-area rn-section-gap">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="col-lg-5">
                        <div class="thumbnail" data-aos="fade-up" data-aos-delay="250">
                            <img class="w-100" src="../../assets/images/about/about-1.png" alt="About Images">
                        </div>
                    </div>
                    <div class="col-lg-7 mt_md--40 mt_sm--40">
                        <div class="content">
                            <div class="section-title">
                                <h2 class="title theme-gradient" data-aos="fade-up" data-aos-delay="280">
                                    Unique Business <br>
                                    <vue-typed-js :strings="['Finance.', 'Consulting.', 'Agency.']"
                                                  :loop="true"
                                                  :type-speed="80"
                                                  :start-delay="1000"
                                                  :back-speed="50">
                                        <b class="is-visible theme-gradient typing">Finance.</b>
                                    </vue-typed-js>
                                </h2>
                                <p data-aos="fade-up" data-aos-delay="310">
                                    Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove
                                    right at the coast of the Semantics, a large language ocean.
                                </p>
                                <p data-aos="fade-up" data-aos-delay="340">
                                    A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia. It is a paradisematic country, in which roasted parts of sentences. A
                                    small river named Duden flows by their place and supplies it with the necessary
                                    regelialia. It is a paradisematic country, in which roasted parts of sentences
                                </p>
                                <div class="read-more-btn mt--40" data-aos="fade-up" data-aos-delay="370">
                                    <router-link class="btn-default" to="/about">
                                        <span>More About Us</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End About Area -->

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
                <ServiceFive
                    service-style="gallery-style"
                    text-align="left"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <!-- Start Call To Action Area -->
        <div class="rwt-callto-action-area">
            <div class="wrapper">
                <CallToAction
                    :style-type="5"
                    title="Ready to start creating a standard website?"
                    subtitle="Finest choice for your home & office"
                    btn-text="Purchase Doob"
                />
            </div>
        </div>
        <!-- End Call To Action Area -->

        <!-- Start Team Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts."
                            title="Our Company Experts."
                            description="We provide company and finance service for <br /> startups and company business."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12"
                         v-for="(teamMember, index) in teamData"
                         :key="index">
                        <Team :team-member="teamMember" :team-style="2"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Team Area -->

        <Separator/>

        <!-- Start Mission Area -->
        <div class="rn-company-mission-are rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-6">
                        <div class="mission-title">
                            <h2 class="title theme-gradient" data-aos="fade-up">
                                Unique Mission <br>
                                <vue-typed-js :strings="['Finance.', 'Consulting.', 'Agency.']"
                                              :loop="true"
                                              :type-speed="80"
                                              :start-delay="1000"
                                              :back-speed="50">
                                    <b class="is-visible typing">Finance.</b>
                                </vue-typed-js>
                            </h2>
                            <p data-aos="fade-up">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quaerat dolore laboriosam
                                ea minus dignissimos, laudantium odit officia soluta, et deleniti fugit deserunt saepe,
                                velit sapiente obcaecati? Vitae, iusto delectus?
                            </p>
                            <p data-aos="fade-up">
                                Consectetur adipisicing elit. Quia quaerat dolore laboriosam ea minus dignissimos,
                                laudantium odit officia soluta, et deleniti fugit deserunt saepe, velit sapiente
                                obcaecati? Vitae, iusto delectus?
                            </p>
                            <div class="read-more-btn mt--50" data-aos="fade-up">
                                <router-link class="btn-default btn-icon"
                                             to="#">
                                    Learn More
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt_md--30 mt_sm--30">
                        <Accordion
                            id="accordionExampleOne"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Mission Area -->

        <Separator/>

        <!-- Start Testimonial Area -->
        <div class="rwt-testimonial-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Our Awesome Client."
                            description="We provide company and finance service for <br /> startups and company business."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Testimonial :testimonial="testimonialData5" :testimonial-style="5" data-aos="fade-up"/>
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
                            title="Our Latest News."
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
    import Icon from '../../components/icon/Icon'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import ServiceFive from '../../components/elements/service/ServiceFive'
    import Team from '../../components/elements/team/Team'
    import BlogPost from '../../components/blog/BlogPost'
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    import CallToAction from '../../components/elements/callToAction/CallToAction'
    import Testimonial from '../../components/elements/testimonial/Testimonial'
    import Accordion from '../../components/elements/accordion/Accordion'

    export default {
        name: 'BusinessConsulting2',
        components: {
            Accordion,
            Testimonial,
            CallToAction,
            BlogPost,
            Team,
            ServiceFive,
            SectionTitle,
            Icon,
            Separator,
            Layout
        },
        mixins: [BlogPostMixin],
        data() {
            return {
                teamData: [
                    {
                        image: 'team-01',
                        name: 'Sr Janen Sara',
                        designation: 'Sr Product Designer',
                        location: 'CO Miego, AD, USA',
                        description: 'Yes, I am a product designer. I have a passion for product design.',
                        socialNetwork: [
                            {
                                icon: 'facebook',
                                url: '#'
                            },
                            {
                                icon: 'twitter',
                                url: '#'
                            },
                            {
                                icon: 'instagram',
                                url: '#'
                            },
                        ]
                    },
                    {
                        image: 'team-02',
                        name: 'Afsana Nila',
                        designation: 'App Developer',
                        location: 'Bangladesh',
                        description: 'Yes, I am a product designer. I have a passion for product design.',
                        socialNetwork: [
                            {
                                icon: 'facebook',
                                url: '#'
                            },
                            {
                                icon: 'twitter',
                                url: '#'
                            },
                            {
                                icon: 'instagram',
                                url: '#'
                            },
                        ]
                    },
                    {
                        image: 'team-03',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                        location: 'Poland',
                        description: 'Yes, I am a product designer. I have a passion for product design.',
                        socialNetwork: [
                            {
                                icon: 'facebook',
                                url: '#'
                            },
                            {
                                icon: 'twitter',
                                url: '#'
                            },
                            {
                                icon: 'instagram',
                                url: '#'
                            },
                        ]
                    },
                ],
                testimonialData5: [
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