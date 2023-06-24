<template>
    <ul>
        <li v-if="index < 4" v-for="(post, index) in posts" :key="index">
            <router-link class="d-block" :to="'#'">{{ post.title }}</router-link>
            <span class="cate">{{ post.categories[0] }}</span>
        </li>
    </ul>
</template>

<script>
    import BlogPostMixin from '../../mixins/BlogPostMixin'

    export default {
        name: 'BlogSidebarPost',
        mixins: [BlogPostMixin]
    }
</script>