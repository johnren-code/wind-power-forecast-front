<template>
    <div v-if="progressStyle === 1" class="row row--30">
        <div :class="customColumn" data-aos="fade-up">
            <div class="rbt-progress-style-1 mt--10">
                <div class="single-progress"
                     v-for="(progress, index) in progressData"
                     :key="index">
                    <h6 class="title">{{ progress.title }}</h6>
                    <VisibilitySensor @change="onChange">
                        <div class="progress">
                            <div :class="`progress-bar ${progress.progressClass}`"
                                 role="progressbar"
                                 :style="status ? `width: ${progress.percentage}%` : `width: 0%`"
                                 :aria-valuenow="progress.percentage"
                                 aria-valuemin="0"
                                 aria-valuemax="100"/>
                            <span class="progress-number">{{ progress.percentage }}%</span>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="progressStyle === 2" class="row row--30 mt--20">
        <div :class="customColumn" data-aos="fade-up">
            <div class="rbt-progress-style-1 mt--10">
                <div class="single-progress"
                     v-for="(progress, index) in progressData"
                     :key="index">
                    <h6 class="title">{{ progress.title }}</h6>
                    <VisibilitySensor @change="onChange">
                        <div class="progress">
                            <div class="progress-bar"
                                 role="progressbar"
                                 :style="status ? `width: ${progress.percentage}%` : `width: 0%`"
                                 :aria-valuenow="progress.percentage"
                                 aria-valuemin="0"
                                 aria-valuemax="100"/>
                            <span class="progress-number">{{ progress.percentage }}%</span>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="progressStyle === 3" class="row row--30 mt--20">
        <div :class="customColumn" data-aos="fade-up">
            <div class="rbt-progress-style-1 mt--10">
                <div class="single-progress"
                     v-for="(progress, index) in progressData"
                     :key="index">
                    <h6 class="title">{{ progress.title }}</h6>
                    <VisibilitySensor @change="onChange">
                        <div class="progress">
                            <div class="progress-bar bar-gradiand"
                                 role="progressbar"
                                 :style="status ? `width: ${progress.percentage}%` : `width: 0%`"
                                 :aria-valuenow="progress.percentage"
                                 aria-valuemin="0"
                                 aria-valuemax="100"/>
                            <span class="progress-number">{{ progress.percentage }}%</span>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="progressStyle === 4" class="row row--30 mt--20">
        <div :class="customColumn" data-aos="fade-up">
            <div class="rbt-progress-style-1 mt--10">
                <div class="single-progress large-size  no-radius"
                     v-for="(progress, index) in progressData"
                     :key="index">
                    <h6 class="title">{{ progress.title }}</h6>
                    <VisibilitySensor @change="onChange">
                        <div class="progress">
                            <div class="progress-bar"
                                 role="progressbar"
                                 :style="status ? `width: ${progress.percentage}%` : `width: 0%`"
                                 :aria-valuenow="progress.percentage"
                                 aria-valuemin="0"
                                 aria-valuemax="100"/>
                            <span class="progress-number">{{ progress.percentage }}%</span>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="progressStyle === 5" class="row row--30 mt--20">
        <div :class="column"
             v-for="(progress, index) in progressData"
             :key="index"
             data-aos="fade-up">
            <div class="radial-progress-single">
                <VisibilitySensor @change="onChange">
                    <vue-easy-pie-chart
                        class="radial-progress"
                        :percent="status ? progress.percentage : 0"
                        :bar-color="progress.strokePath"
                        :track-color="progress.strokeColor"
                        scale-color="transparent"
                        :line-width="10"
                        :size="220">
                        <div class="circle-text">
                            <span class="count">{{ progress.percentage }}</span>
                        </div>
                    </vue-easy-pie-chart>
                </VisibilitySensor>
                <div class="circle-info">
                    <h4 class="title">{{ progress.title }}</h4>
                    <h6 class="subtitle">{{ progress.subtitle }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VisibilitySensor from 'vue-visibility-sensor'
    import VueEasyPieChart from 'vue-easy-pie-chart'

    export default {
        name: 'Progressbar',
        props: {
            progressData: {},
            progressStyle: {
                type: Number,
                default: 1
            },
            column: {
                type: String,
                default: 'rbt-progress-style-1 mt--10'
            },
            customColumn: {
                type: String,
                default: 'col-lg-10 offset-lg-1'
            }
        },
        components: {VisibilitySensor, VueEasyPieChart},
        data() {
            return {
                status: false
            }
        },
        methods: {
            onChange(isVisible) {
                if (isVisible) {
                    this.status = true;
                }
            }
        }
    }
</script>