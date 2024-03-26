<script setup>
const route = useRoute();

const pageTitleStore = usePageTitleStore();
</script>

<template>
    <header
        class="sticky top-0 z-50 flex flex-col w-full h-[48px] bg-white lg:static"
    >
        <div class="flex">
            <div class="flex flex-grow px-4">
                <span class="text-[32px] font-bold">{{
                    pageTitleStore.title
                }}</span>
            </div>
            <div class="flex lg:hidden">
                <SidebarHamburgerMenu />
            </div>
        </div>
        <div class="flex w-full">
            <Separator />
        </div>
    </header>
</template>
