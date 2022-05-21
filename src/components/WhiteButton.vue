<template>
    <button class="call-to-action" :aria-label="buttonRole"> {{ callToAction }}</button>
</template>

<script>
export default {
    props: [ 'buttonRole', 'callToAction']
}

</script>
<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .call-to-action {
        @include flex;
        @extend %cta-btn;
        background-color: #fff;
        color: var(--black-color);      
    }
</style>