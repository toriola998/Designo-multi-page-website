<template>
    <div class="overlay">
        <div>
            <h2> {{ service }} </h2>
            <p :aria-label="service-info">VIEW PROJECTS 
                <span>
                    <img src="./../assets/shared/desktop/icon-right-arrow.svg" alt=""/>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['service', 'service-info']
}
</script>

<style lang="scss" scoped>
     @mixin flex($flex_center: center) {
       justify-content: $flex_center;
       display: flex;
       align-items: center;
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