<script>

export default {
      name: 'HomeView',
}
</script>

<template>
      <div class="content">

            <div class="container px-5 h-100 d-flex justify-content-center align-items-center text-center">
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
</template>


<style lang="scss" scoped>
.content {
      background-image: url(/img/vanishing-stripes.svg);

      .layer {
            background-color: rgba($color: #000000, $alpha: 0.75);
            border-radius: 25px;
            width: 60%;
            padding: 3rem 0;

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
                        color: red;
                        font-weight: bold;
                        text-decoration: underline;
                  }
            }

      }


}
</style>