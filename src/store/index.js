import { createStore } from 'vuex'

export default createStore({
  state: {
    page: 9
  },
  getters: {
    getPage(state) {
      return state.page
    }
  },
  mutations: {
    setPage(state, value) {
      state.page = value
    }
  },
  actions: {

    changePage({commit}, value) {
      commit('setPage', value);
    }
  },
  modules: {
  }
})
