export const load = async ({fetch, locals, params}) => {
    const res = await fetch(`/admin/training/${params.videoId}`);
    return {
        training:  await res.json()
    }
}