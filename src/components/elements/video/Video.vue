<template>
    <div v-if="videoStyle === 1">
        <div class="row row--15">
            <div :class="column"
                 v-for="(video, index) in videoData"
                 :key="index">
                <div class="video-popup icon-center" data-aos="fade-up">
                    <div class="thumbnail">
                        <img class="radius-small"
                             :src="video.thumb"
                             alt="Video Thumbnail"/>
                    </div>
                    <div class="video-icon">
                        <Button variant-button-class="rounded-player popup-video"
                                :is-link="false"
                                @btnClick="imageIndex = index">
                            <span><Icon name="play" size="30"/></span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <CoolLightBox
            :items="videoData"
            :index="imageIndex"
            @close="imageIndex = null">
        </CoolLightBox>
    </div>

    <div v-else-if="videoStyle === 2">
        <div class="row row--15">
            <div :class="column"
                 v-for="(video, index) in videoData"
                 :key="index">
                <div class="rn-gallery icon-center video-gallery-content bg_image"
                     :style="{'background-image': `url(${video.thumb})`}"
                     data-black-overlay="7">
                    <div class="overlay-content">
                        <Button variant-button-class="rounded-player popup-video sm-size"
                                :is-link="false"
                                @btnClick="imageIndex = index">
                            <span><Icon name="play" size="30"/></span>
                        </Button>
                        <h3 class="title" v-html="video.title"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-lightbox-wrapper">
            <CoolLightBox
                :items="videoData"
                :index="imageIndex"
                @close="imageIndex = null">
            </CoolLightBox>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'
    import Button from '../button/Button'

    export default {
        name: 'Video',
        components: {Button, Icon},
        props: {
            videoData: {},
            videoStyle: {
                type: Number,
                default: 1
            },
            column: {
                type: String,
                default: 'col-lg-6 col-md-6 col-12 mt--30'
            }
        },
        data() {
            return {
                imageIndex: null
            }
        }
    }
</script>