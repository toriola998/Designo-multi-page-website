<template>
    <div>
        <ServicesHeader />
        <section>
            <div class="projects-wrapper">
                <div class="each-project">
                    <img src="./../assets/web-design/desktop/image-express.jpg" 
                        alt="" 
                        />
                    <ProjectDetails projectName="EXPRESS" 
                                    projectInfo="A multi-carrier shipping website for ecommerce businesses" />
                </div>

                <div class="each-project">
                    <img src="./../assets/web-design/desktop/image-transfer.jpg" 
                        alt="" 
                        />
                    <ProjectDetails projectName="TRANSFER" 
                                    projectInfo="Site for low-cost money transfers and sending money within seconds" />
                </div>

                <div class="each-project">
                    <img src="./../assets/web-design/desktop/image-express.jpg" 
                        alt="" 
                        />
                    <ProjectDetails projectName="EXPRESS" 
                                    projectInfo="A multi-carrier shipping website for ecommerce businesses" />
                </div>

                <div class="each-project">
                    <img src="./../assets/web-design/desktop/image-photon.jpg" 
                        alt="" 
                        />
                    <ProjectDetails projectName="PHOTON" 
                                    projectInfo="A state-of-the-art music player with high-resolution audio and DSP effects" />
                </div>

                <div class="each-project">
                    <img src="./../assets/web-design/desktop/image-builder.jpg" 
                        alt="" 
                        />
                    <ProjectDetails projectName="BUILDER" 
                                    projectInfo="Connects users with local contractors based on their location" />
                </div>

                <div class="each-project">
                    <img src="./../assets/web-design/desktop/image-blogr.jpg" 
                        alt="" 
                        />
                    <ProjectDetails projectName="BLOGR" 
                                    projectInfo="Blogr is a platform for creating an online blog or publication" />
                </div>

                 <div class="each-project">
                    <img src="./../assets/web-design/desktop/image-camp.jpg" 
                        alt="" 
                        />
                    <ProjectDetails projectName="CAMP" 
                                    projectInfo="Get expert training in coding, data, design, and digital marketing" />
                </div>
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