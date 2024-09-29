<template>
    <div class="pokemon-description">
        <PokemonImage class="image" :index="pokemon.id" :alt="pokemon.name" />
        <div class="data">
            <PokemonTypes :types="pokemon.types" />
            <PokemonStats :stats="pokemon.stats" />
        </div>
        <div class="description">
            <p v-for="text in description" :key="text">
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IPokemon } from '@/lib/types/pokemon';
import PokemonImage from '@/components/molecule/PokemonImage/index.vue';
import PokemonStats from '@/components/molecule/PokemonStats/index.vue';
import PokemonTypes from '@/components/molecule/PokemonTypes/index.vue';
const props = defineProps<{ pokemon: IPokemon }>();
const description = props.pokemon.description.map((text: string) =>
    text.replaceAll("\f", "").replaceAll("\n", " ").trim()
);
</script>

<style lang="scss" scoped>
.pokemon-description {
    @apply grid gap-4;
    grid-template-columns: 1fr 1fr 2fr;

    .image {
        @apply w-48;
    }

    .data {
        @apply flex flex-col gap-4;
    }

    .description {
        @apply flex flex-col gap-2;
    }
}
</style>