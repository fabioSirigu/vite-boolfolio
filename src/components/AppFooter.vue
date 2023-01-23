<script>
import { store } from '../store.js'
export default {
      name: 'AppFooter',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <nav class="navbar navbar-expand-sm navbar-light bg-light border-bottom">
            <div class="container">
                  <a class="navbar-brand" href="/">
                        <img class="logo" src="/img/logoNazOne.png" alt="logo Nazone">
                  </a>
                  <div class="collapse navbar-collapse" id="mainNav">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                              <li class="nav-item">
                                    <a class="nav-link" :href="store.gitHub_url" aria-current="page">GitHub</a>
                              </li>
                        </ul>

                  </div>
            </div>
      </nav>

</template>

<style lang="scss" scoped>
.navbar {
      height: 80px;
      box-shadow: 0px -2px 10px 3px rgba(0, 0, 0, 0.7);


      .logo {
            width: 120px;
      }

      :hover.nav-link {
            scale: 1.2;
            color: red;
      }
}
</style>