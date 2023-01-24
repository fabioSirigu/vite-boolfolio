<script>

export default {
      name: 'HomeView',
}
</script>

<template>
      <div class="content">

            <div class="container d-flex flex-column justify-content-center h-100 w-50 text-center">
                  <div class="layer">
                        <div class="img_user text-center">
                              <img src="/img/user.jpg" alt="">
                        </div>
                        <div class="about_me">
                              <h1>Home Page NazOne's Projects</h1>
                              <h3 class="lead">
                                    Banvenuto nella homepage del portfolio dei progetti di NazOne!
                              </h3>
                              <p class="description">Dopo varie esperienze lavorative nel mondo dei CND, con
                                    specializzazioni negli
                                    ultrasuoni, la
                                    passione
                                    per il coding ha preso il sopravvento dopo una vita intera che è rimasto fermo come
                                    semplice
                                    hobby.
                                    <br>
                                    L'avvento di Boolean ha dato una ventata d'aria fresca.
                                    <br>
                                    Qui troverai tutti i progetti e le tecnologie utilizzate nei progetti di NazOne.
                              </p>
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
      background-image: url(/img/large-triangles.svg);


      .layer {
            background-color: rgba($color: #000000, $alpha: 0.4);
            padding: 2rem;
            border-radius: 1rem;

            .img_user {
                  img {
                        width: 180px;
                        border-radius: 50%;
                  }
            }

            .project_link {
                  text-decoration: none;
                  text-transform: uppercase;
                  color: black;
                  font-size: 2rem;
                  transition: .2s;

                  &:hover {
                        color: red;
                        font-weight: bold;
                        text-decoration: underline;
                  }
            }

      }
}
</style>