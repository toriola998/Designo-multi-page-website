<template>
    <div class="contact">
        <h1>Contact Us</h1>
        <p>Ready to take it to the next level? Let's talk about your project or 
        idea and find out how we can help your business grow. If you are looking 
        for unique digital experiences that's relatable to your users, drop us a line.</p>
    </div>
    <LocationLinks />
    
</template>

<script>
import LocationLinks from '../components/LocationLinks.vue'
export default {
    name: 'Contact Us',
    components: { LocationLinks },

}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .contact {
        @include bgImage;
       background-size: cover;
       background-image: url("./../assets/about/mobile/bg-pattern-hero-about-mobile.svg");
       padding: 4rem 1.5rem;

        h1, p {
            @extend %align-white-text;
        }
    }
   
</style>