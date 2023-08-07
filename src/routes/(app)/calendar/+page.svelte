<script>
    import Calendar from '@event-calendar/core';
    import DayGrid from '@event-calendar/day-grid';
    import Interaction from '@event-calendar/interaction';
    import { modalStore } from "@skeletonlabs/skeleton";
    import {onMount} from "svelte";
    import Modal from "./Modal.svelte";
    import FilterButton from "./FilterButton.svelte";
    import {enabledFilters} from "$lib/store.js";

    export let data;
    console.log(data)

    $: filteredEvents = (() => {
        let formatedEvents = [];
        if ($enabledFilters.public) {
            formatedEvents = [...formatedEvents, ...data.publicEvents];
        }
        if ($enabledFilters.group) {
            formatedEvents = [...formatedEvents, ...data.groupEvents];
        }
        if ($enabledFilters.employee) {
            formatedEvents = [...formatedEvents, ...data.employeeEvents];
        }
        if ($enabledFilters.admin) {
            formatedEvents = [...data.adminEvents];
        }
        return formatedEvents;
    })();

    //Create a modal component and modal
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

    let showFilter = false;

    console.log(filteredEvents);
    let calendar;
    let plugins = [DayGrid, Interaction];
    let options = {
        view: 'dayGridMonth',
        eventClick: async (info) => {
            //Set the props of the modal component
            modalComponent.props = { event: info.event };
            //Trigger the modal activation
            modalStore.trigger(modal);
        },
        events: filteredEvents || [],
    };



</script>
<div class="container p-4 ">
        <button class="btn variant-filled-primary my-2" on:click={() => showFilter = !showFilter}>Show Filter</button>
        <hr/>
        <div hidden={!showFilter} class="flex-col flex">
            <!-- Filter options for showing public events, events belonging to each group enrolled,
            schedules for employees if they are logged in, and showing everything for an admin -->

            <FilterButton bind:toggled={$enabledFilters.public}>
                <h3>Show Public Events</h3>
            </FilterButton>

            {#if data.roleId >= 1}
            <FilterButton bind:toggled={$enabledFilters.group}>
                <h3>Show Group Events</h3>
            </FilterButton>
            {/if}

            {#if data.roleId >= 2}
            <FilterButton bind:toggled={$enabledFilters.schedule}>
                <h3>Show Schedule</h3>
            </FilterButton>
            {/if}

            {#if data.roleId >= 3}
            <FilterButton bind:toggled={$enabledFilters.admin}>
                <h3>Show All Events</h3>
            </FilterButton>
            {/if}

            <hr class="mt-2"/>
        </div>
    <Calendar bind:this={calendar} {plugins} {options} />
</div>