<template>
    <div class="footer-style-2">
<!--        <CallToAction-->
<!--            v-if="data.showFooter"-->
<!--            :style-type="8"-->
<!--            title="想试试我们平台的强大功能吗?"-->
<!--            btn-text="立即体验"-->
<!--        />-->
        <CopyrightTwo v-if="data.showCopyright"/>
        <ScrollTop/>
    </div>
</template>

<script>
    import CopyrightTwo from './CopyrightTwo'
    import CallToAction from '../../elements/callToAction/CallToAction'
    import ScrollTop from './ScrollTop'

    export default {
        name: 'FooterTwo',
        components: {CallToAction, CopyrightTwo, ScrollTop},
        props: {
            data: {
                default: null
            }
        }
    }
</script>