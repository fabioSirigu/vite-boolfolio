<script>
import AppBanner from '../components/AppBanner.vue';
import ProjectsList from '../components/ProjectsList.vue';
export default {
      name: 'PortfolioView',
      components: { AppBanner, ProjectsList },
      data() {
            return {
                  pageTitle: 'Portfolio'
            }
      }
}
</script>

<template>
      <AppBanner :title="pageTitle" />
      <ProjectsList />

</template>


<style lang="scss" scoped>

</style>