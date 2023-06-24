<template>
    <Layout>
        <!-- Start Counter Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="Customizable Counters"
                            title="Counters Custom Elements"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Counter
                    text-align="center"
                    :counter-data="counterOneData"
                    column="col-lg-3 col-md-6 col-sm-6 col-12"
                />
            </div>
        </section>
        <!-- End Counter Area -->

        <Separator/>

        <!-- Start Counter Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="Customizable Counters"
                            title="Counters Custom Elements"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Counter
                    :counter-style="2"
                    text-align="center"
                    :counter-data="counterTwoData"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                />
            </div>
        </section>
        <!-- End Counter Area -->

        <Separator/>

        <!-- Start Counter Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="Customizable Counters"
                            title="Counters Custom Elements"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Counter
                    :counter-style="3"
                    text-align="center"
                    :counter-data="counterThreeData"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                />
            </div>
        </section>
        <!-- End Counter Area -->

        <Separator/>

        <!-- Start Counter Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="Customizable Counters"
                            title="Counters Custom Elements"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Counter
                    :counter-style="4"
                    text-align="center"
                    :counter-data="counterFourData"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                />
            </div>
        </section>
        <!-- End Counter Area -->

        <Separator/>

        <!-- Start Counter Area -->
        <section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle="Customizable Counters"
                            title="Counters Custom Elements"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Counter
                    :counter-style="5"
                    text-align="center"
                    :counter-data="counterFiveData"
                    column="col-lg-3 col-md-6 col-sm-6 col-12"
                />
            </div>
        </section>
        <!-- End Counter Area -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Separator from '../components/elements/separator/Separator'
    import Counter from "../components/elements/counterUp/Counter";

    export default {
        name: 'CounterUpPage',
        components: {Counter, Separator, SectionTitle, Breadcrumb, Layout},
        data() {
            return {
                counterOneData: [
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
                counterTwoData: [
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
                counterThreeData: [
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
                counterFourData: [
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
                counterFiveData: [
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
                ]
            }
        }
    }
</script>