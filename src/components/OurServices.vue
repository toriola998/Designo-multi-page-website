<template>
    <div class="overlay">
        <div>
            <h2>{{ service }}</h2>
            <p :aria-label="serviceInfo">VIEW PROJECTS 
                <span>
                    <img src="./../assets/shared/desktop/icon-right-arrow.svg" alt=""/>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['service', 'serviceInfo']
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';

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
                text-align: center;
            }

            p {
                text-align: center;
                letter-spacing: 7px;
            }
    }

    .overlay:hover {
        background:rgba(231, 129, 107, 0.6);    
    }
@media screen and (min-width: 1000px) {
    .overlay {
        h2 {
            font-size: 2.5rem;
        }
    }
}
</style>