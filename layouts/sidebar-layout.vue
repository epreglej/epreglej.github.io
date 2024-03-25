<script setup></script>

<template>
    <div class="flex-col lg:hidden">
        <Header />
        <hr class="w-full border-1 border-opacity-10 border-black" />
        <div class="flex size-full">
            <slot />
        </div>
    </div>

    <div class="hidden lg:flex lg:h-screen bg-slate-200">
        <div class="min-w-[220px]">
            <Sidebar />
        </div>
        <div class="flex flex-col size-full">
            <Header />
            <slot />
        </div>
    </div>
</template>
