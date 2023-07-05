<template>
    <header>
        <ServicesHeader 
            title="App Design" 
            description="We deliver eye-catching branding materials that are tailored to meet your business objectives." />
    </header>
    <main>
        <section aria-label="some of the application designs done by Designo">
            <div class="projects-wrapper">
                <div v-for="(item, index) in data" :key="index">
                    <ProjectDetails v-if="item.category === 'app'"
                        :projectImage="item.image"
                        :projectName="item.name" 
                        :projectInfo="item.description" 
                        :projectAltText="item.alt"
                    />
                </div>
            </div>
        </section>

        <section aria-label="Other services we render at Designo">
            <div class="our-services">
                <router-link to="/web-design" class="web-design design">
                    <OurServices service="WEB DESIGN" />
                </router-link>
                <router-link to="/graphic-design" class="graphic-design design">
                    <OurServices service="GRAPHIC DESIGN" />
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
    name: 'App Design',
    data() {
        return {
            data: data
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