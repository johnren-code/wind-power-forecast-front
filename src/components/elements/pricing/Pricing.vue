<template>
    <div :class="[
            `row justify-content-center`,
            {'row--30': pricingStyle === 1},
            {'row--15': pricingStyle === 2},
            {'row--0': pricingStyle === 3},
            {'row--0': pricingStyle === 4},
            {'row--15': pricingStyle === 5},
        ]">
        <div :class="[`col-md-6 col-12`, pricingStyle === 4 ? 'col-lg-3' : 'col-lg-4']"
             v-for="(pricing, index) in pricingData"
             :key="index"
             data-aos="fade-up"
             data-aos-delay="60">
            <div :class="[
                `rn-pricing`,
                {'active': pricing.isActive},
                {'style-2': pricingStyle === 2 || pricingStyle === 3},
                {'style-5': pricingStyle === 2 || pricingStyle === 5}
            ]">
                <div class="pricing-table-inner">
                    <div class="pricing-header">
                        <h4 class="title">{{ pricing.title }}</h4>
                        <div class="pricing">
                            <div class="price-wrapper">
                                <span class="currency">{{ pricing.currency }}</span>
                                <span class="price">{{ pricing.price }}</span>
                            </div>
                            <span class="subtitle">{{ pricing.subtitle }}</span>
                        </div>
                    </div>
                    <div class="pricing-body">
                        <ul class="list-style--1">
                            <li v-for="feature in pricing.features">
                                <template v-if="feature">
                                    <Icon name="check" size="18"/> {{ feature.title }}
                                </template>
                            </li>
                        </ul>
                    </div>
                    <div class="pricing-footer">
                        <a :class="[`btn-default`, {'btn-border': !pricing.isActive}]"
                           :href="pricing.btn.link ? pricing.btn.link : '#'">
                            {{ pricing.btn.text }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'

    export default {
        name: 'Pricing',
        props: {
            pricingData: {},
            pricingStyle: {
                type: Number,
                default: 1
            }
        },
        components: {Icon}
    }
</script>