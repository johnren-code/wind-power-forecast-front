<template>
    <div class="footer-style-2">
        <CallToAction
            v-if="data.showFooter"
            :style-type="8"
            title="Ready to start creating a standard website?"
            subtitle="Finest choice for your home & office"
            btn-text="Purchase Doob"
        />
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