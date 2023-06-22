<script>
    //Import css files
    // Your selected Skeleton theme:
    import '../theme.postcss';
    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';


    export let data;
    import {AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch, Modal} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<Modal />

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>

            <svelte:fragment slot="lead">
                <a href="/"><img alt="Endurance Elite Logo" class="badge w-1/4 p-0" style="max-height: 160%" src="src/lib/assets/Logos/ee-icon.png"/></a>
            </svelte:fragment>


            <svelte:fragment slot="trail">
                {#if data.session?.sessionId}
                    <a class="nav-link" href="/account">Account</a>
                {:else}
                    <a class="nav-link text-black dark:text-whtie" href="/signup">Signup</a>
                    <a class="btn variant-filled-primary" href="/login"><p>Login</p></a>
                {/if}
            </svelte:fragment>

        </AppBar>
    </svelte:fragment>


    <svelte:fragment slot="sidebarLeft">
        <AppRail>
            <AppRailAnchor href="/calendar" selected={$page.url.pathname === '/calendar'}>
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

<style>
    .material-symbols-outlined {
        font-variation-settings:
                'FILL' 1,
                'wght' 500,
                'GRAD' 0,
                'opsz' 40
    }
</style>