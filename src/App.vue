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
    }

    ul {
        list-style-type: none;
    }
</style>
