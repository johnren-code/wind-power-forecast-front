<template>
    <Layout>
        <!-- Start Elements Area -->
        <div class="rwt-social-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Social Share"
                            title ="You can Customize All."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row mt--30">
                    <div class="col-lg-12">
                        <ul class="social-icon social-default"
                            data-aos="fade-up"
                            data-aos-delay="60">
                            <li><a href="https://www.facebook.com/" target="_blank"><Icon name="facebook" class="size-18"/></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"><Icon name="twitter" class="size-18"/></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><Icon name="instagram" class="size-18"/></a></li>
                            <li><a href="https://www.linkedin.com" target="_blank"><Icon name="linkedin" class="size-18"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-social-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Transparent With Border"
                            title="Social Share."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>

                <div class="row mt--30">
                    <div class="col-lg-12">
                        <ul class="social-icon social-default transparent-with-border"
                            data-aos="fade-up"
                            data-aos-delay="60">
                            <li><a href="https://www.facebook.com" target="_blank"><Icon name="facebook" class="size-18"/></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"><Icon name="twitter" class="size-18"/></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><Icon name="instagram" class="size-18"/></a></li>
                            <li><a href="https://www.linkedin.com" target="_blank"><Icon name="linkedin" class="size-18"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-social-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Gradient Style"
                            title="Social Share."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>

                <div class="row mt--30">
                    <div class="col-lg-12">
                        <ul class="social-icon social-default with-gradient"
                            data-aos="fade-up"
                            data-aos-delay="60">
                            <li><a href="https://www.facebook.com" target="_blank"><Icon name="facebook" class="size-18"/></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"><Icon name="twitter" class="size-18"/></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><Icon name="instagram" class="size-18"/></a></li>
                            <li><a href="https://www.linkedin.com" target="_blank"><Icon name="linkedin" class="size-18"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-social-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Bg Primary Color"
                            title="Social Share."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>

                <div class="row mt--30">
                    <div class="col-lg-12">
                        <ul class="social-icon social-default with-bg-primary"
                            data-aos="fade-up"
                            data-aos-delay="60">
                            <li><a href="https://www.facebook.com" target="_blank"><Icon name="facebook" class="size-18"/></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"><Icon name="twitter" class="size-18"/></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><Icon name="instagram" class="size-18"/></a></li>
                            <li><a href="https://www.linkedin.com" target="_blank"><Icon name="linkedin" class="size-18"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->
        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-social-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Bg Primary Color"
                            title="Social Share."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>

                <div class="row mt--30">
                    <div class="col-lg-12">
                        <ul class="social-icon social-default icon-naked"
                            data-aos="fade-up"
                            data-aos-delay="60">
                            <li><a href="https://www.facebook.com" target="_blank"><Icon name="facebook" class="size-18"/></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"><Icon name="twitter" class="size-18"/></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><Icon name="instagram" class="size-18"/></a></li>
                            <li><a href="https://www.linkedin.com" target="_blank"><Icon name="linkedin" class="size-18"/></a></li>
                        </ul>
                    </div>
                </div>
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
    import Icon from "../components/icon/Icon";

    export default {
        name: 'SocialSharePage',
        components: {Icon, Layout, Breadcrumb, Separator, SectionTitle}
    }
</script>