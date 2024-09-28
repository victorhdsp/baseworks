<template>
    <section id="pokedex-pagination">
        <el-pagination :total="pokedex.total" :page-size="pokedex.size" :current-page="currentPage"
            @current-change="onPageChange" background layout="prev, pager, next" />
    </section>
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus';
import { usePokedexPaginationStore } from '@/stores/pokedexPagination';
import router from '@/router';
import { ref } from 'vue';
const pokedex = usePokedexPaginationStore();
const currentPage = ref(Number(router.currentRoute.value.query.page) || 1);

const onPageChange = (page: number) => {
    router.push({ query: { page } });
    currentPage.value = page;
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