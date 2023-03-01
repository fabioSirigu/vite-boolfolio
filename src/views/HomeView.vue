<script>
import { store } from '../store';
export default {
      name: 'HomeView',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <div class="content">
            <div class="container px-5 h-100 d-flex justify-content-center align-items-center text-center">
                  <router-link :to="{ name: 'portfolio' }" class="project_link">
                        <div>
                              <div class="layer">
                                    <h1 class="title">Fabio Sirigu</h1>
                                    <div class="img_user text-center">
                                          <img src="/img/linkedinfoto.png" alt="">
                                    </div>
                                    <div class="about_me">
                                          <h2 class="description">
                                                Junior Full Stack Web Developer
                                          </h2>
                                    </div>
                              </div>
                        </div>
                  </router-link>
            </div>

      </div>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';



.content {

      .project_link {
            text-decoration: none;
            color: rgba(0, 0, 0, 0);
            font-size: 2rem;
            transition: 0.2s;
            text-transform: uppercase;


            &:hover {
                  scale: 1.1;
            }


            .layer {
                  width: 100%;
                  padding: 3rem;
                  border-radius: 25px;
                  transition: 0.4s;
                  background-color: rgba(0, 0, 0, 0.4);
                  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.8);



                  .title,
                  .description {
                        font-family: $fontPrimary;
                        color: $secondary;
                        font-weight: bold;
                        padding: 1rem 0;
                        transition: 0.4s;
                        text-shadow: 5px 4px 4px rgb(48, 48, 48);


                  }

                  &:hover {
                        background-color: $secondary;
                        box-shadow: 0px 0px 40px 10px rgba(128, 128, 128, 0.8);


                        .title,
                        .description {
                              font-family: $fontSecondary;
                              color: black;
                              text-shadow: 10px 4px 4px rgb(48, 48, 48);

                        }

                        .img_user {
                              img {
                                    border-radius: 50%;
                                    aspect-ratio: 1/1;
                                    object-fit: cover;
                                    border: 2px solid black;
                              }
                        }
                  }

                  .img_user {
                        img {
                              border: 2px solid $secondary;
                              aspect-ratio: 1/1;
                              object-fit: cover;
                              transition: 0.2s;
                              border-radius: 50%;
                        }
                  }




            }


      }
}
</style>