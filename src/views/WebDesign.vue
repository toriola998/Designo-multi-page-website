<template>
    <div>
        <header>
            <ServicesHeader title="Web design"
                            description="We build websites that serve as powerful marketing tools
                            and bring memorable brand experiences."/>
        </header>
        
        <main>
        <section aria-label="some of the web designs done by Designo">
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
                <router-link to="/graphic-design" class="graphic-design design">
                    <OurServices service="GRAPHIC DESIGN" />
                </router-link>
            </div>
        </section>
        </main>
    </div>
</template>

<script>
import data from './../../data.json'
import ServicesHeader from './../components/ServicesHeader.vue';
import ProjectDetails from '../components/ProjectDetails.vue';
import OurServices from '../components/OurServices.vue'
export default {
    name: 'Web Design',
    data() {
        return {
            data: data
        }
    },
    computed: {
        filteredData() {
            return this.data.filter(item => item.category === 'web');
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