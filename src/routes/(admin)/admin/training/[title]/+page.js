export const load = async ({fetch, locals, params}) => {
    const res = await fetch(`/admin/training/[${params.title}]`)
    return {
        training: res.json()
    }
}