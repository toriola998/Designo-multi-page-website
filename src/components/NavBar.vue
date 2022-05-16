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
    @mixin flex($flex_position: center) {
       justify-content: $flex_position;
       display: flex;
       align-items: center;
    }

    .flex-nav{
        @include flex($flex_position: space-between);
        padding: 0 1.5rem;
        height: 5rem;
    }
</style>