<template>
    <section id="pokemon-page-header">
        <RouterLink :to="lastRoute">
            <el-button type="outline" circle>
                <ChevronLeft />
            </el-button>
        </RouterLink>
        <h1>{{ props.name }}</h1>
        <PokemonNumber :index="props.index" />
    </section>
</template>

<script setup lang="ts">
import router from '@/router';
import PokemonNumber from '@/components/atom/PokemonNumber/index.vue';
import { ChevronLeft } from 'lucide-vue-next';
const lastRoute: string = `${router.options.history.state.back}` || '/';
const props = defineProps<{
    name: string;
    index: number;
}>();
</script>

<style lang="scss" scoped>
#pokemon-page-header {
    @apply flex items-center justify-between gap-16;
    @apply pb-8;
}

@media screen and (max-width: 768px) {
    #pokemon-page-header {
        @apply justify-between gap-4;
    }
}
</style>