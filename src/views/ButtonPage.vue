<template>
    <Layout>
        <!-- Start Button-1 Area  -->
        <section class="rwt-button-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-6 col-md-6 col-12">
                        <SectionTitle
                            class="mb--50"
                            subtitle="Easily switchable"
                            title="Button Sizes"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                        <div class="button-group" data-aos="fade-up" data-aos-delay="70">
                            <Button title="Button Solid" size="small"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="80">
                            <Button title="Button Solid"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="90">
                            <Button title="Button Solid" size="large"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="100">
                            <Button title="Button Solid" size="extra-large"/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 mt_sm--40">
                        <SectionTitle
                            class="mb--50"
                            subtitle="Include Borders"
                            title="Outlined Buttons"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                        <div class="button-group" data-aos="fade-up" data-aos-delay="70">
                            <Button title="Button Solid" size="small" :outlined="true"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="80">
                            <Button title="Button Solid" :outlined="true"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="90">
                            <Button title="Button Solid" size="large" :outlined="true"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="100">
                            <Button title="Button Solid" size="extra-large" :outlined="true"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Button-1 Area  -->

        <Separator/>

        <!-- Start Button Icons Area  -->
        <section class="rwt-button-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-6 col-md-6 col-12">
                        <SectionTitle
                            class="mb--50"
                            subtitle="Easily switchable icon"
                            title="Button Icon"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                        <div class="button-group" data-aos="fade-up" data-aos-delay="70">
                            <Button title="Button Solid" size="small" icon="arrow-right"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="80">
                            <Button title="Button Solid" icon="arrow-right"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="90">
                            <Button title="Button Solid" size="large" icon="arrow-right"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="100">
                            <Button title="Button Solid" size="extra-large" icon="arrow-right"/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 mt_sm--40">
                        <SectionTitle
                            class="mb--50"
                            subtitle="Include Icon"
                            title="Outlined Buttons"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                        <div class="button-group" data-aos="fade-up" data-aos-delay="70">
                            <Button title="Button Solid" size="small" :outlined="true" icon="arrow-right"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="80">
                            <Button title="Button Solid" :outlined="true" icon="arrow-right"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="90">
                            <Button title="Button Solid" size="large" :outlined="true" icon="arrow-right"/>
                        </div>
                        <div class="button-group mt--20" data-aos="fade-up" data-aos-delay="100">
                            <Button title="Button Solid" size="extra-large" :outlined="true" icon="arrow-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Button Icons Area  -->

        <Separator/>

        <!-- Start Button Variation Area  -->
        <section class="rwt-button-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            subtitle="Button Extra"
                            title="Button Variation"
                            data-aos="fade-up"
                        />
                        <div class="button-group">
                            <Button variant-button-class="text-underline" data-aos="fade-up">
                                <span>View More</span>
                            </Button>
                            <Button :read-more-button="true" data-aos="fade-up">
                                <span>View More</span>
                            </Button>
                            <Button variant-button-class="round" data-aos="fade-up">
                                <span>View More</span>
                            </Button>
                            <Button variant-button-class="square" data-aos="fade-up">
                                <span>View More</span>
                            </Button>
                            <Button variant-button-class="rounded-player popup-video"
                                    url="https://www.youtube.com/watch?v=tj9-MGHCs38"
                                    data-aos="fade-up">
                                <span><Icon name="play" size="30"/></span>
                            </Button>
                            <Button variant-button-class="rounded-player popup-video btn-border"
                                    url="https://www.youtube.com/watch?v=tj9-MGHCs38"
                                    data-aos="fade-up">
                                <span><Icon name="play" size="30"/></span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Button Variation Area  -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from "../components/elements/sectionTitle/SectionTitle";
    import Separator from "../components/elements/separator/Separator";
    import Button from "../components/elements/button/Button";
    import Icon from "../components/icon/Icon";

    export default {
        name: 'ButtonPage',
        components: {Icon, Button, Separator, SectionTitle, Breadcrumb, Layout}
    }
</script>