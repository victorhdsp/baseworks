<template>
    <div class="pokemon-stats">
        <p><b>HP:</b> {{ props.stats.hp }}</p>
        <p><b>Attack:</b> {{ props.stats.attack }}</p>
        <p><b>Defense:</b> {{ props.stats.defense }}</p>
        <p><b>Special Attack:</b> {{ props.stats.specialAttack }}</p>
        <p><b>Special Defense:</b> {{ props.stats.specialDefense }}</p>
        <p><b>Speed:</b> {{ props.stats.speed }}</p>
    </div>
</template>

<script setup lang="ts">
import type { IPokemon } from '@/lib/types/pokemon';

const props = defineProps<{ stats: IPokemon['stats'] }>();
</script>

<style lang="scss" scoped></style>