<template>
    <Layout>
        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gap">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style One"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    title="Ready to start creating a standard website?"
                    subtitle="We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly."
                    btn-text="Purchase Doob"
                    :background-image="require(`@/assets/images/bg/bg-image-1.jpg`)"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gapBottom">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style Two"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    :style-type="2"
                    title="Ready to start creating a standard website?"
                    subtitle="Finest choice for your home & office"
                    btn-text="Purchase Doob"
                    :background-image="require(`@/assets/images/bg/bg-image-1.jpg`)"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gapBottom">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style Three"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    :style-type="3"
                    title="Ready to start creating a standard website?"
                    subtitle="Finest choice for your home & office"
                    btn-text="Purchase Doob"
                    :background-image="require(`@/assets/images/bg/bg-image-2.jpg`)"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gapBottom">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style Four"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    :style-type="4"
                    title="Ready to start creating a standard website?"
                    subtitle="Finest choice for your home & office"
                    btn-text="Purchase Doob"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gapBottom">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style Five"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    :style-type="5"
                    title="Ready to start creating a standard website?"
                    subtitle="Finest choice for your home & office"
                    btn-text="Purchase Doob"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gapBottom">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style Six"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    :style-type="6"
                    title="Ready to start creating a standard website?"
                    btn-text="Purchase Doob"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area rn-section-gap">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style Seven"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    :style-type="7"
                    subtitle="If you want to create a corporate template you can purchase now our doob template."
                    btn-text="Purchase Doob"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <!-- Start Elements Area -->
        <div class="rwt-callto-action-area ">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Call To Action"
                            title="Style Eight"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <CallToAction
                    :style-type="8"
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
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import Separator from '../components/elements/separator/Separator'
    import SectionTitle from "../components/elements/sectionTitle/SectionTitle";
    import CallToAction from "../components/elements/callToAction/CallToAction";
    import Icon from "../components/icon/Icon";

    export default {
        name: 'CallToActionPage',
        components: {Icon, CallToAction, SectionTitle, Separator, Breadcrumb, Layout}
    }
</script>