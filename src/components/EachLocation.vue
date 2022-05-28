<template>
    <div class="each-location-wrap">
        <div class="map-wrap">
            <picture>
                <source media="(min-width: 1200px)" 
                    :srcset="require(`./../assets/locations/desktop/${mapImage}`)">    
                <source media="(min-width: 615px)" 
                        :srcset="require(`./../assets/locations/tablet/${mapImage}`)">
                <img :src="require(`./../assets/locations/desktop/${mapImage}`)"  
                        :alt="mapAltText" 
                        class="map" >
            </picture>
        </div>
        <div class="light-bg-pattern">
            <div>
                <h2 class="location">{{ country }}</h2>
                <div>
                    <address>{{ office }}<br>
                        <span>{{ address }}</span>
                    </address>

                    <p class="contact">Contact <br>
                        <a href="tel:+05890000111">{{ number }}</a>
                        <a href="contact@designo.co"> {{ email}} </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'mapImage', 'mapAltText', 'country', 'office', 'address','number', 'email' ]
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';

   .light-bg-pattern {
       @include bgImage($bg-color: var(--light-peach));
       background-image: url("./../assets/shared/desktop/bg-pattern-two-circles.svg");
       padding: 4rem 1.5rem;
    }

    .map-wrap {
        @extend %image-wrap;
        padding-bottom: 320 / 375 * 100%; //This is to solve page layout shift
    }

    .map-wrap::before {
        @extend %image-wrap-pseudo;
    }

    .map {
        @extend %image-block;
        @extend %image-wrap-content;
    }

    .location {
        color: var(--dark-peach);
        text-align: center;
    }

    address {
        font-style: normal;
    }

    address span, 
    .contact a {
        font-weight: 400;
    }

    address, 
    .contact {
        text-align: center; 
        width: 220px;
        margin: 2rem auto 0;
        line-height: 1.6;
        font-weight: 500;
    }

    .contact a {
        text-decoration: none;  
        color: var(--color-black);  
    }

@media screen and (min-width: 615px) {
    .light-bg-pattern,
    .map {
        border-radius: 10px;
    }

    .map-wrap {
        padding-bottom: 326 / 689  * 100%; //This is to solve page layout shift
    }

    .light-bg-pattern {
        margin: 1.5rem 0 5rem;
        padding: 4rem 3rem;

        > div > div {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: flex-start;
            column-gap: 3rem;
        }
    }

    .location {
        font-size: 2.2rem;
    }

    address,
    .contact,
    .location {
        text-align: initial;
    }
}

@media screen and (min-width: 700px) {
    .location {
        font-size: 2.5rem;
    }

    address {
        margin: 2rem 3rem 0 0;
    }
}

@media screen and (min-width: 1200px) {
    .each-location-wrap {
        display: grid;
        grid-template-columns: 35% 65%;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .map-wrap {
        padding-bottom: 320 / 375 * 100%; //This is to solve page layout shift
    }

    /**REVERSE THE 1st & 3rd LOCATIONS */
    .each-location-wrap:nth-child(1) > .light-bg-pattern,
    .each-location-wrap:nth-child(3) > .light-bg-pattern {
       grid-area: 1;
    }

    .each-location-wrap:nth-child(1), 
    .each-location-wrap:nth-child(3) {
        grid-template-columns: 65% 35%;
    }

    .map {
        margin-bottom: initial;
    }

    .light-bg-pattern {
        @include flex;
        margin: initial;
    }

    .location {
        font-size: 3rem;
    }
}

@media screen and (min-width: 1400px) {
    .each-location-wrap {
        max-width: 1330px;
        margin: 0 auto 2rem;
    }
}
</style>