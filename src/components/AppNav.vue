<script>
export default {
      name: 'AppNav'
}
</script>

<template>
      <nav class="navbar navbar-expand-sm navbar-light bg-light border-bottom">
      <div class="container">
            <a class="navbar-brand" href="/">
                  <img class="logo" src="/img/logoNazOne.png" alt="logo Nazone">
            </a>

            <!-- <div class="animation">
                              <div class="square">
                                    <p class="square_invert">
                                          Web Dev
                                    </p>
                              </div>
                        </div> -->
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

/* @keyframes spinnow {
      0% {
            transform: rotate(0deg);
      }

      100% {
            transform: rotate(360deg);
      }
} */

.navbar {
      height: 80px;
      box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.7);

      .logo {
            width: 120px;
      }

      /* .animation {
            display: flex;
            justify-content: center;

            .square {
                  animation: 7s spinnow infinite linear;
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #5400997c;
                  border: 1px solid lightgray;

                  .square_invert {
                        display: flex;
                        height: 100%;
                        align-items: center;
                        color: black;
                        font-weight: bold;
                  }


            }
      }
 */
      .nav-link {
            transition: 0.4s;

            &:hover {
                  scale: 1.25;
                  color: $primary;
            }
      }
}
</style>