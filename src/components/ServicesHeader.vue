<template>
    <div class="bg-pattern-container">
        <div class="bg-pattern-header">
            <div>
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
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
        background-position: center;
        height: 320px;
        padding: 0 1.5rem;
        

        h1, p {
            @extend %align-white-text;
        }

        p {
            margin-top: 1rem;
        }
    }

@media screen and (min-width: 520px) {
    .bg-pattern-container {
        padding: 0 2.5rem;
    }

    .bg-pattern-header {
        background-image: url("./../assets/shared/desktop/bg-pattern-call-to-action.svg");
        border-radius: 10px;
        height: 250px;

        p {
            width: 400px;
        }
    }

}
</style>