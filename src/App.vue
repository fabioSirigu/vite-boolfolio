<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
    components: {
        AppHeader,
        AppFooter
    },
}
</script>

<template>
    <AppHeader></AppHeader>
    <router-view class="main"></router-view>
    <AppFooter></AppFooter>
</template>

<style lang="scss">
@use './styles/general.scss';



.main {
    height: calc(100vh - 160px);
    margin-top: 80px;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(https://wallpapercave.com/wp/wp5169944.jpg);
    background-size: cover;
}
</style>