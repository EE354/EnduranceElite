<script>
    import {AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch} from "@skeletonlabs/skeleton";
    import { beforeNavigate } from "$app/navigation";
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
                    <a class="nav-link text-black dark:text-white " href="/signup"><p class="dark:text-white text-black">Signup</p></a>
                    <a class="btn bg-primary-600 dark:bg-primary-900" href="/login"><p class="dark:text-white text-black">Login</p></a>
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




            <svelte:fragment slot="trail">
                <AppRailAnchor href="https://app.iclasspro.com/portal/enduranceelite">
                    <svelte:fragment slot="lead">
                            <span class="material-symbols-outlined">
                                captive_portal
                            </span>
                    </svelte:fragment>
                    <span><p class="text-black dark:text-white">Parent portal</p></span>
                </AppRailAnchor>
                {#if data.isAdmin}
                    <AppRailAnchor href="/admin" selected={$page.url.pathname.startsWith('/admin')}>
                        <svelte:fragment slot="lead">
                            <span class="material-symbols-outlined">
                                shield_person
                            </span>
                        </svelte:fragment>
                        <span><p class="text-black dark:text-white">Admin</p></span>
                    </AppRailAnchor>
                    {/if}
                <AppRailTile><div class="p-4"><LightSwitch /></div></AppRailTile>
            </svelte:fragment>
        </AppRail>
    </svelte:fragment>


    <slot />
</AppShell>