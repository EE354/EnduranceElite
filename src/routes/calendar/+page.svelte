<script>
    import Calendar from '@event-calendar/core';
    import DayGrid from '@event-calendar/day-grid';
    import Interaction from '@event-calendar/interaction';
    import { modalStore } from "@skeletonlabs/skeleton";
    import {onMount} from "svelte";
    import Modal from "./Modal.svelte";

    export let data;

    const modalComponent = {
        // Pass a reference to your custom component
        ref: Modal,
        // Add the component properties as key/value pairs
        props: { background: 'bg-red-500' },
        // Provide a template literal for the default component slot
        slot: '<p>Skeleton</p>'
    };

    const modal = {
        type: 'component',
        component: modalComponent,
    }



    let calendar;
    let plugins = [DayGrid, Interaction];
    let options = {
        view: 'dayGridMonth',
        eventClick: async (info) => {
            modalComponent.props = { event: info.event };
            modalStore.trigger(modal);
        },
        events: data.events,
    };


</script>
<div class="container p-4 ">
    <Calendar bind:this={calendar} {plugins} {options} />
</div>