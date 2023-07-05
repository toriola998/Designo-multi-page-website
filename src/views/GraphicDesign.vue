<template>
    <header>
        <ServicesHeader 
            title="Graphic Design" 
            description="We deliver eye-catching branding materials that are tailored to meet your business objectives." />
    </header>
    <main>
        <section aria-label="some of the Graphics designs done by Designo">
            <div class="projects-wrapper">
                <ProjectDetails v-for="(item, index) in filteredData" :key="index"
                    :projectImage="item.image"
                    :projectName="item.name" 
                    :projectInfo="item.description" 
                    :projectAltText="item.alt"
                />
            </div>
        </section>

        <section aria-label="Other services we render at Designo">
            <div class="our-services">
                <router-link to="/app-design" class="app-design design">
                    <OurServices service="APP DESIGN" />
                </router-link>
                <router-link to="/web-design" class="web-design design">
                    <OurServices service="WEB DESIGN" />
                </router-link>
            </div>
        </section> 
    </main>
</template>

<script>
import data from './../../data.json'
import ProjectDetails from './../components/ProjectDetails.vue';
import ServicesHeader from './../components/ServicesHeader.vue'
import OurServices from './../components/OurServices.vue'
export default {
    name: 'Graphic Design',
    data() {
        return {
            data: data
        }
    },
    computed: {
        filteredData() {
            return this.data.filter(item => item.category === 'graphic');
        }
    },
    components: {
        ServicesHeader,
        ProjectDetails,
        OurServices
    }
}
</script>

<style scoped>
    @import './../assets/css/design-pages.css';
</style>