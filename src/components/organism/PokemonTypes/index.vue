<template>
    <div class="pokemon-types">
        <h3>Types:</h3>
        <PokemonTag v-for="type in props.types" :key="type" :name="type" />
    </div>
</template>

<script setup lang="ts">
import type { IPokemon } from '@/lib/types/pokemon';
import PokemonTag from '@/components/atom/PokemonTag/index.vue';

const props = defineProps<{ types: IPokemon['types'] }>();
</script>

<style lang="scss" scoped>
.pokemon-types {
    @apply flex flex-wrap items-center gap-2;
    @apply h-max;
}
</style>