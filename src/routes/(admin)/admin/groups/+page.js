

export const load = async ({fetch}) => {
    const res = await fetch("/admin/groups")
    return {
        groups: res.json()
    }
}