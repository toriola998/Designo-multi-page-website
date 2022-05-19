<template>
    <div class="bg-pattern-header">
        <div>
        <h1>Web design</h1>
        <p>We build websites that serve as powerful marketing tools
             and bring memorable brand experiences.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @mixin flex($flex_center: center) {
       justify-content: $flex_center;
       display: flex;
       align-items: center;
    }

    .bg-pattern-header {
        background-image: url("./../assets/shared/desktop/bg-pattern-small-circle.svg"); /* The image used */
        background-color: #E7816B;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 320px;
        padding: 0 1.5rem;
        @include flex;

        h1, p {
            color: #fff;
            text-align: center;
        }

        p {
            margin-top: 1rem;
            line-height: 1.8;
        }
    }
</style>