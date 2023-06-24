<template>
    <Layout>
        <!-- Start Timeline Area -->
        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Timeline"
                            title="Working Process One"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <Timeline :timeline-data="timelineData"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Timeline Area -->

        <Separator/>

        <!-- Start Timeline Area -->
        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Timeline"
                            title="Working Process Two"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 mt--50">
                        <Timeline :timeline-data="timelineData2" :timeline-style="2"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Timeline Area -->

        <Separator/>

        <!-- Start Timeline Area -->
        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Timeline"
                            title="Working Process Three"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 mt--50">
                        <Timeline :timeline-data="timelineData2" :timeline-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Timeline Area -->

        <Separator/>

        <!-- Start Timeline Area -->
        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Timeline"
                            title="Working Process Four"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 mt--50">
                        <Timeline :timeline-data="timelineData2" :timeline-style="4"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Timeline Area -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout';
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb';
    import Separator from "../components/elements/separator/Separator";
    import SectionTitle from "../components/elements/sectionTitle/SectionTitle";
    import Timeline from "../components/elements/timeline/Timeline";

    export default {
        name: 'TimelinePage',
        components: {Timeline, SectionTitle, Separator, Layout, Breadcrumb},
        data() {
            return {
                timelineData: [
                    {
                        id: '1',
                        date: 'Step-1',
                        title: 'Your working process you can present.',
                        description: 'Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.',
                        image: 'timeline-01',
                        workingStep: [
                            {
                                stepTitle: 'Gain your works',
                                stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
                            },
                            {
                                stepTitle: 'Working process',
                                stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
                            },
                        ]
                    },
                    {
                        id: '2',
                        date: 'Step-2',
                        title: 'Our compnay working process to present.',
                        description: 'Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.',
                        image: 'timeline-02',
                        workingStep: [
                            {
                                stepTitle: 'Follow this process',
                                stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
                            },
                            {
                                stepTitle: 'Working experience',
                                stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
                            },
                        ]
                    },
                ],
                timelineData2: [
                    {
                        id: '1',
                        title: 'Knowledge',
                        description: 'Present all available features in Essentials.',
                    },
                    {
                        id: '2',
                        title: 'Working',
                        description: 'All Feature available features in Essentials.',
                    },
                    {
                        id: '3',
                        title: 'Solution',
                        description: 'Popular Feature available features in Essentials.',
                    },
                    {
                        id: '4',
                        title: 'Process',
                        description: 'Latest Feature available features in Essentials.',
                    },
                ]
            }
        }
    }
</script>