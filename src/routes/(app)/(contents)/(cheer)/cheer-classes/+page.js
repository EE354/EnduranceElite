import cheer from "$lib/Regular/Cheer/cheer1-3.jpg";
import tumbling from "$lib/Regular/Cheer/tumblinglevels1-4.jpg";
import precheer from "$lib/Regular/Cheer/pre-cheer.jpg";

export const load = async ({ locals}) => {

    //Set page data
    const cards = [
        {
            id: "tumbling",
            title: "Tumbling Levels 1-4",
            subclass: "",
            description: "Tumbling classes are available to those looking to learn floor skills such as walkovers, aerials, handsprings, tucks, etc. This is a great alternative to students less interested in the gymnastics events and to focus on tumbling used for cheerleading, dance, theater or acrobatics. The gymnasts will learn the technical terms of each skill and will follow progressions to safely build their skill base. Strength and flexibility follow an important roll within all levels of tumbling in order to safely execute all skills. It's important to note that most students will need each level for approximately 1-2 years before progressing to the next level. Skills are tested each session and 'skill cards' will be distributed to see your child's progress. All skills must be completed to progress to the next level. ",
            src: tumbling,
            alt: "Kid Ballet Class",
            ages: "7 Years & Up",
            duration: "1 Hour",
            payment: "$88/Month",
            note: "Attire: Leotard or Shorts and T-Shirt (tucked in). Bare foot or Tennis shoes. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=43&programs=58",
            name: "Rec Tumbling",
        },
        {
            id: "precheer",
            title: "Pre-Cheer",
            subclass: "",
            description: "Pre-Cheer introduces cheerleading concepts to the first time cheerleader. Motions, cheers, stunts, tumbling and dance will be familiarized to the young cheerleader before moving on to more difficult motions, longer cheers and dances, intricate stunts and bigger tumbling in the 'Cheer' class. Students will learn to work as a team with their fellow classmates. Discipline, strength, flexibility and trust are important factors needed for cheerleading. Enthusiastic coaches will provide positive learning environments with challenges and goals for your cheerleader to strive for. ",
            src: precheer,
            alt: "Kid Ballet Class in Tutus",
            ages: "5-6 Years",
            duration: "1 Hour",
            payment: "$88/Month",
            note: "Attire: Shorts and T-Shirt (tucked in). Cheer shoes or Tennis shoes. Hair pulled out of face. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=56&programs=58",
            name: "Pre-Cheer",
        },
        {
            id: "cheer",
            title: "Cheer 1-3",
            subclass: "",
            description: "Cheer classes are provided for beginning or experienced Cheerleaders. All aspects of cheerleading (motions, cheers, stunts, tumbling and dance) will be introduced and made more intricate through experience. The gymnasts will learn the technical terms of each skill and will follow progressions to safely build their skill base. Discipline, strength, flexibility and trust are important factors needed for cheerleading. Enthusiastic coaches will provide positive learning environments with challenges and goals for your cheerleader to strive for.",
            src: cheer,
            alt: "Kid Jazz Class",
            ages: "7 Years & Up",
            duration: "1 Hour",
            payment: "$88/Month",
            note: "Attire: Shorts and T-Shirt (tucked in). Cheer shoes or Tennis shoes. Hair pulled out of face. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=57&programs=58",
            name: "Rec Cheer",
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