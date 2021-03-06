import {createRouter, createWebHistory} from 'vue-router'

import Home from './../views/Home.vue'
import WebDesign from './../views/WebDesign.vue'
import GraphicDesign from './../views/GraphicDesign.vue'
import AppDesign from './../views/AppDesign.vue'
import OurLocations from './../views/OurLocations.vue'
import AboutUs from './../views/AboutUs.vue'
import ContactUs from './../views/ContactUs.vue'

const router = createRouter({
    history:  createWebHistory(),
    scrollBehavior() {
      // always scroll to top
      return { 
          top: 0,
          behavior: 'smooth', 
     }
   },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/web-design',
            name: 'Web Design',
            component: WebDesign
        },

        {
            path: '/graphic-design',
            name: 'Graphic Design',
            component: GraphicDesign
        },

        {
            path: '/app-design',
            name: 'App Design',
            component: AppDesign
        },

        {
            path: '/locations',
            name: 'Locations',
            component: OurLocations
        },

        {
            path: '/about-us',
            name: 'About Us',
            component: AboutUs
        },

        {
            path: '/contact-us',
            name: 'Contact Us',
            component: ContactUs
        }
    ]
})
export default router;