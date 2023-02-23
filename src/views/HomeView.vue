<script>

export default {
      name: 'HomeView',
}
</script>

<template>
      <div class="content">

            <div class="container px-5 h-100 d-flex justify-content-center align-items-center text-center">
                  <div class="border_animate">
                        <div class="layer">
                              <div class="img_user text-center">
                                    <img src="/img/linkedinfoto.png" alt="">
                              </div>
                              <div class="about_me">
                                    <h1>NazOne's Projects</h1>
                                    <h2 class="description">Junior Full Stack Web Developer

                                    </h2>
                                    <router-link :to="{ name: 'portfolio' }" class="project_link">
                                          All projects here!
                                    </router-link>
                              </div>
                        </div>
                  </div>
            </div>

      </div>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';



.content {
      .border_animate {
            --border-width: 5px;

            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60%;
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

                  .img_user {
                        img {
                              width: 180px;
                              border-radius: 50%;
                        }
                  }

                  .project_link {
                        text-decoration: none;
                        text-transform: uppercase;
                        color: white;
                        font-size: 2rem;
                        transition: 0.4s;

                        &:hover {
                              color: $primary;
                              font-weight: bold;
                              text-decoration: underline;
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