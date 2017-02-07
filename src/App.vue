<template>
  <div id="app">

    <!-- HEADER
    ================================================== -->
    <header class="site-header" role="banner">

      <!-- NAVBAR
      ================================================== -->
      <div class="navbar-wrapper">

        <div class="navbar navbar-default navbar-fixed-top" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/"><img src="./assets/img/logo-small.png" alt=""></a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="index.html"><i class="glyphicon glyphicon-home"></i>Home</a></li>
                <li><a href="help.html"><i class="glyphicon glyphicon-question-sign"></i>Help</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </header>

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
  font-family: 'Raleway', Helvetica, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
}

.nav i.glyphicon {
  margin-right: 0.5em;
}

.mainbox {
  margin-top: 50px;
}
</style>
