<script setup>
const route = useRoute();

const pageTitleStore = usePageTitleStore();
</script>

<template>
    <header class="flex w-full h-[48px]">
        <div class="w-full flex pl-4">
            <span class="text-[32px] font-bold">{{
                pageTitleStore.title
            }}</span>
        </div>
        <div class="flex lg:hidden">
            <SidebarHamburgerMenu />
        </div>
    </header>
</template>
