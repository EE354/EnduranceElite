import minielite from "$lib/Regular/Gymnastics/minielite.jpg";
import juniorelite from "$lib/Regular/Gymnastics/juniorelite.jpg";
import kindernastics from "$lib/Regular/Gymnastics/kindernastics.jpg";

export const load = async ({ locals}) => {

    //Set page data
    const cards = [
        {
            title: "Mini Elite (invite only) ",
            description: "Mini Elite requires an invite from a coach. This class is designated for young gymnasts that show potential in advanced flexibility, strength, comprehension, body awareness, good behavior and ambition to be competitive. Mini Elite classes are coached by professional team coaches looking for their next competitive team. The track for pre-elite classes follow into preteam, compulsories, optionals and possibly elite as a professional or college gymnast. Mini Elite classes are structured based on beginner gymnastics skills that then become the basic technique for higher level skills. Classes will provide a high abundance of conditioning as well as flexibility drills. ",
            src: minielite,
            alt: "Kid Doing Air Splits",
            note1: "Ages: 3-4 Years 1 Hour $95/Month",
            note2: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
        },
        {
            title: "Junior Elite (invite only)",
            description: "Junior Elite is a continuation of Mini Elite or for the newly invited Prenastics or Kindernastics Gymnast. Similar to Mini Elite, this class is designated  for young gymnasts that show potential in advanced flexibility, strength, comprehension, body awareness, good behavior and ambition to be competitive. Junior Elite gymnasts continue on to preteam, compulsories, optionals and possibly elite as a professional or college gymnast. Junior Elite class focus heavily on strength, flexibility and basic skills that are vital to the successful upper level gymnast.",
            src: juniorelite,
            alt: "Kids Doing The Splits",
            note1: "Ages: 5-6 Years 1 Hour $95/Month",
            note2: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
        },
        {
            title: "Kindernastics",
            description: "Kindernastics is the first time your gymnast will use the 'Big' equipment. Basic gymnastics skills and safety requirements encompass this class. While themes are not used regularly, the kinder gymnast is learning independence, how to perform a skill to the best of their ability and also taking corrections to better enhance their gymnastics experience. Girls and Boys Rec Level 1 skills/routines are used to create Kindernastics' lesson plans.",
            src: kindernastics,
            alt: "Chikd Playing",
            note1: "Ages: 5-6 Years & Up 1 Hour $95/Month",
            note2: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
        },
        {
            title: "Girl's Rec Levels 1-4",
            description: "Girl's Recreational classes are designed to give your gymnast education of all USA Gymnastics Junior Olympic events and routines. The skill base follows the Junior Olympic Compulsory routines for Vault, Bars, Beam and Floor. Other events, such as trampoline will be introduced as an educational tool for the four primary events. The gymnasts will learn the technical terms of each skill and will follow progressions to safely build their skill base. Strength and flexibility follow an important roll within all levels of girl's gymnastics in order to safely execute all skills. It's important to note that most students will need each level for approximately 1-2 years before progressing to the next level. Time spent in a certain level is based solely on the gymnasts knowledge of the skills and their ability to repeat the skills continuously. Skills are tested every other month (see bulletin boards for upcoming testing information) and 'skill cards' will be distributed to see your gymnast's progress. All skills must be completed to progress to the next level. ",
            src: kindernastics,
            alt: "Child Playing",
            note1: "Ages: 5-6 Years 1 Hour $95/Month",
            note2: "Attire: Leotard. Shorts allowed over leotard. No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
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