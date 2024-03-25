<script setup>
definePageMeta({
    layout: "sidebar-layout",
});

const pageTitleStore = usePageTitleStore();
pageTitleStore.setTitle("App management");

const loading = ref(false);
</script>
<template>
    <div
        class="flex flex-col w-full h-full px-4 lg:bg-gradient-to-r lg:from-white lg:to-blue-200"
    >
        <AppRating />
    </div>
</template>
