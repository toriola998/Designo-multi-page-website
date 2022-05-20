<template>
    <img :src="require(`./../assets/about/${aboutImage}`)" alt="" />
    <div class="about-bg">
        <h2>{{ aboutHeading }}</h2>
        <p> {{ aboutInfo }} </p>  
        <p>{{ aboutInfo1 }}</p>
    </div>
</template>

<script>
export default {
    props: ['aboutImage', 'aboutHeading', 'aboutInfo', 'aboutInfo1']
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    img {
       @extend %image-block;
    }
    
    .about-bg {
       @include light-bg($bg-image: url("./../assets/shared/desktop/bg-pattern-two-circles.svg") );
    }

    h2 {
        font-size: 2rem;
        color: var(--dark-peach);
    }

    h2, p {
        text-align: center;
    }

    p {
        @extend %paragraph-height;
        padding-top: 2rem;
        color: var(--color-black);
    }
</style>