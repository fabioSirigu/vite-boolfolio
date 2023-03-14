<script>
export default {
      name: 'HomeView',
      data() {
            return {
                  jobTitles: ["Full-Stack", "Front-End", "Back-End"],
                  currentTitleIndex: 0,
                  isJobColor: false
            }
      },
      methods: {
            changeWord() {
                  setInterval(() => {
                        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.jobTitles.length;
                        this.isJobColor = true;
                  }, 3000);
            },
      },
      mounted() {
            this.changeWord();
      }
}
</script>


<template>
      <div class="content">
            <div class="container px-5 h-100 d-flex justify-content-center align-items-center text-center">
                  <router-link :to="{ name: 'portfolio' }" class="project_link">
                        <div>
                              <div class="layer">
                                    <h1><font-awesome-icon icon="fa-solid fa-code" /></h1>
                                    <h2>Benvenuto nel mio mondo.</h2>
                                    <div class="about_me">
                                          <h2 class="description">
                                                sono fabio, <br> Jr. <span v-text="jobTitles[currentTitleIndex]"
                                                      :class="{ 'job-color': isJobColor }"></span> Web
                                                Developer
                                                <h4 class="my-2">. . .</h4>
                                                <h4 class="my-2">
                                                      <font-awesome-icon icon="fa-solid fa-bug" />
                                                      ..ma anche tanto altro..
                                                      <font-awesome-icon icon="fa-solid fa-bug" />
                                                </h4>

                                                <h4 class="link-project">clicca qui per vedere i miei progetti!</h4>
                                          </h2>
                                    </div>
                              </div>
                        </div>
                  </router-link>
            </div>
            <div class="container">
                  <div class="carousel">

                  </div>
            </div>
      </div>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';



.content {


      display: flex;
      justify-content: center;

      .project_link {
            width: 80%;
            text-decoration: none;
            color: rgba(0, 0, 0, 0);
            font-size: 2rem;
            transition: 0.2s;
            text-transform: uppercase;
            box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.8);


            &:hover {
                  scale: 1.1;
            }


            .layer {
                  padding: 5rem;
                  transition: 0.4s;

                  font-family: $fontPrimary;
                  color: $secondary;
                  font-weight: bold;
                  text-shadow: 5px 4px 4px rgb(48, 48, 48);


                  .job-color {
                        font-family: $fontSecondary;

                        color: $primary;
                  }

                  &:hover {
                        box-shadow: 0px 0px 30px 5px rgba(128, 128, 128, 0.8);
                        text-shadow: 5px 4px 4px rgb(48, 48, 48);


                        /* .img_user {
                              img {
                                    border-radius: 50%;
                                    aspect-ratio: 1/1;
                                    object-fit: cover;
                                    border: 2px solid black;
                              }
                        } */

                        .link-project {
                              text-decoration: underline;
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