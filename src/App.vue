<template>
    <div>
    <NavBar />
    <router-view />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
    name: 'App',
    components: {
        NavBar,
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
    }

    button {
        background-color: transparent;
        outline: 0;
        border: 0;
    }

    h1, h2 {
        font-weight: 500;
    }

    p {
        font-weight: 400;
    }
</style>
