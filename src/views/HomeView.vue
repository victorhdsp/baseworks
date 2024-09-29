<template>
  <div class="body">
    <PokedexPageSearch class="header" />
    <PokedexPageAside class="aside" />
    <main class="main">
      <PokemonList />
      <PokemonPagination />
    </main>
  </div>
</template>

<script setup lang="ts">
import PokedexPageSearch from '@/components/molecule/PokedexPageSearch/index.vue';
import PokedexPageAside from '@/components/organism/PokedexPageAside/index.vue';
import PokemonList from '@/components/organism/PokedexList/index.vue';
import PokemonPagination from '@/components/organism/PokedexPagination/index.vue';
</script>

<style lang="scss" scoped>
.body {
  @apply grid gap-8;
  @apply container;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr;

  .header {
    @apply col-start-1 col-span-2;
  }

  .aside {
    @apply col-start-1;
  }

  .main {
    @apply grid gap-4;
    grid-template-rows: 1fr auto;
    @apply h-full;
  }
}

@media screen and (max-width: 768px) {
  .body {
    @apply flex flex-col;

    .main {
      @apply flex flex-col;
    }
  }
}
</style>