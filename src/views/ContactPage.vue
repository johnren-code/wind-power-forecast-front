<template>
    <Layout>
        <!-- Start Contact Area  -->
        <div class="rwt-contact-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Contact Form"
                            title="Our Contact Address Here"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-12">
                        <div class="rn-contact-address mt_dec--30">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="rn-address">
                                        <div class="icon">
                                            <Icon name="headphones" :size="40"/>
                                        </div>
                                        <div class="inner">
                                            <h4 class="title">Contact Phone Number</h4>
                                            <p><a href="tel:+444 555 666 777">+444 555 666 777</a></p>
                                            <p><a href="tel:+222 222 222 333">+222 222 222 333</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="rn-address">
                                        <div class="icon">
                                            <Icon name="mail" :size="40"/>
                                        </div>
                                        <div class="inner">
                                            <h4 class="title">Our Email Address</h4>
                                            <p><a href="mailto:admin@gmail.com">admin@gmail.com</a></p>
                                            <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="rn-address">
                                        <div class="icon">
                                            <Icon name="map-pin" :size="40"/>
                                        </div>
                                        <div class="inner">
                                            <h4 class="title">Our Location</h4>
                                            <p>5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt--40 row--15">
                    <div class="col-lg-7">
                        <ContactForm/>
                    </div>
                    <div class="col-lg-5 mt_md--30 mt_sm--30">
                        <GoogleMap/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contact Area  -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Icon from "../components/icon/Icon";
    import GoogleMap from "../components/elements/contact/GoogleMap";
    import ContactForm from "../components/elements/contact/ContactForm";

    export default {
        name: 'ContactPage',
        components: {ContactForm, GoogleMap, Icon, SectionTitle, Breadcrumb, Layout}
    }
</script>