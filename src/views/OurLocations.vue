<template>
    <div>
        <EachLocation mapImage="image-map-canada.png"
                    mapAltText="Image of the map to Designo's office in Canada"
                    country="Canada"
                    office="Designo Central Office"
                    address="3886 Wellington Street, Toronto, Ontario M9C 3J5"
                    number="P : +1 253-863-8967"
                    email="M : contact@designo.co" />

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
