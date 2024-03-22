<template>
    <div
        class="flex place-items-center h-screen w-full bg-gradient-to-r from-blue-400 via-blue-150 to-neutral-0 lg:bg-none"
    >
        <div
            class="hidden lg:flex lg:h-screen lg:flex-grow lg:bg-gradient-to-r lg:from-blue-400 lg:via-blue-200 lg:to-white"
        >
            <div class="container grid m-auto text-white">
                <p>
                    <span class="text-4xl block pb-6">For your comfort</span>
                    <span class="text-3xl block pl-52 pb-6">safety</span>
                    <span class="text-3xl block pl-64">accessibility</span>
                </p>
            </div>
        </div>
        <div class="w-[340px] container -mt-8 p-0 lg:mt-0 lg:mr-4 lg:w-[380px]">
            <div
                class="container z-50 bg-white grid rounded-2xl shadow-2xl lg:shadow-none"
            >
                <LoginForm />
            </div>
        </div>
    </div>
</template>
