<template>
    <div>
        <AfHeader />
        <slot />
        <AfFooter />
        <ScrollTop/>
    </div>
</template>

<script>

    import AfHeader from '../components/AfHeader.vue';
    import AfFooter from '../components/AfFooter.vue';

    import ScrollTop from '~/components/ScrollTop.vue';

    export default {
        mounted () {
            document.body.classList.add('main', 'fp-scroll-mac');



        }
    }

</script>

<style lang="scss" scoped></style>