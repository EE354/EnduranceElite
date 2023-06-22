<script>
    import {AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";

    export let data;
</script>


<AppShell>
    <!-- Nav Bar -->
    <svelte:fragment slot="header">
        <AppBar>

            <svelte:fragment slot="lead">
                <a href="/">
                    <img alt="Endurance Elite Logo" class="badge w-1/4 p-0" style="max-height: 160%" src="$lib/Logos/ee-icon.png"/>
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


    <!-- Left Rail -->
    <svelte:fragment slot="sidebarLeft">
        <AppRail>
            <AppRailAnchor href="/calendar" selected={$page.url.pathname.startsWith('/calendar')}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    event
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Calendar</p></span>
            </AppRailAnchor>

            <!-- --- -->
            <svelte:fragment slot="trail">
                <AppRailTile><div class="p-4"><LightSwitch /></div></AppRailTile>
            </svelte:fragment>
        </AppRail>
    </svelte:fragment>


    <slot />
</AppShell>