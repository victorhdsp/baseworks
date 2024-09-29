<template>
    <section id="pokedex-pagination">
        <el-pagination :total="pokedex.total" :page-size="pokedex.perPage" :current-page="currentPage"
            @current-change="onPageChange" background layout="prev, pager, next" small />
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
    @apply w-full h-full flex flex-col;
}

@media screen and (max-width: 768px) {
    #pokedex-pagination {
        @apply items-center;
    }
}
</style>