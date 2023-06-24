<template>
    <Layout>
        <Breadcrumb title="Blog Grid Style" current-url="Blog Grid"/>

        <div class="rn-blog-area rn-section-gap">
            <div class="container">
                <div class="row mt_dec--30">
                    <div class="col-lg-12">
                        <div class="row row--15">
                            <div class="col-lg-4 col-md-6 col-12 mt--30"
                                 data-aos="slide-up"
                                 data-aos-duration="800"
                                 :data-aos-delay="100 + index"
                                 v-for="(blog, index) in posts"
                                 :key="index">
                                <BlogPost :blog="blog"/>
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
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import BlogPost from '../components/blog/BlogPost'
    import Icon from '../components/icon/Icon'
    import BlogPostMixin from '../mixins/BlogPostMixin'

    export default {
        name: 'BlogGridPage',
        components: {Icon, BlogPost, Layout, Breadcrumb},
        mixins: [BlogPostMixin]
    }
</script>