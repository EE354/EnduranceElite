export const load = async ({ locals}) => {

    //Set page data
    const dayCamps = [
        {
            title: "Labor Day Camp",
            date: "September 5, 2022",
        },
        {
            title: "Columbus Day Camp",
            date: "October 10, 2022",
        },
        {
            title: "Gobble Gobble Turkey Day Camp",
            date: "November 21-23, 2022",
        },
        {
            title: "Holiday Hoopla Day Camp",
            date: "December 19-23, 2022",
        },
        {
            title: "Happy New Year Day Camp",
            date: "December 26-30, 2022",
        },
        {
            title: "MLK Day Camp",
            date: "January 16, 2023",
        },
        {
            title: "President's Day Camp",
            date: "February 20, 2023",
        },
        {
            title: "Spring Breakin' Day Camp",
            date: "March 13-17, 2023",
        },
        {
            title: "Fri-YAY! Day Camp",
            date: "April 7, 2023",
        },
        {
            title: "Battle of Flowers",
            date: "April 28, 2023",
        },
    ]

    const summerCamps = [
        {
            title: "Rainbow",
            date: "May 29-June 2, 2023",
        },
        {
            title: "Wilderness Exploreres",
            date: "June 5-9 2023",
        },
        {
            title: "Happy Birthday EE",
            date: "June 12-16, 2023",
        },
        {
            title: "Disney",
            date: "June 19-23, 2023",
        },
        {
            title: "Ninja",
            date: "June 26-30, 2023",
        },
        {
            title: "4th of July",
            date: "June 3-7, 2023 (Closed July 4th)",
        },
        {
            title: "LEGO",
            date: "July 10-14, 2023",
        },
        {
            title: "Encanto",
            date: "July 17-21, 2023",
        },
        {
            title: "Christmas in July",
            date: "July 24-28, 2023",
        },
        {
            title: "Superhero",
            date: "July 31-August 4, 2023",
        },
        {
            title: "Sports",
            date: "August 7-11, 2023",
        },
        {
            title: "Pirates",
            date: "August 14-18, 2023",
        },
    ]

    return {
        dayCamps,
        summerCamps,
    };
};