<script setup></script>

<template>
    <div
        class="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent lg:hidden"
    >
        <div class="bg-white rounded-lg shadow-md w-[350px]">
            <LoginForm />
        </div>
    </div>

    <div class="hidden lg:flex w-[650px] h-screen flex flex-col px-12">
        <div class="flex flex-col justify-center h-full"><LoginForm /></div>
    </div>
</template>
