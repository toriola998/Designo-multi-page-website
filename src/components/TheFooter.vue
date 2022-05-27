<template>
    <footer>
        <div class="bg-pattern-wrap">
            <div class="bg-pattern-footer">
                <div>
                    <h3>Let's talk about<br> your project</h3>
                    <p>Ready to take it to the next level? Contact us today and find 
                    out how our expertise can help your business grow.</p>
                </div>
                <WhiteButton buttonRole="Get in touch with us at Designo" callToAction="GET IN TOUCH" />
            </div>
        </div>

        <div class="bg-black">
            <div>
                <router-link to="/">
                    <img src="./../assets/shared/desktop/logo-light.png" 
                        alt="Designo - Home"
                        width="200" 
                        class="footer-logo"/>
                </router-link>

                <nav>
                    <ul>
                        <li>
                            <router-link to="/about-us"> OUR COMPANY </router-link>
                        </li>
                        <li>
                            <router-link to="/locations"> LOCATIONS </router-link>
                        </li>
                        <li>
                            <router-link to="/contact-us"> CONTACT </router-link>
                        </li>
                    </ul>
                </nav> 
                <div class="flex-footer"> 
                    <div>
                        <address>
                            Designo Central Office<br>
                            <span>3886 Wellington Street,Toronto, Ontario M9C 3J5</span>
                        </address>

                        <p class="contact">Contact Us (Central Office) <br>
                            <a href=""> P : +1 253-863-8967</a>
                            <a href=""> M : contact@designo.co </a>
                        </p>
                    </div>
                    
                    <div class="social-icons">
                        <img src="./../assets/shared/desktop/icon-facebook.svg" alt="Follow us on facebook" />
                        <img src="./../assets/shared/desktop/icon-youtube.svg" alt="Subscribe to our youTube channel" />
                        <img src="./../assets/shared/desktop/icon-twitter.svg" alt="Follow us on twitter" />
                        <img src="./../assets/shared/desktop/icon-pinterest.svg" alt="Check us on Pinterest" />
                        <img src="./../assets/shared/desktop/icon-instagram.svg" alt="Follow us on Instagram" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import WhiteButton from './../components/WhiteButton.vue'
export default {
    components: {
        WhiteButton,
    }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .bg-pattern-wrap{
        padding: 7rem 1.5rem 0;
    }

    .bg-pattern-footer {
        @include bgImage;
        background-image: url("./../assets/shared/desktop/bg-pattern-call-to-action.svg"); /* The image used */
        background-position: center;
        padding: 3rem 1.5rem;
        border-radius: 15px;
        margin-bottom: -12rem;
        z-index: 999;
        position: relative;

        h3 {
            font-size: 2.2rem;
            line-height: 1.2;
        }

        h3, p {
            @extend %align-white-text;
        }

        p {
            margin: 1.5rem 0;
        }
    }

    .bg-black{
        background-color: #1D1C1E;
        padding: 16rem 1.5rem 4rem;
        color: #fff;

            nav::before {
                content: '';
                @include footer-border;
                margin: 1.7rem 0 1rem;
            }

            nav li {
                padding-top: 1.5rem;
            }

            nav li a {
                text-align: center;
                color: #fff;
                text-decoration: none;
            }

            nav li a:hover {
                border-bottom: .5px solid #fff ;
            }
    }

    .footer-logo {
        display: block;
        margin: auto;
    }

    address {
        font-style: normal;
    }

    address span, 
    .contact a {
        font-weight: 300;
    }

    address, 
    .contact {
        opacity: 0.5;
        text-align: center; 
        width: 220px;
        margin: 2rem auto 0;
        line-height: 1.6;
    }

    .contact a {
        text-decoration: none;  
        color: #fff;  
    }

    .social-icons {
        @include flex;
        margin-top: 2rem;

        img{
            margin-right: 1rem;
        }
    }
@media screen and (min-width: 520px) {
     .bg-pattern-wrap{
        padding: 7rem 2.5rem 0;
    }

    .bg-pattern-footer {
        padding: 3rem 4rem;
    }
}

@media screen and (min-width: 700px) {
    .footer-logo {
        display: initial;
    }

    address,
    .contact {
        text-align: initial;
        margin: 0 1rem 0 0;
    }

    .bg-black {
        padding: 16rem 2.5rem 4rem;

            >div {
                position: relative;
            }

            nav ul {
                display: flex;
                position: absolute;
                right: 0rem;
                bottom: 10rem;
            }

            nav li {
                padding: 0 0 0 1rem;
            }

            nav::before {
                display: none;
            }

            nav::after {
                content: '';
                @include footer-border;
                margin: 2rem 0;
            }
    }

    .flex-footer {
        @include flex($flex_position: space-between);

        >div:nth-child(1) {
            display: flex;
            gap: 1rem;
        }
    }

    .social-icons {
        margin-top: unset;
    }
}

@media screen and (min-width: 1000px) {
    address {
        margin: 0 6rem 0 0;
    }

    .bg-pattern-footer {
        display: grid;
        grid-template-columns: 50% auto;
        justify-content: space-between;
        align-items: center;

        h3, p {
            text-align: initial;
        }
    }
    .bg-black {
            nav li {
                padding: 0 0 0 2rem;
            }
    }
}
@media screen and (min-width: 1200px) {
    .bg-pattern-wrap {
        padding: 7rem 8rem 0;
    }

    .bg-black{
        padding: 16rem 8rem 4rem;
    }
}
@media screen and (min-width: 1400px) {
    .bg-pattern-footer {
        max-width: 1300px;
        margin: 0 auto -12rem;
    }

    .bg-black {
        >div {
            max-width: 1300px;
            margin: auto;
        }
    }
}
</style>