<template>
    <PokemonPageHeader name="Articuno" :index="2" />
    <main>
        <section id="pokemon-view">
            <div class="pokemon-view__image"></div>
            <div class="pokemon-caracteristics"></div>
            <div class="pokemon-abilities"></div>
            <div class="pokemon-stats"></div>
            <div class="pokemon-types"></div>
            <div class="pokemon-weakness"></div>
            <div class="pokemon-description"></div>
            <div class="pokemon-evolutions"></div>
        </section>
    </main>
</template>

<script setup lang="ts">
import PokemonPageHeader from '@/components/organism/PokemonPageHeader/index.vue';
import api from '@/lib/api';
console.log(api.getUnique("1"));
</script>

<style lang="scss" scoped>
#pokemon-view {
    @apply grid grid-cols-2 gap-4;
    grid-template-rows: repeat(4, minmax(0, 1fr));

    .pokemon-types,
    .pokemon-weakness,
    .pokemon-description,
    .pokemon-evolutions {
        @apply col-start-2;
    }
}
</style>