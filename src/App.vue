<script>
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'

export default {
    components: {
        AppNav,
        AppFooter
    },
}
</script>

<template>
    <AppNav></AppNav>
    <router-view class="main"></router-view>
    <AppFooter></AppFooter>
</template>

<style lang="scss">
@use './styles/general.scss';



.main {
    height: calc(100vh - 80px);
    padding: 2rem 0;
}
</style>