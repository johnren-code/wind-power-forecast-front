<template>
    <div class="row row--15 service-wrapper">
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
             v-for="(service, index) in serviceList"
             :key=index>
            <div :class="`card-box ${cardStyle} ${checkTextAlign}`"
                 data-aos="fade-up"
                 data-aos-delay="70">
                <div class="inner">
                    <div class="image">
                        <router-link to="/service-details">
                            <img :src="service.image" alt="card Images"/>
                        </router-link>
                    </div>
                    <div class="content">
                        <h4 class="title mb--20">
                            <router-link to="/service-details" v-html="service.title"/>
                        </h4>
                        <p class="description b1 color-gray mb--0" v-html="service.description"/>
                        <router-link class="btn-default btn-small btn-border" to="/service-details">
                            Read More
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ServiceTwo',
        props: {
            cardStyle: {
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
                        image: require('@/assets/images/service/service-01.jpg'),
                        title: 'Awarded Design',
                        description: 'There are many variations variats  of passages of Lorem Ipsum available.'
                    },
                    {
                        image: require('@/assets/images/service/service-02.jpg'),
                        title: 'Design & Creative',
                        description: 'Passages there are many variatin Lorem Ipsum available majority suffered.'
                    },
                    {
                        image: require('@/assets/images/service/service-03.jpg'),
                        title: 'App Development',
                        description: 'Variations There are many of pass ages of Lorem Ipsum available the majority.'
                    },
                    {
                        image: require('@/assets/images/service/service-04.jpg'),
                        title: 'Web Design',
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