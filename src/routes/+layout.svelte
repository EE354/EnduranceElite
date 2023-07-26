<script>
    //Import css files
    // Your selected Skeleton theme:
    import '../theme.postcss';
    //import '@skeletonlabs/skeleton/themes/theme-crimson.css';
    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
    import {Drawer, drawerStore, toastStore} from '@skeletonlabs/skeleton';

    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

    import {storePopup, Toast} from '@skeletonlabs/skeleton';
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });



    import {AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch, Modal} from "@skeletonlabs/skeleton";
    import AddEventDrawer from "$lib/Drawers/AddEventDrawer.svelte";
    import EditEventDrawer from '$lib/Drawers/EditEventDrawer.svelte';
    import {page} from "$app/stores";
    import {get} from "svelte/store";
    import EditTrainingDrawer from "$lib/Drawers/EditTrainingDrawer.svelte";
    import AddTrainingDrawer from "$lib/Drawers/AddTrainingDrawer.svelte";
    import AddScheduleDrawer from "$lib/Drawers/AddScheduleDrawer.svelte";
    import EditScheduleDrawer from "$lib/Drawers/EditScheduleDrawer.svelte";
    import AddGroupDrawer from "$lib/Drawers/AddGroupDrawer.svelte";
    import EditGroupDrawer from "$lib/Drawers/EditGroupDrawer.svelte";

    $: if ($page.form?.error) {
        $toastStore.trigger({ message: $page.data.error, background: 'variant-filled-error' });
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<Modal />
<Toast />

<Drawer>
    {#if $drawerStore.id === "AddEventDrawer"}
        <AddEventDrawer/>
    {:else if $drawerStore.id === "EditEventDrawer"}
        <EditEventDrawer/>
    {:else if $drawerStore.id === "AddTrainingDrawer"}
        <AddTrainingDrawer/>
    {:else if  $drawerStore.id === "EditTrainingDrawer"}
        <EditTrainingDrawer/>
    {:else if $drawerStore.id === "AddScheduleDrawer"}
        <AddScheduleDrawer/>
    {:else if $drawerStore.id === "EditScheduleDrawer"}
        <EditScheduleDrawer/>
    {:else if $drawerStore.id === "AddGroupDrawer"}
        <AddGroupDrawer/>
    {:else if $drawerStore.id === "EditGroupDrawer"}
        <EditGroupDrawer/>
    {/if}

</Drawer>

<slot />