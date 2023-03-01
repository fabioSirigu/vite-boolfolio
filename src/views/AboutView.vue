<script>
import { store } from '../store.js'

export default {
      name: 'AboutView',
      data() {
            return {
                  store,
                  activeIndex: 0
            }
      },
}
</script>

<template>
      <div class="container h-100">
            <div class="content">
                  <h1 class="lead text-center mb-4">
                        Chi è Fabio Sirigu?
                  </h1>
                  <div class="my-container">

                        <div class="col-12 col-lg-6 description_left">
                              <p>Sono un Jr. Full Stack Web Dev con una
                                    grande passione per la tecnologia.
                                    Dopo 5 anni di esperienza nel mondo dei
                                    controlli non distruttivi con tecnologie
                                    all'avanguardia negli ultrasuoni ho deciso di
                                    prendere definitivamente la strada del
                                    coding affrontando il corso di Boolean, un
                                    corso intensivo di 6 mesi in cui ho sviluppato
                                    capacità e logica per diventare un Full Stack
                                    Web Developer.</p>
                        </div>
                        <div class="col-12 col-lg-6 description_right">
                              <p>Dai 4 anni gioco a calcio, quindi sono molto formato sul lato disciplinare e nel lavoro di
                                    squadra
                                    per raggiungere un unico e comune obiettivo. <br>
                                    Scrivo, dipingo, canto, produco, mi piace vedere e conoscere tutto quello che mi circonda.
                                    <br>
                                    <br>
                                    <strong>
                                          Sono solamente tutto questo.
                                    </strong>
                              </p>
                        </div>
                  </div>
                  <div class="social text-center">
                        <h4>Seguimi sui social!</h4>
                        <ul class="d-flex justify-content-center">
                              <li class="mx-4">
                                    <a :href="store.instagramUrl" aria-current="page" target="_blank">
                                          <font-awesome-icon icon="fa-brands fa-instagram" />
                                    </a>
                              </li>
                              <li class="mx-4">
                                    <a :href="store.facebookUrl" aria-current="page" target="_blank">
                                          <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                    </a>
                              </li>
                              <li class="mx-4">
                                    <a :href="store.linkedinUrl" aria-current="page" target="_blank">
                                          <font-awesome-icon icon="fa-brands fa-linkedin" />
                                    </a>
                              </li>
                              <li class="mx-4">
                                    <a :href="store.gitHub_url" aria-current="page" target="_blank">
                                          <font-awesome-icon icon="fa-brands fa-github" />
                                    </a>
                              </li>
                        </ul>
                  </div>
            </div>
      </div>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';

.content {
      padding: 3rem 0.5rem;
      color: $secondary;
      text-shadow: 5px 4px 4px rgb(48, 48, 48);
      border-radius: 25px;
      background-color: rgba(0, 0, 0, 0.4);
      box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.8);
      margin-bottom: 80px;

      .lead {
            font-size: 4rem;

      }

      .my-container {
            font-size: 1.2rem;
            display: flex;
            width: 80%;
            margin: auto;
            gap: 1rem;



            .description_right {


                  strong {
                        font-size: 1.7rem;
                  }
            }
      }

      .social {
            ul {
                  padding: 0;

                  li {
                        font-size: 2rem;
                        list-style: none;
                        transition: 0.4s;

                        a {
                              text-decoration: none;
                              color: $secondary;

                        }

                        &:hover {
                              scale: 1.2;
                        }
                  }
            }
      }
}
</style>