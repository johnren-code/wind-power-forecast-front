<template>
    <Layout>
        <!-- Start Elements Area -->
        <div class="rwt-pricingtable-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Pricing Table"
                            title="Advance Pricing Table"
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row mt--30">
                    <div class="col-lg-8 offset-lg-2">
                        <AdvancePricing/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
    import Layout from "../components/common/Layout";
    import Breadcrumb from "../components/elements/breadcrumb/Breadcrumb";
    import SectionTitle from "../components/elements/sectionTitle/SectionTitle";
    import AdvancePricing from "../components/elements/pricing/AdvancePricing";

    export default {
        name: 'AdvancePricingPage',
        components: {AdvancePricing, SectionTitle, Breadcrumb, Layout}
    }
</script>