<script setup>
definePageMeta({
    layout: "sidebar-layout",
});

const pageTitleStore = usePageTitleStore();
pageTitleStore.setTitle("User management");

const loading = ref(false);
</script>
<template>
    <div
        class="lg:flex-grow lg:bg-gradient-to-r lg:from-white lg:to-blue-400 py-2"
    >
            Hi
    </div>
</template>
