<template>
    <Layout>
        <Breadcrumb current-url="Service Details" :title="title"/>

        <!-- Start Accordion Area -->
        <div class="rn-section-gap">
            <div class="container">
                <div class="row row--40 align-items-center">
                    <div class="col-lg-6">
                        <div class="thumb">
                            <img src="../assets/images/about/about-3.png" alt="Service Images" class="w-100 rounded">
                        </div>
                    </div>
                    <div class="col-lg-6 mt_md--40 mt_sm--40">
                        <div>
                            <p>
                                In a typical Vue.js application, data is passed top-down (parent to child) via props,
                                but such usage can be cumbersome for certain types of props
                                (e.g. locale preference, UI theme).
                            </p>
                            <p>
                                That are required by many components within an application. Context provides a way to
                                share values like these between.
                            </p>
                            <h4 class="title">Process of metel</h4>
                            <ul class="liststyle bullet">
                                <li>Yet this above sewed flirted opened ouch</li>
                                <li>Goldfinch realistic sporadic ingenuous</li>
                                <li>Abominable this abidin far successfully then like piquan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Accordion Area -->

        <Separator/>

        <!-- Start Accordion Area -->
        <div class="rn-section-gap">
            <div class="container">
                <div class="row row--40 align-items-center">
                    <div class="col-lg-6 order-2 order-lg-1">
                        <div>
                            <p>
                                But the majority have suffered alteration in some
                                form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <p>
                                hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined
                                chunks. Necessary, making this the first true generator on the Internet.
                            </p>
                            <p>
                                hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined
                                chunks. Necessary, making this the first true generator on the Internet.
                            </p>
                            <h4 class="title">Our Working Process</h4>
                            <ul class="liststyle bullet">
                                <li>Specializes in small Corporate Business</li>
                                <li>Yet this above sewed flirted opened ouch</li>
                                <li>Goldfinch realistic sporadic ingenuous</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 mb_md--40 mb_sm--40 order-1 order-lg-2">
                        <Video :video-data="videoData" column="col-12"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Accordion Area -->
    </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
import Separator from '../components/elements/separator/Separator'
import Video from '../components/elements/video/Video'
import Icon from '../components/icon/Icon'

export default {
    name: 'ServiceDetailsPage',
    components: {Icon, Video, Separator, Breadcrumb, Layout},
    props: {
        title: {
            type: String,
            default: 'Website Development'
        }
    },
    data() {
        return {
            videoData: [
                {
                    thumb: require(`@/assets/images/about/contact-image.jpg`),
                    src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
                }
            ]
        }
    }
}
</script>