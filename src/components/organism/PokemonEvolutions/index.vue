<template>
    <div class="pokemon-evolutions">
        <h2>Evolutions:</h2>
        <ul class="list">
            <li v-for="pokemon in props.evolutions" :key="pokemon.id">
                <PokemonCard :pokemon="pokemon" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { IPokemon } from '@/lib/types/pokemon';
import PokemonCard from '@/components/molecule/PokemonCard/index.vue';

const props = defineProps<{ evolutions: IPokemon['evolution'] }>();
</script>

<style lang="scss" scoped>
.pokemon-evolutions {
    @apply flex flex-col gap-8;
    @apply h-full;

    .list {
        @apply grid gap-16 grid-cols-3;
        @apply h-full;
    }
}
</style>