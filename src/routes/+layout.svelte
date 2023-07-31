<script>
    //Import css files
    // Your selected Skeleton theme:
    import '../theme.postcss';
    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

    import {Drawer, drawerStore, toastStore} from '@skeletonlabs/skeleton';

    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

    import {storePopup, Toast} from '@skeletonlabs/skeleton';
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
    import {AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch, Modal} from "@skeletonlabs/skeleton";
    import AddEventDrawer from "$lib/components/AddEventDrawer.svelte";
    import EditEventDrawer from '$lib/components/EditEventDrawer.svelte';
    import {page} from "$app/stores";


    import AddTrainingDrawer from "$lib/components/AddTrainingDrawer.svelte";
    import AddScheduleDrawer from "$lib/components/AddScheduleDrawer.svelte";
    import EditScheduleDrawer from "$lib/components/EditScheduleDrawer.svelte";
    import AddGroupDrawer from "$lib/components/AddGroupDrawer.svelte";
    import EditGroupDrawer from "$lib/components/EditGroupDrawer.svelte";
    import AddQuestionModal from "$lib/components/AddQuestionModal.svelte";
    import MobileMenu from "$lib/components/MobileMenu.svelte";
    import EnrolledEmployees from "$lib/components/EnrolledEmployees.svelte";
    import ViewUserModal from "$lib/components/ViewUserModal.svelte";
    import GroupEnrollModal from "$lib/components/GroupEnrollModal.svelte";
    
    $: if ($page.form?.status >= 300 && $page.form?.status < 400) {
        toastStore.trigger({ message: $page.form.message, background: 'variant-filled-error' });
    } else if ($page.form?.status >= 200 && $page.form?.status < 300) {
        toastStore.trigger({ message: $page.form.message, background: 'variant-filled-success' });
    }


    const modalComponentRegistry = {

        // Custom Modal 1
        addQuestion: {
            // Pass a reference to your custom component
            ref: AddQuestionModal,
        },

        enrolledEmployees: {
            ref: EnrolledEmployees,
        },
        viewUserModal: {
            ref: ViewUserModal,
        },
        groupEnrollment: {
            ref: GroupEnrollModal,
        }
    };
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<Modal components={modalComponentRegistry} />
<Toast />

<Drawer>
    {#if $drawerStore.id === "AddEventDrawer"}
        <AddEventDrawer/>
    {:else if $drawerStore.id === "EditEventDrawer"}
        <EditEventDrawer/>
    {:else if $drawerStore.id === "AddTrainingDrawer"}
        <AddTrainingDrawer/>
    {:else if $drawerStore.id === "AddScheduleDrawer"}
        <AddScheduleDrawer/>
    {:else if $drawerStore.id === "EditScheduleDrawer"}
        <EditScheduleDrawer/>
    {:else if $drawerStore.id === "AddGroupDrawer"}
        <AddGroupDrawer/>
    {:else if $drawerStore.id === "EditGroupDrawer"}
        <EditGroupDrawer/>
    {:else if $drawerStore.id === "MobileMenu"}
        <MobileMenu/>
    {/if}

</Drawer>

<slot />