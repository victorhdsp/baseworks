<template>
    <section id="pokedex-pagination">
        <el-pagination :total="pokedex.total" :page-size="pokedex.size" :current-page="pokedex.current"
            @current-change="onPageChange" background layout="prev, pager, next" />
    </section>
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import router from '@/router';
const pokedex = usePokedexPaginationStore();

const onPageChange = (page: number) => {
    router.push({ query: { page } });
};
</script>

<style lang="scss" scoped>
#pokedex-pagination {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
}
</style>