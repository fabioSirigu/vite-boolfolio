<script>
export default {
      name: 'AppNav'
}
</script>

<template>
      <nav class="navbar navbar-expand-sm navbar-light bg-light border-bottom mb-4">
            <div class="container">
                  <a class="navbar-brand" href="/">
                        <img class="logo" src="/img/logoNazOne.png" alt="logo Nazone">
                        Projects
                  </a>
                  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="mainNav">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                              <li class="nav-item">
                                    <router-link class="nav-link" :to="{ name: 'home' }" aria-current="page">Home <span
                                                class="visually-hidden">(current)</span></router-link>
                              </li>
                              <li class="nav-item">
                                    <router-link class="nav-link" :to="{ name: 'portfolio' }">Portfolio</router-link>
                              </li>
                              <li class="nav-item">
                                    <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                              </li>
                              <li class="nav-item">
                                    <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>
                              </li>
                        </ul>

                  </div>
            </div>
      </nav>

</template>

<style lang="scss" scoped>
.logo {
      width: 120px;
}
</style>