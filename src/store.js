import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bodyOverflow:'auto'
  },
  mutations: {
    ToggleBodyOverflow(state){
      state.bodyOverflow === 'auto'? state.bodyOverflow='hidden' : state.bodyOverflow='auto';
    }
  },
  actions: {

  }
})
