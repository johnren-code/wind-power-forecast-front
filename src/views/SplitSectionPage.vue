<template>
    <Layout>
        <!-- Start Elements Area  -->
        <div class="rwt-split-area rn-section-gap">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle ="Split"
                            title="Split Style One"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Split :split-data="splitOneData"/>
            </div>
        </div>
        <!-- End Elements Area  -->

        <Separator/>

        <!-- Start Elements Area  -->
        <div class="rwt-split-area rn-section-gap">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle ="Split"
                            title="Split Style Two"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Split :split-data="splitTwoData" :split-style="2"/>
            </div>
        </div>
        <!-- End Elements Area  -->

        <Separator />
        <!-- Start Elements Area  -->
        <div class="rwt-split-area rn-section-gap">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle ="Split"
                            title="Split Style Three"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Split :split-data="splitThreeData" :split-style="3"/>
            </div>
        </div>
        <!-- End Elements Area  -->

        <Separator />

        <!-- Start Elements Area  -->
        <div class="rwt-split-area rn-section-gap">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle ="Split"
                            title="Split Style Four"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Split :split-data="splitThreeData" :split-style="4"/>
            </div>
        </div>
        <!-- End Elements Area  -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Separator from '../components/elements/separator/Separator'
    import Split from '../components/elements/split/Split'

    export default {
        name: 'SplitSectionPage',
        components: {Split, Separator, SectionTitle, Layout, Breadcrumb},
        data() {
            return {
                splitOneData: {
                    image: 'split-01.jpg',
                    title: 'What is DOOB?',
                    description: `Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .`,
                    list: [
                        '- Doug DeMarco, Design Prototyping Manager',
                        '- 108 million paying subscribers',
                        '- Over 1.7 billion hours of music played monthly',
                        '- 4,000+ employees working across 16 offices'
                    ],
                    btn: {
                        text: 'Contact With Us',
                        link: '/contact'
                    }
                },
                splitTwoData: {
                    image: 'split-02.jpg',
                    title: 'Continue Your Business With Us.',
                    description: `Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .`,
                    counterData: [
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
                },
                splitThreeData: {
                    image: 'split-03.jpg',
                    title: 'Continue Your Business With Us.',
                    description: `Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .`,
                    counterData: [
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
    }
</script>