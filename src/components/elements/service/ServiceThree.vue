<template>
    <div class="row row--15 service-wrapper">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12"
             v-for="(service, index) in serviceList"
             :key=index>
            <div data-aos="fade-up" data-aos-delay="70">
                <div :class="`service ${serviceStyle} ${checkTextAlign}`">
                    <div class="inner">
                        <div class="image">
                            <img :src="service.image" alt="Service Images"/>
                        </div>
                        <div class="content">
                            <h4 class="title">
                                <router-link to="/service-details" v-html="service.title"/>
                            </h4>
                            <p class="description b1 color-gray mb--0" v-html="service.description"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ServiceThree',
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
                        image: require('@/assets/images/service/icon-01.png'),
                        title: 'Awarded Design',
                        description: 'There are many variations variats of passages of Lorem Ipsum available, but the majority.'
                    },
                    {
                        image: require('@/assets/images/service/icon-02.png'),
                        title: 'Design & Creative',
                        description: 'Passages there are many variatin Lorem Ipsum available, but the majority have suffered.'
                    },
                    {
                        image: require('@/assets/images/service/icon-03.png'),
                        title: 'App Development',
                        description: 'Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority.'
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