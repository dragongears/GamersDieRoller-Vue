<template>
  <div :id="id" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{title}}</h4>
          <h5 class="modal-title"  v-if="subtitle">{{subtitle}}</h5>
        </div>
        <div class="modal-body">
          <div class="button-panel">
            <button v-for="item in items" v-on:click="doChangeMod" class="btn-num btn btn-default">{{item}}</button>
            <div v-if="signButtons" class="btn-group" data-toggle="buttons">
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

  export default Vue.extend({
    name: 'die-modal',
    props: {
      id: {
        type: String,
        default: 'dieModal'
      },
      title: {
        type: String,
        default: 'Die Modal'
      },
      subtitle: {
        type: String
      },
      items: {
        type: Array,
        required: true
      },
      signButtons: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    methods: {
      doChangeMod (event) {
        let val = parseInt(event.target.innerText, 10)

        if (this.signButtons) {
          val = val * ($('#optionPos').hasClass('active') ? 1 : -1)
        }

        this.$emit('change', val)

        $('#' + this.id).modal('hide')
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
