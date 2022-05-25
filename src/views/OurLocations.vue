<template>
    <div>
        <main>
            <div class="location-container">
                <div>
                <EachLocation mapImage="image-map-canada.png"
                            mapAltText="Image of the map to Designo's office in Canada"
                            country="Canada"
                            office="Designo Central Office"
                            address="3886 Wellington Street, Toronto, Ontario M9C 3J5"
                            number="P : +1 253-863-8967"
                            email="M : contact@designo.co" 
                        />
                <EachLocation mapImage="image-map-australia.png"
                            mapAltText="Image of the map to Designo's office in Australia"
                            country="Australia"
                            office="Designo AU Office"
                            address="19 Balonne Street, New South Wales 2443"
                            number="P : (02) 6720 9092"
                            email="M : contact@designo.au" 
                        />
                <EachLocation mapImage="image-map-united-kingdom.png"
                            mapAltText="Image of the map to Designo's office in United Kingdom"
                            country="United Kingdom"
                            office="Designo UK Office"
                            address="13 Colorado Way, Rhyd-y-fro SA8 9GA"
                            number="P : 078 3115 1400"
                            email="M : contact@designo.uk" 
                        />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import EachLocation from './../components/EachLocation.vue'
export default {
    name: 'Locations',
    components: {
        EachLocation 
   },
   
}
</script>

<style lang="scss" scoped>
    .location-container {
        padding: 0 2.5rem;
    }
    
@media screen and (min-width: 1000px) {
    .location-container {
        padding: 0 8rem;
    }
}
</style>
