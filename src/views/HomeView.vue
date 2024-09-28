<template>
  <main>
    <PokedexPageHeader />
    <PokemonList />
    <PokemonPagination />
  </main>
</template>

<script setup lang="ts">
import PokedexPageHeader from '@/components/organism/PokedexPageHeader/index.vue';
import PokemonList from '@/components/organism/PokedexList/index.vue';
import PokemonPagination from '@/components/organism/PokedexPagination/index.vue';
</script>
