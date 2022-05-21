<template>
    <header>
        <div class="home-container">
            <div>
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating 
                fully responsive websites, app design, and engaging brand experiences. 
                Find out more about our services.</p>
                <WhiteButton buttonRole="Learn more about Designo" callToAction="LEARN MORE" />
            </div>
            <img src="./../assets/home/mobile/image-hero-mobile.png"  class="hero-image" alt=""/>  
        </div>
    </header>
    <main>
        <section aria-label="Services we render in Designo"> 
            <div class="services">
                <div class="web-design design" 
                     @click="this.$router.push({ path: '/web-design'})">
                    <OurServices service="WEB DESIGN" serviceInfo="view some of Designo's web design projects" />
                </div>
                <div class="app-design design"
                    @click="this.$router.push({ path: '/app-design'})">
                    <OurServices service="APP DESIGN" serviceInfo="view some of Designo's application design projects" />
                </div>
                <div class="graphic-design design"
                     @click="this.$router.push({ path: '/graphic-design'})">
                    <OurServices service="GRAPHIC DESIGN" serviceInfo="view some of Designo's web design projects" />
                </div>
            </div>
        </section>

        <section aria-label="Why you should choose designo">
            <div class="why-choose-wrapper">
                <WhyChooseUs illustration="./../assets/home/desktop/illustration-passionate.svg"
                            title="PASSIONATE"
                            notes="Each project starts with an in-depth brand research to ensure
                            we only create products that serve a purpose. We merge art, design, and
                            technology into exciting new solutions." 
                />
                <WhyChooseUs illustration="./../assets/home/desktop/illustration-resourceful.svg"
                            title="RESOURCEFUL"
                            notes="Everything that we do has a strategic purpose. We use an agile 
                            approach in all of our projects and value customer collaboration. It guarantees 
                            superior results that fulfill our clients' needs." 
                />
                <WhyChooseUs illustration="./../assets/home/desktop/illustration-friendly.png"
                            title="FRIENDLY"
                            notes=" We are a group of enthusiastic folks who know how to put people
                            first. Our success depends on our customers, and we strive to give them 
                            the best experience a company can provide." 
                />
            </div>
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
</style>