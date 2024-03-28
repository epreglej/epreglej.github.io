<script setup>

const items = ref([
    overviewMenuItem(),
    appManagementMenuItem(),
    userManagementMenuItem(),
]);

const isOpen = ref(false)
</script>

<template>
    <div class="flex-col">
        <template v-for="item in items">
            <div v-if="!item.children">
                <Button class="flex items-center gap-x-2 w-full py-2 my-1 justify-start"
                        variant="ghost" @click="navigateTo(item.path)">
                    <Icon :name="item.icon" class="w-[24px] h-[24px]" color="black"/>
                    <span class="text-lg font-normal">{{ item.title }}</span>
                </Button>
            </div>

            <div v-else>
                <Collapsible  v-model:open="isOpen">
                    <CollapsibleTrigger as-child>
                        <Button class="flex items-center gap-x-2 w-full py-2 my-1 justify-start"
                                variant="ghost">
                            <Icon :name="item.icon" class="w-[24px] h-[24px]" color="black"/>
                            <span class="text-lg font-normal">{{ item.title }}</span>
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent class="px-4">
                            <Button v-for="child in item.children" class="flex items-center gap-x-2 w-full py-2 my-1 justify-start"
                                    variant="ghost" @click="navigateTo(child.path)">
                                <Icon :name="child.icon" class="w-[18px] h-[18px]" color="black"/>
                                <span class="text-base">{{ child.title }}</span>
                            </Button>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </template>
    </div>
</template>

