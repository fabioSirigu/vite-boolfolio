<script>
import axios from 'axios'
import { store } from '../store.js'
export default {
      name: 'SingleProjectView',
      data() {
            return {
                  store,
                  project: null,
                  loading: true,
            }
      },
      mounted() {
            //console.log(this.$route.params.slug);
            const url = this.store.api_base_url + '/api/projects/' + this.$route.params.slug
            console.log(url);
            axios.get(url)
                  .then(response => {
                        if (response.data.success) {
                              this.project = response.data.results
                              this.loading = false
                        } else {
                              this.$router.push({ name: 'not-found' })
                        }
                        console.log(response);
                  }).catch(error => {
                        console.log(error)
                  })
      }
}
</script>

<template>
      <div>
            <div class="container">
                  <div class="single-project" v-if="project">

                        <div class="d-flex">
                              <div class="row row-cols-2">
                                    <div class="cover_image mb-2">
                                          <img :src="store.api_base_url + '/storage/' + project.cover_image"
                                                :alt="project.title">
                                    </div>
                                    <div class="content">
                                          <div class="text-description">
                                                <h1 class="title">
                                                      {{ project.title }}
                                                </h1>
                                          </div>
                                          <div class="description py-4">
                                                <h4>
                                                      {{ project.description }}
                                                </h4>
                                          </div>

                                          <div class="card-footer">
                                                <strong>Linguaggio principale: </strong>
                                                <div class="type d-flex">
                                                      <span v-if="project.type">
                                                            <h5 class="bold">
                                                                  {{ project.type.name }}
                                                            </h5>
                                                      </span>
                                                      <span v-else></span>

                                                </div>
                                                <div class="technologies">
                                                      <template v-if="project.technologies.length > 0">
                                                            <strong>Technologies: </strong>
                                                            <ul class="technologies_list">
                                                                  <li v-for="technology in project.technologies"
                                                                        class="secondary-text">
                                                                        <h5>
                                                                              {{ technology.name }}
                                                                        </h5>
                                                                  </li>
                                                            </ul>

                                                      </template>
                                                      <template v-else>
                                                            <span>No technologies.</span>
                                                      </template>
                                                </div>
                                          </div>
                                          <div>
                                                <strong>Link GitHub:</strong>
                                                <div class="github_link">
                                                      <a target="_blank" :href="project.gitHubUrl">
                                                            {{ project.gitHubUrl }}
                                                      </a>
                                                </div>
                                          </div>
                                    </div>


                              </div>
                        </div>
                  </div>

                  <div class="button-link">
                        <router-link class="nav-link mt-2" :to="{ name: 'portfolio' }">
                              <div class="btn text-white my-btn my-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                          class="bi bi-chevron-left" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd"
                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                    Indietro
                              </div>
                        </router-link>
                  </div>
            </div>
      </div>
</template>


<style lang="scss" scoped>
@import "../styles/general.scss";

.container {
      margin-top: 80px;
      margin-bottom: 80px;
      padding: 2rem 0;
      width: 80%;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .single-project {
            padding: 2rem;
            box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.8);


            .content {
                  /* width: 40%; */
                  text-shadow: 5px 2px 5px rgb(48, 48, 48);

                  .title {
                        font-weight: bold;
                        color: $secondary;

                  }

                  .type {
                        h5 {
                              color: $secondary;
                        }
                  }

                  .card-footer {

                        .technologies_list {
                              display: flex;
                              flex-wrap: wrap;
                              padding-left: 0;
                              margin-bottom: 0;

                              li {
                                    list-style: none;
                                    padding: 0;
                                    margin-right: 1.5rem;
                                    color: $secondary;
                              }
                        }

                  }

                  .github_link {
                        a {
                              color: black;
                              font-size: 1.5rem;
                              text-decoration: none;
                              transition: 0.2s;

                              &:hover {
                                    color: $secondary;
                                    text-decoration: underline;
                              }
                        }
                  }
            }

            .cover_image {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  flex-grow: 1;


                  img {
                        box-shadow: 0px 0px 25px 8px rgba(0, 0, 0, 0.8);
                        border-radius: 25px;
                        width: 100%;

                  }
            }
      }

      .button-link {
            width: fit-content;
            margin: auto;
      }
}
</style>