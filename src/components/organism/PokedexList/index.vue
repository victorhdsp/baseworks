<template>
    <section id="pokedex-list">
        <h1 v-if="!pokedex.pokemons">
            Carregando...
        </h1>
        <ul class="list" v-else>
            <li v-for="pokemon in pokedex.pokemons" :key="pokemon.id">
                <RouterLink class="item" :to="`/pokemon/${pokemon.id}`">
                    <h2>{{ pokemon.name }}</h2>
                    <p>{{ pokemon.id }}</p>
                    <PokemonImage class="img" :index="pokemon.id" :alt="pokemon.name" />
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
    @apply w-full flex flex-col;

    .list {
        @apply grid gap-4 grid-cols-3 grid-rows-3;
        @apply h-full;

        .item {
            @apply grid gap-2;
            grid-template-columns: 1fr auto;
            grid-template-rows: auto 1fr;
            @apply w-full h-full;
            @apply border border-blue-500 rounded-lg;
            @apply p-4;

            .img {
                @apply col-span-2;
                @apply w-full h-24;
            }
        }
    }
}
</style>