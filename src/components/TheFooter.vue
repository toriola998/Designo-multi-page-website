<template>
    <footer>
        <div class="bg-pattern-wrap">
            <div class="bg-pattern-footer">
                <h3>Let's talk about your project</h3>
                <p>Ready to take it to the next level? Contact us today and find 
                out how our expertise can help your business grow.</p>
                <WhiteButton buttonRole="" callToAction="GET IN TOUCH" />
            </div>
        </div>
    </footer>
</template>

<script>
import WhiteButton from './../components/WhiteButton.vue'
export default {
    components: {
        WhiteButton,
    }
}
</script>

<style lang="scss" scoped>
    .bg-pattern-wrap{
        padding: 7rem 1.5rem 0;
    }

    .bg-pattern-footer {
        background-image: url("./../assets/shared/desktop/bg-pattern-two-circles.svg"); /* The image used */
        background-color: #E7816B;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        padding: 4rem 1.5rem;
        border-radius: 15px;

        h3 {
            font-size: 2.2rem;
            line-height: 1.2;
        }

        h3, p {
            text-align: center;
            color: #fff;
        }

        p {
            line-height: 1.9;
            margin: 2rem 0;
        }
    }
</style>