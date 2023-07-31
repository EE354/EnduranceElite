

export const load = async ({fetch}) => {
    const res = await fetch("/admin/groups")
    const data = await res.json();
    return {
        groups: data.groups,
        users: data.users,
    }
}