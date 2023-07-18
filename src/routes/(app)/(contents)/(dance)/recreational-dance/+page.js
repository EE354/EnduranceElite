import tippytoedance from "$lib/Regular/Dance/tippytoedance.jpg";
import balletbears from "$lib/Regular/Dance/balletbears.jpg";
import jazzyjazzers from "$lib/Regular/Dance/jazzyjazzers.jpg";
import hiphophooray from "$lib/Regular/Dance/hiphophooray.jpg";
import minisamplerbjg from "$lib/Regular/Dance/minisamplerbjg.jpg";

export const load = async ({ locals}) => {

    //Set page data
    const cards = [
        {
            id: "tiptoe",
            title: "Tippy Toe Dance",
            description: "Tippy Toe Dance is an introductory ballet and jazz combo class created for the beginner dancer. Dance terminology and basic rhythm will be introduced in a fun, high energetic, creatively themed class, as well as, focusing on coordination, listening skills and basic motor skills. The instructors make learning fun with music, games, props and rewards. This interactive class will have your little dancer excited to attend class and show off her new moves.  The tippy toe dancers will learn two routines throughout the year. One will be performed for the holiday show and the other will be performed at the summer recital.",
            src: tippytoedance,
            alt: "Kid Ballet Class",
            ages: "Ages: 3-4 Years",
            duration: "45 Minutes",
            payment: "54$/Month",
            note: "Attire: Pink Leotard, Pink Tights, Pink Ballet Shoes, Hair in Bun",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=43&programs=58",
            name: "Tippy Toe Dance",
        },
        {
            id: "ballet",
            title: "Ballet Bears",
            description: "Ballet Bears are first time ballerinas learning basic movement themes such as; jumping, balletic runs walks, spinning and skipping. Students continue to work as a group and with partners to facilitate a sense of teamwork. Ballet Bears will learn one routine for the holiday show and one routine for the summer recital.",
            src: balletbears,
            alt: "Kid Ballet Class in Tutus",
            ages: "Ages: 4-6 Years",
            duration: "45 Minutes",
            payment: "54$/Month",
            note: "Attire: Pink Leotard, Pink Tights, Pink Ballet Shoes, Hair in Bun",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=56&programs=58",
            name: "Ballet Bears",
        },
        {
            id: "jazzy",
            title: "Jazzy Jazzers",
            description: "Jazz is a well known dance technique made up of Broadway dance to swing dance, to fun hip hop like isolated movements and even fast lyrical movements. The fun just pours out during this high energy class. Jazzy Jazzers are beginner dancers becoming familiar with jazz technique and energetic movements. Jazzy Jazzers will perform one routine for the holiday show and one routine for the summer recital.",
            src: jazzyjazzers,
            alt: "Kid Jazz Class",
            ages: "Ages: 4-6 Years",
            duration: "45 Minutes",
            payment: "54$/Month",
            note: "Attire: Black Leotard, Black or Nude  Tights, Black Jazz Shoes",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=57&programs=58",
            name: "Jazzy Jazzers",
        },
        {
            id: "hiphop",
            title: "Hip Hop",
            description: "Hip Hop Hooray introduces the young dancer to old and new styles of hip hop techniques, creating movements to popular music. Dancers are encouraged to express their personalities in the movements and exhibit confidence and showmanship. Hip Hop Hooray  will learn one routine for the holiday show and one routine for the summer recital.",
            src: hiphophooray,
            alt: "3 Kids Posing in Blue and Black Attire",
            ages: "Ages: 5-8 Years",
            duration: "45 Minutes",
            payment: "54$/Month",
            note: "Attire: Comfortable athletic Clothes (no jeans), Tennis Shoes",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?q=hip%20hop%20hooray",
            name: "Hip Hop Hooray",
        },
        {
            id: "minisampler",
            title: "Mini Sampler BJG",
            description: "BALLET, JAZZ, GYMNASTICS: Can't decide between gymnastics and dance? Now you don't need to. We have the convenience of offering three classes in one! Ballet and Jazz will take place the first half of class in the studio and gymnastics the last half in the Big gym. Levels are based on experience. The gymnastics portion of the class will include vault, bars, beam, floor and rings.",
            src: minisamplerbjg,
            alt: "Kid Photoshoot",
            ages: "Ages: 7 Years & Up",
            duration: "1 Hour",
            payment: "95$/Month",
            note: "Attire: Gymnastics Leotard (color optional), Dance shorts, skirt or leggings (to wear in dance class), Pink Ballet Shoes, Hair pulled out of face.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?levels=57&programs=58",
            name: "Mini Sampler BJG",
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