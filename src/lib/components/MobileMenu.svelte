<script>
	import { drawerStore } from "@skeletonlabs/skeleton";
    import { navItems } from "../nav";

    function closeDrawer() {
        drawerStore.close();
    }

</script>
<main>
    <!-- (August 6th, 2023) xmark from FontAwesome. https://fontawesome.com/icons/xmark?f=classic&s=solid&sz=2xl -->
    <button class="pt-8 pl-8" on:click={closeDrawer}>
        <i class="fa-solid fa-xmark fa-2xl"></i>
    </button>
    <div class="container pb-0">
        <img class="container w-[10rem]" alt="Endurance Elite" src="$lib/Logos/ee-icon.png">
    </div>

    <div class="m-8">
        {#each navItems as {label, parentNavItems}}
            <div class="grid grid-cols-3 gap-4 border-2 border-neutral-900 my-8 p-4">
                <h4 class="col-span-3">{label}</h4>
                {#each parentNavItems as {label, href, childNavItems}}
                    <div class="col-span-1">
                        <a on:click={closeDrawer} {href} class="hover:underline">{label}</a>
                        {#if childNavItems!= null}
                            <hr />
                            {#each childNavItems as {label, href}}
                                <div>
                                    <a on:click={closeDrawer} {href} class="hover:underline">{label}</a>
                                </div>
                            {/each}
                        {:else}
                            <br />
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</main>