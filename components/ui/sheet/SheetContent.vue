<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
    DialogClose,
    DialogContent,
    type DialogContentEmits,
    type DialogContentProps,
    DialogOverlay,
    DialogPortal,
    useForwardPropsEmits,
} from "radix-vue";
import { X } from "lucide-vue-next";
import { type SheetVariants, sheetVariants } from ".";
import { cn } from "@/lib/utils";

interface SheetContentProps extends DialogContentProps {
    class?: HTMLAttributes["class"];
    side?: SheetVariants["side"];
}

defineOptions({
    inheritAttrs: false,
});

const props = defineProps<SheetContentProps>();

const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, side, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <DialogPortal>
        <DialogOverlay
            class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        <DialogContent
            class="flex"
            :class="cn(sheetVariants({ side }), props.class)"
            v-bind="{ ...forwarded, ...$attrs }"
        >
            <div class="flex-grow">
                <slot />
            </div>

            <div
                class="w-[48px] h-[48px] justify-bottom place-items-center flex pt-1"
            >
                <DialogClose
                    class="m-auto rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                >
                    <Icon
                        class="w-[24px] h-[24px]"
                        name="radix-icons:cross-1"
                    />
                </DialogClose>
            </div>
        </DialogContent>
    </DialogPortal>
</template>
