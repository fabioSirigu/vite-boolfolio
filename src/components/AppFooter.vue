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
      <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container d-flex justify-content-center">
                  <ul class="navbar-nav mt-2 mt-lg-0">
                        <li class="nav-item">
                              <a class="nav-link" :href="store.gitHub_url" aria-current="page" target="_blank">GitHub</a>
                        </li>
                        <li>
                              <div class="loading">
                                    <div class="center-body">
                                          <div class="loader-circle-11">
                                                <div class="arc"></div>
                                                <div class="arc"></div>
                                                <div class="arc"></div>
                                          </div>
                                    </div>
                              </div>
                        </li>
                        <li class="nav-item">
                              <a class="nav-link" :href="store.linkedinUrl" aria-current="page" target="_blank">LinkedIn</a>
                        </li>
                  </ul>

            </div>
      </nav>
</template>

<style lang="scss" scoped>
@import "../styles/general.scss";

.navbar {
      background-color: rgb(0, 0, 0);

      height: 80px;
      box-shadow: 0px -2px 10px 3px rgba(0, 0, 0, 0.7);


      .nav-link {
            font-weight: 700;
            color: white;
            transition: 0.4s;
            text-shadow: 10px 4px 4px rgba(66, 68, 90, 1);


            &:hover {
                  scale: 1.25;
                  color: $primary;
            }
      }

      .loading {
            height: 100%;
            padding: 0 2rem;
            display: flex;
            justify-content: center;
            align-items: center;

            .loader-circle-11 {
                  position: relative;
                  width: 50px;
                  height: 50px;
                  transform-style: preserve-3d;
                  perspective: 400px;
            }

            .loader-circle-11 .arc {
                  position: absolute;
                  content: "";
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  border-bottom: 5px solid $primary;
            }

            .loader-circle-11 .arc:nth-child(1) {
                  animation: rotate1 1.15s linear infinite;
            }

            .loader-circle-11 .arc:nth-child(2) {
                  animation: rotate2 1.15s linear infinite;
            }

            .loader-circle-11 .arc:nth-child(3) {
                  animation: rotate3 1.15s linear infinite;
            }

            .loading .arc:nth-child(1) {
                  animation-delay: -0.8s;
            }

            .loader-circle-11 .arc:nth-child(2) {
                  animation-delay: -0.4s;
            }

            .loader-circle-11 .arc:nth-child(3) {
                  animation-delay: 0s;
            }

            @keyframes rotate1 {
                  from {
                        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0);
                  }

                  to {
                        transform: rotateX(35deg) rotateY(-45deg) rotateZ(1turn);
                  }
            }

            @keyframes rotate2 {
                  from {
                        transform: rotateX(50deg) rotateY(10deg) rotateZ(0);
                  }

                  to {
                        transform: rotateX(50deg) rotateY(10deg) rotateZ(1turn);
                  }
            }

            @keyframes rotate3 {
                  from {
                        transform: rotateX(35deg) rotateY(55deg) rotateZ(0);
                  }

                  to {
                        transform: rotateX(35deg) rotateY(55deg) rotateZ(1turn);
                  }
            }
      }
}
</style>