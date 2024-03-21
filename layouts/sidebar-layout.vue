<template>
    <ResizablePanelGroup direction="horizontal">
        <ResizablePanel class="h-screen" :default-size="17">
            <SidebarMenu />
        </ResizablePanel>
        <div
            class="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white"
        />
        <ResizablePanel :default-size="83">
            <slot />
        </ResizablePanel>
    </ResizablePanelGroup>
</template>
