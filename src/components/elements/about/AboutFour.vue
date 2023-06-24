<template>
    <div class="about-area about-style-4 rn-section-gap">
        <div class="container">
            <div class="row row--40 align-items-center">
                <div class="col-lg-6">
                    <Video :video-data="videoData" column="col-12"/>
                </div>
                <div class="col-lg-6 mt_md--40 mt_sm--40">
                    <div class="content">
                        <div class="inner">
                            <h3 class="title">Doob specializes in <br/> small <strong>Corporate Business.</strong></h3>
                            <ul class="feature-list">
                                <li>
                                    <Icon name="check" size="20" icon-class="icon"/>
                                    <div class="title-wrapper">
                                        <h4 class="title">A good traveler has no fixed plans</h4>
                                        <p class="text">
                                            Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                            incididunt labore.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <Icon name="check" size="20" icon-class="icon"/>
                                    <div class="title-wrapper">
                                        <h4 class="title">A good traveler has no fixed plans</h4>
                                        <p class="text">
                                            Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                            incididunt labore.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div class="about-btn mt--30">
                                <router-link class="btn-default" to="/about">About Our Doob</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'
    import Video from "../video/Video";

    export default {
        name: 'AboutFour',
        components: {Video, Icon},
        props: {
            image: {}
        },
        data() {
            return {
                videoData: [
                    {
                        thumb: this.image,
                        src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
                    }
                ]
            }
        }
    }
</script>