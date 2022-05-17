<template>
   <div class="home-container">
       <h1>Award-winning custom designs and digital branding solutions</h1>
       <p>With over 10 years in the industry, we are experienced in creating 
        fully responsive websites, app design, and engaging brand experiences. 
        Find out more about our services.</p>
        <a>LEARN MORE</a>
        
        <img src="./../assets/home/mobile/image-hero-mobile.png"  class="hero-image" alt=""/>  
   </div>
</template>

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
        
            h1 {
                line-height: 1.1;
            }

            h1, p {
                color: #fff;
                text-align: center;
            }

            p {
                padding: 1rem 0;
            }

            img {
                width: 100%;
                margin-bottom: -0.4rem
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
</style>