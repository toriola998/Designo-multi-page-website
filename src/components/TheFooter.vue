<template>
    <footer>
        <div class="bg-pattern-wrap">
            <div class="bg-pattern-footer">
                <h3>Let's talk about your project</h3>
                <p>Ready to take it to the next level? Contact us today and find 
                out how our expertise can help your business grow.</p>
                <WhiteButton buttonRole="Get in touch with us at Designo" callToAction="GET IN TOUCH" />
            </div>
        </div>

        <div class="bg-black">
            <a>
                <img src="./../assets/shared/desktop/logo-light.png" 
                    alt="Designo - Home"
                    width="200" 
                    class="footer-logo"/>
            </a>

            <nav>
                <ul>
                    <li>
                        <a> OUR COMPANY </a>
                    </li>
                    <li>
                        <a> LOCATIONS </a>
                    </li>
                    <li>
                        <a> CONTACT </a>
                    </li>
                </ul>
            </nav> 
            <address>
               Designo Central Office<br>
                <span>3886 Wellington Street,Toronto, Ontario M9C 3J5</span>
             </address>

            <p class="contact">Contact Us (Central Office) <br>
                <a href=""> P : +1 253-863-8967</a>
                <a href=""> M : contact@designo.co </a>
            </p>
            
            <div class="social-icons">
                <img src="./../assets/shared/desktop/icon-facebook.svg" alt="Follow us on facebook" />
                <img src="./../assets/shared/desktop/icon-youtube.svg" alt="Subscribe to our youTube channel" />
                <img src="./../assets/shared/desktop/icon-twitter.svg" alt="Follow us on twitter" />
                <img src="./../assets/shared/desktop/icon-pinterest.svg" alt="Check us on Pinterest" />
                <img src="./../assets/shared/desktop/icon-instagram.svg" alt="Follow us on Instagram" />
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
        background-image: url("./../assets/shared/desktop/bg-pattern-call-to-action.svg"); /* The image used */
        background-color: #E7816B;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        padding: 3rem 1.5rem;
        border-radius: 15px;
        margin-bottom: -12rem;
        z-index: 9999;
        position: relative;

        h3 {
            font-size: 2.2rem;
            line-height: 1.2;
        }

        h3, p {
            @extend %align-white-text;
        }

        p {
           @extend %paragraph-height;
            margin: 1.5rem 0;
        }
    }

    .bg-black {
        background-color: #1D1C1E;
        color: #fff;
        padding: 16rem 1.5rem 4rem;

        nav::before {
            content: '';
            background-color: white;
            opacity: 0.2;
            margin: 1.7rem 0 1rem;
            height: 1px;
            width: 100%;
            display: block;
        }

        nav li a {
            display: block;
            text-align: center;
            padding-top: 1.5rem;
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
</style>