<template>
    <section class="loading">
        <div class="loader">
            <div class="effect" />
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.loading {
    @apply container;
    @apply w-full h-full;
    @apply flex items-center justify-center;
}

.loader {
    background-color: #ffcb05;
    @apply rounded-full w-16 h-16 pt-2;
    @apply flex items-center justify-center;

    .effect {
        width: 50px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #4f6693;
        -webkit-mask: radial-gradient(circle closest-side at 50% 40%, #0000 94%, #000);
        transform-origin: 50% 40%;
        animation: l25 1s infinite linear;
    }
}

@keyframes l25 {
    100% {
        transform: rotate(1turn)
    }
}
</style>