<script>
    import {modalStore} from "@skeletonlabs/skeleton";

    export let event;
</script>

<div class="card">
    <div class="flex justify-end">
        <button class="btn btn-standard absolute rounded-full rounded-tr-2xl" on:click={() => modalStore.close()}>X</button>
    </div>
    <div class=" p-10">
        <div class="container pb-4">
            <h2>{event.title}</h2>
            <p class="text-gray-500">Start: {event.start.toLocaleString()}</p>
            <p class="text-gray-500">End: {event.end.toLocaleString()}</p>
        </div>
        <hr class="!border-t-2"/>
        <p>{event.extendedProps.description}</p>
    </div>
</div>