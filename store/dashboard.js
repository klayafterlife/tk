export const state = () => ({
  connected: false,
  keplerIds: [],
  textIds: [],
  seed: 0
});

export const getters = {
  connected(state) {
    return state.connected;
  },

  keplerIds(state) {
    return state.keplerIds;
  },

  textIds(state) {
    return state.textIds;
  },

  seed(state) {
    return state.seed;
  }
}

export const mutations = {
  connect(state, res) {
    state.connected = true;
    state.seed = parseInt(res[1]);
    state.keplerIds = res[0];
    state.textIds = res[2];
  },

  seedChange(state, num) {
    state.seed += num;
  },

  addText(state, text) {
    state.textIds = state.textIds.concat(text);
  }
}