export const load = async ({fetch}) => {
    const res = await fetch("/admin/training")
    return {
        events: res.json()
    }
}