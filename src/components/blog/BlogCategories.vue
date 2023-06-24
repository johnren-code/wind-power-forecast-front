<template>
    <ul class="category-list">
        <li v-for="(category, index) in categories" :key="`${category.slug}-${index}`">
            <router-link :to="`/category/${category.slug}`">
                <span class="left-content">{{ category.title }}</span>
                <span class="count-text">{{ category.count }}</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import BlogPostMixin from '../../mixins/BlogPostMixin'

    export default {
        name: 'BlogCategories',
        mixins: [BlogPostMixin]
    }
</script>