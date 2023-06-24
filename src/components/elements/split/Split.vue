<template>
    <div v-if="splitStyle === 1" class="rn-splite-style">
        <div class="split-wrapper">
            <div class="row no-gutters radius-10 align-items-center">
                <div class="col-lg-12 col-xl-6 col-12">
                    <div class="thumbnail image-left-content">
                        <img :src="require(`@/assets/images/split/${splitData.image}`)" alt="Split Image"/>
                    </div>
                </div>
                <div class="col-lg-12 col-xl-6 col-12">
                    <div class="split-inner">
                        <h4 class="title">{{ splitData.title }}</h4>
                        <p class="description">{{ splitData.description }}</p>
                        <ul class="split-list">
                            <li v-for="listItem in splitData.list">{{ listItem }}</li>
                        </ul>
                        <div class="view-more-button mt--35">
                            <Button :title="splitData.btn.text" :url="splitData.btn.link"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="splitStyle === 2 || splitStyle === 3 || splitStyle === 4" 
         :class="[`rn-splite-style`, {'bg-color-blackest': splitStyle === 3 || splitStyle === 4}]">
        <div class="split-wrapper">
            <div class="row no-gutters radius-10 align-items-center">
                <div :class="[`col-lg-12 col-xl-6 col-12`, {'order-2': splitStyle === 4}]">
                    <div class="thumbnail">
                        <img :src="require(`@/assets/images/split/${splitData.image}`)" alt="Split Image"/>
                    </div>
                </div>
                <div :class="[`col-lg-12 col-xl-6 col-12`, {'order-1': splitStyle === 4}]">
                    <div class="split-inner">
                        <h4 class="title">{{ splitData.title }}</h4>
                        <p class="description">{{ splitData.description }}</p>
                        <Counter
                            :counter-style="5"
                            text-align="left"
                            :counter-data="splitData.counterData"
                            column="col-lg-6 col-md-6 col-sm-6 col-12"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '../button/Button'
    import Counter from '../counterUp/Counter'

    export default {
        name: 'Split',
        components: {Counter, Button},
        props: {
            splitStyle: {
                type: Number,
                default: 1
            },
            splitData: {}
        }
    }
</script>