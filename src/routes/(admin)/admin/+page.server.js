import birthdayParties from "$lib/Landing/birthdayparties.jpg";
import adultClasses from "$lib/Landing/adultclasses.jpg";
import samplerClasses from "$lib/Landing/samplerclasses.jpg";
import openGym from "$lib/Landing/opengym.jpg";
import gymnastics from "$lib/Landing/gymnastics.jpg";
import dance from "$lib/Landing/dance.jpg";
import cheerLeadingClasses from "$lib/Landing/cheerleadingclasses.jpg";
import preschoolClasses from "$lib/Landing/preschoolclasses.jpg";

export const load = async ({ locals}) => {
    //Get user
    const {session, user} = await locals.auth.validateUser();

    //Set page data
    const news = [
        {
            id: 1,
            date: "7/4/2023",
            title: "No Classes!",
            body: "Classes will be cancelled July 4th. We will reopen on Wednesday, July 5th. For those enrolled in Tuesday's classes, you'll receive a makeup token.",
        },
        {
            id: 2,
            date: "7/7/2023",
            title: "Friday Night Flick",
            body: "Friday Night Flick features a different movie each month! The kids get to participate in free play and enjoy popcorn, juice and candy while watching the flick on our large projected screen.",
        },
        {
            id: 3,
            date: "7/11/2023",
            title: "Summer Skill Clinics",
            body: "Starting July 11th, we will have a different skill clinic every Tuesday and Thursday! Work with an experienced, high level coach to focus on specific skills. Clinics are meant for additional practice in these skills whether it’s your first time learning them, or you’re a seasoned athlete needing to brush up on details but already familiar with the skill.",
        },
        {
            id: 4,
            date: "7/22/2023",
            title: "Parent’s Night Out",
            body: "Enjoy a night out and leave the kids with us! We provide, pizza, juice, games, and free play. PNO is from 6:00-10:00 pm.",
        },
        {
            id: 5,
            date: "7/23/2023",
            title: "Team Tryouts",
            body: "Calling all gymnasts!!! We’re hosting tryouts for the start of the Endurance Elite 2023-2024 season. Gymnasts will have the opportunity to work with team coaches on all competitive events. Strength and Flexibility will be tested, as well as listening skills and teamwork. Ages 4-10 years old, $25 per athlete. Register through the parent portal.",
        },
    ]
    const topLinks = [
        {
            image: {
                src: birthdayParties,
                alt: "Track with a Bouncy Castle",
            },
            title: "Birthday Parties",
            body: "Book your party with EE and leave the party planning to us. We've got you covered. We entertain the kids, buy the pizza (and cake too if you'd like), provide the invitations and decorations as well as blow up the bounce house.",
            name: "Read More",
            href: "/gymnastics",
        },
        {
            image: {
                src: adultClasses,
                alt: "Person doing a Handstand",
            },
            title: "Adult Classes",
            body: "Looking to try something new or keep up with your favorite sport? Check out our adult gymnastics and dance classes. No commitment necessary. Drop in for a $12 fee.",
            name: "Read More",
            href: "/adult-classes",
        },
        {
            image: {
                src: samplerClasses,
                alt: "Kid doing a T-pose"
            },
            title: "Sampler Classes",
            body: "Take dance and gymnastics in ONE awesome class! We have Sampler BJG (Ballet, Jazz, Gymnastics) and BTG (Ballet, Tap, Gymnastics). Levels are based on experience. Half of the class is in the dance studio and half is out in the main gym. ",
            name: "See Classes",
            href: "https://app.iclasspro.com/portal/enduranceelite",
        },
        {
            image: {
                src: openGym,
                alt: "Person doing a Flip"
            },
            title: "Open Gym",
            body: "Need extra time in the gym? Or do you just want to play on the equipment. Come to open gym! We offer supervision and a clean safe environment for everyone of all ages to play and enjoy. All ages are welcome!",
            name: "See Schedule",
            href: "/",
        },
    ]
    const bottomLinks = [
        {
            image: {
                src: gymnastics,
                alt: "Person being held up while doing a handstand",
            },
            title: "Gymnastics",
            body: "We offer gymnastics classes to ages 1 year to Adults. From Babynastics to Girl's and Boy's Rec classes and finally to Adult classes, there is something for everyone! As soon as you can walk, we can teach you gymnastics!",
            name: "See More",
            href: "/gymnastics",
        },
        {
            image: {
                src: dance,
                alt: "Three kids in ballet dresses",
            },
            title: "Dance Classes",
            body: "Dance classes start at age 2 years and go through Adult. If you are a beginner dancer or a professional dancer, there are many classes and times to chose from. Most genres are offered through EE. Why go anywhere else?",
            name: "See More",
            href: "/",
        },
        {
            image: {
                src: cheerLeadingClasses,
                alt: "Kid being held up"
            },
            title: "Cheerleading",
            body: "We provide cheerleading classes to instruct motions, cheers, stunts, tumbling and dance. We also offer tumbling classes to focus only on floor skills for the up and coming gymnast, dancer or cheerleader.",
            name: "See More",
            href: "/",
        },
        {
            image: {
                src: preschoolClasses,
                alt: "Kid jumping on a Trampoline"
            },
            title: "Preschool Classes",
            body: "Preschool classes are designed for the future gymnasts and dancers to learn the basics and to provide a fun and safe learning environment. Students will learn to interact in a group setting and follow directions.",
            name: "See More",
            href: "/",
        },
    ]

    return {
        news,
        topLinks,
        bottomLinks,
    }
}