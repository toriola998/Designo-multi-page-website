<template>
    <header>
        <ServicesHeader 
            :title="service.title" 
            :description="service.description" />
    </header>
    <main>
        <section :aria-label="`some of the ${service.title} done by Designo`">
            <div class="projects-wrapper">
                <ProjectDetails v-for="(item, index) in service.portfolio" :key="index"
                    :projectImage="item.image"
                    :projectName="item.name" 
                    :projectInfo="item.description" 
                    :projectAltText="item.alt"
                />
            </div>
        </section>

        <section aria-label="Other services we render at Designo">
            <div class="our-services">
                <router-link 
                    v-for="(item, index) in service.otherServices" 
                    :key="index"
                    :to="`/services/${item.slug}`" 
                    class="design" 
                    :class="item.slug" 
                    >
                        <OurServices :service="item.service" />
                </router-link>
            </div>
        </section>
    </main>
</template>

<script>
import data from './../../data.json'
import ServicesHeader from './../components/ServicesHeader.vue'
import OurServices from './../components/OurServices.vue'
import ProjectDetails from './../components/ProjectDetails.vue'
export default {
    name: '',
    data() {
        return {
            data: data
        }
    },
    computed: {
        // filteredData() {
        //     return this.data.filter(item => item.category === 'app');
        // },

        slug() {
            return this.$route.params.service
        },

        service() {
            return this.data.find( (item) => {
                   return item.slug == this.slug
            })
        }
    },
    components: {
        ServicesHeader,
        OurServices,
        ProjectDetails
    }
}
</script>

<style scoped>
    @import './../assets/css/design-pages.css';
</style>