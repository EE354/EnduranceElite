<script>
    export let toggled = false;
</script>

<button on:click={() => {toggled = !toggled}} class="inline-flex">
    <div class="flex items-center h-full my-auto mx-1">
        {#if toggled}
            <i class="fa-solid fa-xmark"></i>
        {:else}
            <i class="fa-solid fa-check"></i>
        {/if}
    </div>

    <slot/>


</button>

