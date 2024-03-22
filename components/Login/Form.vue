<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const client = useSupabaseClient();

const authenticationErrorMessage = ref("");

const formSchema = toTypedSchema(
    z.object({
        email: z.string().email().max(30),
        password: z.string().min(8),
    }),
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
    try {
        const { data, error } = await client.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        });

        if (error) {
            console.error("Login error!");
            authenticationErrorMessage.value = error.message;
        } else {
            console.log("Login successful!");
            await navigateTo("/admin");
        }
    } catch (error) {
        console.error("Unexpected error:", error);
        authenticationErrorMessage.value = error.message;
    }
});
</script>

<template>
    <header
        class="flex items-center justify-center -mb-8 gap-2 pt-4 pb-8 hover:scale-[101%] transition cursor-pointer"
    >
        <p class="text-[32px] font-bold">comfy.vr</p>
    </header>
    <main>
        <form class="py-4" @submit.prevent="onSubmit">
            <FormField v-slot="{ componentField }" name="email">
                <FormItem class="pb-4">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                        <Input
                            type="email"
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
            <div class="flex justify-center">
                <Label class="text-red-600">{{
                    authenticationErrorMessage
                }}</Label>
            </div>
            <div class="flex justify-center pt-4">
                <Button class="w-full" type="submit"> Log in </Button>
            </div>
            <div class="flex justify-center pt-4 pb-2">
                <Label class="text-xs"
                    >By logging in you accept our
                    <span class="underline">Terms & Conditions</span>
                </Label>
            </div>
        </form>
    </main>
</template>
