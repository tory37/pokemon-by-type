<template>
  <div class="wrapper">
    <div class="entry" v-for="entry in pokemon" :key="entry.name">
      <div class="name">{{ entry.name }}</div>
      <button @click="onPokemonSelect(entry)">Go!</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 20
    };
  },
  computed: mapState("pokemon", ["pokemon"]),
  methods: {
    ...mapActions("pokemon", ["fetchAllPokemon"]),
    onPokemonSelect(pokemon) {
      console.log("Selected pokemon: " + pokemon.name);
    },
    onNextPage() {
      this.fetchPokemon(this.page++, this.perPage);
    },
    onPreviousPage() {
      this.fetchPokemon(this.pagg--, this.perPage);
    }
  },
  created() {
    this.fetchAllPokemon({ page: this.currentPage, perPage: this.perPage });
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 200px;

  .entry {
    width: 100%;
    display: flex;
    flex: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
