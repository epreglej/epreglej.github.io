<script setup>
import { ConfigProvider } from "radix-vue";

const useIdFunction = () => useId();
</script>

<template>
    <!-- workaround for radix-vue hydration error -->
    <ConfigProvider :use-id="useIdFunction">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </ConfigProvider>
</template>
