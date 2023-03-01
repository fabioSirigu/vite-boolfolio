<script>
import { onMounted, onUnmounted } from 'vue';

export default {
      name: 'AppHeader',
      setup() {
            const closeNavbar = () => {
                  const navbar = document.querySelector('.navbar-collapse');
                  if (navbar.classList.contains('show')) {
                        navbar.classList.remove('show');
                  }
            };

            onMounted(() => {
                  document.addEventListener('click', closeNavbar);
            });

            onUnmounted(() => {
                  document.removeEventListener('click', closeNavbar);
            });
      },
};
</script>

<template>
      <div class="header_nav">
            <nav class="navbar navbar-expand-lg navbar-light">
                  <a class="link_logo" href="/">
                        <img class="logo" src="/img/logoNazOne.png" alt="logo Nazone">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
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
            </nav>

      </div>
</template>

<style lang="scss" scoped>
@import "../styles/general.scss";

.header_nav {
      position: fixed;
      z-index: 1000;
      top: 0;
      padding: 0 2rem;
      height: 80px;
      width: 100%;
      background-color: rgb(0, 0, 0);
      box-shadow: 12px -10px 10px 3px rgba(0, 0, 0, 0.7);


      .navbar {
            height: 100%;
            width: 50%;
            display: flex;
            margin: auto;
            align-items: center;

            .navbar-toggler {
                  background-color: white;
            }


            .logo {
                  filter: invert(1);
                  transition: 0.5s;


                  &:hover {
                        scale: 1.2;
                  }
            }


            .navbar-nav {
                  flex-grow: 1;
                  display: flex;
                  justify-content: end;

                  .nav-link {
                        transition: 0.4s;
                        font-weight: 700;
                        color: $secondary;
                        transition: 0.4s;
                        text-shadow: 10px 4px 4px rgb(48, 48, 48);


                        &:hover {
                              scale: 1.20;
                              color: $primary;
                        }
                  }
            }
      }


}
</style>