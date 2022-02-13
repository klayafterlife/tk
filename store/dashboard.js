export const state = () => ({
  connected: false,
  keplerIds: [],
  seed: 0
});

export const getters = {
  connected(state) {
    return state.connected;
  },
  keplerIds(state) {
    return state.keplerIds;
  },
  seed(state) {
    return state.seed;
  }
}

export const mutations = {
  connect(state, res) {
    state.connected = true;
    state.keplerIds = res[0];
    state.seed = res[1];
  }
}