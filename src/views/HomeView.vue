<template>
  <PokedexPageHeader />
  <PokedexPageAside />
  <main>
    <PokemonList />
    <PokemonPagination />
  </main>
</template>

<script setup lang="ts">
import PokedexPageHeader from '@/components/organism/PokedexPageHeader/index.vue';
import PokedexPageAside from '@/components/organism/PokedexPageAside/index.vue';
import PokemonList from '@/components/organism/PokedexList/index.vue';
import PokemonPagination from '@/components/organism/PokedexPagination/index.vue';
</script>
