<template>
    <div class="copyright-area copyright-style-one variation-two">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-7 col-sm-12 col-12">
                    <div class="copyright-left">
                        <ul class="ft-menu link-hover">
                            <li><router-link to="#">风场管理</router-link></li>
                            <li><router-link to="#">实时滚动预测</router-link></li>
                            <li><router-link to="#">数据处理</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-5 mt_sm--20">
                    <div class="copyright-center text-center">
<!--                        <ul class="social-icon social-default color-lessdark justify-content-center">-->
<!--                            <li><a href="https://www/facebook.com/" target="_blank"><Icon name="facebook"/></a></li>-->
<!--                            <li><a href="https://www/twitter.com/" target="_blank"><Icon name="twitter"/></a></li>-->
<!--                            <li><a href="https://www/instagram.com/" target="_blank"><Icon name="instagram"/></a></li>-->
<!--                            <li><a href="https://www/linkedin.com/" target="_blank"><Icon name="linkedin"/></a></li>-->
<!--                        </ul>-->
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
                    <div class="copyright-right text-center text-lg-end">
                        <p class="copyright-text">
                             © {{ new Date().getFullYear() }} 初学时序预测
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'

    export default {
        name: 'CopyrightTwo',
        components: {Icon}
    }
</script>