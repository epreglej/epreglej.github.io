<script setup></script>

<template>
    <div class="lg:hidden">
        <Sidebar />
        <hr class="w-screen border-1 border-opacity-10 border-black" />
        <div>
            <slot />
        </div>
    </div>

    <div class="hidden lg:flex">
        <Sidebar class="h-screen min-w-[220px] border-r" />
        <div class="flex-grow">
            <slot />
        </div>
    </div>
</template>
