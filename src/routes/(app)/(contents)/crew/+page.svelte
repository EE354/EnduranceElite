<script>
    import { Avatar } from '@skeletonlabs/skeleton';

    export let data;
</script>

<div class="container flex flex-wrap gap-4">
    {#each data.crew as {name, roles}}
        <div class="grid place-items-center">
            <Avatar src="" width="w-32" rounded="rounded-full" />
            <h3>{name}</h3>
            <p>{roles}</p>
        </div>
    {/each}
</div>