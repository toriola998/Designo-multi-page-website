<template>
    <div>
        <header>
            <div>
                <div class="hero-about-img">
                    <picture>
                        <source media="(min-width: 1000px)" 
                            :srcset="require(`./../assets/about/desktop/image-about-hero.jpg`)">    
                        <source media="(min-width: 615px)" 
                                :srcset="require(`./../assets/about/tablet/image-about-hero.jpg`)">
                        <img :src="require(`./../assets/about/mobile/image-about-hero.jpg`)"  
                                alt=""
                                >
                    </picture>
                </div>
                <div class="about">
                    <div>
                        <h1>About Us</h1>
                        <p>Founded in 2010, we are a creative agency that produces lasting results
                        for our clients. We've partnered with many startups, corporations, and nonprofits
                        alike to craft designs that make real impact. We're always looking forward to 
                        creating brands, products, and digital experiences that connect with our 
                        clients' audiences.</p>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="about-wrapper about1"> 
                <AboutInfo aboutImage="image-world-class-talent.jpg" 
                        aboutHeading="World-class talent" 
                        aboutInfo="We are a crew of strategists, problem-solvers, and technologists. Every 
                        design is thoughtfully crafted from concept to launch, ensuring success in
                        its given market. We are constantly updating our skills in a myriad of platforms."
                        aboutInfo1="Our team is multi-disciplinary and we are not merely interested in form — 
                        content and meaning are just as important. We give great importance to 
                        craftsmanship, service, and prompt delivery. Clients have always been 
                        impressed with our high-quality outcomes that encapsulates their brand's 
                        story and mission."
                        />
            </div>
            <Location-links />
            
            <div class="about-wrapper  about2"> 
                <AboutInfo aboutImage="image-real-deal.jpg" 
                        aboutHeading="The real deal" 
                        aboutInfo=" As strategic partners in our clients. businesses, we are ready to take on any 
                            challenge as our own. Solving real problems require empathy and collaboration, and 
                            we strive to bring a fresh perspective to every opportunity. We make design 
                            and technology more accessible and give you tools to measure success."
                        aboutInfo1="We are visual storytellers in appealing and captivating ways. By combining
                            business and marketing strategies, we inspire audiences to take action
                            and drive real results."
                        />
            </div>
        </main>
    </div>
</template>

<script>
import AboutInfo from '../components/AboutInfo.vue'
import LocationLinks from '../components/LocationLinks.vue'
export default {
  components: { AboutInfo, LocationLinks },

}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .hero-about-img {
        @extend %image-wrap;
        padding-bottom: 320 / 375 * 100%; //This is to solve page layout shift
        
        img {
            @extend %image-block;
            @extend %image-wrap-content;
        }
    }
    
    .hero-about-img::before{
        @extend %image-wrap-pseudo;
    }

    .about {
       @include bgImage;
       background-image: url("./../assets/about/mobile/bg-pattern-hero-about-mobile.svg");
       padding: 4rem 1.5rem;

       h1, p {
           @extend %align-white-text;
       }

       p {
           padding-top: 2rem;
       }
    }

@media screen and (min-width: 615px) {
    header,
    .about-wrapper {
        padding: 0 2.5rem; 
    }

    main {
        padding: 4rem 0;
    }

    header {
        margin-bottom: 2rem;
    }

    .about{
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    .hero-about-img {
        padding-bottom: 320 / 689 * 100%; //This is to solve page layout shift
        
        img {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
    }
    
}
@media screen and (min-width: 700px) {
     .about{
        h1{ font-size: 2.5rem }
    }
}
@media screen and (min-width: 1000px) {
    header {
        >div {
            display: grid;
            grid-template-columns: 60% auto;
        }
    }

    .about{
        background-size: cover;
        background-position: bottom;
        background-image: url("./../assets/about/desktop/bg-pattern-hero-about-desktop.svg");
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 0;
        border-top-left-radius: 15px;
        grid-area: 1;
        padding: 4rem;
        @include flex;

            h1, p {
                text-align: initial;
            }
    }

    .about1 { margin-bottom: 2rem; }
    .about2 { margin-top: 2rem; }

    .hero-about-img {
         padding-bottom: 480 / 476 * 100%; //This is to solve page layout shift
          img  {
            border-top-left-radius: 0px;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }
    }
}

@media screen and (min-width: 1200px) {
    header,
    .about-wrapper {
        padding: 0 8rem;
    }

    main {
        padding: 6rem 0;
    }

    .about {
        padding: 4rem 6rem;
    }
}

@media screen and (min-width: 1400px) {
    header {
        >div {
            max-width: 1330px;
            margin: auto;
        }
    }
}
</style>
