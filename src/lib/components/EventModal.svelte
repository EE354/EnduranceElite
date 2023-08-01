<script>
    import {modalStore} from "@skeletonlabs/skeleton";
    export let schedule;
</script>

<div class="card">
    <div class="flex justify-end">
        <button class="btn btn-standard absolute rounded-full rounded-tr-2xl" on:click={() => modalStore.close()}>X</button>
    </div>
    <div class=" p-10">
        <div class="container pb-4">
            <h2>{schedule.title}</h2>
            <p class="text-gray-500">Start: {schedule.start.toLocaleString()}</p>
            <p class="text-gray-500">End: {schedule.end.toLocaleString()}</p>
        </div>
        <hr class="!border-t-2"/>
        <p>{schedule.extendedProps.description}</p>
    </div>
</div>