<template>
    <div>
        <header>
            <img src="./../assets/about/mobile/image-about-hero.jpg" alt=""/>
            <div class="about">
                <h1>About Us</h1>
                <p>Founded in 2010, we are a creative agency that produces lasting results
                for our clients. We've partnered with many startups, corporations, and nonprofits
                alike to craft designs that make real impact. We're always looking forward to 
                creating brands, products, and digital experiences that connect with our 
                clients' audiences.</p>
            </div>
        </header>
        <main>
            <AboutInfo aboutImage="mobile/image-about-hero.jpg" 
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
            <Location-links />
            <AboutInfo aboutImage="mobile/image-about-hero.jpg" 
                       aboutHeading="The real deal" 
                       aboutInfo=" As strategic partners in our clients. businesses, we are ready to take on any 
                        challenge as our own. Solving real problems require empathy and collaboration, and 
                        we strive to bring a fresh perspective to every opportunity. We make design 
                        and technology more accessible and give you tools to measure success."
                       aboutInfo1="We are visual storytellers in appealing and captivating ways. By combining
                        business and marketing strategies, we inspire audiences to take action
                        and drive real results."
                    />
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
    img {
        width: 100%;
        display: block;
    }
    
    .about {
       @include bgImage;
       background-size: cover;
       background-image: url("./../assets/about/mobile/bg-pattern-hero-about-mobile.svg");
       padding: 4rem 1.5rem;

       h1, p {
           @extend %align-white-text;
       }

       p {
           @extend %paragraph-height;
           padding-top: 2rem;
       }
    }

</style>