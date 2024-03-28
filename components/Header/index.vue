<script setup>
const route = useRoute();

const pageTitleStore = usePageTitleStore();
</script>

<template>
    <header
        class="sticky top-0 z-50 flex flex-col w-full h-[48px] bg-white lg:static"
    >
        <div class="flex w-full h-full items-center">
            <div class="pl-2 flex-grow">
                <span class="text-3xl font-bold">
                    <client-only>{{pageTitleStore.title }}</client-only>
                </span>
            </div>
            <div class="px-2 lg:hidden">
                <SidebarHamburgerMenu />
            </div>
        </div>

        <div class="flex w-full">
            <Separator />
        </div>
    </header>
</template>
