import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import PortfolioView from './views/PortfolioView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
import ContactsView from './views/ContactsView.vue'
import NotFoundView from './views/NotFoundView.vue'


const router = createRouter({
      history: createWebHistory(),
      routes: [
            {
                  path: '/',
                  name: 'home',
                  component: HomeView
            },
            {
                  path: '/about',
                  name: 'about',
                  component: AboutView
            },
            {
                  path: '/portfolio',
                  name: 'portfolio',
                  component: PortfolioView
            },
            {
                  path: '/blog/:slug',
                  name: 'single-project',
                  component: SingleProjectView
            },
            {
                  path: '/contacts',
                  name: 'contacts',
                  component: ContactsView
            },
            {
                  path: '/:pathMatch(.*)*',
                  name: 'not-found',
                  component: NotFoundView
            },

      ]
})

export { router }