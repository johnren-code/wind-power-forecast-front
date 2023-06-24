<template>
    <div v-if="testimonialStyle === 1 || testimonialStyle === 2 || testimonialStyle === 3"
         data-aos="fade-up" data-aos-delay="60">
        <div :class="`rn-box-card ${checkTestimonialStyle}`">
            <div class="inner">
                <figure class="thumbnail">
                    <img :src="require(`@/assets/images/testimonial/${testimonial.image}.jpg`)"
                         alt="Testimonial image"/>
                </figure>
                <figcaption class="content">
                    <p class="description">{{ testimonial.description }}</p>
                    <h2 class="title">{{ testimonial.name }}</h2>
                    <h6 class="subtitle theme-gradient">{{ testimonial.designation }}</h6>
                </figcaption>
            </div>
        </div>
    </div>

    <div v-else-if="testimonialStyle === 4" class="row">
        <div class="col-lg-12 mt--30">
            <div class="testimonial-style-two">
                <div class="row align-items-center row--20">
                    <div class="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                        <div class="content mt_sm--40">
                            <span class="form">{{ testimonial.form }}</span>
                            <p class="description">{{ testimonial.description }}</p>
                            <div class="client-info">
                                <h4 class="title">{{ testimonial.name }}</h4>
                                <h6 class="subtitle">{{ testimonial.subtitle }}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="order-1 order-md-2 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img class="w-100"
                                 :src="require(`@/assets/images/testimonial/${testimonial.image}.jpg`)"
                                 alt="Testimonial image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="testimonialStyle === 5"
         class="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60">
        <VueSlickCarousel v-bind="sliderSetting">
            <div v-for="(item, index) in testimonial" :key="index">
                <div class="testimonial-style-two">
                    <div class="row align-items-center row--20">
                        <div class="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                            <div class="content mt_sm--40">
                                <span class="form">{{ item.form }}</span>
                                <p class="description">{{ item.description }}</p>
                                <div class="client-info">
                                    <h4 class="title">{{ item.name }}</h4>
                                    <h6 class="subtitle">{{ item.subtitle }}</h6>
                                </div>
                            </div>
                        </div>
                        <div class="order-1 order-md-2 col-lg-4 col-md-4">
                            <div class="thumbnail">
                                <img class="w-100"
                                     :src="require(`@/assets/images/testimonial/${item.image}.jpg`)"
                                     alt="Testimonial image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'

    export default {
        name: 'Testimonial',
        components: {VueSlickCarousel},
        props: {
            testimonial: {},
            testimonialStyle: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                sliderSetting: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 993,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 580,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                }
            }
        },
        computed: {
            checkTestimonialStyle() {
                if (this.testimonialStyle === 1) return 'card-style-default testimonial-style-one';
                else if (this.testimonialStyle === 2) return 'card-style-default testimonial-style-one style-two';
                else if (this.testimonialStyle === 3) return 'card-style-default testimonial-style-one style-two border-gradient';
                else return '';
            }
        }
    }
</script>