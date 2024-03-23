<script setup>
definePageMeta({
    title: "App management",
    layout: "sidebar-layout",
});

const loading = ref(false);
</script>
<template>
    <div
        class="flex flex-col w-full h-full px-4 lg:bg-gradient-to-r lg:from-white lg:to-blue-200"
    >
        <AppRating />
    </div>
</template>
