<template>
    <div class="about-style-6 rn-section-gap">
        <div class="plr_md--30 plr_sm--30">
            <div class="wrapper theme-shape">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="thumbnail text-start text-lg-center" data-aos="fade-up" data-aos-delay="100">
                            <img src="../../../assets/images/about/about-logo.png" alt="About images"/>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6 col-12 mt_sm--30">
                        <div class="inner">
                            <span class="theme-gradient subtitle" data-aos="fade-up" data-aos-delay="100">I have completed 50+ project.</span>
                            <h4 class="color-white maintitle" data-aos="fade-up" data-aos-delay="150">Have More Projects Complete in My Carreer Life.</h4>
                            <div class="read-more-btn" data-aos="fade-up" data-aos-delay="200">
                                <router-link class="btn-default btn-border" to="#">
                                    View More Projects
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row--15">
                <div class="col-lg-12">
                    <div class="rbt-progress-style-1 mt--60">
                        <SectionTitle
                            class="mb--40"
                            title="My Working Experience."
                            :section-title-style="2"
                            data-aos="fade-up"
                        />
                        <Progressbar :progress-data="progressData" custom-column="col-12"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SectionTitle from "../sectionTitle/SectionTitle";
    import Progressbar from "../progressbar/Progressbar";

    export default {
        name: 'AboutSix',
        components: {Progressbar, SectionTitle},
        data() {
            return {
                progressData: [
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
            }
        }
    }
</script>