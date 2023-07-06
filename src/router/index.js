import {createRouter, createWebHistory} from 'vue-router'

import Home from './../views/Home.vue'
import OurLocations from './../views/OurLocations.vue'
import AboutUs from './../views/AboutUs.vue'
import ContactUs from './../views/ContactUs.vue'
import Services from './../views/Services.vue'

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
        },

        {
            path: '/services/:service',
            name: 'Services',
            component: Services
        }
    ]
})
export default router;