<template>
    <div :class="`rn-callto-action ${checkStyleType}`"
         :style="{'background-image': `url(${backgroundImage})`}"
         :data-black-overlay="setOverlay">
        <div class="container">
            <template v-if="styleType === 1">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner">
                            <div class="content text-center">
                                <h2 class="title" v-html="title" data-aos="fade-up" data-aos-delay="60"/>
                                <h6 class="subtitle" v-html="subtitle" data-aos="fade-up" data-aos-delay="60"/>
                                <div class="call-to-btn" data-aos="fade-up" data-aos-delay="60">
                                    <a class="btn-default" href="#">{{ btnText }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="styleType === 2">
                <div class="row row--30 align-items-center">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="inner">
                            <div class="content text-center">
                                <h2 class="title mb--0" v-html="title" data-aos="fade-up" data-aos-delay="60"/>
                                <p v-html="subtitle" data-aos="fade-up" data-aos-delay="60"/>
                                <div class="call-to-btn text-center" data-aos="fade-up" data-aos-delay="60">
                                    <a class="btn-default btn-icon" href="#">
                                        {{ btnText }}
                                        <Icon name="arrow-right" class="size-20"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="styleType === 3">
                <div class="row row--0 align-items-center content-wrapper" data-aos="fade-up" data-aos-delay="60">
                    <div class="col-lg-8">
                        <div class="inner">
                            <div class="content text-start">
                                <h2 class="title" v-html="title"/>
                                <h6 class="subtitle" v-html="subtitle"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="call-to-btn text-start text-lg-end">
                            <a class="btn-default" href="#">{{ btnText }}</a>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="styleType === 4">
                <div class="row row--0 align-items-center content-wrapper" data-aos="fade-up" data-aos-delay="60">
                    <div class="col-lg-8">
                        <div class="inner">
                            <div class="content text-start">
                                <h2 class="title" v-html="title"/>
                                <h6 class="subtitle" v-html="subtitle"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="call-to-btn text-start text-lg-end">
                            <a class="btn-default" href="#">{{ btnText }}</a>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="styleType === 5">
                <div class="row row--0 align-items-center content-wrapper theme-shape"
                     data-aos="fade-up"
                     data-aos-delay="60">
                    <div class="col-lg-12">
                        <div class="inner">
                            <div class="content text-center">
                                <h2 class="title" v-html="title"/>
                                <h6 class="subtitle" v-html="subtitle"/>
                                <div class="call-to-btn text-center">
                                    <a class="btn-default btn-icon" href="#">
                                        {{ btnText }}
                                        <Icon name="arrow-right" class="size-20"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="styleType === 6">
                <div class="row row--0 align-items-center content-wrapper">
                    <div class="col-lg-8 col-12">
                        <div class="inner">
                            <div class="content text-start" data-aos="fade-up" data-aos-delay="60">
                                <h2 class="title" v-html="title"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12">
                        <div class="call-to-btn text-start text-lg-end mt_md--20 mt_sm--20"
                             data-aos="fade-up"
                             data-aos-delay="60">
                            <a class="btn-default" href="#">{{ btnText }}</a>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="styleType === 7">
                <div class="row row--0 align-items-center content-wrapper">
                    <div class="col-lg-8 col-md-8">
                        <div class="inner">
                            <div class="content text-start">
                                <Logo/>
                                <p class="subtitle" v-html="subtitle" data-aos="fade-up" data-aos-delay="60"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="call-to-btn text-start mt_sm--20 text-md-end"
                             data-aos="fade-up"
                             data-aos-delay="60">
                            <a class="btn-default btn-icon"
                               href="#">
                                {{ btnText }}
                                <Icon name="arrow-right" class="size-20"/>
                            </a>
                        </div>
                    </div>
                </div>
            </template>

            <template v-if="styleType === 8">
                <div class="row row--0 align-items-center">
                    <div class="col-lg-12">
                        <div class="inner">
                            <div class="content text-center">
                                <h2 class="title" v-html="title" data-aos="fade-up" data-aos-delay="60"/>
                                <h6 class="subtitle" v-html="subtitle" data-aos="fade-up" data-aos-delay="60"/>
                                <div class="call-to-btn text-center mt--30" data-aos="fade-up" data-aos-delay="60">
                                    <a class="btn-default btn-icon"
                                       href="#">
                                        {{ btnText }}
                                        <Icon name="arrow-right" class="size-20"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'
    import Logo from '../logo/Logo'

    export default {
        name: 'CallToAction',
        components: {Logo, Icon},
        props: {
            backgroundImage: {
                type: String,
                default: ''
            },
            title: {
                type: String
            },
            subtitle: {
                type: String
            },
            btnText: {
                type: String
            },
            styleType: {
                type: Number,
                default: 1
            }
        },
        computed: {
            checkStyleType() {
                if (this.styleType === 1) return 'clltoaction-style-default bg_image bg_image_fixed';
                else if (this.styleType === 2) return 'clltoaction-style-default style-2 bg_image bg_image_fixed';
                else if (this.styleType === 3) return 'clltoaction-style-default style-3 bg_image';
                else if (this.styleType === 4) return 'clltoaction-style-default style-4';
                else if (this.styleType === 5) return 'clltoaction-style-default style-5';
                else if (this.styleType === 6) return 'clltoaction-style-default style-6';
                else if (this.styleType === 7) return 'clltoaction-style-default style-7';
                else if (this.styleType === 8) return 'rn-call-to-action style-8 content-wrapper';
                else return '';
            },
            setOverlay() {
                if (this.styleType === 1) return 7;
                if (this.styleType === 2) return 8;
            }
        }
    }
</script>