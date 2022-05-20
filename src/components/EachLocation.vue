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
    @import './../assets/scss/partials/_light-bg-pattern.scss';

   .light-bg-pattern {
       @include bg;
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