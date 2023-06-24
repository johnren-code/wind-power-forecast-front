<template>
    <Layout>
        <div class="rwt-portfolio-details rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="inner">
                            <div class="details-list">
                                <div class="thumbnail alignwide">
                                    <img class="radius w-100" :src="portfolio.largeImage" alt="Corporate Image"/>
                                </div>

                                <div class="row mt--40 row--30">
                                    <div class="col-lg-6">
                                        <div class="content-left">
                                            <h4 class="title">{{ portfolio.title }}</h4>
                                            <div class="single-list-wrapper">
                                                <div class="single-list">
                                                    <label>Date:</label>
                                                    <span>{{ portfolio.date }}</span>
                                                </div>
                                                <div class="single-list">
                                                    <label>Client:</label>
                                                    <span>{{ portfolio.client }}</span>
                                                </div>
                                                <div class="single-list">
                                                    <label>Category:</label>
                                                    <span>{{ portfolio.category }}</span>
                                                </div>
                                            </div>
                                            <div class="view-btn mt--50">
                                                <a class="btn-default btn-large round" :href="portfolio.btn.link">
                                                    {{ portfolio.btn.buttonText }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mt_md--30 mt_sm--30">
                                        <div class="content-right">
                                            <h5 class="subtitle">{{ portfolio.subtitle }}</h5>
                                            <div class="description" v-html="portfolio.body"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-gallery mt--40">
                                <div class="gallery mt--30">
                                    <div class="thumbnail">
                                        <img class="radius w-100" :src="portfolio.gallery.imageOne"
                                             alt="Corporate Image"/>
                                    </div>
                                </div>
                                <div class="gallery mt--30">
                                    <div class="thumbnail">
                                        <img class="radius w-100" :src="portfolio.gallery.imageTwo"
                                             alt="Corporate Image"/>
                                    </div>
                                </div>
                                <div class="gallery mt--30">
                                    <div class="thumbnail">
                                        <img class="radius w-100" :src="portfolio.gallery.imageThree"
                                             alt="Corporate Image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import PortfolioItemMixin from '../mixins/PortfolioItemMixin'

    export default {
        name: 'PortfolioDetailsPage',
        components: {Layout},
        mixins: [PortfolioItemMixin],
        data() {
            return {
                id: this.$route.params.id,
                portfolio: {}
            }
        },
        methods: {
            getPortfolio(portfolioId) {
                this.portfolio = this.portfolioItems.find(item => item.id == portfolioId);
            }
        },
        created() {
            this.getPortfolio(this.id);
        }
    }
</script>