

export const load = async ({fetch}) => {
    const res = await fetch("/admin/users")
    return {
        users: res.json()
    }
}