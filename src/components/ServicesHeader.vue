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
@import './../assets/scss/partials/_partial.scss';

    .bg-pattern-header {
        background-image: url("./../assets/shared/desktop/bg-pattern-small-circle.svg");
        background-color: #E7816B;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 320px;
        padding: 0 1.5rem;
        @include flex;

        h1, p {
            @extend %align-white-text;
        }

        p {
            margin-top: 1rem;
            @extend %paragraph-height;
        }
    }
</style>