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
    <template v-for="(item, index) in items" :key="index">
      <NuxtLink
          v-if="!item.children"
          :to="item.path"
          class="flex items-center gap-x-2 px-2 py-2 transition rounded cursor-pointer hover:bg-blue-100"
      >
        <Icon class="w-[24px] h-[24px]" :name="item.icon" color="black" />
        <span class="text-lg">{{ item.title }}</span>
      </NuxtLink>
      <Accordion v-else type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span class="flex items-center w-full gap-x-2 px-2 py-2 transition rounded cursor-pointer hover:bg-blue-100">
              <Icon class="w-[24px] h-[24px]" :name="item.icon" color="black" />
              <span class="text-lg">{{ item.title }}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <template v-for="(child, childIndex) in item.children" :key="childIndex">
              <NuxtLink
                  :to="item.path"
                  class="flex items-center gap-x-2 px-2 py-2 transition rounded cursor-pointer hover:bg-blue-100"
              >
                <Icon class="w-[18px] h-[18px]" :name="child.icon" color="black" />
                <span class="text-base">{{ child.title }}</span>
              </NuxtLink>
            </template>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
              <!--      <Collapsible v-else v-model:open="isOpen">-->
<!--        <CollapsibleTrigger>-->
<!--          <span class="flex items-center gap-x-2 px-2 py-2 transition rounded cursor-pointer hover:bg-blue-100">-->
<!--            <Icon class="w-[24px] h-[24px]" :name="item.icon" color="black" />-->
<!--            <span class="text-lg">{{ item.title }}</span>-->
<!--          </span>-->
<!--        </CollapsibleTrigger>-->
<!--        <CollapsibleContent>-->
<!--          <template v-for="(child, childIndex) in item.children" :key="childIndex">-->
<!--            <NuxtLink-->
<!--              :to="item.path"-->
<!--              class="flex items-center gap-x-2 px-2 py-2 transition rounded cursor-pointer hover:bg-blue-100"-->
<!--            >-->
<!--              <Icon class="w-[18px] h-[18px]" :name="child.icon" color="black" />-->
<!--              <span class="text-base">{{ child.title }}</span>-->
<!--            </NuxtLink>-->
<!--          </template>-->
<!--        </CollapsibleContent>-->
<!--      </Collapsible>-->
    </template>
  </div>
</template>

