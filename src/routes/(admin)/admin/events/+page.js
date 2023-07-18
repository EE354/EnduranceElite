

export const load = async ({fetch}) => {
    const res = await fetch("/admin/events")
    return {
        events: res.json()
    }
}