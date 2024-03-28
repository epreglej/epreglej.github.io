<script setup>
import {VisuallyHidden} from "radix-vue";

const route = useRoute();
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button class="flex h-full p-0 lg:hidden focus-visible:ring-offset-0" variant="ghost">
                <Icon
                    class="w-[38px] h-full"
                    name="radix-icons:hamburger-menu"
                />
            </Button>
        </SheetTrigger>


        <SheetContent class="w-[300px] px-2 py-0">
            <VisuallyHidden>
                <SheetHeader>
                    <SheetTitle class="items-center px-2 text-[32px] font-bold">
                        Admin dashboard
                    </SheetTitle>


                    <SheetDescription>
                        Use this menu to navigate around the admin dashboard.
                    </SheetDescription>
                </SheetHeader>
            </VisuallyHidden>

            <SidebarHeader/>
            <Separator/>
            <SidebarContent/>
            <Separator/>
            <SidebarFooter/>
            <SheetClose/>
        </SheetContent>
    </Sheet>
</template>
