import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyWord: '', // 搜索关键字
  },
  mutations: {
    KEYWORD (state, res) {
      state.keyWord = res
    }
  },
  gatters: {
    keyWord (state) {
      return state.keyWord
    }
  }
})
