<template>
    <div class="rwt-about-area rn-section-gap">
        <div class="container">
            <div class="row row--30 align-items-center">
                <div class="col-lg-5">
                    <div class="thumbnail" data-aos="fade-up" data-aos-delay="250">
                        <img class="w-100" src="../../../assets/images/about/about-1.png" alt="About Images">
                    </div>
                </div>
                <div class="col-lg-7 mt_md--40 mt_sm--40">
                    <div class="content">
                        <div class="section-title">
                            <h4 class="subtitle" data-aos="fade-up" data-aos-delay="280">
                                <span class="theme-gradient">Corporate About.</span>
                            </h4>
                            <h2 class="title mt--10" data-aos="fade-up" data-aos-delay="310">About Our Business.</h2>
                            <p data-aos="fade-up" data-aos-delay="310">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod autem sequi
                                reprehenderit labore consequuntur excepturi voluptatibus omnis similique qui
                                unde eligendi tempora, ea at, laudantium nostrum minus pariatur quasi!
                            </p>
                            <ul class="list-icon" data-aos="fade-up" data-aos-delay="340">
                                <li>
                                    <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>
                                    Track your teams progress with mobile app.
                                </li>
                                <li>
                                    <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </li>
                                <li>
                                    <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>
                                    Ipsum dolor sit amet consectetur adipisicing.
                                </li>
                                <li>
                                    <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>
                                    Your teams progress with mobile app.
                                </li>
                            </ul>

                            <div class="read-more-btn mt--40" data-aos="fade-up" data-aos-delay="370">
                                <router-link class="btn-default btn-icon"
                                   to="/about">
                                    More About Us
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'

    export default {
        name: 'AboutTwo',
        components: {Icon}
    }
</script>