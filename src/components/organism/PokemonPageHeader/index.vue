<template>
    <section id="pokemon-page-header">
        <RouterLink :to="lastRoute">
            <el-button type="outline" icon="el-icon-arrow-left">
                Voltar
            </el-button>
        </RouterLink>

        <div class="data">
            <h3>{{ props.name }}</h3>
            <p>{{ props.index }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import router from '@/router';
const lastRoute: string = `${router.options.history.state.back}` || '/';
const props = defineProps<{
    name: string;
    index: number;
}>();
</script>

<style lang="scss" scoped>
#pokemon-page-header {
    @apply py-3;
    @apply flex items-center justify-between;
    @apply border-b border-gray-200;

    .data {
        @apply flex gap-4 items-center;
    }
}
</style>