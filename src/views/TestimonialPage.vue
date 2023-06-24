<template>
    <Layout>
        <!-- Start Elements Area -->
        <div class="rwt-testimonial-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--10">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Testimonial"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12"
                         v-for="(testimonial, index) in testimonialData"
                         :key="index">
                        <Testimonial :testimonial="testimonial"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-elements-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Testimonial"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12"
                         v-for="(testimonial, index) in testimonialData"
                         :key="index">
                        <Testimonial :testimonial="testimonial" :testimonial-style="2"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-elements-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Testimonial"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12"
                         v-for="(testimonial, index) in testimonialData"
                         :key="index">
                        <Testimonial :testimonial="testimonial" :testimonial-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-elements-area rn-section-gap">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Testimonial"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Testimonial :testimonial="testimonialData4" :testimonial-style="4"/>
            </div>
        </div>
        <!-- End Elements Area -->
        <Separator/>


        <!-- Start Elements Area -->
        <div class="rwt-elements-area rn-section-gap">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Client Feedback"
                            title="Testimonial"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Testimonial :testimonial="testimonialData5" :testimonial-style="5"/>
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import Separator from '../components/elements/separator/Separator'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Testimonial from "../components/elements/testimonial/Testimonial";

    export default {
        name: 'TestimonialPage',
        components: {Testimonial, SectionTitle, Separator, Layout, Breadcrumb},
        data() {
            return {
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
                testimonialData4:  {
                    id: '01',
                    form: 'Poland',
                    description: 'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
                    name: 'John Due',
                    subtitle: 'App Developer',
                    image: 'testimonial-dark-01',
                },
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