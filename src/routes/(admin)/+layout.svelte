<script>
    import {AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";

    export let data;

</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>

            <svelte:fragment slot="lead">
                    <a href="/admin" class="flex flex-row">
                        <img alt="Endurance Elite Logo" class="w-1/4 p-0" style="max-height: 160%" src="$lib/Logos/EE Logo.png"/>
                        <p class="pl-4 pt-3 dark:text-white text-black text-xl font-">Admin</p>
                    </a>

            </svelte:fragment>


            <svelte:fragment slot="trail">
                {#if data.session?.sessionId}
                    <a class="nav-link" href="/account">Account</a>
                {:else}
                    <a class="nav-link text-black dark:text-whtie " href="/signup"><p class="dark:text-white text-black">Signup</p></a>
                    <a class="btn variant-filled-tertiary" href="/login"><p class="dark:text-white text-black">Login</p></a>
                {/if}
            </svelte:fragment>

        </AppBar>
    </svelte:fragment>


    <svelte:fragment slot="sidebarLeft">
        <AppRail>
            <!-- Calendar Button -->
            <AppRailAnchor href="/admin/events" selected={$page.url.pathname === '/admin/events'}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    event
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Events</p></span>
            </AppRailAnchor>

            <!-- Schedule Button -->
            <AppRailAnchor href="/admin/schedule" selected={$page.url.pathname === '/admin/schedule'}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    schedule
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Schedule</p></span>
            </AppRailAnchor>

            <!-- Training Button -->
            <AppRailAnchor href="/admin/training" selected={$page.url.pathname === '/admin/training'}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    weight
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Training</p></span>
            </AppRailAnchor>
            <AppRailAnchor href="/admin/groups" selected={$page.url.pathname === '/admin/groups'}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    group
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Groups</p></span>
            </AppRailAnchor>

            <!-- Bottom slot -->
            <svelte:fragment slot="trail">
                <AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
                    <svelte:fragment slot="lead">
                            <span class="material-symbols-outlined">
                                home
                            </span>
                    </svelte:fragment>
                    <span><p class="text-black dark:text-white">Home</p></span>
                </AppRailAnchor>
                <AppRailTile><div class="p-4"><LightSwitch /></div></AppRailTile>
            </svelte:fragment>
        </AppRail>
    </svelte:fragment>


    <slot />


</AppShell>

<slot/>