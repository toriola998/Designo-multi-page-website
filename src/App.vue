<template>
    <div>
    <NavBar />
    <router-view />
    <TheFooter />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import TheFooter from './components/TheFooter.vue';
export default {
    name: 'App',
    components: {
        NavBar,
        TheFooter,
    }
}
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Jost', sans-serif;
    }

    :root {
        --color-black: #333136;
        --light-peach: #FDF3F0;
        --dark-peach: #E7816B;
        --hover-peach: #FFAD9B;
    }

    button {
        background-color: transparent;
        outline: 0;
        border: 0;
    }

    h1, h2, h3 {
        font-weight: 500;
    }

    p {
        font-weight: 400;
        line-height: 1.8;
    }

    ul {
        list-style-type: none;
    }

     .design {
        position: relative;
        background-color: grey;
        background-repeat: no-repeat;
        background-size: cover;
        height: 250px;
        width: 100%;
        border-radius: 15px; 
        margin-bottom: 1.3rem;  
    }

    .web-design {
        background-image: url("./assets/home/mobile/image-web-design.jpg");
    }

    .app-design {
        background-image: url("./assets/home/mobile/image-app-design.jpg");
    }

    .graphic-design {
        background-image: url("./assets/home/mobile/image-graphic-design.jpg");
    }

    .projects-wrapper {
        padding: 4rem 1.5rem 0;
    }

    .our-services {
        padding: 6rem 1.5rem 0;
    }

@media screen and (min-width: 520px) {
    .design {
        height: 200px;
    }

    .web-design {
        background-image: url("./assets/home/tablet/image-web-design.jpg");
    }

    .app-design {
        background-image: url("./assets/home/tablet/image-app-design.jpg");
    }

    .graphic-design {
        background-image: url("./assets/home/tablet/image-graphic-design.jpg");
    }

    .projects-wrapper {
        padding: 4rem 6rem 0;
    }
}

@media screen and (min-width: 615px) {
    .projects-wrapper {
        padding: 4rem 2.5rem 0;
    }

    .our-services {
        padding: 6rem 2.5rem 0;
    }
}

@media screen and (min-width: 1000px) {
    .design{
        width: initial;
    }

    .web-design {
        background-image: url("./assets/home/desktop/image-web-design-large.jpg");
    }

    .app-design {
        background-image: url("./assets/home/desktop/image-app-design.jpg");
    }

    .graphic-design {
        background-image: url("./assets/home/desktop/image-graphic-design.jpg");
    }

    .projects-wrapper {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        column-gap: 1rem;
        -moz-column-gap: 1rem;
        row-gap: 2rem;
        justify-content: center;
    }
}
</style>
