<script setup></script>
<template>
    <div class="lg:hidden">
        <header class="flex h-[48px] bg-slate-100 pb-8 border-b-2">
            <div class="w-full flex pl-4">
                <span class="text-[32px] font-bold">overview</span>
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
