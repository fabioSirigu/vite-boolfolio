<script>
export default {
      name: 'LoaderProjects',

}
</script>

<template>
      <div class="container text-center">

            <div class="loading">
                  <div class="center-body">
                        <div class="loader-circle-11">
                              <div class="arc"></div>
                              <div class="arc"></div>
                              <div class="arc"></div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<style lang="scss" scoped>
@import "../styles/general.scss";

.container {
      height: 100%;
      width: 80%;
      margin-top: 80px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;

      .loading {
            height: 100%;

            .loader-circle-11 {
                  position: relative;
                  /* width: 270px;
                  height: 270px; */
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