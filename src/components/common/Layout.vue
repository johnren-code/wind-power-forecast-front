<template>
    <main class="page-wrapper">
        <Header
            :data="$props"
        />

        <div class="main-content">
            <slot></slot>
        </div>

        <Footer v-if="footerStyle === 1" :data="$props"/>
        <FooterTwo v-if="footerStyle === 2" :data="$props"/>
        <FooterThree v-if="footerStyle === 3" :data="$props"/>
    </main>
</template>

<script>
    import Header from './header/Header'
    import Footer from './footer/Footer'
    import FooterTwo from './footer/FooterTwo'
    import FooterThree from './footer/FooterThree'

    export default {
        name: 'Layout',
        components: {FooterThree, FooterTwo, Header, Footer},
        props: {
            logo: {
                type: String
            },
            showTopHeader: {
                type: Boolean,
                default: true
            },
            topbarStyle: {
                type: Number,
                default: 1
            },
            showThemeSwitcherButton: {
                type: Boolean,
                default: true
            },
            headerTransparency: {
                type: Boolean,
                default: false
            },
            headerClass: {
                type: String
            },
            navAlignment: {
                type: String,
                default: 'right'
            },
            buyButtonClass: {
                type: String,
                default: 'btn-default btn-small round'
            },
            footerStyle: {
                type: Number,
                default: 1
            },
            showFooter: {
                type: Boolean,
                default: true
            },
            showCopyright: {
                type: Boolean,
                default: true
            },
            showNewsletter: {
                type: Boolean,
                default: false
            },
            showCta: {
                type: Boolean,
                default: true
            }
        }
    }
</script>