<template>
    <ul class="tagcloud">
        <router-link v-for="(tag, index) in tags"
                     :key="`${tag.slug}-${index}`"
                     :to="`#`">
            {{ tag.title }}
        </router-link>
    </ul>
</template>

<script>
    import BlogPostMixin from '../../mixins/BlogPostMixin'

    export default {
        name: 'BlogTags',
        mixins: [BlogPostMixin]
    }
</script>