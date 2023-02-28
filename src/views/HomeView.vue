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
                        <div class="border_animate">
                              <div class="layer">
                                    <h1 class="title">NazOne's Projects</h1>
                                    <div class="img_user text-center">
                                          <img src="/img/linkedinfoto.png" alt="">
                                    </div>
                                    <div class="about_me">
                                          <h2 class="description">
                                                Junior Full Stack Web Developer
                                          </h2>
                                    </div>
                                    <div class="tecnologies">
                                          <ul>
                                                <li v-for="image in store.arrayTecnologies">
                                                      <img :src="image.image" alt="">
                                                </li>
                                          </ul>

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
            width: 60%;


            &:hover {
                  scale: 1.1;
            }



            .border_animate {
                  --border-width: 5px;

                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  border-radius: var(--border-width);


                  &::after {
                        position: absolute;
                        content: "";
                        top: calc(-1 * var(--border-width));
                        left: calc(-1 * var(--border-width));
                        z-index: -1;
                        width: calc(100% + var(--border-width) * 2);
                        height: calc(100% + var(--border-width) * 2);
                        background: linear-gradient(60deg,
                                    hsl(0, 0%, 0%),
                                    hsl(224, 57%, 40%),
                                    hsl(269, 84%, 32%),
                                    hsl(314, 74%, 41%),
                                    hsl(359, 97%, 36%),
                                    hsl(0, 0%, 0%),
                              );
                        background-size: 300% 300%;
                        background-position: 0 50%;
                        border-radius: 25px;
                        animation: moveGradient 4s alternate infinite;
                  }

                  .layer {
                        width: calc(100% - var(--border-width));
                        padding: 3rem;
                        border-radius: 25px;
                        background-color: rgba(0, 0, 0, 0.925);


                        .title,
                        .description {
                              color: $secondary;
                              transition: 0.4s;
                        }

                        &:hover {

                              .title,
                              .description {
                                    color: $primary;
                                    text-shadow: 10px 4px 4px rgb(48, 48, 48);

                              }
                        }

                        .img_user {
                              img {
                                    width: 180px;
                                    border-radius: 50%;
                              }
                        }

                        .tecnologies {
                              margin-top: 2rem;

                              ul {
                                    padding: 0;
                                    display: flex;
                                    justify-content: space-between;
                                    width: 100%;

                                    li {
                                          list-style: none;

                                          img {
                                                width: 50px;
                                          }
                                    }
                              }
                        }
                  }

            }
      }
}



@keyframes moveGradient {
      50% {
            background-position: 100% 50%;
      }
}
</style>