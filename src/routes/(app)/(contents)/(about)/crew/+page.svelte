<script>
    import { Avatar } from '@skeletonlabs/skeleton';

    export let data;
</script>

<div class="container text-center bg-[url('https://static.wixstatic.com/media/34a5c89879d04bd0b22d4754040a4df9.jpg/v1/fill/w_980,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/34a5c89879d04bd0b22d4754040a4df9.jpg')] p-4 mb-4">
    <!-- Header Block -->
    <div>
        <h1 class="text-primary-500 text-shadow">Meet the CREW</h1>
    </div>
</div>

<div class="container flex flex-wrap gap-4 place-content-center">
    {#each data.crew as {name, roles}}
        <div class="grid place-items-center h-1/6 w-1/6 text-center">
            <Avatar src="" width="w-32" rounded="rounded-full" />
            <h3>{name}</h3>
            <p>{roles}</p>
        </div>
    {/each}
</div>