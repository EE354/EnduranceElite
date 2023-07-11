import babynastics from "$lib/Regular/Gymnastics/babynastics.jpg";

export const load = async ({ locals}) => {

    //Set page data
    const cards = [
        {
            title: "Babynastics ",
            description: "Babynastics is an exciting class offered to the beginner baby gymnast with the assistance of their coach and guardian in our Baby Gym. All preschool classes are themed for interactive learning with a fun and enthusiastic coach. This is baby's first introduction to gymnastics, therefore, we teach babynastics in our Baby Gym created with obstacle courses, bars and beams, to keep everyone together and safe. Walk, run, hop, climb and laugh through this class with your baby.",
            src: babynastics,
            alt: "Moms and Babies",
            note1: "Ages: 12-24 Months, 45 Minutes $87/Month, 1 MONTH FREETRIAL!!!!",
            note2: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=25&programs=57",
            name: "Babynastics",
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