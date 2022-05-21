<template>
    <div class="location-wrap">
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
</style>