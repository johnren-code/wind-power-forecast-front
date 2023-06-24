<template>
    <div class="row row--15 service-wrapper">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12"
             v-for="(service, index) in serviceList"
             :key="index">
            <div :class="`service ${serviceStyle} ${checkTextAlign}`"
                 data-aos="fade-up"
                 data-aos-delay="70">
                <div class="inner">
                    <div class="content">
                        <h4 class="title">
                            <router-link to="/service-details" v-html="service.title"/>
                        </h4>
                        <p class="description" v-html="service.description"/>
                    </div>
                    <div class="image">
                        <img :src="service.image" alt="Service Images"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ServiceFive',
        props: {
            serviceStyle: {
                type: String
            },
            textAlign: {
                type: String,
                default: 'left'
            }
        },
        data() {
            return {
                serviceList: [
                    {
                        image: require('@/assets/images/service/gallery-image-01.png'),
                        title: 'Awarded Design',
                        description: 'There are many variations variants of passages of Lorem Ipsum available.'
                    },
                    {
                        image: require('@/assets/images/service/gallery-image-02.png'),
                        title: 'Design & Creative',
                        description: 'Passages there are many variants Lorem Ipsum available majority suffered.'
                    },
                    {
                        image: require('@/assets/images/service/gallery-image-03.png'),
                        title: 'App Development',
                        description: 'Variations There are many of pass ages of Lorem Ipsum available the majority.'
                    }
                ]
            }
        },
        computed: {
            checkTextAlign() {
                if (this.textAlign === 'left') return 'text-start';
                else if (this.textAlign === 'center') return 'text-center';
                else if (this.textAlign === 'end') return 'text-end';
                else return '';
            }
        }
    }
</script>