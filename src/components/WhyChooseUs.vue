<template>
    <div class="why-choose-us">
        <img :src="require(`./../assets/home/desktop/${illustration}`)" />
        <div>
            <h3>{{ serviceTitle }}</h3>
            <p> {{ serviceInfo }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['illustration', 'serviceTitle', 'serviceInfo' ]
}
</script>

<style lang="scss" scoped>
    .why-choose-us {
        img {
            display: block;
            margin: auto;
        }

        h3 {
            letter-spacing: 2px;
            margin: 2rem 0;
        }

        h3, p {
            text-align: center;
            color: var(--color-black);
        }
    }
@media screen and (min-width: 615px) {
    .why-choose-us {
        display: grid;
        grid-template-columns: 30% 60%;
        gap: 4rem;

        h3, p {
            text-align: initial;
        }
    }
}

@media screen and (min-width: 1000px) {
    .why-choose-us {
        display: initial;

            h3, p {
                text-align: center;
            }
    }
}
</style>