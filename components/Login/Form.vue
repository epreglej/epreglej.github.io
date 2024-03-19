<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const formSchema = toTypedSchema(
    z.object({
        username: z.string().min(2).max(50),
    }),
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted!", values);
});
</script>

<template>
    <header
        class="flex items-center justify-center -mb-8 gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
        <p class="text-[32px] font-bold">comfy.vr</p>
    </header>
    <main>
        <form class="px-6 py-8" @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="email">
                <FormItem class="pb-4">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Enter your e-mail"
                            v-bind="componentField"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="password">
                <FormItem class="pb-4">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            v-bind="componentField"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <div class="flex justify-center pt-4">
                <Button class="w-full" type="submit"> Log in </Button>
            </div>
        </form>
    </main>
    <footer class="pb-2">
        <div class="text-center">Terms of service</div>
    </footer>
</template>
