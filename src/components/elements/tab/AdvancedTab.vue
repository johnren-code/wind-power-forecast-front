<template>
    <div :class="[
            `row row--30 align-items-center`,
            {'flex-row-reverse': tabStyle === 2},
            {'flex-column-reverse': tabStyle === 3},
        ]">
        <div :class="[
                {'col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30': tabStyle === 1 || tabStyle === 2},
                {'col-lg-10 offset-lg-1 mt--40': tabStyle === 3}
            ]">
            <div :class="[
                    `advance-tab-button advance-tab-button-1`,
                    {'right-align': tabStyle === 2},
                    {'right-top': tabStyle === 3},
                ]">
                <ul :class="[`nav nav-tabs tab-button-list`, {'row': tabStyle === 3}]" role="tablist">
                    <li :class="[`nav-item`, {'col-lg-4': tabStyle === 3}]"
                        role="presentation"
                        v-for="(tabMenu, index) in tabData.tabContent"
                        :key="index">
                        <button class="nav-link tab-button"
                                :class="{'active': index === 0}"
                                :id="`${tabMenu.menu}-tab`"
                                data-bs-toggle="tab"
                                :data-bs-target="`#${tabMenu.menu}`"
                                type="button"
                                role="tab"
                                :aria-controls="tabMenu.menu"
                                :aria-selected="index === activeTab ? 'true' : 'false'"
                                @click="activeTab = index">
                            <div class="tab">
                                <h4 class="title">{{ tabMenu.title }}</h4>
                                <p class="description">
                                    {{ tabMenu.description }}
                                </p>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="[
                {'col-lg-8 col-md-12 col-sm-12 col-12': tabStyle === 1 || tabStyle === 2},
                {'col-lg-10 offset-lg-1': tabStyle === 3}
            ]">
            <div class="tab-content">
                <div class="tab-pane fade advance-tab-content-1"
                     :class="{'show active': index === 0}"
                     :id="content.menu"
                     role="tabpanel"
                     :aria-labelledby="`${content.menu}-tab`"
                     v-for="(content, index) in tabData.tabContent"
                     :key="index">
                    <div :class="[`thumbnail`, {'text-center': tabStyle === 3}]">
                        <img :src="content.image" alt="Advance tab image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdvancedTab',
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