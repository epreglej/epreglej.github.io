<script setup>
definePageMeta({
    title: "Overview",
    layout: "sidebar-layout",
});

const loading = ref(false);
</script>

<template>
    <div
        class="flex flex-col w-full px-4 lg:bg-gradient-to-r lg:from-white lg:to-blue-400"
    >
        <div class="h-[64px] pb-4">
            <span class="hidden text-[32px] lg:flex">Overview</span>
        </div>
        <div class="h-screen pb-32">
            <div class="h-full grid gap-4 grid-cols-3 grid-rows-3">
                <div class="container bg-white"></div>
            </div>
        </div>
    </div>
</template>
