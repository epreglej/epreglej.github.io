<template>
    <div class="grid items-start lg:flex flex-row-reverse">
        <div class="w-[360px]">
            <div
                class="z-50 fixed top-0 left-0 lg:static w-full h-screen flex items-center justify-center bg-transparent lg:flex-col"
            >
                <div
                    class="bg-white rounded-lg shadow-md w-[360px] lg:rounded-none lg:shadow-none lg:flex lg:flex-col lg:justify-center lg:h-full lg:w-full lg:bg-transparent"
                >
                    <Login />
                </div>
            </div>
        </div>
        <div class="flex-grow">
            <slot />
        </div>
    </div>
</template>
