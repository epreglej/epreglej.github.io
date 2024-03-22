<script setup></script>
<template>
    <header>
        <Sheet>
            <SheetTrigger as-child>
                <Icon name="radix-icons:hamburger-menu" size="40" />
            </SheetTrigger>
            <SheetContent class="w-[300px]">
                <Sidebar />
                <SheetClose />
            </SheetContent>
        </Sheet>
        <div>
            <slot />
        </div>
    </header>
</template>
