<template>
  <div>
    <div class="list">
      <PokemonListEntry
        v-for="entry in pokemon"
        :key="entry.name"
        :pokemon="entry"
      />
    </div>
    <template v-if="isLoadingPokemonList">
      Loading <i class="fas fa-spinner fa-spin"></i>
    </template>
    <div class="nav-buttons" v-if="!isLoadingPokemonList">
      <template v-if="currentPage > 1">
        <router-link
          :to="{ name: 'home', query: { currentPage: currentPage - 1 } }"
          rel="prev"
        >
          <div class="nav-button">
            <i class="fas fa-chevron-circle-left"></i> Previous
          </div>
        </router-link>
      </template>
      <pre
        v-if="currentPage > 1"
      > <i class="fas fa-grip-lines-vertical"></i> </pre>
      <template v-if="shouldShowNextButton">
        <router-link
          :to="{ name: 'home', query: { currentPage: currentPage + 1 } }"
          rel="next"
        >
          <div class="nav-button">
            Next <i class="fas fa-chevron-circle-right"></i>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PokemonListEntry from './PokemonListEntry';

export default {
  components: {
    PokemonListEntry
  },
  data() {
    return {
      perPage: 20
    };
  },
  computed: {
    ...mapState('pokemon', ['pokemon', 'totalPokemon']),
    ...mapState('loading', ['isLoadingPokemonList']),
    currentPage() {
      return parseInt(this.$route.query.currentPage) || 1;
    },
    shouldShowNextButton() {
      return this.totalPokemon > this.currentPage * this.perPage;
    }
  },
  methods: {
    ...mapActions('pokemon', ['fetchAllPokemon'])
  },
  created() {
    this.fetchAllPokemon({ page: this.currentPage, perPage: this.perPage });
  }
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.nav-buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .nav-button {
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  }
}
</style>
