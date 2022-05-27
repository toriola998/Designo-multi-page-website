<template>
    <header>
        <div class="home-container">
            <div>
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating 
                fully responsive websites, app design, and engaging brand experiences. 
                Find out more about our services.</p>
                <WhiteButton to="/about-us" 
                            buttonRole="Learn more about Designo" 
                            callToAction="LEARN MORE" />
            </div>
            <picture>
                <!--<source media="(min-width: 700px)" 
                        srcset="require(`@/assets/portfolio/desktop/${filename}.jpg`)">-->
                <source media="(min-width: 1000px)" 
                        srcset="./../assets/home/desktop/image-hero-phone.png">
                <img src="./../assets/home/mobile/image-hero-mobile.png"
                        alt=""
                        class="hero-image"
                        >
            </picture> 
        </div>
    </header>
    <main>
        <img src="./../assets/home/desktop/grey-bg-top.svg" alt="" class="grey-bg-top" />
        <section aria-label="Services we render in Designo"> 
            <div class="services">
                <div class="services-inner">
                    <div class="web-design design" 
                        @click="this.$router.push({ path: '/web-design'})">
                        <OurServices service="WEB DESIGN" serviceInfo="view some of Designo's web design projects" />
                    </div>
                    <div>
                        <div class="app-design design"
                            @click="this.$router.push({ path: '/app-design'})">
                            <OurServices service="APP DESIGN" serviceInfo="view some of Designo's application design projects" />
                        </div>
                        <div class="graphic-design design"
                            @click="this.$router.push({ path: '/graphic-design'})">
                            <OurServices service="GRAPHIC DESIGN" serviceInfo="view some of Designo's web design projects" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section aria-label="Why you should choose designo">
            <div class="why-choose-wrapper">
                <div class="why-choose-inner">
                    <WhyChooseUs illustration="illustration-passionate.svg"
                                serviceTitle="PASSIONATE"
                                serviceInfo="Each project starts with an in-depth brand research to ensure
                                we only create products that serve a purpose. We merge art, design, and
                                technology into exciting new solutions." 
                    />
                    <WhyChooseUs illustration="illustration-resourceful.svg"
                                serviceTitle="RESOURCEFUL"
                                serviceInfo="Everything that we do has a strategic purpose. We use an agile 
                                approach in all of our projects and value customer collaboration. It guarantees 
                                superior results that fulfill our clients' needs." 
                    />
                    <WhyChooseUs illustration="illustration-friendly.svg"
                                serviceTitle="FRIENDLY"
                                serviceInfo=" We are a group of enthusiastic folks who know how to put people
                                first. Our success depends on our customers, and we strive to give them 
                                the best experience a company can provide." 
                    />
                </div>
            </div>
            <img src="./../assets/home/desktop/grey-bg.svg" alt="" class="grey-bg" />
        </section>
    </main>
</template>

<script>
import OurServices from './../components/OurServices.vue'
import WhiteButton from './../components/WhiteButton.vue'
import WhyChooseUs from './../components/WhyChooseUs.vue'

export default {
    name: "Home",
    components: {
        OurServices,
        WhiteButton,
        WhyChooseUs
    }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .home-container {
        @include bgImage;
        background-image: url("./../assets/home/desktop/bg-pattern-hero-home.svg"); 
        background-size: cover;
        padding: 4rem 1.5rem 0;
        
            h1 { line-height: 1.1; }

            h1, p {
                @extend %align-white-text;
            }

            p { 
                padding: 1rem 0;
             }
 
            img {
                width: 100%;
                margin: 5rem 0 -0.4rem 0;
                filter: drop-shadow(20px -40px 50px rgba(93, 2, 2, 0.497569));
            }
    }

    .services {
        padding: 6rem 1.5rem;
    }

    .why-choose-wrapper {
        padding: 0 1.5rem;
    }

    .grey-bg-top,
    .grey-bg {
        display: none;
    }

@media screen and (min-width: 520px) {
    header,
    .why-choose-wrapper {
        padding: 0 2.5rem;
    }

    .home-container {
        border-radius: 7px;
        padding: 4rem 3rem 0;

        img {
            width: 50%;
            margin: 5rem auto -0.4rem;
            display: block;
        }
    }

    .services {
         padding: 6rem 3rem;
    }
}

@media screen and (min-width: 615px) {
    .home-container {
        padding: 4rem 4rem 0;

        h1 {
            font-size: 2.48rem;
            line-height: 1.2;
        }
    }
}

@media screen and (min-width: 700px) {
    .home-container {
        div {
            width: 500px;
            margin: auto;
        }
    }
}

@media screen and (min-width: 1000px) {
    .home-container {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 5rem;
        background-position: right;
        background-size: contain;
        padding: 7rem 4rem 0;

        div {
            width: initial;
            position: relative;
            bottom: 3rem;
        }

        h1 {
             line-height: 1.1;
             font-size: 2.5rem;
        }

        h1, p {
            @include initial-font;
        }

        p {
            padding: 1.8rem 0;
        }

        img {
            width: 60%;
            margin: auto;
            display: block;
        }
    }

   .call-to-action {
       margin: initial;
   }

   .services-inner {
       display: grid;
       grid-template-columns: auto auto;
       column-gap: 2rem;
   }

    .web-design {
        height: 600px;
    }

    .app-design,
    .graphic-design {
        height: 290px;
    }

    .grey-bg-top {
        left: 0;
        top: 30rem;
    }

   .grey-bg {
        right: 0;
        bottom: -85rem;
    }

    .grey-bg-top,
    .grey-bg {
        position: absolute;
        z-index: -9999;
        width: 47rem;
        display: block;
    }
   
   .why-choose-inner {
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 2rem;
    }
}

@media screen and (min-width: 1200px) {
    header,
    .why-choose-wrapper {
        padding: 0 8rem;
    }

    .home-container {
        div {
            bottom: 4rem;
        }
    }

    .services{
        padding: 6rem 8rem;
    }

    
   .grey-bg {
        right: 0;
        bottom: -100rem;
    }

    .grey-bg-top,
    .grey-bg {
        width: 60rem;
    }
}
@media screen and (min-width: 1290px) {
    .home-container {
        h1 {
            font-size: 2.8rem;
        }
    }
}
@media screen and (min-width: 1400px) {
    .home-container,
    .why-choose-inner,
    .services-inner {
        max-width: 1330px;
        margin: auto;
    }
}
</style>