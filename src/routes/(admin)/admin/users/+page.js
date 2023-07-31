

export const load = async ({fetch}) => {
    const res = await fetch("/admin/users")
    const data = await res.json()
    return {
        users: data.users,
        trainings: data.trainings,
        groups: data.groups,
        user: data.user
    }
}