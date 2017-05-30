import Vue from 'vue'
import Vuex from 'vuex'

import activeContent from './modules/active-content'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activeContent
  }
})