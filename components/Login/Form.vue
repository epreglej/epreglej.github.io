<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { useLoginFormStore } from "../stores/loginFormStore";

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

const loginFormStore = useLoginFormStore();

const handleEmailInput = (newValue) => {
    loginFormStore.setEmail(newValue);
};

const handlePasswordInput = (newValue) => {
    loginFormStore.setPassword(newValue);
};
</script>

<template>
    <header
        class="flex items-center justify-center -mb-8 gap-2 py-4 hover:scale-[101%] transition cursor-pointer"
    >
        <p class="text-[32px] font-bold">comfy.vr</p>
    </header>
    <main>
        <form class="px-6 py-8" @submit.prevent="onSubmit">
            <FormField v-slot="{ componentField }" name="email">
                <FormItem class="pb-4">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                        <Input
                            type="email"
                            placeholder="Enter your e-mail"
                            v-bind="componentField"
                            v-model="loginFormStore.email"
                            @input="handleEmailInput($event.target.value)"
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
                            v-model="loginFormStore.password"
                            @input="handlePasswordInput($event.target.value)"
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
            <div class="flex justify-center pt-4">
                <Label
                    >By logging in you accept
                    <span class="underline">Terms & Conditions</span>
                </Label>
            </div>
        </form>
    </main>
</template>
