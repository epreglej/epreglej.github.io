<script setup>
const route = useRoute();
const open = ref(true);
</script>

<template>
    <div>
        <header class="flex h-[48px] pb-8 lg:hidden">
            <div class="w-full flex pl-4">
                <span class="text-[32px] font-bold">{{
                    route.meta.title
                }}</span>
            </div>
            <div>
                <Sheet>
                    <SheetTrigger as-child>
                        <div class="lg:hidden">
                            <Icon
                                class="w-[48px] h-[48px] p-1"
                                name="radix-icons:hamburger-menu"
                            />
                        </div>
                    </SheetTrigger>
                    <SheetContent class="w-[300px] p-0">
                        <SidebarMenu />
                        <SheetClose />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
        <div class="hidden lg:flex lg:flex-col">
            <SidebarMenu />
        </div>
    </div>
</template>
