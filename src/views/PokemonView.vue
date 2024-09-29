<template>
    <div v-if="!pokemon">
        Carregando...
    </div>
    <main v-else>
        <PokemonPageHeader :name="pokemon.name" :index="pokemon.id" />
        <section id="pokemon-view">
            <PokemonImage :index="pokemon.id" :alt="pokemon.name" />
            <PokemonTypes :types="pokemon.types" />
            <PokemonStats :stats="pokemon.stats" />
            <PokemonEvolutions class="evolutions" :evolutions="pokemon.evolution" />
        </section>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { IPokemon } from '@/lib/types/pokemon';
import PokemonPageHeader from '@/components/organism/PokemonPageHeader/index.vue';
import PokemonImage from '@/components/atom/PokemonImage/index.vue';
import PokemonStats from '@/components/organism/PokemonStats/index.vue';
import PokemonTypes from '@/components/organism/PokemonTypes/index.vue';
import PokemonEvolutions from '@/components/organism/PokemonEvolutions/index.vue';
import api from '@/lib/api';
import router from '@/router';

const pokemon = ref<IPokemon | null>(null);
const page = router.currentRoute.value.params.id;

onMounted(async () => {
    if (page) {
        const data = await api.getUnique(`${page}`);
        pokemon.value = data;
    } else {
        router.push('/');
    }
});
</script>

<style lang="scss" scoped>
#pokemon-view {
    @apply grid grid-cols-2 gap-4;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    @apply container;

    .evolutions {
        @apply col-start-2 row-start-1 row-span-3;
    }
}
</style>