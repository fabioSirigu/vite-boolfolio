<script>
import { store } from '../store.js';
import axios from 'axios';
import LoaderProjects from './LoaderProjects.vue';
export default {
      name: 'ProjectsList',
      components: {
            LoaderProjects
      },
      data() {
            return {
                  store,
                  projects: null,
                  loading: true,
                  error: null,
                  max: 200
            }
      },
      methods: {
            getProjects(url) {
                  // ajax call to get all projects
                  axios
                        .get(url)
                        .then(response => {
                              this.projects = response.data.results;
                              this.loading = false
                        })
                        .catch(error => {
                              this.error = error.message
                              this.loading = false
                        })
            },
            getImagePath(path) {
                  //console.log(path);
                  if (path) {
                        return this.store.api_base_url + '/storage/' + path
                  }
                  return '/img/placeholder_600.png'
            },
            /**
             * 
             * @param {string} text the project description
             */
            trimDescription(text) {
                  if (text.length > this.max) {
                        return text.slice(0, this.max) + '...'
                  }
                  return text
            },
            prevPage(url) {
                  //console.log(url)
                  this.getProjects(url)
            },
            nextPage(url) {
                  //console.log(url)
                  this.getProjects(url)
            }
      },
      mounted() {
            this.getProjects(this.store.api_base_url + '/api/projects');
      }
}
</script>

<template>
      <div class="container h-100">
            <section class="vue-home">
                  <template v-if="projects && !loading">
                        <!-- Card dei progetti -->
                        <div class="row row-cols-1 row-cols-sm-4 g-4">
                              <div class="col" v-for="project in projects.data">
                                    <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                                          class="router-link">
                                          <div class="card border-0 shadow-sm text-dark">
                                                <img class="card-image" :src="getImagePath(project.cover_image)" alt="">
                                                <div class="layover">
                                                      <h4 class="title">{{ project.title }}</h4>
                                                </div>
                                          </div>
                                    </router-link>
                              </div>
                        </div>
                        <!-- Sezione page navigation -->
                        <nav aria-label="Page navigation" class="d-flex justify-content-center py-4">
                              <ul class="pagination">

                                    <li class="page-item" v-if="projects.prev_page_url"
                                          @click="prevPage(projects.prev_page_url)">
                                          <a class="page-link arrow" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                          </a>
                                    </li>
                                    <li class="page-item active" aria-current="page"><a class="page-link number" href="#">{{
                                          projects.current_page
                                    }}</a></li>

                                    <li class="page-item" v-if="projects.next_page_url"
                                          @click="nextPage(projects.next_page_url)">
                                          <a class="page-link arrow" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                          </a>
                                    </li>
                              </ul>
                        </nav>
                  </template>
                  <template v-else-if="loading">
                        <LoaderProjects />
                  </template>
                  <div v-else>
                        <p> Nessun progetto! </p>
                  </div>
            </section>
      </div>
</template>

<style lang="scss" scoped>
@import "../styles/general.scss";

.vue-home {
      height: 100%;
      margin-bottom: 80px;

      .card {
            background-color: rgba(255, 255, 255, 0.7);
            height: 100%;
            border-radius: 25px;
            transition: 0.2s;

            &:hover {
                  scale: 1.1;

                  .card-image {
                        filter: blur(0px);

                  }

                  .layover {
                        bottom: 2rem;
                  }
            }

            .card-image {
                  border-radius: 25px;
                  /* filter: blur(2px); */
                  width: 100%;
                  object-fit: cover;
                  aspect-ratio: 1/1;
            }

            .layover {
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  height: 50px;
                  width: 80%;
                  bottom: 50%;
                  left: 50%;
                  transform: translate(-50%, 50%);
                  padding: 0.25rem 1rem;
                  display: flex;
                  align-items: center;
                  border-radius: 1rem;
                  color: white;
                  background-color: rgba(136, 100, 0, 0.801);
                  transition: 0.2s;

                  .title {
                        font-size: 1rem;

                  }

            }

            &:hover {
                  .layover {
                        background-color: rgba(70, 7, 78, 0.801);
                        width: 90%;
                        color: $secondary;
                        text-shadow: 10px 4px 4px rgb(48, 48, 48);
                        transition: 0.2s;

                        font-style: oblique;

                        &:hover {
                              text-decoration: underline;
                        }

                  }
            }


      }

      .pagination {
            cursor: pointer;

            .page-link.number {
                  background-color: rgb(87, 23, 146);
                  border-color: white;
            }

            .page-link.arrow {
                  color: rgb(87, 23, 146);
            }
      }
}
</style>