<template>
  <div class="die-panel">
    <div class="roll-button">
      <button type="button" class="btn btn-primary btn-lg" v-on:click="diceInHand.roll()">{{ diceInHand.result }}</button>
    </div>
    <div class = "dice-buttons">
      <button class="btn btn-default" v-on:click="doMult()">{{diceInHand.multiplier}}</button><span>d</span><button class="btn btn-default">{{diceInHand.die}}</button><button class="btn btn-default">{{diceInHand.modifierStr()}}</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'die-panel',
    props: ['diceInHand'],
    data () {
      return {}
    },
    mounted () {
      this.diceInHand.result = 'Roll'
    },
    methods: {
      doMult: function () {
        this.diceInHand.multiplier = 3
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .die-panel {
    text-align:center;
  }

  .roll-button {
    margin-bottom: 12px;
  }

  .roll-button button {
    min-width: 120px;
    font-size: 1.6em;
  }

  .dice-buttons button {
    min-width: 60px;
    margin: 0 6px;
  }

  .dice-buttons span {
    font-weight: bold;
    font-size: 1.2em;
  }

</style>
