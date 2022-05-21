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
        @include flex;
        @include bgImage;
        background-image: url("./../assets/shared/desktop/bg-pattern-small-circle.svg");
        background-size: cover;
        height: 320px;
        padding: 0 1.5rem;
        

        h1, p {
            @extend %align-white-text;
        }

        p {
            margin-top: 1rem;
        }
    }
</style>