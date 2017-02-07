<template>
  <div id="app">

    <section>
      <div class="container">
        <div class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div class="panel panel-info" >
            <div class="panel-body" >
              <die-panel v-bind:dice-in-hand="diceInHand"></die-panel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--<img src="./assets/logo.png">-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import store from './store'
  import DiePanel from './components/DiePanel'

  export default Vue.extend({
    name: 'app',
    data () {
      return {
        diceInHand: new store.Dice()
      }
    },
    components: {
      'die-panel': DiePanel
    }
  })
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
