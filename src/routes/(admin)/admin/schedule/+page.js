export const load = async ({fetch}) => {
    const res = await fetch("/admin/schedule")
    const data = await res.json()
    return {
        schedules: data.schedules,
        employees: data.employees,
    }
}