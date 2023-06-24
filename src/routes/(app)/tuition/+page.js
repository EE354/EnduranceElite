export const load = async ({ locals}) => {

    //Set page data
    const cards = [
        {
            title: "Membership Fee",
            description: "An annual membership fee is collected from all students enrolled in classes. Benefits of Membership Fees include the ability to enroll in any class or program and discounts on Special Activities such as Open Gym, Parent’s Night Out, Friday Night Flick & Day Camps.",
            header1: "Each Member Pays:",
            header2: "$45/Anually",
            header3: "",
            note1: "",
            note2: "*Your annual registration will be charged on the 15th of the month you registered.",
            note3: "Annual registration fees are charged to the card on file. Annual registration fees are non-refundable",
        },
        {
            title: "Gymnastics, Tumbling, Ninja, Cheer & Sampler Classes",
            description: "AUTOMATIC TUITION: Monthly tuition will be processed every 1st of the month for that month's tuition. Tuition will be automatically charged unless you've dropped the class before the end of the month. Tuition CAN NOT be substituded with makeup tokens. Late fees apply to tuition that is not paid by the 1st of the month.",
            header1: "Preschool Class 45 Minutes",
            header2: "Recreational Class 1 Hour",
            header3: "Recreational Class 1.5 Hours",
            note1: "$87/Month",
            note2: "$95/Month",
            note3: "$128/Month",
        },
        {
            title: "Dance Classes",
            description: "AUTOMATIC TUITION: Monthly tuition will be processed every 1st of the month for that month's tuition. Tuition will be automatically charged unless you've dropped the class before the end of the month. Tuition CAN NOT be substituded with makeup tokens. Late fees apply to tuition that is not paid by the 1st of the month.",
            header1: "Preschool Class",
            header1: "Preschool Class 45 Minutes",
            header2: "Recreational Class 1 Hour",
            header3: "",
            note1: "$54/Month",
            note2: "$65/Month",
            note3: "",
        },
        {
            title: "Adult Classes",
            description: "No monthly tuitions for Adult Class.",
            header1: "Drop In",
            header2: "Adult 11-Class Punch Card",
            header3: "",
            note1: "$12/Class (No Annual Registration Fee Required)",
            note2: "$120 for 11-Visits (No Annual Registration Fee Required)",
            note3: "*Free Trials do not apply to Adult Drop-In Classes",
        },
        {
            title: "Discounts",
            description: "A 10% discount is applied to students that enrolls in addition classes in either gymnastics or dance. Immediate family members and military families also receive a 10% discount. Military families must notify the office after registering online to receive the discount.",
            header1: "Trial Class",
            header2: "Sibling & Military",
            header3: "Additional Classes",
            note1: "FREE",
            note2: "10% Off",
            note3: "10% Off",
        },
        {
            title: "Late Fees",
            description: "Tuition will automatically be charged on the 1st of each month. Tuition must be paid in order to keep your spot in a class. Classes are reserved for paying customers only. Late fees are NON-REFUNDABLE. Emails and texts are sent to notify any balance due. Please keep track of your card on file to make sure it's up to date. Late fees will apply as follows:",
            header1: "5th of the Month",
            header2: "10th of the Month",
            header3: "15th of the Month",
            note1: "$15 Late Fee",
            note2: "$20 Late Fee",
            note3: "Automatic Drop from the Class (losing makeup tokens)",
        },
        // {
        //     title: "",
        //     description: "",
        //     header1: "",
        //     header2: "",
        //     header3: "",
        //     note1: "",
        //     note2: "",
        //     note3: "",
        // },
    ]

    return {
        cards
    };
};