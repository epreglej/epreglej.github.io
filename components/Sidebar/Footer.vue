<script setup>
const user = useSupabaseUser();
</script>

<template>
    <div class="justify-end">
        <NuxtLink
            v-if="user"
            to="/logout"
            class="flex items-center gap-x-2 px-2 py-2 transition rounded cursor-pointer hover:bg-blue-100"
        >
            <Icon
                class="w-[24px] h-[24px]"
                name="ri:logout-box-r-line"
                color="black"
            />
            <span class="text-lg">Log out</span>
        </NuxtLink>
        <NuxtLink
            v-else
            to="/login"
            class="flex items-center gap-x-2 px-2 py-2 transition rounded cursor-pointer hover:bg-blue-100"
        >
            <Icon
                class="w-[24px] h-[24px]"
                name="ri:login-box-line"
                color="black"
            />
            <span class="text-lg">Log in</span>
        </NuxtLink>
    </div>
</template>
