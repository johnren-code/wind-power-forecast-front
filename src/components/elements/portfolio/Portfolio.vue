<template>
    <div>
        <div class="row row--15">
            <div class="col-lg-12">
                <ul class="nav nav-pills rwt-portfolio-filter filter-button-default liststyle mb--20"
                    id="pills-tab"
                    role="tablist"
                    data-aos="fade-up">
                    <li class="nav-item list-item"
                        role="presentation"
                        v-for="(filter, index) in filters"
                        :key="`tab-button-${filter.id}`">
                        <button class="nav-link"
                                :class="{'active': index === 0}"
                                :id="`pills-${filter.text}-tab`"
                                data-bs-toggle="pill"
                                :data-bs-target="`#pills-${filter.text}`"
                                type="button"
                                role="tab"
                                :aria-controls="`pills-${filter.text}`"
                                :aria-selected="index === activeTab ? 'true' : 'false'"
                                @click="activeTab = index">
                            {{ filter.text }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade"
                 :class="{'show active': index === 0}"
                 :id="`pills-${filter.text}`"
                 role="tabpanel"
                 :aria-labelledby="`pills-${filter.text}-tab`"
                 v-for="(filter, index) in filters"
                 :key="`tab-pane-${filter.id}`">
                <div class="row row--15">
                    <template v-if="filter.text === 'all'" v-for="(portfolio, index) in portfolioData">
                        <div :class="`${column} portfolio`" data-aos="fade-up">
                            <div class="rwt-card">
                                <div class="inner">
                                    <div class="thumbnail">
                                        <figure class="card-image">
                                            <router-link :to="`/portfolio-details/${portfolio.id}`">
                                                <img class="img-fluid" :src="portfolio.portfolioImage" alt="Portfolio-01"/>
                                            </router-link>
                                        </figure>
                                        <router-link :to="`/portfolio-details/${portfolio.id}`" class="rwt-overlay"></router-link>
                                    </div>
                                    <div class="content">
                                        <h5 class="title mb--10">
                                            <router-link :to="`/portfolio-details/${portfolio.id}`">
                                                {{ portfolio.title }}
                                            </router-link>
                                        </h5>
                                        <span class="subtitle b2 text-capitalize">{{ portfolio.category }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-if="filter.text !== 'all' && filter.text === portfolio.category"
                              v-for="(portfolio, index) in portfolioData">
                        <div :class="`${column} portfolio`">
                            <div class="rwt-card">
                                <div class="inner">
                                    <div class="thumbnail">
                                        <figure class="card-image">
                                            <router-link :to="`/portfolio-details/${portfolio.id}`">
                                                <img class="img-fluid" :src="portfolio.portfolioImage" alt="Portfolio-01"/>
                                            </router-link>
                                        </figure>
                                        <router-link :to="`/portfolio-details/${portfolio.id}`" class="rwt-overlay"></router-link>
                                    </div>
                                    <div class="content">
                                        <h5 class="title mb--10">
                                            <router-link :to="`/portfolio-details/${portfolio.id}`">
                                                {{ portfolio.title }}
                                            </router-link>
                                        </h5>
                                        <span class="subtitle b2 text-capitalize">{{ portfolio.category }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="row row--15">
            <div class="col-lg-12 text-center">
                <div class="rwt-load-more text-center mt--60" data-aos="fade-up">
                    <a :class="buttonClass" href="#">
                        Load More <Icon name="loader" icon-class="icon"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'

    export default {
        name: 'Portfolio',
        components: {Icon},
        props: {
            portfolioData: {},
            buttonClass: {
                type: String,
                default: 'btn btn-default btn-large btn-icon'
            },
            column: {
                type: String,
                default: 'col-lg-6 col-md-6 col-sm-12 col-12 mt--30'
            }
        },
        data() {
            return {
                filters: [
                    {
                        id: 1,
                        text: 'all',
                    },
                    {
                        id: 2,
                        text: 'design',
                    },
                    {
                        id: 3,
                        text: 'art',
                    },
                    {
                        id: 4,
                        text: 'development',
                    }
                ],
                activeFilter: '',
                activeTab: 0
            }
        }
    }
</script>