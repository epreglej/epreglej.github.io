<script setup></script>
<template>
    <div class="lg:hidden">
        <header class="flex h-[48px]">
            <div class="w-full bg-blue-200 flex">
                <span class="text-[32px]">Overview</span>
            </div>
            <div class="">
                <Sheet>
                    <SheetTrigger as-child>
                        <div class="lg:hidden">
                            <Icon
                                class="w-[48px] h-[48px] p-1"
                                name="radix-icons:hamburger-menu"
                            />
                        </div>
                    </SheetTrigger>
                    <SheetContent class="w-[300px]">
                        <Sidebar />
                        <SheetClose />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
        <div>
            <slot />
        </div>
    </div>

    <div class="hidden lg:flex">
        <Sidebar class="h-screen w-[250px] border-r" />
        <slot />
    </div>
</template>
