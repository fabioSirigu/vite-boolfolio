<script>
import ProjectsList from '../components/ProjectsList.vue';
export default {
      name: 'PortfolioView',
      components: { ProjectsList },
      data() {
            return {
                  pageTitle: 'Portfolio'
            }
      }
};
</script>

<template>
      <ProjectsList />

</template>


<style lang="scss" scoped>

</style>