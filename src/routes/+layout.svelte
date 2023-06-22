<script>
    //Import css files
    // Your selected Skeleton theme:
    import '../theme.postcss';
    //import '@skeletonlabs/skeleton/themes/theme-crimson.css';
    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

    import {storePopup, Toast} from '@skeletonlabs/skeleton';
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });


    import {AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch, Modal} from "@skeletonlabs/skeleton";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<Modal />
<Toast />

<slot />
<style>
    .material-symbols-outlined {
        font-variation-settings:
                'FILL' 1,
                'wght' 500,
                'GRAD' 0,
                'opsz' 40
    }
</style>