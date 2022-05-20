<template>
    <img :src="require(`./../assets/locations/desktop/${mapImage}`)" 
         :alt="mapAltText" 
         class="map"
    />
    <div class="light-bg-pattern">
        <h2 class="location">{{ country }}</h2>
            <address>{{ office }}<br>
                <span>{{ address }}</span>
            </address>

        <p class="contact">Contact <br>
            <a href="">{{ number }}</a>
            <a href=""> {{ email}} </a>
        </p>
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
        display: block;
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
</style>