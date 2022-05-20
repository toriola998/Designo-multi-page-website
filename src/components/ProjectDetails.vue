<template>
    <div>
        <div class="each-project">
            <img :src="require(`./../assets/${projectImage}`)" 
                 :alt="projectAltText"/>
            <div class="bg-peach">
                <h2> {{projectName}} </h2>
                <p>{{projectInfo}} </p>
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
    .each-project {
        margin-top: 2rem;

        img {
            display: block;
            width: 100%;
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
            line-height: 1.7;
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
</style>>
