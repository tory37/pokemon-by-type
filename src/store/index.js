import Vue from "vue";
import Vuex from "vuex";

import * as pokemon from "./modules/pokemon.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemon
  }
});
