<template>
    <Layout>
        <!-- Start Elements Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row mb--40 mb_sm--0">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Pricing"
                            title="Pricing Style One"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingOneData"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row mb--40 mb_sm--0">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Pricing"
                            title="Pricing Style Two"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingTwoData" :pricing-style="2"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row mb--40 mb_sm--0">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Pricing"
                            title="Pricing Style Three"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingThreeData" :pricing-style="3"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="wrapper plr--100 plr_md--15 plr_sm--15">
                <div class="row mb--40 mb_sm--0">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Pricing"
                            title="Pricing Style Four"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingFourData" :pricing-style="4"/>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-pricing-area rn-section-gap">
            <div class="container">
                <div class="row mb--40 mb_sm--0">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Pricing"
                            title="Pricing Style Five"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Pricing :pricing-data="pricingFiveData" :pricing-style="5"/>
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Separator from '../components/elements/separator/Separator'
    import Pricing from '../components/elements/pricing/Pricing'

    export default {
        name: 'PricingPage',
        components: {Pricing, Separator, SectionTitle, Breadcrumb, Layout},
        data() {
            return {
                pricingOneData: [
                    {
                        title: 'Free',
                        currency: '$',
                        price: '29',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Digital Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    },
                    {
                        title: 'Business',
                        currency: '$',
                        price: '50',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Keep 100% Royalties'},
                            {title: 'App Development'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        },
                        isActive: true
                    },
                    {
                        title: 'Advanced',
                        currency: '$',
                        price: '100',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'SEO Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'Application Manage'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    }
                ],
                pricingTwoData: [
                    {
                        title: 'Free',
                        currency: '$',
                        price: '29',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Digital Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    },
                    {
                        title: 'Business',
                        currency: '$',
                        price: '50',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Keep 100% Royalties'},
                            {title: 'App Development'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        },
                        isActive: true
                    },
                    {
                        title: 'Advanced',
                        currency: '$',
                        price: '100',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'SEO Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'Application Manage'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    }
                ],
                pricingThreeData: [
                    {
                        title: 'Free',
                        currency: '$',
                        price: '29',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Digital Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    },
                    {
                        title: 'Business',
                        currency: '$',
                        price: '50',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Keep 100% Royalties'},
                            {title: 'App Development'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        },
                        isActive: true
                    }
                ],
                pricingFourData: [
                    {
                        title: 'Free',
                        currency: '$',
                        price: '29',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Digital Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    },
                    {
                        title: 'Business',
                        currency: '$',
                        price: '50',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Keep 100% Royalties'},
                            {title: 'App Development'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        },
                        isActive: true
                    },
                    {
                        title: 'Advanced',
                        currency: '$',
                        price: '100',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '50 PPC Campaigns'},
                            {title: 'SEO Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'Application Manage'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        },
                    },
                    {
                        title: 'Premium',
                        currency: '$',
                        price: '500',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '100 PPC Campaigns'},
                            {title: 'SEO Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'Application Manage'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    },
                ],
                pricingFiveData: [
                    {
                        title: 'Basic Plan',
                        currency: '$',
                        price: '29',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Digital Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    },
                    {
                        title: 'Standard Plan',
                        currency: '$',
                        price: '50',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Keep 100% Royalties'},
                            {title: 'App Development'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        },
                        isActive: true
                    },
                    {
                        title: 'Advanced Plan',
                        currency: '$',
                        price: '500',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'SEO Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'Application Manage'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '/'
                        }
                    }
                ],
            }
        }
    }
</script>