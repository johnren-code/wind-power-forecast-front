<template>
    <Layout>
        <Breadcrumb title="Blog Grid Sidebar" current-url="Blog Grid Sidebar"/>

        <div class="rn-blog-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <div class="row mt_dec--30">
                            <div class="col-lg-12">
                                <div class="row row--15">
                                    <div class="col-lg-6 col-md-6 col-12 mt--30"
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

                    <div class="col-lg-4 mt_md--40 mt_sm--40">
                        <BlogSidebar/>
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
    import BlogSidebar from '../components/blog/BlogSidebar'
    import BlogPostMixin from '../mixins/BlogPostMixin'

    export default {
        name: 'BlogGridSidebarPage',
        components: {BlogSidebar, Icon, BlogPost, Layout, Breadcrumb},
        mixins: [BlogPostMixin],
        data() {
            return {
                blogPosts: [
                    {
                        id: '1',
                        img: require('@/assets/images/blog/blog-01.jpg'),
                        author: 'Irin Pervin',
                        authorId: '1',
                        publishedAt: '10 Dec 2020',
                        title: 'Best Corporate Tips You Will Read This Year.'
                    },
                    {
                        id: '2',
                        img: require('@/assets/images/blog/blog-02.jpg'),
                        author: 'Fatima Asrafy',
                        authorId: '2',
                        publishedAt: '30 Nov 2020',
                        title: 'Should Fixing Corporate Take 100 Steps.'
                    },
                    {
                        id: '3',
                        img: require('@/assets/images/blog/blog-03.jpg'),
                        author: 'John Dou',
                        authorId: '3',
                        publishedAt: '12 Oct 2020',
                        title: 'The Next 100 Things To Immediately Do About.'
                    },
                    {
                        id: '4',
                        img: require('@/assets/images/blog/blog-04.jpg'),
                        author: 'Jannin',
                        authorId: '4',
                        publishedAt: '25 Aug 2020',
                        title: 'Top 5 Lessons About Corporate To Learn Before.'
                    },
                    {
                        id: '5',
                        img: require('@/assets/images/blog/blog-05.jpg'),
                        author: 'Jannin',
                        authorId: '5',
                        publishedAt: '23 Jul 2020',
                        title: 'Master The Art Of Corporate With These 5 Tips.'
                    },
                    {
                        id: '6',
                        img: require('@/assets/images/blog/blog-06.jpg'),
                        author: 'John Dou',
                        authorId: '6',
                        publishedAt: '30 Jun 2020',
                        title: 'Corporate Is Your Worst Enemy. 5 Ways To Defeat It.'
                    }
                ]
            }
        }
    }
</script>