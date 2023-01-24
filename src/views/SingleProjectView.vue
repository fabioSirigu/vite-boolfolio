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
      <div class="container my-3">
            <div class="single-project" v-if="project">
                  <div class="cover_image mb-2">
                        <img :src="store.api_base_url + '/storage/' + project.cover_image" :alt="project.title">
                  </div>
                  <div class="text-description">
                        <h2>
                              {{ project.title }}
                        </h2>
                        <h3>
                              <a target="_blank" :href="project.gitHubUrl">
                                    {{ project.gitHubUrl }}
                              </a>
                        </h3>
                        <div class="content">
                              {{ project.description }}
                        </div>
                  </div>
            </div>
            <router-link class="nav-link mt-2" :to="{ name: 'portfolio' }">
                  <div class="btn btn-primary my-2">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-2" /> Torna al portfolio
                  </div>
            </router-link>

      </div>

</template>


<style lang="scss" scoped>

</style>