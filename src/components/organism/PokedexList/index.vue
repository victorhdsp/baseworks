<template>
    <section id="pokedex-list">
        <Loading v-if="!pokedex.pokemons" />
        <ul class="list" v-else>
            <Card is="li" v-for="pokemon in pokedex.pokemons" :key="pokemon.id">
                <PokemonCard :pokemon="pokemon" />
            </Card>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import Card from '@/components/atom/Card/index.vue';
import PokemonCard from '@/components/molecule/PokemonCard/index.vue';
import Loading from '@/components/molecule/Loading/index.vue';
const pokedex = usePokedexPaginationStore();
</script>

<style lang="scss" scoped>
#pokedex-list {
    @apply w-full flex flex-col;

    .list {
        @apply grid gap-4 grid-cols-3 grid-rows-3;
        @apply h-full;
    }
}

@media screen and (max-width: 768px) {
    #pokedex-list .list {
        @apply flex flex-col;
    }
}
</style>