<template>
    <header>
        <div class="home-container">
            <div>
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating 
                fully responsive websites, app design, and engaging brand experiences. 
                Find out more about our services.</p>
                <a aria-label="Learn more about Designo">LEARN MORE</a>
            </div>
            <img src="./../assets/home/mobile/image-hero-mobile.png"  class="hero-image" alt=""/>  
        </div>
    </header>
    <main>
        <section aria-label="Services we render in Designo"> 
            <div class="services">
                <div class="web-design design">
                    <OurServices service="WEB DESIGN" serviceInfo="view web design projects" />
                </div>
                <div class="app-design design">
                    <OurServices service="APP DESIGN" serviceInfo="view application design projects" />
                </div>
                <div class="graphic-design design">
                    <OurServices service="GRAPHIC DESIGN" serviceInfo="view web design projects" />
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
import WhyChooseUs from './../components/WhyChooseUs.vue'

export default {
    name: "Home",
    components: {
        OurServices,
        WhyChooseUs
    }
}
</script>

<style lang="scss" scoped>
    @mixin flex($flex_center: center) {
       justify-content: $flex_center;
       display: flex;
       align-items: center;
    }

    .home-container {
        background-image: url("./../assets/home/desktop/bg-pattern-hero-home.svg"); /* The image used */
        background-color: #E7816B;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        padding: 4rem 1.5rem 0;
        
            h1 { line-height: 1.1; }

            h1, p {
                color: #fff;
                text-align: center;
            }

            p { padding: 1rem 0; }

            img {
                width: 100%;
                margin-bottom: -0.4rem;
                filter: drop-shadow(20px -40px 50px rgba(93, 2, 2, 0.497569));
            }

            a {
                @include flex;
                background-color: #fff;
                color: var(--black-color);
                font-weight: 500;
                font-size: .85rem;
                margin: 0 auto 5rem;
                border-radius: 5px;
                width: 8rem;
                height: 3rem;       
            }
    }

    .services {
        padding: 6rem 1.5rem;
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
        background-image: url("./../assets/home/mobile/image-web-design.jpg");
    }

    .app-design {
        background-image: url("./../assets/home/mobile/image-app-design.jpg");
    }

    .graphic-design {
        background-image: url("./../assets/home/mobile/image-graphic-design.jpg");
    }

    .why-choose-wrapper {
        padding: 0 1.5rem;
    }
</style>