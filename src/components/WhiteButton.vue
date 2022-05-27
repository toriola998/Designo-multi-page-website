<template>
    <router-link to="" class="call-to-action" :aria-label="buttonRole"> {{ callToAction }} </router-link>
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

    .call-to-action:hover {
        background-color: var(--hover-peach);
        color: #fff;
    }
</style>