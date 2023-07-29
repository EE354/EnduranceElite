const aboutPopup = {
    event: 'click',
    target: 'aboutPopup',
    placement: 'bottom',
    middleware: {
        offset: {
            crossAxis: -37
        }
    }
};

const activitiesPopup = {
    event: 'click',
    target: 'activitiesPopup',
    placement: 'bottom',
    middleware: {
        offset: {
            crossAxis: -257
        }
    }
};

const eventsPopup = {
    event: 'click',
    target: 'eventsPopup',
    placement: 'bottom',
    middleware: {
        offset: {
            crossAxis: 0
        }
    }
};

export const navItems = [
    {
        id: 1,
        label: "About",
        menu: aboutPopup,
        menuString: "aboutPopup",
        span: "col-span-3",
        parentNavItems: [
            {
                label: "",
                href: "#",
                childNavItems: [
                    { label: "About Us", href: "/about" },
                    { label: "Tuition", href: "/tuition" },
                    { label: "Crew", href: "/crew" },
                    { label: "Join the Crew", href: "/join-the-crew" },
                    { label: "Contact Us", href: "/contact-us" },
                ]
            },
        ],
    },
    {
        id: 2,
        label: "Events",
        menu: eventsPopup,
        menuString: "eventsPopup",
        span: "col-span-1",
        parentNavItems: [
            { label: "Special Events", href: "/special-events" },
            { label: "Open Gym", href: "/open-gym" },
            { label: "Camps", href: "/camps" },
            { label: "Friday Night Flick", href: "/friday-night-flick" },
            { label: "Parent's Night Out", href: "/parents-night-out" },
            { label: "Birthday Parties", href: "/birthday-parties" },
            { label: "Clinics", href: "/clinics" },
            { label: "After School", href: "/after-school" },
            { label: "Field Trips", href: "/field-trips" },
            { label: "Gymnastics/Ninja Summer Showcase 2023", href: "/gymnastics-ninja-showcase" },
            { label: "Dance/Cheer Summer Showcase 2023", href: "/cheer-dance-showcase" },
        ],
    },
    {
        id: 3,
        label: "Activities",
        menu: activitiesPopup,
        menuString: "activitiesPopup",
        span: "col-span-1",
        parentNavItems: [
            { 
                label: "Gymnastics", 
                href: "/gymnastics",
                childNavItems: [
                    { label: "Preschool Gymnastics", href: "/preschool-gymnastics" },
                    { label: "Recreational Gymnastics", href: "/recreational-gymnastics" },
                ],
            },
            { 
                label: "Dance", 
                href: "/dance",
                childNavItems: [
                    { label: "Preschool Dance", href: "/preschool-dance" },
                    { label: "Recreational Dance", href: "/recreational-dance" },
                ],
            },
            { 
                label: "Cheer", 
                href: "/cheer",
                childNavItems: [
                    { label: "Cheer Classes", href: "/cheer-classes" },
                ],
            },
            { 
                label: "Ninja Warrior", 
                href: "/ninja-warrior",
            },
            { 
                label: "Adult", 
                href: "/adult",
                childNavItems: [
                    { label: "Adult Classes", href: "/adult-classes" },
                ],
            },
            { 
                label: "Competitive", 
                href: "/competitive",
                childNavItems: [
                    { label: "Team Information", href: "/team-information" },
                    { label: "College Recruiting", href: "/college-recruiting" },
                ],
            },
        ],
    },
    // { label: "", href: "/" },
]