<script>
import { store } from '../store.js'
export default {
      name: 'AppFooter',
      data() {
            return {
                  store,
                  activeIndex: 0
            }
      },
      methods: {
            startSlider() {
                  setInterval(() => {
                        const images = this.$el.querySelectorAll("li img");
                        const activeImage = images[this.activeIndex];
                        //console.log(activeImage.src); // Controlla il valore di src dell'immagine attiva
                        activeImage.classList.remove("active");

                        this.activeIndex = (this.activeIndex + 1) % images.length;

                        const nextImage = images[this.activeIndex];
                        //console.log(nextImage.src); // Controlla il valore di src dell'immagine successiva
                        nextImage.classList.add("active");
                  }, 2000);
            }
      },
      mounted() {
            this.startSlider();
      }
}
</script>

<template>
      <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container d-flex justify-content-center tecnologies">
                  <ul class="navbar-nav">
                        <li class="nav-item">
                              <a class="nav-link" :href="store.gitHub_url" aria-current="page" target="_blank">

                                    <font-awesome-icon icon="fa-brands fa-github" />
                                    GitHub</a>
                        </li>
                        <li class="nav_image" v-for="(image, index) in store.arrayTecnologies" :key="index">
                              <img :src="image.image" alt="">
                        </li>
                        <li class="nav-item">
                              <a class="nav-link" :href="store.linkedinUrl" aria-current="page" target="_blank">
                                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                                    LinkedIn
                              </a>
                        </li>
                  </ul>

            </div>
      </nav>
</template>

<style lang="scss" scoped>
@import "../styles/general.scss";

.navbar {
      position: fixed;
      z-index: 1000;
      width: 100%;
      bottom: 0;
      background-color: rgb(0, 0, 0);
      height: 80px;
      box-shadow: 0px -2px 10px 3px rgba(0, 0, 0, 0.7);



      .tecnologies ul {
            position: relative;
            padding: 0;
            height: 80px;
            /* imposta l'altezza delle immagini */
            overflow: hidden;




            .nav-item {
                  height: 100%;

                  .nav-link {
                        position: relative;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-weight: 700;
                        color: $secondary;
                        transition: 0.4s;
                        text-shadow: 5px 4px 2px rgba(66, 68, 90, 1);




                        &:hover {
                              color: $primary;
                        }
                  }

            }

            .nav_image {
                  margin: 0 0.5rem;


                  img {
                        position: absolute;
                        padding: 1rem 0;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 50px;
                        object-fit: cover;
                        opacity: 0;
                        transition: opacity 0.5s ease-in;

                  }

                  img.active {
                        opacity: 1;
                  }
            }

      }

}
</style>