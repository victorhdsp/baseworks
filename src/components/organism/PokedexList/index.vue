<template>
    <section id="pokedex-list">
        <h1 v-if="pokedex.loading">Carregando...</h1>
        <ul class="list" v-else>
            <li v-for="pokemon in pokedex.items" :key="pokemon.id">
                <RouterLink :to="`/pokemon/${pokemon.id}`">
                    <h2>{{ pokemon.name }}</h2>
                    <p>{{ pokemon.id }}</p>
                    <PokemonImage :index="pokemon.id" :alt="pokemon.name" />
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import PokemonImage from '@/components/atom/PokemonImage/index.vue';
const pokedex = usePokedexPaginationStore();
</script>

<style lang="scss" scoped>
#pokedex-list {
    @apply w-full h-full flex flex-col;
    @apply container;

    .list {
        @apply grid gap-4;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}
</style>