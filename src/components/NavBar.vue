<template>
    <div class="flex-nav">
        <router-link to="/">
            <img src="./../assets/shared/desktop/logo-dark.png" 
                alt="Designo - Home"
                width="200" />
        </router-link>

        <nav>
            <button @click="showNav = !showNav"  class="menu">
                <img src="./../assets/shared/mobile/icon-hamburger.svg" alt=""/>
            </button>

            <teleport to="body">
                <div class="nav-overlay" v-show="showNav" @click="showNav = !showNav"> 
                    <ul>
                        <li>
                            <router-link to="/about-us">OUR COMPANY</router-link></li>
                        <li>
                            <router-link to="/locations">LOCATIONS</router-link></li>
                        <li>
                            <router-link to="/contact-us">CONTACT</router-link></li>
                    </ul>
                </div>
            </teleport>
        </nav>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            showNav: false,
        }
    }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .flex-nav{
        @include flex($flex_position: space-between);
        padding: 0 1.5rem;
        height: 5rem;
    }

     .nav-overlay {
        @include flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100vw;
        height: 100%;
        background-color: rgba(0,0,0, 0.45);

           ul {
                background-color: var(--color-black);
                padding: 3rem 0 2rem 1.5rem;
                margin-bottom: 14.5rem;
                width: 100%;
            }

            li {
                padding-bottom: 1.3rem;
            }

            a {
                text-decoration: none;
                color: #fff;
                font-size: 1.1rem;
            }

            a:hover {
                border-bottom: .5px solid white;
            }
    }

</style>