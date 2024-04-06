<template>
    <button class="transparent circle large s" data-ui="#drawer">
        <i>menu</i>
    </button>
    <dialog id="drawer" class="left no-padding">
        <nav class="drawer">
            <header>
                <nav>
                    <img class="circle" src="/favicon.ico" />
                    <h6 class="max">Title</h6>
                    <button class="transparent circle large" data-ui="#drawer">
                        <i>close</i>
                    </button>
                </nav>
            </header>
            <NavigationContent />
        </nav>
    </dialog>
</template>
