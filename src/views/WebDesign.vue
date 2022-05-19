<template>
    <div>
        <ServicesHeader />
        <section aria-label="some of the web designs done by Designo">
            <div class="projects-wrapper">
                <ProjectDetails projectImage="image-express.jpg"
                                projectName="EXPRESS" 
                                projectInfo="A multi-carrier shipping website for ecommerce businesses" 
                                projectAltText="Screenshot of interface of the Express website"
                            />
                <ProjectDetails projectImage="image-transfer.jpg"
                                projectName="TRANSFER" 
                                projectInfo="Site for low-cost money transfers and sending money within seconds" 
                                projectAltText="Screenshot of interface of the Transfer website" 
                            />
                <ProjectDetails projectImage="image-photon.jpg"
                                projectName="PHOTON" 
                                projectInfo="A state-of-the-art music player with high-resolution audio and DSP effects" 
                                projectAltText="Screenshot of interface of the Photon website" 
                            />
                <ProjectDetails projectImage="image-builder.jpg"
                                projectName="BUILDER" 
                                projectInfo="Connects users with local contractors based on their location" 
                                projectAltText="Screenshot of interface of the Builder website" 
                            />
                <ProjectDetails projectImage="image-blogr.jpg"
                                projectName="BLOGR" 
                                projectInfo="Blogr is a platform for creating an online blog or publication" 
                                projectAltText="Screenshot of interface of the Blogr website" 
                            />
                <ProjectDetails projectImage="image-camp.jpg"
                                projectName="CAMP" 
                                projectInfo="Get expert training in coding, data, design, and digital marketing" 
                                projectAltText="Screenshot of interface of the Camp website" 
                            />
            </div>
        </section> 
    </div>
</template>

<script>
import ServicesHeader from './../components/ServicesHeader.vue';
import ProjectDetails from '../components/ProjectDetails.vue'
export default {
    name: 'Web Design',
    components: {
        ServicesHeader,
        ProjectDetails
    }
}
</script>

<style lang="scss" scoped>
    .projects-wrapper {
        padding: 4rem 1.5rem 0;
    }

    .each-project {
        margin-top: 2rem;

        img {
            display: block;
            width: 100%;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px ;
        }
    }
</style>