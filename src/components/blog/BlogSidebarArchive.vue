<template>
    <ul>
        <li v-for="(archive, index) in posts" :key="index">
            <span class="cate">{{ archive.publishedAt }}</span>
        </li>
    </ul>
</template>

<script>
    import BlogPostMixin from '../../mixins/BlogPostMixin'

    export default {
        name: 'BlogSidebarArchive',
        mixins: [BlogPostMixin]
    }
</script>