<template>
  <div id="modModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Modify roll by:</h4>
        </div>
        <div class="modal-body">
          <div class="button-panel">
            <button v-for="mod in mods" v-on:click="doChangeMod" class="btn-num btn btn-default">{{mod}}</button>
            <div class="btn-group" data-toggle="buttons">
              <label id="optionPos" class="btn btn-default active">
                <input type="radio" autocomplete="off">+
              </label>
              <label id="optionNeg" class="btn btn-default">
                <input type="radio" autocomplete="off">-
              </label>
            </div>
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
    name: 'modifier-modal',
    data () {
      return {
        mods: store.Dice.prototype.mod
      }
    },
    methods: {
      doChangeMod (event) {
        this.$emit('changeMod', parseInt(event.target.innerText, 10) * ($('#optionPos').hasClass('active') ? 1 : -1))
        $('#modModal').modal('hide')
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
