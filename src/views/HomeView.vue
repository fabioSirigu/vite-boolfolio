<script>

export default {
      name: 'HomeView',


}
</script>

<template>

      <div class="container">
            <h1>Home Page NazOne's Projects</h1>
            <p class="lead">
                  Banvenuto nella homepage del portfolio dei progetti di NazOne!
            </p>
            <p>Dopo varie esperienza lavorative nel mondo dei CND, con specializzazioni negli ultrasuoni, la passione
                  per il coding ha preso il sopravvento dopo una vita intera che è rimasto fermo come semplice hobby.
                  <br>
                  L'avvento di Boolean ha dato una ventata d'aria fresca.
                  <br>
                  Qui troverai tutti i progetti e le tecnologie utilizzate nei progetti di NazOne.
            </p>
            <router-link :to="{ name: 'portfolio' }">All projects here!</router-link>
      </div>
</template>


<style lang="scss" scoped>

</style>