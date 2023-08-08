

export const load = async ({fetch}) => {
    const res = await fetch("/admin/events")
    const data = await res.json();
    return {
        events: data.events,
        groups: data.groups,
    }
}