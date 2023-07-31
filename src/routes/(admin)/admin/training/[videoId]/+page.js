export const load = async ({fetch, locals, params}) => {
    const res = await fetch(`/admin/training/${params.videoId}`);
    let data = await res.json();
    return {
        training:  data.training,
        employees: data.employees,
        enrolledEmployees: data.enrolledEmployees
    }
}