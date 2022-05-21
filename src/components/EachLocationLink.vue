<template>
    <div class="each-location">
        <img :src="require(`./../assets/shared/desktop/${locationImage}`)" 
            :alt="locationAltText"
        />
        <h2>{{ locationName }}</h2>
        <router-link to="/" 
                    :aria-label="locationLinkLabel"> SEE LOCATION
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['locationImage', 'locationName', 'locationLinkLabel']
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .each-location {
         img {
        display: block;
        margin: auto;
    }

    h2 {
        text-align: center;
        letter-spacing: 5px;
        font-size: 1.3rem;
        margin: 1.5rem 0;
    }

    a {
        @extend %cta-btn;
        @include flex;
        background-color: var(--dark-peach);
        color: white;
    }
    }
</style>