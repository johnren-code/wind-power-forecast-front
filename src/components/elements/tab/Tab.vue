<template>
    <div v-if="tabStyle === 1 || tabStyle === 2"
         class="row row row--30 align-items-center">
        <div class="col-lg-5">
            <img class="radius-small"
                 :src="require(`@/assets/images/tab/${tabData.tabImage}`)"
                 alt="Tab Image">
        </div>
        <div class="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1">
            <div :class="[`rn-default-tab`, {'style-two': tabStyle === 2}]">
                <ul class="nav nav-tabs tab-button" role="tablist">
                    <li class="nav-item tabs__tab"
                        role="presentation"
                        v-for="(tabMenu, index) in tabData.tabContent"
                        :key="index">
                        <button class="nav-link text-capitalize"
                                :class="{'active': index === 0}"
                                :id="`${tabMenu.menu}-tab`"
                                data-bs-toggle="tab"
                                :data-bs-target="`#${tabMenu.menu}`"
                                type="button"
                                role="tab"
                                :aria-controls="tabMenu.menu"
                                :aria-selected="index === activeTab ? 'true' : 'false'"
                                @click="activeTab = index">
                            {{ tabMenu.menu }}
                        </button>
                    </li>
                </ul>
                <div class="rn-tab-content tab-content">
                    <div class="tab-pane fade"
                         :class="{'show active': index === 0}"
                         :id="content.menu"
                         role="tabpanel"
                         :aria-labelledby="`${content.menu}-tab`"
                         v-for="(content, index) in tabData.tabContent"
                         :key="index">
                        <div v-html="content.content"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="tabStyle === 3" class="rn-default-tab style-three">
        <ul class="nav nav-tabs tab-button" role="tablist">
            <li class="nav-item tabs__tab"
                role="presentation"
                v-for="(tabMenu, index) in tabData"
                :key="index">
                <button class="nav-link text-capitalize"
                        :class="{'active': index === 0}"
                        :id="`${tabMenu.id}-tab`"
                        data-bs-toggle="tab"
                        :data-bs-target="`#${tabMenu.id}`"
                        type="button"
                        role="tab"
                        :aria-controls="tabMenu.id"
                        :aria-selected="index === activeTab ? 'true' : 'false'"
                        @click="activeTab = index">
                    {{ tabMenu.text }}
                </button>
            </li>
        </ul>

        <div class="rn-tab-content tab-content">
            <div class="tab-pane fade"
                 :class="{'show active': index === 0}"
                 :id="content.id"
                 role="tabpanel"
                 :aria-labelledby="`${content.id}-tab`"
                 v-for="(content, index) in tabData"
                 :key="index">
                <div class="inner">
                    <div class="row align-items-center row--30">
                        <div v-if="index !== tabData.length - 1" class="col-lg-4">
                            <div class="section-title">
                                <h4 class="title">How can we help you?</h4>
                                <p>
                                    There are many variations variats of passages of Lorem Ipsum
                                    available many variations variats of passages of Lorem Ipsum
                                    available.
                                </p>
                                <div class="read-more">
                                    <a class="btn-default btn-small" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div :class="index !== tabData.length - 1 ? 'col-lg-8 mt_md--30 mt_sm--30' : 'col-lg-12 mt_md--30 mt_sm--30'">
                            <div class="row row--15 mt_dec--30 service-wrapper">
                                <div :class="content.dataList.length === 2 ? 'col-lg-6 col-md-6 col-sm-6 col-12' : 'col-lg-4 col-md-6 col-sm-6 col-12'"
                                     v-for="(service, index) in content.dataList"
                                     :key="`service-${index}`">
                                    <div class="card-box card-style-1 text-left">
                                        <div class="inner">
                                            <div class="image">
                                                <router-link to="#">
                                                    <img :src="require(`@/assets/images/service/${service.image}`)" alt="Card Images">
                                                </router-link>
                                            </div>
                                            <div class="content">
                                                <h4 class="title mb--20">
                                                    <router-link to="#">
                                                        {{ service.title }}
                                                    </router-link>
                                                </h4>
                                                <p class="description b1 color-gray mb--0">
                                                    {{ service.description }}
                                                </p>
                                                <router-link class="btn-default btn-small" to="#">
                                                    Read More
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tab',
        props: {
            tabData: {},
            tabStyle: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                activeTab: 0
            }
        }
    }
</script>