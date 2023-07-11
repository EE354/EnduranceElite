import babynastics from "$lib/Regular/Gymnastics/babynastics.jpg";
import tumblingtots from "$lib/Regular/Gymnastics/tumblingtots.jpg";
import prenastics from "$lib/Regular/Gymnastics/prenastics.jpg";

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
        {
            title: "Tumbling Tots",
            description: "Tumbling Tots takes place in our Baby Gym and is an introduction for the beginner toddler gymnast or the continuing babynastics gymnast. With a parents supervision, the gymnast learns to engage in group activities and play on the gymnastics equipment safely. All preschool classes are themed for interactive learning with a fun and enthusiastic coach. This class is a special time for the parent and gymnast to play, learn fitness and assist their child in learning how to interact in a group and start to follow their coach for future independent classes.",
            src: tumblingtots,
            alt: "Baby in a Tumble Cylinder",
            note1: "Ages: 2-3 Years 45 Minutes $87/Month 1 MONTH FREE TRIAL!!!!",
            note2: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=26&programs=57",
            name: "Tumbling Tots",
        },
        {
            title: "Prenastics",
            description: "Prenastics is a class designed for the first-time independent preschooler. The coach engages the class in fun themes and teaches obstacle courses to keep the students on track. Games and activities are introduced to the young gymnast and motor skills are put to use. This class is a safe way for your pre-school gymnasts to climb, hang, roll and feel independence in a safe learning environment. Basic gymnastics skills will be introduced and technique will be so much fun to learn so that progressions can be made if future classes. Prenastics classes get to experience the Big Gym equipment. ",
            src: prenastics,
            alt: "Children Playing",
            note1: "Ages: 3-4 Years 45 Minutes $87/Month",
            note2: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=27&programs=57",
            name: "Prenastics",
        },
        // {
        //     title: "",
        //     description: "",
        //     src: ,
        //     alt: "",
        //     note1: "",
        //     note2: "",
        //     href: "",
        //     name: "",
        // },
    ]

    return {
        cards
    };
};