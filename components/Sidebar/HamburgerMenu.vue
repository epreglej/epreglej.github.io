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
        <SheetContent class="w-[300px] px-2 py-0">
            <SidebarHeader />
            <Separator />
            <SidebarContent />
            <Separator />
            <SidebarFooter />
            <SheetClose />
        </SheetContent>
    </Sheet>
</template>
