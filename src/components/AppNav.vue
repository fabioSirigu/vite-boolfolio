<script>
export default {
      name: 'AppNav'
}
</script>

<template>
      <nav class="navbar navbar-expand-sm">
            <div class="container">
                  <a class="navbar-brand" href="/">
                        <img class="logo" src="/img/logoNazOne.png" alt="logo Nazone">
                  </a>
                  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                        aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
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
@import "../styles/general.scss";

.navbar {
      position: fixed;
      z-index: 1000;
      width: 100%;
      top: 0;
      background-color: rgba(255, 255, 255, 0.2);
      height: 80px;
      box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.7);

      .logo {
            filter: invert(1);
            width: 120px;
            transition: 0.5s;

            &:hover {
                  filter: invert(0);
                  scale: 1.2;
            }
      }



      .nav-link {
            transition: 0.4s;
            font-weight: 700;
            color: white;

            &:hover {
                  scale: 1.25;
                  color: $primary;
            }
      }
}
</style>