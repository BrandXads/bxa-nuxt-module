export const state = () => ({

})

export const mutations = {
  UPDATE_ATTRIBUTION (state, data) {
    state[data.key] = data.value
  }
}

export const actions = {
  updateAttribution: ({ commit }) => {
    for (let [key, value] of Object.entries(localStorage)) {
      commit("UPDATE_ATTRIBUTION", { key, value })
    }
  }
}
