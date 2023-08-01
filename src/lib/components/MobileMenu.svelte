<script>
	import { drawerStore } from "@skeletonlabs/skeleton";
    import { navItems } from "../nav";

    function closeDrawer() {
        drawerStore.close();
    }
</script>
<main>
    <div class="container p-8 pb-0">
        <img class="container w-[10rem]" alt="Endurance Elite" src="$lib/Logos/ee-icon.png">
    </div>

    <div class="m-8">
        {#each navItems as {label, parentNavItems}}
            <div class="grid grid-cols-3 gap-4 border-2 border-neutral-900 my-8 p-4">
                <h4 class="col-span-3">{label}</h4>
                {#each parentNavItems as {label, href, childNavItems}}
                    <div class="col-span-1">
                        <a {href} class="hover:underline">{label}</a>
                        {#if childNavItems!= null}
                            <hr />
                            {#each childNavItems as {label, href}}
                                <div>
                                    <a {href} class="hover:underline">{label}</a>
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