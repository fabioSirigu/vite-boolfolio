<script>
import axios from 'axios'
import AppBanner from '../components/AppBanner.vue'
export default {
      name: 'SingleProjectView',
      components: { AppBanner },
      data() {
            return {
                  project: null,
                  loading: true,
                  api_base_url: 'http://localhost:8001'
            }
      },
      mounted() {
            //console.log(this.$route.params.slug);
            const url = this.api_base_url + '/api/projects/' + this.$route.params.slug
            console.log(url);
            axios.get(url)
                  .then(response => {
                        if (response.data.success) {
                              this.project = response.data.results
                              this.loading = false
                        } else {
                              /* TODO: handle the not found project  
                              404 
                              */
                              // https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
                        }
                        console.log(response);
                  }).catch(error => {
                        console.log(error)
                  })
      }
}
</script>

<template>
      <AppBanner :title="$route.params.slug" />
      <div class="container my-3">
            <div class="single-project" v-if="project">
                  <img class="img-fluid w-100" :src="api_base_url + '/storage/' + project.cover_image"
                        :alt="project.title">
                  <div class="container">
                        <h2>
                              {{ project.title }}
                        </h2>
                        <div class="content">
                              {{ project.description }}
                        </div>
                  </div>
            </div>
            <router-link class="nav-link" :to="{ name: 'portfolio' }">
                  <div class="btn btn-primary my-2">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-2" /> Torna al portfolio
                  </div>
            </router-link>

      </div>

</template>


<style lang="scss" scoped>

</style>