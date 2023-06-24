<template>
    <Layout>
        <Breadcrumb :title="category" current-url="Blog List"/>

        <div class="rn-blog-area rn-section-gap">
            <div class="container">
                <div class="row mt_dec--30">
                    <div class="col-lg-12">
                        <div class="row row--15">
                            <div class="col-lg-4 col-md-6 col-12 mt--30"
                                 data-aos="slide-up"
                                 data-aos-duration="800"
                                 :data-aos-delay="100 + index"
                                 v-for="(blog, index) in categoryPosts"
                                 :key="index">
                                <BlogPost :blog="blog"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from '../common/Layout'
    import Breadcrumb from '../elements/breadcrumb/Breadcrumb'
    import BlogPost from './BlogPost'
    import Icon from '../icon/Icon'
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    import AppFunctions from '../../helpers/AppFunctions'

    export default {
        name: "BlogCategoryPosts",
        components: {Icon, BlogPost, Breadcrumb, Layout},
        mixins: [BlogPostMixin],
        data() {
            return {
                category: this.$route.params.slug,
                categoryPosts: [],
                AppFunctions
            }
        },
        methods: {
            getCategoryPosts() {
                this.categoryPosts = this.posts.map(blog => {
                    return {
                        ...blog,
                        categories: blog.categories.filter(data => AppFunctions.slugify(data) === this.category)
                    }
                }).filter(blog => blog.categories.length > 0);
            }
        },
        mounted() {
            this.getCategoryPosts();
        }
    }
</script>