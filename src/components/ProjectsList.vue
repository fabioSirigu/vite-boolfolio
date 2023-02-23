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
                  console.log(url)
                  this.getProjects(url)
            },
            nextPage(url) {
                  console.log(url)
                  this.getProjects(url)
            }
      },
      mounted() {
            this.getProjects(this.store.api_base_url + '/api/projects');
      }
}
</script>

<template>
      <section class="vue-home pt-5">
            <div class="container">
                  <template v-if="projects && !loading">
                        <div class="row row-cols-1 row-cols-sm-3 g-4">
                              <div class="col" v-for="project in projects.data">
                                    <div class="card border-0 shadow-sm text-dark">
                                          <img class="card-image p-3" :src="getImagePath(project.cover_image)" alt="">
                                          <div class="card-body">
                                                <h4>{{ project.title }}</h4>
                                                <p>
                                                      {{ trimDescription(project.description) }}
                                                </p>
                                                <router-link
                                                      :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                                                      more</router-link>
                                          </div>
                                          <div class="card-footer text-muted">
                                                <div class="type">
                                                      <strong>Type: </strong>
                                                      <span v-if="project.type">
                                                            {{ project.type.name }}
                                                      </span>
                                                      <span v-else>Uncategorized</span>
                                                </div>
                                                <div class="technologies">
                                                      <template v-if="project.technologies.length > 0">
                                                            <ul class="technologies_list">
                                                                  <strong>Technologies: </strong>
                                                                  <li v-for="technology in project.technologies">
                                                                        {{ technology.name }}
                                                                  </li>
                                                            </ul>

                                                      </template>
                                                      <template v-else>
                                                            <span>No technologies.</span>
                                                      </template>
                                                </div>
                                          </div>

                                    </div>
                              </div>
                        </div>

                        <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                              <ul class="pagination    ">
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
                        <p> No projects here </p>
                  </div>
            </div>
      </section>
</template>

<style lang="scss" scoped>
.vue-home {
      overflow-y: auto;


      .card {
            background-color: rgba(255, 255, 255, 0.7);
            height: 100%;
            border-radius: 25px;

            .card-image {
                  border-radius: 25px;
                  width: 100%;
                  object-fit: cover;
                  aspect-ratio: 1/1;
            }

            .technologies_list {
                  display: flex;
                  padding-left: 0;
                  margin-bottom: 0;

                  li {
                        list-style: disc;
                        padding: 0, 5px;
                        margin-right: 1.2rem;
                        color: gray;
                  }

                  li:first-of-type {
                        padding-left: 5px;
                        list-style: none;
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