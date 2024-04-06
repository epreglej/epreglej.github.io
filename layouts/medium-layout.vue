<template>
    <!-- <nav class="left m l">
        <a>
            <i>home</i>
            <div>Home</div>
        </a>
        <a>
            <i>search</i>
            <div>Search</div>
        </a>
        <a>
            <i>share</i>
            <div>share</div>
        </a>
    </nav> -->
    <header class="s transparent">
        <nav>
            <!-- <NavigationDrawer /> -->
            <button class="transparent circle large s">
                <i>home</i>
            </button>
            <h6 class="max left-align">Dashboard</h6>
            <button class="transparent circle large">
                <i class="">logout</i>
            </button>
        </nav>
    </header>
    <slot />
</template>
