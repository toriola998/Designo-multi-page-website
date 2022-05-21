<template>
    <div>
        <EachLocationLink locationImage="Group10.png" 
                        locationAltText="image illustration of our Canada office"
                        locationName="CANADA" 
                        locationLinkLabel="See our Canada office"
                    />
        <EachLocationLink locationImage="Group10.png" 
                    locationAltText="image illustration of our Canada office"
                    locationName="CANADA" 
                    locationLinkLabel="See our Canada office"
                />
        <EachLocationLink locationImage="Group10.png" 
                    locationAltText="image illustration of our Canada office"
                    locationName="CANADA" 
                    locationLinkLabel="See our Canada office"
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

</style>