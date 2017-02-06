import store from 'src/store'
import DiePanel from 'src/components/DiePanel'

describe('DiePanel.vue', () => {
  it('should render name of cast correctly', () => {
    var mount = document.createElement('div');
    const vm = new DiePanel({
      el: mount,
      propsData: {
        diceInHand: new store.Dice()
      }
    })
    expect(vm.$el.querySelector('.roll-button button').textContent).to.equal('1')
  })
})
