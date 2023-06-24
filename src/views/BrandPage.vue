<template>
    <Layout>
        <!-- Start Brand Area  -->
        <div class="rwt-brand-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Awesome Client"
                            title="Brand Style One"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt--40">
                        <Brand :brand-list="brandList1"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area  -->

        <Separator />

        <!-- Start Brand Area  -->
        <div class="rwt-brand-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Awesome Client"
                            title="Brand Style Two"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt--10">
                        <Brand :brand-list="brandList2" :brand-style="2"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area  -->

        <Separator/>

        <!-- Start Brand Area  -->
        <div class="rwt-brand-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Awesome Client"
                            title="Brand Style Three"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt--10">
                        <Brand :brand-list="brandList3" :brand-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area  -->

        <Separator />

        <!-- Start Brand Area  -->
        <div class="rwt-brand-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Awesome Client"
                            title="Brand Style Four"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt--10">
                        <Brand :brand-list="brandList4" :brand-style="4"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area  -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from "../components/elements/sectionTitle/SectionTitle";
    import Separator from "../components/elements/separator/Separator";
    import Brand from "../components/elements/brand/Brand";

    export default {
        name: 'BrandPage',
        components: {Brand, Separator, SectionTitle, Breadcrumb, Layout},
        data() {
            return {
                brandList1: [
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
                    }
                ],
                brandList2: [
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
                        image: require(`@/assets/images/brand/brand-07.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-08.png`)
                    },
                ],
                brandList3: [
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
                brandList4: [
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
                ]
            }
        }
    }
</script>