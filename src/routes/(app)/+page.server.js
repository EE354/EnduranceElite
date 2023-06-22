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
            date: "3/18/2023",
            title: "Parent’s Night Out 1",
            body: "Enjoy a night out and leave the kids with us. We provide pizza, juice, games, free play and a movie. PNO is from 6:00-10:00 pm.",
        },
        {
            id: 2,
            date: "3/18/2023",
            title: "Parent’s Night Out 2",
            body: "Enjoy a night out and leave the kids with us. We provide pizza, juice, games, free play and a movie. PNO is from 6:00-10:00 pm.",
        },
        {
            id: 3,
            date: "3/18/2023",
            title: "Parent’s Night Out 3",
            body: "Enjoy a night out and leave the kids with us. We provide pizza, juice, games, free play and a movie. PNO is from 6:00-10:00 pm.",
        },
        {
            id: 4,
            date: "3/18/2023",
            title: "Parent’s Night Out 4",
            body: "Enjoy a night out and leave the kids with us. We provide pizza, juice, games, free play and a movie. PNO is from 6:00-10:00 pm.",
        },
        {
            id: 5,
            date: "3/18/2023",
            title: "Parent’s Night Out 5",
            body: "Enjoy a night out and leave the kids with us. We provide pizza, juice, games, free play and a movie. PNO is from 6:00-10:00 pm.",
        },
    ]
    const topLinks = [
        {
            image: {
                src: birthdayParties,
                alt: "Track with a Bouncy Castle",
            },
            title: "Gymnastics",
            body: "We offer gymnastics classes to ages 1 year to Adults. From Babynastics to Girl's and Boy's Rec classes and finally to Adult classes, there is something for everyone! As soon as you can walk, we can teach you gymnastics!",
        },
        {
            image: {
                src: adultClasses,
                alt: "Person doing a Handstand",
            },
            title: "Adult Classes",
            body: "Looking to try something new or keep up with your favorite sport? Check out our adult gymnastics and dance classes. No commitment necessary. Drop in for a $12 fee.",
            name: "Adult Classes",
            href: "/gymnastics",
        },
        {
            image: {
                src: samplerClasses,
                alt: "Kid doing a T-pose"
            },
            title: "Sampler Classes",
            body: "Take dance and gymnastics in ONE awesome class! We have Sampler BJG (Ballet, Jazz, Gymnastics) and BTG (Ballet, Tap, Gymnastics). Levels are based on experience. Half of the class is in the dance studio and half is out in the main gym. ",
            href: "/gymnastics",
            name: "See Classes",
        },
        {
            image: {
                src: openGym,
                alt: "Person doing a Flip"
            },
            title: "Open Gym",
            body: "Need extra time in the gym? Or do you just want to play on the equipment. Come to open gym! We offer supervision and a clean safe environment for everyone of all ages to play and enjoy. All ages are welcome!",
            href: "/gymnastics",
            name: "See Schedule",
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
        },
        {
            image: {
                src: dance,
                alt: "Three kids in ballet dresses",
            },
            title: "Adult Classes",
            body: "Dance classes start at age 2 years and go through Adult. If you are a beginner dancer or a professional dancer, there are many classes and times to chose from. Most genres are offered through EE. Why go anywhere else?",
            name: "Adult Classes",
            href: "/gymnastics",
        },
        {
            image: {
                src: cheerLeadingClasses,
                alt: "Kid being held up"
            },
            title: "Sampler Classes",
            body: "We provide cheerleading classes to instruct motions, cheers, stunts, tumbling and dance. We also offer tumbling classes to focus only on floor skills for the up and coming gymnast, dancer or cheerleader.",
            href: "/",
            name: "Sampler Classes",
        },
        {
            image: {
                src: preschoolClasses,
                alt: "Kid jumping on a Trampoline"
            },
            title: "Open Gym",
            body: "Preschool classes are designed for the future gymnasts and dancers to learn the basics and to provide a fun and safe learning environment. Students will learn to interact in a group setting and follow directions.",
            href: "/gymnastics",
            name: "See Schedule",
        },
    ]

    return {
        news,
        topLinks,
        bottomLinks,
    }
}