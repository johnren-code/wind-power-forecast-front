<template>
    <div>
        <div class="row mt_dec--30 row--15">
            <div :class="column"
                 v-for="(gallery, index) in galleryData"
                 :key="index">
                <div class="rn-gallery icon-center" data-aos="fade-up">
                    <div class="thumbnail">
                        <img class="radius-small"
                             :src="gallery.thumb"
                             alt="Video Thumbnail"/>
                    </div>
                    <div class="video-icon">
                        <Button variant-button-class="rounded-player sm-size"
                                :is-link="false"
                                @btnClick="imageIndex = index">
                            <span><Icon :name="gallery.type === 'video' ? 'play' : 'zoom-in'" size="30"/></span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <CoolLightBox
            :items="galleryData"
            :index="imageIndex"
            @close="imageIndex = null">
        </CoolLightBox>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'
    import Button from '../button/Button'

    export default {
        name: 'Gallery',
        components: {Button, Icon},
        props: {
            galleryData: {},
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