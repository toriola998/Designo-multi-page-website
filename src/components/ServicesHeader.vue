<template>
    <div class="bg-pattern-header">
        <div>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'description']
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