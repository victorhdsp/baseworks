<template>
    <Loading v-if="pokemon == null" />
    <main class="main" v-else-if="!error && pokemon != false">
        <PokemonPageHeader :name="pokemon.name" :index="pokemon.id" />
        <section class="pokemon-view">
            <PokemonDescription :pokemon="pokemon" />
            <PokemonEvolutions class="evolutions" :evolutions="pokemon.evolution" />
        </section>
    </main>
    <main class="not-found" v-else-if="error">
        <h2>Pokemon não encontrado</h2>
        <RouterLink to="/">
            <el-button type="text">
                <ChevronLeft />
                <p>Voltar para pokedex</p>
            </el-button>
        </RouterLink>
    </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { IPokemon } from '@/lib/types/pokemon';
import Loading from '@/components/molecule/Loading/index.vue';
import PokemonPageHeader from '@/components/molecule/PokemonPageHeader/index.vue';
import PokemonDescription from '@/components/organism/PokemonDescription/index.vue';
import PokemonEvolutions from '@/components/organism/PokemonEvolutions/index.vue';
import { RouterLink } from 'vue-router';
import { ChevronLeft } from 'lucide-vue-next';
import { ElButton } from 'element-plus';
import api from '@/lib/api';
import router from '@/router';

const pokemon = ref<IPokemon | null | false>(null);
const error = ref<boolean>(false);

const fetchPage = async () => {
    const page = router.currentRoute.value.params.id;
    if (page) {
        try {
            const data = await api.getUnique(`${page}`);
            pokemon.value = data;
        } catch (err) {
            pokemon.value = false;
            error.value = true;
        }
    } else {
        router.push('/');
    }
    console.log(pokemon, page);
};
fetchPage();
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
.not-found {
    @apply container;
    @apply flex flex-col justify-center items-center gap-4;
}
</style>