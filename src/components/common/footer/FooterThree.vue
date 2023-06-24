<template>
    <div>
        <footer v-if="data.showFooter" class="rn-footer footer-style-default footer-style-1">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="rn-footer-widget">
                                <Logo/>
                                <h3 class="text-big">Create Website By Doob So Quick Download And Make Your Site.</h3>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <div class="widget-menu-top">
                                    <h4 class="title">Services</h4>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li><router-link to="/testimonial">Testimonial</router-link></li>
                                            <li><router-link to="/company">Company</router-link></li>
                                            <li><router-link to="/marketing-agency">Marketing</router-link></li>
                                            <li><router-link to="/startup">Startup</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget-menu-bottom">
                                    <h4 class="title">Products</h4>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li><router-link to="/about">About</router-link></li>
                                            <li><router-link to="/portfolio">Portfolio</router-link></li>
                                            <li><router-link to="/contact">Contact</router-link></li>
                                            <li><router-link to="/service">Service</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <div class="widget-menu-top">
                                    <h4 class="title">Company</h4>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li><router-link to="/corporate">Corporate</router-link></li>
                                            <li><router-link to="/portfolio">Portfolio</router-link></li>
                                            <li><router-link to="/seo-agency">SEO Agency</router-link></li>
                                            <li><router-link to="/web-agency">Web Agency</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget-menu-bottom">
                                    <h4 class="title">Solutions</h4>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li><router-link to="/gallery">Gallery</router-link></li>
                                            <li><router-link to="/testimonial">Testimonial</router-link></li>
                                            <li><router-link to="/contact">Contact</router-link></li>
                                            <li><router-link to="/service">Service</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="rn-footer-widget">
                                <h4 class="title">Newsletter</h4>
                                <div class="inner">
                                    <h6 class="subtitle">2000+ Our clients are subscribe Around the World</h6>
                                    <form class="newsletter-form" action="#">
                                        <div class="form-group">
                                            <input type="email" placeholder="Enter Your Email Here">
                                        </div>
                                        <div class="form-group">
                                            <button class="btn-default" type="submit">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <Copyright v-if="data.showCopyright"/>
        <ScrollTop/>
    </div>
</template>

<script>
    import Copyright from './Copyright'
    import ScrollTop from './ScrollTop'
    import Logo from '../../elements/logo/Logo'

    export default {
        name: 'FooterThree',
        components: {Logo, ScrollTop, Copyright},
        props: {
            data: {
                default: null
            }
        }
    }
</script>