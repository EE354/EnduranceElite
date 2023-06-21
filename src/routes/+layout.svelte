<script>
    // Your selected Skeleton theme:
    import '../theme.postcss';

    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';
    import {AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch, Modal} from "@skeletonlabs/skeleton";
    import NavBar from "$lib/components/NavBar.svelte";
</script>

<Modal />

<AppShell>
    <svelte:fragment slot="header"><NavBar/></svelte:fragment>


    <svelte:fragment slot="sidebarLeft">
        <AppRail>

            <!-- --- -->
            <svelte:fragment slot="trail">
                <AppRailTile><div class="p-4"><LightSwitch /></div></AppRailTile>
            </svelte:fragment>
        </AppRail>
    </svelte:fragment>


    <slot />
</AppShell>