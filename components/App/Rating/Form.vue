<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const client = useSupabaseClient();

const authenticationErrorMessage = ref("");

const formSchema = toTypedSchema(
    z.object({
        name: z.string(),
        spatialMovementRequired: z.enum(["true", "false"], {
            required_error: "You need to select an answer.",
        }),
    }),
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
    console.log(values);

    try {
        const { data, error } = await client.from("apps").insert({
            name: values.name,
            spatialMovementRequired: values.spatialMovementRequired === "true",
        });

        if (error) {
            console.error("Error during insert:", error);
        } else {
            console.log("Record inserted successfully:", data);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
</script>

<template>
    <header class="flex items-center justify-center -mb-8 gap-2 pt-4 pb-8">
        <p class="text-[32px]">Rate a new app</p>
    </header>
    <main>
        <form class="py-4" @submit.prevent="onSubmit">
            <FormField v-slot="{ componentField }" name="name">
                <FormItem class="pb-4">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Enter the app's name"
                            v-bind="componentField"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField
                v-slot="{ componentField }"
                type="radio"
                name="spatialMovementRequired"
            >
                <FormItem class="space-y-3">
                    <FormLabel
                        >Does user need to move around the room?</FormLabel
                    >
                    <FormControl>
                        <RadioGroup
                            class="flex flex-col space-y-1"
                            v-bind="componentField"
                        >
                            <FormItem
                                class="flex items-center space-y-0 gap-x-3"
                            >
                                <FormControl>
                                    <RadioGroupItem value="true" />
                                </FormControl>
                                <FormLabel class="font-normal"> Yes </FormLabel>
                            </FormItem>
                            <FormItem
                                class="flex items-center space-y-0 gap-x-3"
                            >
                                <FormControl>
                                    <RadioGroupItem value="false" />
                                </FormControl>
                                <FormLabel class="font-normal"> No </FormLabel>
                            </FormItem>
                        </RadioGroup>
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
                <Button class="w-full" type="submit"> Submit </Button>
            </div>
        </form>
    </main>
</template>
