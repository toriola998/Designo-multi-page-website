<template>
    <header>
        <ServicesHeader title="App Design" 
                        description="We deliver eye-catching branding materials that are 
                        tailored to meet your business objectives." />
    </header>
    <main>
        <section aria-label="some of the application designs done by Designo">
            <div class="projects-wrapper">
                <ProjectDetails projectImage="app-design/desktop/image-airfilter.jpg"
                                projectName="AIR FILTER" 
                                projectInfo="Solving the problem of poor indoor air quality by filtering the air'" 
                                projectAltText="A screenshot of the air filter app"
                            />
                <ProjectDetails projectImage="app-design/desktop/image-eyecam.jpg"
                                projectName="EYE CAM" 
                                projectInfo="Product that lets you edit your favorite photos and videos at any time" 
                                projectAltText="A screenshot of the eye cam app"
                            />
                <ProjectDetails projectImage="app-design/desktop/image-faceit.jpg"
                                projectName="FACE IT" 
                                projectInfo="Get to meet your favorite internet superstar with the faceit app" 
                                projectAltText="A screenshot of the face it app"
                            />
                <ProjectDetails projectImage="app-design/desktop/image-todo.jpg"
                                projectName="TODO APP" 
                                projectInfo="A todo app that features cloud sync with light and dark mode" 
                                projectAltText="A screenshot of the todo app"
                            />
                <ProjectDetails projectImage="app-design/desktop/image-loopstudios.jpg"
                                projectName="LOOPSTUDIOS" 
                                projectInfo="A VR experience app made for Loopstudios" 
                                projectAltText="A screenshot of the loopstudios app"
                            />
            </div>
        </section>

        <section aria-label="Other services we render at Designo">
            <div class="our-services">
                <div class="web-design design" 
                    @click="this.$router.push({ path: '/web-design'})">
                    <OurServices service="WEB DESIGN" />
                </div>
                <div class="graphic-design design"
                    @click="this.$router.push({ path: '/graphic-design'})">
                    <OurServices service="GRAPHIC DESIGN" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import ServicesHeader from './../components/ServicesHeader.vue'
import OurServices from './../components/OurServices.vue'
import ProjectDetails from './../components/ProjectDetails.vue'
export default {
    name: 'App Design',
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