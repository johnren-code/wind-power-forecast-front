<template>
    <Layout>
        <!-- Start Error-Area Area  -->
        <div class="error-area ptb--200 ptb_sm--60 ptb_md--80">
            <div class="container">
                <div class="row align-item-center">
                    <div class="col-lg-12">
                        <div class="error-inner">
                            <h1>404</h1>
                            <h2 class="title">Something’s not right.</h2>
                            <p class="description"> By injectedeed eedhumour, or randomised words which don't look even
                                .</p>
                            <form action="#" class="blog-search">
                                <input type="text" placeholder="Search Here...">
                                <button class="search-button">
                                    <Icon name="search" size="20"/>
                                </button>
                            </form>
                            <div class="view-more-button"><a class="btn-default" href="/">Go Back Home</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Error-Area Area  -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Icon from '../components/icon/Icon'

    export default {
        name: '404',
        components: {Icon, Layout}
    }
</script>