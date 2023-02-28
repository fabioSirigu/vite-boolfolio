import { reactive } from 'vue'

export const store = reactive({
      api_base_url: 'http://localhost:8001',
      gitHub_url: 'https://github.com/naz1ne',
      linkedinUrl: 'https://www.linkedin.com/in/fabio-sirigu-bba4a0174',

      arrayTecnologies: [
            {
                  image: '/img/tecnologies/html.png',
                  title: 'bootstrap',
            },
            {
                  image: '/img/tecnologies/css.png',
                  title: 'css',
            },
            {
                  image: '/img/tecnologies/bootstrap.png',
                  title: 'bootstrap'
            },
            {
                  image: '/img/tecnologies/js.png',
                  title: 'js'
            },
            {
                  image: '/img/tecnologies/vue.png',
                  title: 'vue'
            },
            {
                  image: '/img/tecnologies/php.png',
                  title: 'php'
            },
            {
                  image: '/img/tecnologies/laravel.png',
                  title: 'laravel'
            }
      ]
}) 