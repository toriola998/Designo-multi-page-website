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
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_bg-image.scss';
    img {
        width: 100%;
        display: block;
    }
    
    .about {
       @include backgroundImage;
       background-image: url("./../assets/home/desktop/bg-pattern-hero-home.svg");
       padding: 4rem 1.5rem;

       h1, p {
           text-align: center;
           color: #fff;
       }

       p {
           line-height: 1.8;
           padding-top: 2rem;
       }
    }

</style>