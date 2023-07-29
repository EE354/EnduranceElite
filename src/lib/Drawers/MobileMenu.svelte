<script>
	import { drawerStore } from "@skeletonlabs/skeleton";
    import { navItems } from "../nav";

    function closeDrawer() {
        drawerStore.close();
    }
</script>
<main>
    <div class="container bg-primary-500 m-8">
        <h1>Test</h1>
    </div>

    <!-- Set Nav Buttons and Nav Pop Up Menus
    {#each navItems as {id, label, menu, menuString, span, parentNavItems}}
    <button on:click={() => { menuClick(id); }} class="w-20 h-12 {getClass(id, activeButton)}" use:popup={menu}>{label}</button>
    <div
    class="neutral dark:bg-[#31465B] border-[1px] p-4 shadow-2xl text-sm"
    >
        <div class="grid grid-cols-3 gap-4">
            {#each parentNavItems as {label, href, childNavItems}}
                <div class="{span}">
                    <a {href} class="hover:underline">{label}</a>
                    {#if childNavItems != null}
                        <hr />
                        {#each childNavItems as {label, href}}
                            <a {href} class="hover:underline">{label}</a>
                            <br />
                        {/each}
                    {:else}
                        <br />
                    {/if}
                </div>
            {/each}
        </div>
    </div>
{/each} -->

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