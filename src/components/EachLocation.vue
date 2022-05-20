<template>
    <div>
        <img src="./../assets\locations/desktop/image-map-canada.png" alt=""/>
        <PatternBackground>
            <h2 class="location">Canada</h2>
                <address>
                Designo Central Office<br>
                <span>3886 Wellington Street,Toronto, Ontario M9C 3J5</span>
                </address>

            <p class="contact">Contact Us (Central Office) <br>
                <a href=""> P : +1 253-863-8967</a>
                <a href=""> M : contact@designo.co </a>
            </p>
        </PatternBackground>
    </div>
</template>

<script>
import PatternBackground from './../components/PatternBackground.vue'
export default {
    components: { PatternBackground },
    props: ['location', 'officeName', 'address', 'officeContact', 'number', 'email' ]
}
</script>

<style lang="scss" scoped>
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