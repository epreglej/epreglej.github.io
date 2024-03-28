<script setup></script>

<template>
    <div class="flex-col lg:hidden">
        <Header />
        <slot />
    </div>

    <div class="hidden lg:flex bg-slate-100">
        <aside class="h-screen sticky top-0 flex-col min-w-[230px] w-[230px]">
            <Sidebar />
        </aside>

        <div class="flex flex-col flex-grow">
            <Header />
            <slot />
        </div>
    </div>
</template>
