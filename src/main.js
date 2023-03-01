import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'




library.add(faChevronLeft, faLinkedin, faGithub, faFacebookF, faInstagram)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
