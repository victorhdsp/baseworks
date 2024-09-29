<template>
    <div class="pokemon-evolutions">
        <h3>Evolutions:</h3>
        <ul class="list">
            <li v-for="pokemon in props.evolutions" :key="pokemon.id">
                <RouterLink :to="`/pokemon/${pokemon.id}`">
                    <h2>{{ pokemon.name }}</h2>
                    <p>{{ pokemon.id }}</p>
                    <PokemonImage :index="pokemon.id" :alt="pokemon.name" />
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { IPokemon } from '@/lib/types/pokemon';
import PokemonImage from '@/components/atom/PokemonImage/index.vue';

const props = defineProps<{ evolutions: IPokemon['evolution'] }>();
</script>

<style lang="scss" scoped>
.pokemon-evolutions {
    @apply flex flex-col gap-2;

    .list {
        @apply flex flex-col gap-2;
    }
}
</style>