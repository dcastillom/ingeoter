import * as types from '../mutation-types'

const state = {
  activeContent: 'index'
}

const getters = {
  getActiveContent: state => state.activeContent
}

const actions = {
  setActiveContent({ commit }, content) {
    commit(types.SET_ACTIVE_CONTENT, { content })
  }
}

const mutations = {
  [types.SET_ACTIVE_CONTENT](state, { content }) {
    state.activeContent = content
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
