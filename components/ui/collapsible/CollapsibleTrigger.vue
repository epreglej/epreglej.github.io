<script setup lang="ts">
import { CollapsibleTrigger, type CollapsibleTriggerProps } from 'radix-vue'

const props = defineProps<CollapsibleTriggerProps>()
</script>

<template>
  <CollapsibleTrigger class="w-full h-full" v-bind="props">
    <slot />
  </CollapsibleTrigger>
</template>
