export const namespaced = true;

export const state = {
  isLoadingPokemonList: false,
  isLoadingPokemon: false
};

export const mutations = {
  SET_LOADING_LIST(state, isLoading) {
    state.isLoadingPokemonList = isLoading;
  },
  SET_LOADING_POKEMON(state, isLoading) {
    state.isLoadingPokemon = isLoading;
  }
};

export const actions = {
  startLoadingList({ commit }) {
    commit('SET_LOADING_LIST', true);
  },
  stopLoadingList({ commit }) {
    commit('SET_LOADING_LIST', false);
  },
  startLoadingPokemon({ commit }) {
    commit('SET_LOADING_POKEMON', true);
  },
  stopLoadingPokemon({ commit }) {
    commit('SET_LOADING_POKEMON', false);
  }
};
