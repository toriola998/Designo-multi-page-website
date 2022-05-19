<template>
    <div>
        <div class="bg-peach">
            <h2> {{projectName}} </h2>
            <p>{{projectInfo}} </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['projectName', 'projectInfo']
}
</script>

<style lang="scss" scoped>
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
</style>>
