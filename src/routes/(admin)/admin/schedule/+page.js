export const load = async ({fetch}) => {
    const res = await fetch("/admin/schedule")
    return {
        schedules: res.json()
    }
}