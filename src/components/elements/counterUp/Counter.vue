<template>
    <div v-if="counterStyle === 1" class="row">
        <div :class="`${column}`"
             v-for="(counter, index) in counterData"
             :key="index">
            <div :class="`count-box counter-style-1 ${checkTextAlign}`">
                <VisibilitySensor @change="onChange">
                    <div class="count-number">
                        <countTo
                            :endVal="status ? counter.number : 0"
                            :autoplay="countUp"
                            :duration="3000"
                        />
                    </div>
                </VisibilitySensor>
                <h5 class="title">{{ counter.title }}</h5>
            </div>
        </div>
    </div>

    <div v-else-if="counterStyle === 2" class="row">
        <div :class="`${column}`"
             v-for="(counter, index) in counterData"
             :key="index">
            <div :class="`count-box counter-style-2 ${checkTextAlign}`">
                <VisibilitySensor @change="onChange">
                    <div class="count-number">
                        <countTo
                            :endVal="status ? counter.number : 0"
                            :autoplay="countUp"
                            :duration="3000"
                        />
                    </div>
                </VisibilitySensor>
                <h5 class="title">{{ counter.title }}</h5>
                <p class="description">{{ counter.description }}</p>
            </div>
        </div>
    </div>

    <div v-else-if="counterStyle === 3" class="row">
        <div :class="`${column}`"
             v-for="(counter, index) in counterData"
             :key="index">
            <div :class="`count-box counter-style-2 color-variation ${checkTextAlign}`">
                <VisibilitySensor @change="onChange">
                    <div class="count-number">
                        <countTo
                            :endVal="status ? counter.number : 0"
                            :autoplay="countUp"
                            :duration="3000"
                        />
                    </div>
                </VisibilitySensor>
                <h5 class="title">{{ counter.title }}</h5>
                <p class="description">{{ counter.description }}</p>
            </div>
        </div>
    </div>

    <div v-else-if="counterStyle === 4" class="row">
        <div :class="`${column}`"
             v-for="(counter, index) in counterData"
             :key="index">
            <div :class="`count-box counter-style-2 border-style ${checkTextAlign}`">
                <VisibilitySensor @change="onChange">
                    <div class="count-number">
                        <countTo
                            :endVal="status ? counter.number : 0"
                            :autoplay="countUp"
                            :duration="3000"
                        />
                    </div>
                </VisibilitySensor>
                <h5 class="title">{{ counter.title }}</h5>
                <p class="description">{{ counter.description }}</p>
            </div>
        </div>
    </div>

    <div v-else-if="counterStyle === 5" class="row">
        <div :class="`${column}`"
             v-for="(counter, index) in counterData"
             :key="index">
            <div :class="`count-box counter-style-4 ${checkTextAlign}`">
                <VisibilitySensor @change="onChange">
                    <div class="count-number">
                        <countTo
                            :endVal="status ? counter.number : 0"
                            :autoplay="countUp"
                            :duration="3000"
                        />
                    </div>
                </VisibilitySensor>
                <h5 class="counter-title">{{ counter.title }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    import VisibilitySensor from 'vue-visibility-sensor'
    import countTo from 'vue-count-to'

    export default {
        name: 'Counter',
        components: {VisibilitySensor, countTo},
        props: {
            column: {},
            counterData: {},
            counterStyle: {
                type: Number,
                default: 1
            },
            textAlign: {
                type: String,
                default: 'left'
            }
        },
        data() {
            return {
                countUp: true,
                status: false
            }
        },
        computed: {
            checkTextAlign() {
                if (this.textAlign === 'left') return 'text-start';
                else if (this.textAlign === 'center') return 'text-center';
                else if (this.textAlign === 'end') return 'text-end';
                else return '';
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