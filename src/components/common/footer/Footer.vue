<template>
    <div>
        <!-- Start Footer Area  -->
        <footer v-if="data.showFooter" class="rn-footer footer-style-default variation-two">
            <div v-if="data.showCta" class="rn-callto-action clltoaction-style-default style-7">
                <div class="container">
                    <div class="row row--0 align-items-center content-wrapper">
                        <div class="col-lg-8 col-md-8">
                            <div class="inner" data-aos="fade-up">
                                <div class="content text-left">
                                    <Logo/>
                                    <p class="subtitle">
                                      想要试试我们平台强大的功能吗？
                                      <br>
                                      可以马上体验一下
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="call-to-btn text-start mt_sm--20 text-lg-end" data-aos="fade-up">
                                <Button
                                    title="立即体验"
                                    icon="arrow-right"
                                    url="#"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <h4 class="title">时序预测</h4>
                                <div class="inner">
                                    <ul class="footer-link link-hover">
                                        <li>
                                          <a href="https://aistudio.baidu.com/aistudio/projectdetail/5866171?channelType=0&channel=0"
                                             target="_blank">实现参考</a>
                                        </li>
                                        <li>
                                          <a href="https://aistudio.baidu.com/aistudio/datasetdetail/205286"
                                             target="_blank">数据集</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <div class="widget-menu-top">
                                    <h4 class="title">异常检测</h4>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li>
                                              <a href="https://github.com/datamllab/tods"
                                                 target="_blank">实现参考</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <h4 class="title">数据处理可视化</h4>
                                <div class="inner">
                                    <ul class="footer-link link-hover">
                                        <li>
                                          <a href="https://gallery.pyecharts.org/#/"
                                             target="_blank">实现参考</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <h4 class="title">数字化大屏</h4>
                                <div class="inner">
                                    <ul class="footer-link link-hover">
                                        <li>
                                          <a href="https://github.com/daidaibg/IofTV-Screen"
                                             target="_blank">实现参考</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <h4 class="title">技术改变世界</h4>
                                <div class="inner">
                                    <h6 class="subtitle">使用AI为风力发电事业加速</h6>
                                  <div class="footer-link link-hover">
                                    <a href="http://www.cnsoftbei.com/" target="_blank"
                                       style="margin-right: 15px;font-size:medium;">
                                      中国软件杯
                                    </a>
                                    <a href="https://www.paddlepaddle.org.cn/" target="_blank"
                                       style="margin-right: 15px;font-size:medium;">
                                      PaddlePaddle
                                    </a>
                                    <a href="https://github.com/PaddlePaddle/PaddleTS" target="_blank"
                                       style="margin-right: 15px;font-size:medium;">
                                      PaddleTS
                                    </a>
                                    <a href="https://www.paddlepaddle.org.cn/paddle/paddleinference" target="_blank"
                                       style="margin-right: 15px;font-size:medium;">
                                      PaddleInference
                                    </a>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter v-if="data.showNewsletter"/>
        </footer>

        <Copyright v-if="data.showCopyright"/>

        <ScrollTop/>
    </div>
</template>

<script>
    import Copyright from './Copyright'
    import Button from '../../elements/button/Button'
    import Icon from '../../icon/Icon'
    import ScrollTop from './ScrollTop'
    import Logo from '../../elements/logo/Logo'
    import Newsletter from './Newsletter'

    export default {
        name: 'Footer',
        components: {Newsletter, Logo, ScrollTop, Icon, Button, Copyright},
        props: {
            data: {
                default: null
            }
        }
    }
</script>