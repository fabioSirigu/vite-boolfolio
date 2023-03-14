import { reactive } from 'vue'

export const store = reactive({
      api_base_url: 'http://localhost:8001',
      gitHub_url: 'https://github.com/naz1ne',
      linkedinUrl: 'https://www.linkedin.com/in/fabio-sirigu-bba4a0174',
      instagramUrl: 'https://www.instagram.com/fabio_sirigu/',
      facebookUrl: 'https://www.facebook.com/profile.php?id=100009222017142',

      arrayTecnologies: [
            {
                  image: '/img/tecnologies/html.png',
                  title: 'bootstrap',
                  position: 0,
            },
            {
                  image: '/img/tecnologies/css.png',
                  title: 'css',
                  position: 200,
            },
            {
                  image: '/img/tecnologies/bootstrapLogo.png',
                  title: 'bootstrap',
                  position: 400,
            },
            {
                  image: '/img/tecnologies/js.png',
                  title: 'js',
                  position: 600,
            },
            {
                  image: '/img/tecnologies/vue.png',
                  title: 'vue',
                  position: 800,
            },
            {
                  image: '/img/tecnologies/php.png',
                  title: 'php',
                  position: 1000,
            },
            {
                  image: '/img/tecnologies/logo_laravel.png',
                  title: 'laravel',
                  position: 1200,
            },
            {
                  image: '/img/tecnologies/sasslogo.png',
                  title: 'sass',
                  position: 1200,
            },
            {
                  image: '/img/tecnologies/vite.png',
                  title: 'vite',
                  position: 1200,
            },
            {
                  image: '/img/tecnologies/logo-mysql-26300.png',
                  title: 'mySql',
                  position: 1200,
            },
      ],
}) 