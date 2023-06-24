<template>
    <div v-if="timelineStyle === 1" class="rn-timeline-wrapper timeline-style-one position-relative">
        <div class="timeline-line"/>

        <div class="single-timeline mt--50"
             v-for="(timeline, index) in timelineData"
             :key="index">
            <div class="timeline-dot">
                <div class="time-line-circle"/>
            </div>
            <div class="single-content">
                <div class="inner">
                    <div class="row row--30 align-items-center">
                        <div class="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                            <div class="content">
                                <span class="date-of-timeline" data-aos="fade-up" data-aos-delay="50">
                                    {{ timeline.date }}
                                </span>
                                <h2 class="title" data-aos="fade-up" data-aos-delay="80">
                                    {{ timeline.title }}
                                </h2>
                                <p class="description" data-aos="fade-up" data-aos-delay="110">
                                    {{ timeline.description }}
                                </p>

                                <div class="row row--30">
                                    <div class="col-lg-6 col-md-6 col-12"
                                         v-for="(step, index) in timeline.workingStep"
                                         :key="index"
                                         data-aos="fade-up"
                                         data-aos-delay="140">
                                        <div class="working-list">
                                            <h5 class="working-title" data-aos="fade-up" data-aos-delay="60">
                                                {{ step.stepTitle }}
                                            </h5>
                                            <p data-aos="fade-up" data-aos-delay="60">
                                                {{ step.stepDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="read-morebtn">
                                    <a class="btn-default btn-large round"
                                       href="#"
                                       data-aos="fade-up"
                                       data-aos-delay="170">
                                        <span>Get Started Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="order-1 order-lg-2 col-lg-6">
                            <div class="thumbnail" data-aos="fade-up">
                                <img class="w-100"
                                     :src="require(`@/assets/images/timeline/${timeline.image}.jpg`)"
                                     alt="Corporate Vue Template"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="timelineStyle === 2 || timelineStyle === 3 || timelineStyle === 4" 
         class="timeline-style-two bg-color-blackest">
        <div class="row row--0">
            <div :class="`col-lg-3 col-md-3 rn-timeline-single ${checkTimelineStyle}`"
                 v-for="(timeline, index) in timelineData"
                 :key="index">
                <div class="rn-timeline">
                    <h6 class="title" data-aos="fade-up" data-aos-delay="60">
                        {{ timeline.title }}
                    </h6>
                    <div class="progress-line">
                        <div class="line-inner"/>
                    </div>
                    <div class="progress-dot">
                        <div class="dot-level">
                            <div class="dot-inner"/>
                        </div>
                    </div>
                    <p class="description" data-aos="fade-up" data-aos-delay="60">
                        {{ timeline.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Timeline',
        props: {
            timelineData: {},
            timelineStyle: {
                type: Number,
                default: 1
            }
        },
        computed: {
            checkTimelineStyle() {
                if (this.timelineStyle === 3) return 'no-gradient';
                else if (this.timelineStyle === 4) return 'dark-line';
                else return '';
            }
        }
    }
</script>