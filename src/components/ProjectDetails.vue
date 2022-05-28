<template>
    <div>
        <div class="each-project">
            <div class="project-img">
                <img :src="require(`./../assets/${projectImage}`)" 
                 :alt="projectAltText"
                />
            </div>
            <div class="bg-peach">
                <div>
                    <h2> {{projectName}} </h2>
                    <p>{{projectInfo}} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['projectImage', 'projectAltText', 'projectName', 'projectInfo']
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .each-project {
        margin-top: 2rem;

        .project-img {
             @extend %image-wrap;
            padding-bottom: 640 / 700 * 100%; //This is to solve page layout shift
        }

        .project-img::before {
            @extend %image-wrap-pseudo;
        }

        img {
            @extend %image-wrap-content;
            @extend %image-block;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px ;
        }
    }

    .bg-peach {
        background-color: var(--light-peach);
        padding: 2rem 1.5rem;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;

        h2 {
            color: var(--dark-peach);
            font-size: 1.2rem;
            letter-spacing: 4px;
        }

        h2, p {
            text-align: center;
        }

        p {
            margin-top: 1rem;
        }
    }

    .bg-peach:hover {
        color: #fff;
        background-color: var(--dark-peach);

        h2 {
            color: #fff;
        }
    }

@media screen and (min-width: 615px) {
    .each-project {
        display: grid;
        grid-template-columns: 50% auto;

        img {
            border-top-left-radius: 15px;
            border-top-right-radius: 0 ;
            border-bottom-left-radius: 15px ;
        }
    }

    .bg-peach {
        @include flex;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 15px;
        border-top-right-radius: 15px;

    }
}

@media screen and (min-width: 1000px) {
    .each-project {
        display: initial;

        img {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px ;
            border-bottom-left-radius: 0 ;
            border-bottom-right-radius: 0 ;
        }
    }

    .bg-peach {
        @include flex;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
}
</style>
