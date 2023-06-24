<template>
    <div class="row row--15 service-wrapper">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12"
             v-for="(service, index) in serviceList"
             :key=index>
            <div :class="`service ${serviceStyle} ${checkTextAlign}`"
                 data-aos="fade-up"
                 data-aos-delay="70">
                <div class="icon">
                    <div class="line"/>
                    {{ service.icon }}
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
</template>

<script>
    export default {
        name: 'ServiceFour',
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
                        icon: '1',
                        title: 'Awarded Design',
                        description: 'There are many variations variations have.'
                    },
                    {
                        icon: '2',
                        title: 'Design & Creative',
                        description: 'Passages there are many variations have.'
                    },
                    {
                        icon: '3',
                        title: 'App Development',
                        description: 'Variations There variations many Lorem Ipsum.'
                    },
                    {
                        icon: '4',
                        title: 'Product Designer',
                        description: 'Variations There variations of Lorem Ipsum.'
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