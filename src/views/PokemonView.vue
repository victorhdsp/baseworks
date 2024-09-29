<template>
    <Loading v-if="!pokemon" />
    <main class="main" v-else>
        <PokemonPageHeader :name="pokemon.name" :index="pokemon.id" />
        <section class="pokemon-view">
            <PokemonDescription :pokemon="pokemon" />
            <PokemonEvolutions class="evolutions" :evolutions="pokemon.evolution" />
        </section>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { IPokemon } from '@/lib/types/pokemon';
import Loading from '@/components/molecule/Loading/index.vue';
import PokemonPageHeader from '@/components/molecule/PokemonPageHeader/index.vue';
import PokemonDescription from '@/components/organism/PokemonDescription/index.vue';
import PokemonEvolutions from '@/components/organism/PokemonEvolutions/index.vue';
import api from '@/lib/api';
import router from '@/router';

const pokemon = ref<IPokemon | null>(null);

const fetchPage = async () => {
    const page = router.currentRoute.value.params.id;
    if (page) {
        const data = await api.getUnique(`${page}`);
        pokemon.value = data;
    } else {
        router.push('/');
    }
};

onMounted(fetchPage);
watch(router.currentRoute, () => {
    fetchPage()
});
</script>

<style lang="scss" scoped>
.main {
    @apply container;

    .pokemon-view {
        @apply flex flex-col gap-16;
    }
}
</style>