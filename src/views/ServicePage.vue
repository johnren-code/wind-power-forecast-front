<template>
    <Layout>
        <!-- Start Service Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <ServiceOne
                    service-style="service__style--1 bg-color-blackest radius mt--25"
                    icon-size="62"
                    text-align="center"
                />
            </div>
        </section>
        <!-- End Service Area -->

        <Separator/>

        <!-- Start Service Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <ServiceOne
                    service-style="service__style--1 bg-color-blackest radius mt--25 rbt-border"
                    icon-size="62"
                    text-align="left"
                />
            </div>
        </section>
        <!-- End Service Area -->

        <Separator/>

        <!-- Start Service Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <ServiceTwo
                    card-style="card-style-1"
                    text-align="left"
                />
            </div>
        </section>
        <!-- End Service Area -->

        <Separator/>

        <!-- Start Service Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <ServiceThree
                    service-style="service__style--2"
                    text-align="center"
                />
            </div>
        </section>
        <!-- End Service Area -->

        <Separator/>

        <!-- Start Service Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <ServiceOne
                    service-style="service__style--1 icon-circle-style"
                    text-align="center"
                    icon-size="39"
                />
            </div>
        </section>
        <!-- End Service Area -->

        <Separator/>

        <!-- Start Service Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <ServiceFour
                    service-style="service__style--1 icon-circle-style with-working-process"
                    text-align="center"
                />
            </div>
        </section>
        <!-- End Service Area -->

        <Separator/>

        <!-- Start Service Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <ServiceFive
                    service-style="gallery-style"
                    text-align="left"
                />
            </div>
        </section>
        <!-- End Service Area -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import Separator from '../components/elements/separator/Separator'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import ServiceOne from '../components/elements/service/ServiceOne'
    import ServiceTwo from '../components/elements/service/ServiceTwo'
    import ServiceThree from '../components/elements/service/ServiceThree'
    import ServiceFour from '../components/elements/service/ServiceFour'
    import ServiceFive from '../components/elements/service/ServiceFive'

    export default {
        name: 'ServicePage',
        components: {ServiceOne, ServiceTwo, ServiceThree, ServiceFour, ServiceFive, Separator, SectionTitle, Breadcrumb, Layout}
    }
</script>