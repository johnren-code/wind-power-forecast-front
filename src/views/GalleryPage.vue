<template>
    <Layout>
        <!-- Start Elements Area  -->
        <div class="rwt-gallery-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--20">
                        <SectionTitle
                            text-align="center"
                            subtitle="Gallery With Lightbox"
                            title="Gallery Style One"
                        />
                    </div>
                </div>
                <Gallery :gallery-data="galleryData"/>
            </div>
        </div>
        <!-- End Elements Area  -->

        <!-- Start Elements Area  -->
        <div class="rwt-gallery-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--20">
                        <SectionTitle
                            text-align="center"
                            subtitle="Gallery With Lightbox"
                            title="Gallery Style Two"
                        />
                    </div>
                </div>
                <Gallery :gallery-data="galleryData" column="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"/>
            </div>
        </div>
        <!-- End Elements Area  -->

        <!-- Start Elements Area  -->
        <div class="rwt-gallery-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--20">
                        <SectionTitle
                            text-align="center"
                            subtitle="Gallery With Lightbox"
                            title="Gallery Style Three"
                        />
                    </div>
                </div>
                <Gallery :gallery-data="galleryData3" column="col-lg-3 col-md-6 col-sm-6 col-12 mt--30"/>
            </div>
        </div>
        <!-- End Elements Area  -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from "../components/elements/sectionTitle/SectionTitle";
    import Gallery from "../components/elements/gallery/Gallery";

    export default {
        name: 'GalleryPage',
        components: {Gallery, SectionTitle, Breadcrumb, Layout},
        data() {
            return {
                galleryData: [
                    {
                        id: 1,
                        thumb: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        type: 'image'
                    },
                    {
                        id: 2,
                        thumb: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
                        type: 'video'
                    },
                    {
                        id: 3,
                        thumb: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        type: 'image'
                    },
                    {
                        id: 4,
                        thumb: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        type: 'image'
                    },
                    {
                        id: 5,
                        thumb: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        type: 'image'
                    },
                    {
                        id: 6,
                        thumb: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        type: 'image'
                    },
                ],
                galleryData3: [
                    {
                        id: 1,
                        thumb: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        type: 'image'
                    },
                    {
                        id: 2,
                        thumb: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
                        type: 'video'
                    },
                    {
                        id: 3,
                        thumb: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        type: 'image'
                    },
                    {
                        id: 4,
                        thumb: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        type: 'image'
                    },
                    {
                        id: 5,
                        thumb: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        type: 'image'
                    },
                    {
                        id: 6,
                        thumb: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        type: 'image'
                    },
                    {
                        id: 7,
                        thumb: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        type: 'image'
                    },
                    {
                        id: 8,
                        thumb: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        src: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        type: 'image'
                    },
                ],
            }
        }
    }
</script>