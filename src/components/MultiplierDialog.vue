<template>
  <div id="multModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Number of dice to roll:</h4>
        </div>
        <div class="modal-body">
          <div class="button-panel">
            <button v-for="mult in mults" v-on:click="doChangeMult" class="btn-num btn btn-default">{{mult}}</button>
          </div>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>

<script>
  import $ from 'jquery'
  import Vue from 'vue'
  import store from '../store'

  export default Vue.extend({
    name: 'multiplier-modal',
    data () {
      return {
        mults: store.Dice.prototype.mult
      }
    },
    methods: {
      doChangeMult (event) {
        this.$emit('changeMult', event.target.innerText)
        $('#multModal').modal('hide')
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal-content {
    text-align: left;
  }

  .button-panel {
    text-align: center;
  }

  .btn-num {
    margin: 3px;
    width: 3.5em;
  }
</style>
