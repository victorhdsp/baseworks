<template>
    <component :is='is' class="card">
        <slot />
    </component>
</template>

<script setup lang="ts">
defineProps({
    is: {
        type: String,
        default: 'div'
    }
});
</script>

<style lang="scss" scoped>
.card {
    @apply border border-blue-500 rounded-lg;
    @apply p-4;
}
</style>