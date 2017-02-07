<template>
  <div class="die-panel">
    <div class="roll-button">
      <button type="button" class="btn btn-primary btn-lg" v-on:click="diceInHand.roll()">{{ diceInHand.result }}</button>
    </div>
    <div class = "dice-buttons">
      <button class="btn btn-default" v-on:click="doMult">{{diceInHand.multiplier}}</button><span>d</span><button class="btn btn-default" v-on:click="doType">{{diceInHand.die}}</button><button class="btn btn-default" v-on:click="doMod">{{diceInHand.modifierStr()}}</button>
    </div>
    <multiplier-dialog v-on:changeMult="changeMult"></multiplier-dialog>
    <die-type-dialog v-on:changeType="changeType"></die-type-dialog>
    <modifier-dialog v-on:changeMod="changeMod"></modifier-dialog>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'bootstrap'
  import Vue from 'vue'
  import MultiplierDialog from './MultiplierDialog'
  import DieTypeDialog from './DieTypeDialog'
  import ModifierDialog from './ModifierDialog'

  export default Vue.extend({
    name: 'die-panel',
    props: ['diceInHand'],
    components: {
      'multiplier-dialog': MultiplierDialog,
      'die-type-dialog': DieTypeDialog,
      'modifier-dialog': ModifierDialog
    },
    data () {
      return {}
    },
    mounted () {
      this.diceInHand.result = 'Roll'
    },
    methods: {
      doMult: function () {
        $('#multModal').modal({backdrop: 'static', keyboard: 'false', show: 'true'})
      },
      changeMult: function (mult) {
        this.diceInHand.multiplier = mult
      },
      doType: function () {
        $('#diceModal').modal({backdrop: 'static', keyboard: 'false', show: 'true'})
      },
      changeType: function (type) {
        this.diceInHand.die = type
      },
      doMod: function () {
        $('#modModal').modal({backdrop: 'static', keyboard: 'false', show: 'true'})
      },
      changeMod: function (mod) {
        this.diceInHand.modifier = mod
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
