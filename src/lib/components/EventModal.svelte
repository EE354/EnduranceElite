<script>
    export let event = {
        name: "N/A",
        description: "N/A",
        dateTime: {
            startDate: "2023-09-18T18:25:14+0000",
            endDate: "2023-09-18T18:25:14+0000"
        },
        location: "wasd"
    };
    export let open = false;

    const modalClose = () => {
        open = false;
    }

</script>

{#if open}
    <div class="modal" id="sampleModal" tabindex="-1"
         role="dialog" aria-labelledby="sampleModalLabel" aria-hidden={false}>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="sampleModalLabel">{event.name}</h4>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" on:click={modalClose}/>
                </div>
                <div class="modal-body">
                    <h5>{event.description}</h5>
                    <h5>Start: {new Date(event.dateTime.startDate).toDateString()} {new Date(event.dateTime.startDate).toLocaleTimeString()}</h5>
                    <h5>End: {new Date(event.dateTime.endDate).toDateString()} {new Date(event.dateTime.endDate).toLocaleTimeString()}</h5>
                    <h6>location: {event.location}</h6>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" on:click={modalClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop show" />

{/if}

<style>
    .modal {
        display: block;
    }
</style>