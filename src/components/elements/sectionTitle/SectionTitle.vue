<template>
    <div v-if="sectionTitleStyle === 1" class="section-title" :class="checkTextAlign">
        <h4 class="subtitle">
            <span class="theme-gradient" v-html="subtitle"/>
        </h4>
        <h2 class="title w-600" v-html="title"/>
        <p v-if="description" class="description b1" v-html="description"/>
    </div>

    <div v-else-if="sectionTitleStyle === 2" :class="`section-title-2 ${checkTextAlign}`">
        <h2 class="title">{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'SectionTitle',
        props: {
            subtitle: {
                type: String,
                default: null
            },
            title: {
                type: String,
                default: null
            },
            description: {
                type: String,
                default: null
            },
            textAlign: {
                type: String,
                default: 'left'
            },
            sectionTitleStyle: {
                type: Number,
                default: 1
            }
        },
        computed: {
            checkTextAlign() {
                if (this.textAlign === 'left') return 'text-start';
                else if (this.textAlign === 'center') return 'text-center';
                else if (this.textAlign === 'end') return 'text-end';
                else return '';
            }
        },
    }
</script>