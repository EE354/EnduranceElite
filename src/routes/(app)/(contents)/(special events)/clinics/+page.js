export const load = async ({ locals}) => {

    //Set page data
    const clinics = [
        {
            date: "July 11, 2023",
            activity1: "11:00 am - Front Walkover",
            activity2: "11:00 am - Bars Pullover",
        },
        {
            date: "July 13, 2023",
            activity1: "10:00 am - Back Walkover",
            activity2: "11:00 am - Bars Kip",
        },
        {
            date: "July 18, 2023",
            activity1: "10:00 am - Back Handspring",
            activity2: "11:00 am - Back Tuck",
        },
        {
            date: "July 20, 2023",
            activity1: "10:00 am - Front Handspring",
            activity2: "11:00 am - Bars Flyaway",
        },
        {
            date: "July 25, 2023",
            activity1: "10:00 am - Front Tuck",
            activity2: "11:00 am - Side Aerial (Must have Cartwheel)",
        },
        {
            date: "July 27, 2023",
            activity1: "10:00 am - Cartwheel",
            activity2: "11:00 am - Handstand",
        },
        {
            date: "August 1, 2023",
            activity1: "10:00 am - Beam Back Walkover",
            activity2: "11:00 am - Back Handspring",
        },
        {
            date: "August 3, 2023",
            activity1: "10:00 am - Back Tuck",
            activity2: "11:00 am - Front Layout (Must have a Front Tuck)",
        },
        // {
        //     date1: "",
        //     activity1: "",
        //     activity2: "",
        // },
    ]

    return {
        clinics,
    };
};