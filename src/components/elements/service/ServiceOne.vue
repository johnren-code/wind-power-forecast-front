<template>
    <div class="row row--15 service-wrapper">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12"
             v-for="(service, index) in serviceList"
             :key=index>
            <div :class="`service ${serviceStyle} ${checkTextAlign}`"
                 data-aos="fade-up"
                 data-aos-delay="70">
                <div class="icon">
                    <Icon :name="service.icon" :class="`size-${iconSize}`"/>
                </div>
                <div class="content">
                    <h4 class="title w-600">
                        <router-link to="/service-details" v-html="service.title"/>
                    </h4>
                    <p class="description b1 color-gray mb--0" v-html="service.description"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'

    export default {
        name: 'ServiceOne',
        components: {Icon},
        props: {
            serviceStyle: {
                type: String
            },
            iconSize: {
                type: String|Number,
                default: 62
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
                        icon: 'activity',
                        title: 'Awarded Design',
                        description: 'There are many variations variations  of passages of Lorem Ipsum available, but the majority have suffered.'
                    },
                    {
                        icon: 'cast',
                        title: 'Design & Creative',
                        description: 'Passages there are many variations variations  of of Lorem Ipsum available, but the majority have suffered.'
                    },
                    {
                        icon: 'map',
                        title: 'App Development',
                        description: 'Variations There are many variations  of passages of Lorem Ipsum available, but the majority have suffered.'
                    },
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