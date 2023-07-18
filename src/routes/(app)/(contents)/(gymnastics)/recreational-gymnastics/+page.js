import minielite from "$lib/Regular/Gymnastics/minielite.jpg";
import juniorelite from "$lib/Regular/Gymnastics/juniorelite.jpg";
import kindernastics from "$lib/Regular/Gymnastics/kindernastics.jpg";
import girlsreclevel14 from "$lib/Regular/Gymnastics/girlsreclevel1-4.jpg";
import boysreclevel14 from "$lib/Regular/Gymnastics/boysreclevel1-4.jpg";
import conditionandflex from "$lib/Regular/Gymnastics/conditionandflex.jpg";

export const load = async ({ locals}) => {

    //Set page data
    const cards = [
        {
            title: "Mini Elite (invite only) ",
            description: "Mini Elite requires an invite from a coach. This class is designated for young gymnasts that show potential in advanced flexibility, strength, comprehension, body awareness, good behavior and ambition to be competitive. Mini Elite classes are coached by professional team coaches looking for their next competitive team. The track for pre-elite classes follow into preteam, compulsories, optionals and possibly elite as a professional or college gymnast. Mini Elite classes are structured based on beginner gymnastics skills that then become the basic technique for higher level skills. Classes will provide a high abundance of conditioning as well as flexibility drills. ",
            src: minielite,
            alt: "Kid Doing Air Splits",
            ages: "Ages: 3-4 Years",
            duration: "1 Hour",
            payment: "95$/Month",
            note: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
        },
        {
            title: "Junior Elite (invite only)",
            description: "Junior Elite is a continuation of Mini Elite or for the newly invited Prenastics or Kindernastics Gymnast. Similar to Mini Elite, this class is designated  for young gymnasts that show potential in advanced flexibility, strength, comprehension, body awareness, good behavior and ambition to be competitive. Junior Elite gymnasts continue on to preteam, compulsories, optionals and possibly elite as a professional or college gymnast. Junior Elite class focus heavily on strength, flexibility and basic skills that are vital to the successful upper level gymnast.",
            src: juniorelite,
            alt: "Kids Doing The Splits",
            ages: "Ages: 5-6 Years",
            duration: "1 Hour",
            payment: "95$/Month",
            note: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
        },
        {
            title: "Kindernastics",
            description: "Kindernastics is the first time your gymnast will use the 'Big' equipment. Basic gymnastics skills and safety requirements encompass this class. While themes are not used regularly, the kinder gymnast is learning independence, how to perform a skill to the best of their ability and also taking corrections to better enhance their gymnastics experience. Girls and Boys Rec Level 1 skills/routines are used to create Kindernastics' lesson plans.",
            src: kindernastics,
            alt: "Child Playing",
            ages: "Ages: 5-6 Years",
            duration: "1 Hour",
            payment: "95$/Month",
            note: "Attire: Leotard or Shorts and T-Shirt (tucked in). No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
        },
        {
            title: "Girl's Rec Levels 1-4",
            description: "Girl's Recreational classes are designed to give your gymnast education of all USA Gymnastics Junior Olympic events and routines. The skill base follows the Junior Olympic Compulsory routines for Vault, Bars, Beam and Floor. Other events, such as trampoline will be introduced as an educational tool for the four primary events. The gymnasts will learn the technical terms of each skill and will follow progressions to safely build their skill base. Strength and flexibility follow an important roll within all levels of girl's gymnastics in order to safely execute all skills. It's important to note that most students will need each level for approximately 1-2 years before progressing to the next level. Time spent in a certain level is based solely on the gymnasts knowledge of the skills and their ability to repeat the skills continuously. Skills are tested every other month (see bulletin boards for upcoming testing information) and 'skill cards' will be distributed to see your gymnast's progress. All skills must be completed to progress to the next level. ",
            src: girlsreclevel14,
            alt: "Person on A Bar",
            ages: "Ages: 7 Years & Up",
            duration: "1 Hour",
            payment: "95$/Month",
            note: "Attire: Leotard. Shorts allowed over leotard. No socks. Hair in ponytail or bun. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
        },
        {
            title: "Boy's Rec Levels 1-4",
            description: "Boy's Recreational classes are designed to give your gymnast education of all USA Gymnastics Junior Olympic events and routines. The skill base follows the Junior Olympic Compulsory routines for Floor, Pommel Horse, Rings, Vault, Parallel Bars and High Bar. Other events, such as trampoline and pit will be introduced as an educational tool for the six primary events. The gymnasts will learn the technical terms of each skill and will follow progressions to safely build their skill base. Strength and flexibility follow an important roll within all levels of boy's gymnastics in order to safely execute all skills. It's important to note that most students will need each level for approximately 1-2 years before progressing to the next level. Time spent in a certain level is based solely on the gymnasts knowledge of the skills and their ability to repeat the skills continuously. Skills are tested every other month (see bulletin boards for upcoming testing information) and 'skill cards' will be distributed to see your gymnast's progress. All skills must be completed to progress to the next level.",
            src: boysreclevel14,
            alt: "Bar Handles",
            ages: "Ages: 7 Years & Up",
            duration: "1 Hour",
            payment: "95$/Month",
            note: "Attire: Shorts and T-Shirt (tucked in). No socks. Hair pulled out of face. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?programs=16",
            name: "Rec Gymnastics",
        },
        {
            title: "Condition & Flex",
            description: "Strength and Flexibility are the building blocks to all sports, however, most recreational classes only get 10 to 15 minutes to spend on these very important exercises. Receive some extra attention with this Condition and Flex class. Coaches will focus on strengthening the entire body as well as elongating the muscles creating a multifunctional athlete. All students are welcome. It's not required to take a recreational class prior to attending this class. Perhaps your athlete would benefit from attending Condition and Flex before committing to a gymnastics class. This journey will make transitioning into a gymnast or competitive team member more comfortable.",
            src: conditionandflex,
            alt: "People Doing Push Ups",
            ages: "Ages: 7 Years & Up",
            duration: "1 Hour",
            payment: "95$/Month",
            note: "Attire: Leotard or Shorts and T-Shirt (tucked in). Bare foot or Tennis shoes. Hair pulled out of face. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=24&programs=16",
            name: "Condition & Flex",
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