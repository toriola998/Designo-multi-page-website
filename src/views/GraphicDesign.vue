<template>
    <header>
        <ServicesHeader title="Graphic Design" 
                        description="We deliver eye-catching branding materials that are 
                        tailored to meet your business objectives." />
    </header>
    <main>
        <section aria-label="some of the web designs done by Designo">
            <div class="projects-wrapper">
                <ProjectDetails projectImage="graphic-design/desktop/image-change.jpg"
                                projectName="TIM BROWN" 
                                projectInfo="A book cover designed for Tim Brown's new release, 'Change'" 
                                projectAltText="An image of the Tim Brown book cover"
                            />
                <ProjectDetails projectImage="graphic-design/desktop/image-boxed-water.jpg"
                                projectName="BOXED WATER" 
                                projectInfo="A simple packaging concept made for Boxed Water" 
                                projectAltText="Product designs for Box water package" 
                            />
                <ProjectDetails projectImage="graphic-design/desktop/image-science.jpg"
                                projectName="SCIENCE!" 
                                projectInfo="A poster made in collaboration with the Federal Art Project" 
                                projectAltText="A poster made in collaboration with the Federal Art Project" 
                            />
            </div>
        </section>

        <section aria-label="Other services we render at Designo">
            <div class="our-services">
                <div class="app-design design">
                    <OurServices service="APP DESIGN" serviceInfo="view application design projects" />
                </div>
                <div class="web-design design">
                    <OurServices service="WEB DESIGN" serviceInfo="view web design projects" />
                </div>
            </div>
        </section> 
    </main>
</template>

<script>
import ProjectDetails from './../components/ProjectDetails.vue';
import OurServices from './../components/OurServices.vue'
export default {
   components: {
       ProjectDetails,
       OurServices
   }
}
</script>

<style lang="scss" scoped>
    .projects-wrapper {
        padding: 4rem 1.5rem 0;
    }

    .our-services {
        padding: 6rem 1.5rem 0;
    }
</style>