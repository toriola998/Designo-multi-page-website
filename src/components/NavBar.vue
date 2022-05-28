<template>
    <div class="flex-nav">
        <div>
            <router-link to="/">
                <img src="./../assets/shared/desktop/logo-dark.png" 
                    alt="Designo - Home"
                    width="200" height="26.72"
                    />
            </router-link>

            <nav>
                <button @click="showNav = !showNav"  
                        class="menu"  
                        aria-label="Toggle Menu" 
                        aria-expanded="false"
                        aria-controls="mainNavLinks">
                    <img src="./../assets/shared/mobile/icon-hamburger.svg" 
                         alt="" role="presentation"
                         width="24" height="20"/>
                </button>

                <!--<teleport to="body"> --aria-labelledby="mainNavHeading"  
                <h2 id="mainNavHeading" hidden>Main menu</h2>-->
                    <div id="mainNavLinks" 
                        class="links" 
                        aria-live="polite">
                        <div class="nav-overlay" v-show="showNav" @click="showNav = !showNav"> </div>
                        <ul  class="nav-bar" v-show="showNav">
                            <li>
                                <router-link @click="showNav = !showNav" to="/about-us">OUR COMPANY</router-link></li>
                            <li>
                                <router-link @click="showNav = !showNav" to="/locations">LOCATIONS</router-link></li>
                            <li>
                                <router-link @click="showNav = !showNav" to="/contact-us">CONTACT</router-link></li>
                        </ul>
                    </div>
                <!--</teleport>-->
            </nav>
        </div>
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
        padding: 0 1.5rem;
        
            >div {
                @include flex($flex_position: space-between);
                height: 5rem;
            }
    }

    .nav-bar {
        background-color: var(--color-black);
        padding: 4rem 0 2.5rem 1.5rem;
        position: absolute;
        top: 5rem;
        right: 0;
        width: 100%;
        z-index: 9999;

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

    .nav-overlay {
        @include flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100vw;
        height: 100%;
        background-color: rgba(0,0,0, 0.25);

    }
@media screen and (min-width: 615px) {
    .flex-nav{
        padding: 0 2.5rem;

        >div {
            position: relative;
        }
    }
}

@media screen and (min-width: 640px) {
    .menu,
    .nav-overlay {
        display: none;
    }

    .flex-nav{
        >div {
            height: 8rem;
        }
    }

    .nav-bar {
        display: flex !important;
        justify-content: end;
        background-color: initial;
        top: -3px;
        width: auto;

            li {
                padding-left: 1rem;
            }

            a {
                color: var(--color-black);
            }

            a:hover {
                border-bottom: .5px solid var(--color-black);
            }
    }       
}

@media screen and (min-width: 700px) {
    .nav-bar {
        li {
            padding-left: 2rem;
        }
    }
}

@media screen and (min-width: 1200px) {
    .flex-nav{
        padding: 0 8rem;
    }
}

@media screen and (min-width: 1400px) {
    .flex-nav {
        >div {
            max-width: 1330px;
            margin: auto;
        }
    }
}
</style>