<template>
    <Layout>
        <!-- Start Tab Area  -->
        <div class="rwt-advance-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            textAlign="center"
                            subtitle="You can Customize All"
                            title="Advance Tab Style One"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <AdvancedTab :tab-data="tabData"/>
            </div>
        </div>
        <!-- End Tab Area  -->

        <Separator/>

        <!-- Start Tab Area  -->
        <div class="rwt-advance-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            textAlign="center"
                            subtitle="You can Customize All"
                            title="Advance Tab Style Two"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <AdvancedTab :tab-data="tabData2" :tab-style="2"/>
            </div>
        </div>
        <!-- End Tab Area  -->

        <Separator/>

        <!-- Start Tab Area  -->
        <div class="rwt-advance-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            textAlign="center"
                            subtitle="You can Customize All"
                            title="Advance Tab Style Three"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <AdvancedTab :tab-data="tabData3" :tab-style="3"/>
            </div>
        </div>
        <!-- End Tab Area  -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Separator from '../components/elements/separator/Separator'
    import AdvancedTab from '../components/elements/tab/AdvancedTab'

    export default {
        name: 'AdvanceTabPage',
        components: {AdvancedTab, Separator, SectionTitle, Breadcrumb, Layout},
        data() {
            return {
                tabData: {
                    tabContent: [
                        {
                            id: 1,
                            menu: 'market-research',
                            title: 'Market Research.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-02.jpg`),
                        },
                        {
                            id: 2,
                            menu: 'corporate-report',
                            title: 'Corporate Report.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-03.jpg`),
                        },
                        {
                            id: 3,
                            menu: 'app-development',
                            title: 'App Development.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-04.jpg`),
                        }
                    ]
                },
                tabData2: {
                    tabContent: [
                        {
                            id: 1,
                            menu: 'market-research-2',
                            title: 'Market Research.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-02.jpg`),
                        },
                        {
                            id: 2,
                            menu: 'corporate-report-2',
                            title: 'Corporate Report.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-03.jpg`),
                        },
                        {
                            id: 3,
                            menu: 'app-development-2',
                            title: 'App Development.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-04.jpg`),
                        }
                    ]
                },
                tabData3: {
                    tabContent: [
                        {
                            id: 1,
                            menu: 'market-research-3',
                            title: 'Market Research.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-02.jpg`),
                        },
                        {
                            id: 2,
                            menu: 'corporate-report-3',
                            title: 'Corporate Report.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-03.jpg`),
                        },
                        {
                            id: 3,
                            menu: 'app-development-3',
                            title: 'App Development.',
                            description: 'Use Doob template you can build a corporate website a short time.',
                            image: require(`@/assets/images/tab/tabs-04.jpg`),
                        }
                    ]
                },
            }
        }
    }
</script>