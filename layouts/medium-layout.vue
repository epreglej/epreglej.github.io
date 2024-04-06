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

    <header class="s">
        <nav>
            <!-- <NavigationDrawer /> -->
            <button class="transparent circle large s">
                <i>arrow_back</i>
            </button>
            <h5 class="max left-align">Dashboard</h5>
            <button class="transparent circle large">
                <i class="large">logout</i>
            </button>
        </nav>
    </header>
    <slot />
</template>
