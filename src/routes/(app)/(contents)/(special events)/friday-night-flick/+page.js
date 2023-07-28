export const load = async ({ locals}) => {

    //Set page data
    const movies = [
        {
            title: "Stange World",
            date: "February 3, 2023",
        },
        {
            title: "Minions- Rise of Gru",
            date: "March 3, 2023",
        },
        {
            title: "Onward",
            date: "April 7, 2023",
        },
        {
            title: "Rio",
            date: "May 5, 2023",
        },
        {
            title: "TBD",
            date: "June 2, 2023",
        },
        {
            title: "TBD",
            date: "June 7, 2023",
        },
        {
            title: "TBD",
            date: "August 4, 2023",
        },
        {
            title: "TBD",
            date: "September 8, 2023",
        },
        {
            title: "TBD",
            date: "October 6, 2023",
        },
    ]

    return {
        movies,
    };
};