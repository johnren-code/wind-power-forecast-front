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
                        title: '软件优势',
                        description: '提供美观且简介的可视化展示功能，将预测结果以直观的图表实时展示，供运维人员实时监控风电场的发电状态。帮助运维人员做出及时的调度和处理，保障风电场的稳定运行和发电效率'
                    },
                    {
                        icon: 'cast',
                        title: '数据处理优势',
                        description: '收集大量风电场运行数据、气象数据及其他环境数据。同时支持实时上传数据。实现智能的数据预处理和清洗，排除异常数据和噪声，确保数据的准确性和完整性。提高数据的质量和时效性。'
                    },
                  {
                    icon: 'map',
                    title: '算法优势',
                    description: '支持使用深度学习技术构建的高效功率预测模型TSModel。可以更好地适应不同风电场的复杂性和变化性，提高预测精度和稳定性，提升预测性能。'
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