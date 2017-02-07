<template>
  <div id="diceModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Type of die to roll:</h4>
          <h5 class="modal-title">(Number of sides):</h5>
        </div>
        <div class="modal-body">
          <div class="button-panel">
            <button v-for="type in types" v-on:click="doChangeType" class="btn-num btn btn-default">{{type}}</button>
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
    name: 'die-type-modal',
    data () {
      return {
        types: store.Dice.prototype.type
      }
    },
    methods: {
      doChangeType (event) {
        this.$emit('changeType', event.target.innerText)
        $('#diceModal').modal('hide')
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
