import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  open: true
}
const mutations = {
  change (state) {
    state.open=!state.open
  }
}
export default new Vuex.Store({
  state,
  mutations
})