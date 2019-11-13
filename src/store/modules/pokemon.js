import PokemonService from '@/services/PokemonService';

export const namespaced = true;

export const state = {
  pokemon: [],
  selectedPokemon: {},
  totalPokemon: 0
};

export const mutations = {
  SET_POKEMON(state, pokemon) {
    state.pokemon = pokemon;
  },
  SET_SELECTED_POKEMON(state, pokemon) {
    state.selectedPokemon = pokemon;
  },
  SET_TOTAL_POKEMON(state, total) {
    state.totalPokemon = total;
  }
};

export const actions = {
  fetchAllPokemon({ commit, dispatch }, { page, perPage }) {
    dispatch('loading/startLoadingList', {}, { root: true });
    return PokemonService.getAllPokemon(page, perPage)
      .then(response => {
        commit('SET_POKEMON', response.results);
        commit('SET_TOTAL_POKEMON', response.count);
      })
      .catch(err => console.log(`Error fetching all pokemon: ${err}`))
      .finally(() => dispatch('loading/stopLoadingList', {}, { root: true }));
  },
  fetchPokemon({ commit, dispatch }, name) {
    dispatch('loading/startLoadingPokemon', {}, { root: true });
    return PokemonService.getPokemon(name)
      .then(pokemon => {
        commit('SET_SELECTED_POKEMON', pokemon);
      })
      .catch(err => console.log(`Error fetching pokemon: ${err}`))
      .finally(() =>
        dispatch('loading/stopLoadingPokemon', {}, { root: true })
      );
  }
};
