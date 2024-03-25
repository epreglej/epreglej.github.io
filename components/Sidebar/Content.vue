<script setup>
const items = ref([
    overviewMenuItem(),
    appManagementMenuItem(),
    {
        title: "User management",
        path: "/user-management",
        icon: "ri:user-settings-line",
    },
]);
</script>

<template>
    <div class="flex-col">
        <NuxtLink
            :to="item.path"
            v-for="(item, index) in items"
            :key="index"
            class="flex items-center gap-x-2 px-2 py-2 transition rounded cursor-pointer hover:bg-blue-100"
        >
            <Icon class="w-[24px] h-[24px]" :name="item.icon" color="black" />
            <span class="text-lg">{{ item.title }}</span>
        </NuxtLink>
    </div>
</template>
