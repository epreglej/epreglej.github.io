<script setup></script>

<template>
    <div
        class="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent lg:hidden"
    >
        <div class="bg-white rounded-lg shadow-md w-[350px]">
            <LoginForm />
        </div>
    </div>

    <div class="hidden lg:flex w-[500px] h-screen flex flex-col">
        <div class="flex flex-col justify-center h-full px-12">
            <LoginForm />
        </div>
    </div>
</template>
