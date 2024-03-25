<script setup>
const route = useRoute();
</script>

<template>
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
            <SidebarContent />
            <SheetClose />
        </SheetContent>
    </Sheet>
</template>
