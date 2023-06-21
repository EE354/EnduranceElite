<script>
    import Calendar from '@event-calendar/core';
    import DayGrid from '@event-calendar/day-grid';
    import Interaction from '@event-calendar/interaction';
    import {account, apiDomain} from "../stores";
    import axios from "axios";
    import {ready} from "@roxi/routify";
    import EventModal from "../components/EventModal.svelte";
    import NavBar from "../components/NavBar.svelte";

    //Modal control
    let openInfoModal = false;
    let shownEvent;

    let events

    const formatEvent = (event) => {
        let formatedEvent ={
            resourceId: event._id,
            title: event.name,
            start: new Date(event.dateTime.startDate),
            end: new Date(event.dateTime.endDate),
            allDay: event.allDay
        };

        return formatedEvent;
    };

    const fetchEvents = async () => {
        try {
            let eventList = [];
            await getEvents();
            for (let event of events) {
                eventList.push(formatEvent(event));
            }
            return eventList;
        } catch (e) {
            console.log(e)
        }

    }

    const findEvent = (id) => {
        for (let event of events) {
            if (event._id === id) {return event}
        }
    }
    const getEvents = async () => {
        try {
            const response = await axios({
                method: 'POST',
                url: `${apiDomain}/api/calendar/getEvents`,
            })
            events = response.data;
        } catch (e) {
            console.log(e)
        }
    };

    let calendar;
    let plugins = [DayGrid, Interaction];
    let options = {
        height: '70%',
        view: 'dayGridMonth',
        eventClick: (info) => {
            console.log(info.event)
            shownEvent = findEvent(info.event.resourceIds[0]);
            openInfoModal = true;
        },
        eventSources: [{events: () => {
                let events = fetchEvents()
                $ready()
                return events;

            }}]
    };


</script>
<NavBar/>
<EventModal bind:event={shownEvent} bind:open={openInfoModal}/>
<Calendar bind:this={calendar} {plugins} {options} />

