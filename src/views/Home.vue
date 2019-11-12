<template>
  <div class="home">
    <PokemonList />
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "home",
  components: {
    PokemonList
  }
};
</script>
