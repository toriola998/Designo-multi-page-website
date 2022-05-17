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
                    <div class="overlay">
                        <div>
                            <h2>WEB DESIGN</h2>
                            <p aria-label="view web design projects">VIEW PROJECTS 
                                <span>
                                    <img src="./../assets/shared/desktop/icon-right-arrow.svg" alt=""/>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
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
        
            h1 { line-height: 1.1; }

            h1, p {
                color: #fff;
                text-align: center;
            }

            p { padding: 1rem 0; }

            img {
                width: 100%;
                margin-bottom: -0.4rem;
                filter: drop-shadow(20px -40px 80px rgba(93, 2, 2, 0.497569));
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
        padding: 4rem 1.5rem;
    }

    .design {
        position: relative;
    }

    .web-design {
        background-image: url("./../assets/home/mobile/image-web-design.jpg");
        background-color: grey;
        background-repeat: no-repeat;
        background-size: cover;
        height: 250px;
        width: 100%;
        border-radius: 15px;   
    }

    .overlay  {
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        border-radius: 15px;
        @include flex;

            div {
                z-index: 999;
                color: #fff;
            }

            h2 {
                letter-spacing: 2px;
                font-size: 2rem;
                margin-bottom: .6rem;
            }

            p {
                text-align: center;
                letter-spacing: 7px;
            }
    }
</style>