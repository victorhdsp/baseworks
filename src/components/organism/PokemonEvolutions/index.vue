<template>
    <div class="pokemon-evolutions">
        <h2>Evolutions:</h2>
        <ul class="list">
            <li class="item" v-for="pokemon in newData" :key="pokemon.id">
                <PokemonCard :pokemon="pokemon" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { IPokemon } from '@/lib/types/pokemon';
import PokemonCard from '@/components/molecule/PokemonCard/index.vue';
import { usePokedexStore } from '@/stores/pokedex';

const props = defineProps<{ evolutions: IPokemon['evolution'] }>();
const pokedex = usePokedexStore();
const newData: IPokemon["evolution"] = [];

pokedex.addInDatabase(props.evolutions);
for (const evolution of props.evolutions) {
    const pokemon = pokedex.pokemons[evolution.id];
    if (pokemon) {
        newData.push(pokemon);
    }
}
</script>

<style lang="scss" scoped>
.pokemon-evolutions {
    @apply flex flex-col gap-4;
    @apply h-full;

    .list {
        @apply grid gap-16 grid-cols-3;
        @apply h-full;
    }
}

@media screen and (max-width: 768px) {
    .pokemon-evolutions {
        @apply text-center;

        .list {
            @apply flex flex-col items-center gap-8;
        }
    }
}
</style>