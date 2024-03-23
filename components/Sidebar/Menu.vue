<script setup>
const user = useSupabaseUser();
const items = ref([
    {
        title: "Overview",
        path: "/admin/overview",
        icon: "ri:dashboard-line",
    },
    {
        title: "App management",
        path: "/admin/app-management",
        icon: "ri:database-2-line",
    },
    {
        title: "User management",
        path: "/user-management",
        icon: "ri:user-settings-line",
    },
]);
</script>

<template>
    <header
        class="flex items-center gap-2 pb-4 px-4 hover:scale-[101%] transition cursor-pointer"
    >
        <p class="text-[32px] font-bold">comfy.vr</p>
    </header>
    <div class="px-2 grow">
        <div class="grid gap-2">
            <NuxtLink
                :to="item.path"
                v-for="(item, index) in items"
                :key="index"
                class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
            >
                <Icon size="20" :name="item.icon" color="black" />
                <span>{{ item.title }}</span>
            </NuxtLink>
        </div>
    </div>
    <footer class="py-2">
        <hr class="pb-2" />
        <div class="px-2 grow">
            <div class="grid gap-2">
                <NuxtLink
                    v-if="user"
                    to="/logout"
                    class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
                >
                    <Icon size="20" name="ri:logout-box-r-line" color="black" />
                    <span>Log out</span>
                </NuxtLink>
                <NuxtLink
                    v-else
                    to="/login"
                    class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
                >
                    <Icon size="20" name="ri:login-box-line" color="black" />
                    <span>Log in</span>
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>
