<template>
    <section id="pokedex-list">
        <Loading v-if="pokedex.loading" />
        <ul class="list" v-else-if="!pokedex.loading && pokedexPag.pokemons.length > 0">
            <Card is="li" v-for="pokemon in pokedexPag.pokemons" :key="pokemon.id">
                <PokemonCard :pokemon="pokemon" />
            </Card>
        </ul>
        <div class="not-found" v-else-if="!pokedex.loading && pokedexPag.pokemons.length == 0">
            <h2>Pokemon não encontrado</h2>
        </div>
    </section>
</template>

<script setup lang="ts">
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import Card from '@/components/atom/Card/index.vue';
import PokemonCard from '@/components/molecule/PokemonCard/index.vue';
import Loading from '@/components/molecule/Loading/index.vue';
import { usePokedexStore } from '@/stores/pokedex';
const pokedexPag = usePokedexPaginationStore();
const pokedex = usePokedexStore();
</script>

<style lang="scss" scoped>
#pokedex-list {
    @apply w-full flex flex-col;

    .list {
        @apply grid gap-4 grid-cols-3 grid-rows-3;
        @apply h-full;
    }

    .not-found {
        @apply flex items-center justify-center;
        @apply w-full h-full;
    }
}

@media screen and (max-width: 768px) {
    #pokedex-list .list {
        @apply flex flex-col;
    }
}
</style>