import PokemonService from "@/services/PokemonService";

export const namespaced = true;

export const state = {
  pokemon: [],
  selectedPokemon: {}
};

export const mutations = {
  SET_POKEMON(state, pokemon) {
    state.pokemon = pokemon;
  },
  SET_SELECTED_POKEMON(state, pokemon) {
    state.selectedPokemon = pokemon;
  }
};

export const actions = {
  fetchAllPokemon({ commit }, { page, perPage }) {
    //console.log(page, perPage);
    return PokemonService.getAllPokemon(page, perPage)
      .then(pokemon => {
        console.log(pokemon);
        commit("SET_POKEMON", pokemon);
      })
      .catch(err => console.log(`Error fetching all pokemon: ${err}`));
  },
  fetchPokemon({ commit }, name) {
    return PokemonService.getPokemon(name)
      .then(pokemon => {
        commit("SET_SELECTED_POKEMON", pokemon);
      })
      .catch(err => console.log(`Error fetching pokemon: ${err}`));
  }
};
