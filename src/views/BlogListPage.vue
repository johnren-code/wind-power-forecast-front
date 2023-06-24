<template>
    <Layout>
        <Breadcrumb title="Blog List Style" current-url="Blog List"/>

        <div class="rn-blog-area rn-section-gap">
            <div class="container">
                <div class="row mt_dec--30">
                    <div class="col-lg-12">
                        <div class="row row--15">
                            <div class="col-lg-6 mt--30"
                                 data-aos="slide-up"
                                 data-aos-duration="800"
                                 :data-aos-delay="100 + index"
                                 v-for="(blog, index) in posts"
                                 :key="index">
                                <BlogPost :blog="blog" blog-post-style="list"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 text-center">
                        <div class="rwt-load-more text-center mt--60">
                            <a class="btn-default" href="#">
                                View More Post <Icon name="loader"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Icon from '../components/icon/Icon'
    import BlogPost from '../components/blog/BlogPost'
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import BlogPostMixin from '../mixins/BlogPostMixin'

    export default {
        name: 'BlogListPage',
        components: {Icon, BlogPost, Layout, Breadcrumb},
        mixins: [BlogPostMixin]
    }
</script>