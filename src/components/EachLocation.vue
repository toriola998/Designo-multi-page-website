<template>
    <div class="each-location-wrap">
        <picture>
            <source media="(min-width: 1200px)" 
                :srcset="require(`./../assets/locations/desktop/${mapImage}`)">    
            <source media="(min-width: 615px)" 
                    :srcset="require(`./../assets/locations/tablet/${mapImage}`)">
            <img :src="require(`./../assets/locations/desktop/${mapImage}`)"  
                    :alt="mapAltText" 
                    class="map" >
        </picture>
        <div class="light-bg-pattern">
            <div>
                <h2 class="location">{{ country }}</h2>
                <div>
                    <address>{{ office }}<br>
                        <span>{{ address }}</span>
                    </address>

                    <p class="contact">Contact <br>
                        <a href="">{{ number }}</a>
                        <a href=""> {{ email}} </a>
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

    .map {
        @extend %image-block;
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

    .map {
        margin-bottom: 1.5rem;
    }

    .light-bg-pattern {
        margin-bottom: 5rem;
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
        grid-template-columns: auto auto;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    /**REVERSE THE 1st & 3rd LOCATIONS */
    .each-location-wrap:nth-child(1) > .light-bg-pattern,
    .each-location-wrap:nth-child(3) > .light-bg-pattern {
       grid-area: 1;
    }

    .map,
    .light-bg-pattern {
        margin-bottom: initial;
    }

    .light-bg-pattern {
        @include flex;
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