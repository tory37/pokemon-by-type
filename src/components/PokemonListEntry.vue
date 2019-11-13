<template>
  <router-link :to="{ name: 'details', params: { name: pokemon.name } }">
    <div class="entry" @click="onPokemonSelect(pokemon)">
      <div class="name">{{ pokemonName }}</div>
      <button>Go!</button>
    </div>
  </router-link>
</template>

<script>
import { TitleCase } from '@/services/StringFormatters.js';

export default {
  props: ['pokemon'],
  computed: {
    pokemonName() {
      return TitleCase(this.pokemon.name);
    }
  },
  methods: {
    onPokemonSelect(pokemon) {
      console.log('Selected pokemon: ' + pokemon.name);
    }
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: white;

  .entry {
    display: flex;
    flex: row;
    justify-content: space-around;
    align-items: center;

    width: 150px;
    border: 5px black solid;
    margin-bottom: 10px;
    padding-left: 10px;

    &:hover {
      font-weight: 600;

      button {
        font-weight: 600;
      }
    }

    button {
      height: 40px;
      width: 40px;
      background-color: teal;
      color: white;
      border: 0;
      border-left: 5px solid black;
      margin-left: auto;
      font-size: 16px;
    }
  }
}
</style>
