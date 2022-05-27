<template>
    <div>
        <div class="about-info">
            <picture>
                <source media="(min-width: 1000px)" 
                    :srcset="require(`./../assets/about/desktop/${aboutImage}`)">    
                <source media="(min-width: 615px)" 
                        :srcset="require(`./../assets/about/tablet/${aboutImage}`)">
                <img :src="require(`./../assets/about/mobile/${aboutImage}`)"  
                        alt=""
                        >
            </picture>
            <div class="about-bg">
                <div>
                    <h2>{{ aboutHeading }}</h2>
                    <p> {{ aboutInfo }} </p>  
                    <p>{{ aboutInfo1 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['aboutImage', 'aboutHeading', 'aboutInfo', 'aboutInfo1']
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    img {
       @extend %image-block;
    }
    
    .about-info {
        .about-bg {
            @include bgImage($bg-color: var(--light-peach));
            background-image: url("./../assets/shared/desktop/bg-pattern-two-circles.svg");
            padding: 4rem 1.5rem;
            }

            h2 {
                font-size: 2rem;
                color: var(--dark-peach);
            }

            h2, p {
                text-align: center;
            }

            p {
                padding-top: 2rem;
                color: var(--color-black);
            }
    }
   
@media screen and (min-width: 615px) {
    .about-info {   
        .about-bg {
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }
        img {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
    }
}
@media screen and (min-width: 1000px) {
    .about-info {
        h2 {font-size: 2.3rem;}
    }
}
@media screen and (min-width: 1000px) {
    .about-info {
        display: grid;
        grid-template-columns: auto 60%; 
            img {
                border-top-left-radius: 15px;
                border-top-right-radius: 0;
                border-bottom-left-radius: 15px;
            }

            .about-bg {
                @include flex;
                padding: 4rem;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 15px;
                border-top-right-radius: 15px;
            }

            h2, p {
                text-align: initial;
            }
    }

    .about-info:nth-child(2) .about-bg {
        //grid-template-columns: 60% auto;
        grid-area: 1;
    }
}

@media screen and (min-width: 1200px) {
    .about-info {
        .about-bg {
                padding: 4rem 6rem;
        }
    }
}

@media screen and (min-width: 1400px) {
    .about-info {
        max-width: 1330px;
        margin: auto;
    }
}


 // .about-bg{
        //     grid-area: 1;
        //     // border-top-left-radius: 15px;
        //     // border-bottom-left-radius: 15px;
        //     // border-bottom-right-radius: 0px;
        //     // border-top-right-radius: 0px;
        // }

        //  img {
        //         // border-top-left-radius: 0;
        //         // border-top-right-radius: 15px;
        //         // border-bottom-left-radius: 0;
        //         // border-bottom-right-radius: 15px;
        //     }
    //} 
</style>