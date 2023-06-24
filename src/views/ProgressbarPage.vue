<template>
    <Layout>
        <!-- Start progress style-1 -->
        <div class="rwt-progressbar-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <SectionTitle
                            subtitle="Colors, percentage types"
                            title="Progressbar Style One"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Progressbar :progress-data="progressOneData"/>
            </div>
        </div>
        <!-- End progress style-1 -->

        <!-- Start Separator Area -->
        <Separator/>
        <!-- End Separator Area -->

        <!-- Start progress style-2 -->
        <div class="rwt-progressbar-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <SectionTitle
                            subtitle="Theme Color, Round Types"
                            title="Progressbar Style Two"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Progressbar :progress-data="progressOneData" :progress-style="2"/>
            </div>
        </div>
        <!-- End progress style-2 -->

        <!-- Start Separator Area -->
        <Separator/>
        <!-- End Separator Area -->

        <!-- Start progress style-gradient -->
        <div class="rwt-progressbar-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <SectionTitle
                            subtitle="Colors, percentage types"
                            title="Progressbar Style Three"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Progressbar :progress-data="progressOneData" :progress-style="3"/>
            </div>
        </div>
        <!-- End progress style-gradient -->

        <!-- Start Separator Area -->
        <Separator/>
        <!-- End Separator Area -->

        <!-- Start progress style-large -->
        <div class="rwt-progressbar-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <SectionTitle
                            subtitle="Colors, percentage types"
                            title="Progressbar Style Four"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Progressbar :progress-data="progressOneData" :progress-style="4"/>
            </div>
        </div>
        <!-- End progress style-large -->

        <!-- Start Separator Area -->
        <Separator/>
        <!-- End Separator Area -->

        <!-- Start progress style-large -->
        <div class="rwt-progressbar-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <SectionTitle
                            subtitle="Circle, Theme Color"
                            title="Progressbar Style Five"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <Progressbar
                            :progress-data="progressCircleData"
                            :progress-style="5"
                            column="col-lg-3 col-md-6 col-sm-6 mt--30 col-12"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- End progress style-large -->

        <!-- Start Separator Area -->
        <Separator/>
        <!-- End Separator Area -->

        <!-- Start progress style-large -->
        <div class="rwt-progressbar-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <SectionTitle
                            subtitle="Circle, Theme Color"
                            title="Progressbar Style Six"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <Progressbar
                            :progress-data="progressCircleData2"
                            :progress-style="5"
                            column="col-lg-3 col-md-6 col-sm-6 mt--30 col-12"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- End progress style-large -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import Separator from "../components/elements/separator/Separator";
    import SectionTitle from "../components/elements/sectionTitle/SectionTitle";
    import Progressbar from "../components/elements/progressbar/Progressbar";

    export default {
        name: 'ProgressbarPage',
        components: {Progressbar, SectionTitle, Separator, Layout, Breadcrumb},
        data() {
            return {
                progressOneData: [
                    {
                        id: 1,
                        title: 'Web Development',
                        percentage: 90,
                        progressClass: 'bar-color-1',
                    },
                    {
                        id: 2,
                        title: 'Photoshop Design',
                        percentage: 75,
                        progressClass: 'bar-color-2',
                    },
                    {
                        id: 3,
                        title: 'App Development',
                        percentage: 70,
                        progressClass: 'bar-color-3',
                    },
                    {
                        id: 4,
                        title: "Application Development",
                        percentage: 95,
                        progressClass: 'bar-color-4',
                    },
                ],
                progressCircleData: [
                    {
                        id: 1,
                        title: 'Design',
                        percentage: 85,
                        subtitle: 'Presentation your skill',
                        strokeColor: '#0f0f11',
                        strokePath: '#059DFF'
                    },
                    {
                        id: 2,
                        title: 'Photoshop',
                        percentage: 60,
                        subtitle: 'Presentation your skill',
                        strokeColor: '#0f0f11',
                        strokePath: '#059DFF'
                    },
                    {
                        id: 3,
                        title: "Application",
                        percentage: 70,
                        subtitle: "Presentation your skill",
                        strokeColor: '#0f0f11',
                        strokePath: '#059DFF'
                    },
                    {
                        id: 4,
                        title: 'Development',
                        percentage: 95,
                        subtitle: 'Presentation your skill',
                        strokeColor: '#0f0f11',
                        strokePath: '#059DFF'
                    },
                ],
                progressCircleData2: [
                    {
                        id: 1,
                        title: 'Design',
                        percentage: 85,
                        subtitle: 'Presentation your skill',
                        strokeColor: '#0f0f11',
                        strokePath: '#FB5343'
                    },
                    {
                        id: 2,
                        title: 'Photoshop',
                        percentage: 60,
                        subtitle: 'Presentation your skill',
                        strokeColor: '#0f0f11',
                        strokePath: '#E33FA1'
                    },
                    {
                        id: 3,
                        title: "Application",
                        percentage: 70,
                        subtitle: "Presentation your skill",
                        strokeColor: '#0f0f11',
                        strokePath: '#6549D5'
                    },
                    {
                        id: 4,
                        title: 'Development',
                        percentage: 95,
                        subtitle: 'Presentation your skill',
                        strokeColor: '#0f0f11',
                        strokePath: '#36C6F0'
                    },
                ]
            }
        }
    }
</script>