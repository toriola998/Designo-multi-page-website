<template>
    <div class="why-choose-us">
        <img :src="illustration" />
        <h3>{{ title }}</h3>
        <p> {{ notes }}</p>
    </div>
</template>

<script>
export default {
    props: ['illustration', 'title', 'notes' ]
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
</style>