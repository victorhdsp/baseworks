<template>
    <p class="pokemon-number">{{ pokemonNumber }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{ index: number }>();
const pokemonNumber = `#${props.index.toString().padStart(5, '0')}`;

</script>

<style lang="scss" scoped>
.pokemon-number {
    @apply text-sm;
}
</style>