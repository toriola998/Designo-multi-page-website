<template>
    <div class="location-wrap">
        <div>
            <EachLocationLink locationImage="Group10.png" 
                            locationAltText="image illustration of our Canada office"
                            locationName="CANADA" 
                            locationLinkLabel="See our Canada office"
                        />
            <EachLocationLink locationImage="Group15.png" 
                        locationAltText="image illustration of our Australia office"
                        locationName="AUSTRALIA" 
                        locationLinkLabel="See our Australia office"
                    />
            <EachLocationLink locationImage="Group17.png" 
                        locationAltText="image illustration of our United Kingdom office"
                        locationName="UNITED KINGDOM" 
                        locationLinkLabel="See our United Kingdom office"
                    />
        </div>
    </div>
</template>

<script>
import EachLocationLink from './EachLocationLink.vue'
export default {
  components: { EachLocationLink },
}
</script>

<style lang="scss" scoped>
    .location-wrap {
        padding: 5rem 0 3rem 0;
    }

@media screen and (min-width: 1000px) {
    .location-wrap {
        >div {
            display: grid;
            grid-template-columns: auto auto auto;
        }
    }
}

@media screen and (min-width: 1200px) {
    .location-wrap {
        padding: 5rem 8rem 3rem;
    }
}

@media screen and (min-width: 1400px) {
    .location-wrap {

        >div {
           max-width: 1300px;
           margin: auto;
        }
    }
}
</style>