<template>
  <main>
    <PokemonList />
    <PokemonPagination />
  </main>
</template>

<script setup lang="ts">
import PokemonList from '@/components/Pokedex/PokedexList.vue';
import PokemonPagination from '@/components/Pokedex/PokedexPagination.vue';
</script>
