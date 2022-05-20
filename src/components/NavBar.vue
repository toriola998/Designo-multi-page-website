<template>
    <div class="flex-nav">
        <img src="./../assets/shared/desktop/logo-dark.png" 
            alt="Designo - Home"
            width="200" />
        <button class="">
            <img src="./../assets/shared/mobile/icon-hamburger.svg" alt=""/>
        </button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .flex-nav{
        @include flex($flex_position: space-between);
        padding: 0 1.5rem;
        height: 5rem;
    }
</style>