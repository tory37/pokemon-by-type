<template>
  <div>
    <template v-if="isLoadingPokemon">
      Loading <i class="fas fa-spinner fa-spin"></i>
    </template>
    <div v-if="!isLoadingPokemon && selectedPokemon">
      <div class="wrapper">
        <div class="images">
          <div class="images-row">
            <img :src="spriteFront" />
            <img :src="spriteBack" />
          </div>
          <div class="images-row">
            <img :src="spriteFrontShiny" />
            <img :src="spriteBackShiny" />
          </div>
        </div>

        <div class="details">
          <div class="name">{{ formattedName }}</div>
          <div class="height">Height: {{ selectedPokemon.height }}</div>
          <div class="height">Weight: {{ selectedPokemon.weight }}</div>
          <div class="types-wrapper">
            Types:
            <div class="types">
              <div
                class="type"
                v-for="type in selectedPokemon.types"
                :key="type.type.name"
              >
                {{ type.type.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { TitleCase } from '@/services/StringFormatters.js';

export default {
  props: ['name'],
  computed: {
    ...mapState('pokemon', ['selectedPokemon']),
    ...mapState('loading', ['isLoadingPokemon']),
    spriteFront() {
      return (
        this.selectedPokemon.sprites['front_default'] ||
        'https://storage.needpix.com/rsynced_images/pokemon-1607473_1280.png'
      );
    },
    spriteBack() {
      return (
        this.selectedPokemon.sprites['back_default'] ||
        'https://storage.needpix.com/rsynced_images/pokemon-1607473_1280.png'
      );
    },
    spriteFrontShiny() {
      return (
        this.selectedPokemon.sprites['front_shiny'] ||
        'https://storage.needpix.com/rsynced_images/pokemon-1607473_1280.png'
      );
    },
    spriteBackShiny() {
      return (
        this.selectedPokemon.sprites['back_shiny'] ||
        'https://storage.needpix.com/rsynced_images/pokemon-1607473_1280.png'
      );
    },
    formattedName() {
      return TitleCase(this.name);
    }
  },
  methods: mapActions('pokemon', ['fetchPokemon']),
  created() {
    this.fetchPokemon(this.name);
  }
};
</script>

<style scope lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  .images {
    margin-right: 40px;
    .images-row {
      display: flex;
      flex-direction: row;

      img {
        width: 150px;
        height: 150px;
        margin: -20px;
      }
    }
  }

  .details {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    div {
      margin-bottom: 5px;
    }

    .name {
      font-size: 20px;
      font-weight: 600;
    }

    .types-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;

      .type {
        border: 1px solid black;
        padding: 2px 4px 2px 4px;
        border-radius: 4px;
        margin-left: 5px;
      }
    }
  }
}
</style>
