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

    button {
        background-color: transparent;
        outline: 0;
        border: 0;
    }

    h1 {
        font-size: 500;
    }

    p {
        font-size: 400;
    }
</style>
