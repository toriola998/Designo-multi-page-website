<template>
    <button class="call-to-action" :aria-label="buttonRole"> {{ callToAction }}</button>
</template>

<script>
export default {
    props: [ 'buttonRole', 'callToAction']
}

</script>
<style lang="scss" scoped>
     @mixin flex($flex_center: center) {
       justify-content: $flex_center;
       display: flex;
       align-items: center;
    }

      .call-to-action {
        @include flex;
        background-color: #fff;
        color: var(--black-color);
        font-weight: 500;
        font-size: .85rem;
        margin: 0 auto;
        border-radius: 5px;
        width: 8rem;
        height: 3rem;       
    }
</style>