<template>
    <aside class="rwt-sidebar">
        <div class="rbt-single-widget widget_search mt--40">
            <div class="inner">
                <form class="blog-search" action="#">
                    <input type="text" placeholder="Search ..."/>
                    <button class="search-button">
                        <Icon name="search" size="20"/>
                    </button>
                </form>
            </div>
        </div>

        <!-- Start Single Widget -->
        <div class="rbt-single-widget widget_categories mt--40">
            <h3 class="title">Categories</h3>
            <div class="inner">
                <BlogCategories/>
            </div>
        </div>
        <!-- End Single Widget -->

        <!-- Start Single Widget -->
        <div class="rbt-single-widget widget_recent_entries mt--40">
            <h3 class="title">Post</h3>
            <div class="inner">
                <BlogSidebarPost/>
            </div>
        </div>
        <!-- End Single Widget -->

        <!-- Start Single Widget -->
        <div class="rbt-single-widget widget_tag_cloud mt--40">
            <h3 class="title">Tags</h3>
            <div class="inner mt--20">
                <BlogTags/>
            </div>
        </div>
        <!-- End Single Widget -->
    </aside>
</template>

<script>
    import Icon from '../icon/Icon'
    import BlogCategories from './BlogCategories'
    import BlogSidebarPost from './BlogSidebarPost'
    import BlogSidebarArchive from './BlogSidebarArchive'
    import BlogTags from './BlogTags'

    export default {
        name: 'BlogSidebar',
        components: {BlogTags, BlogSidebarArchive, BlogSidebarPost, BlogCategories, Icon}
    }
</script>