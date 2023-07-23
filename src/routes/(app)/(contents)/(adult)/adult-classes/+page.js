import adultgymnastics from "$lib/Regular/Adult/adultgymnastics.jpg";

export const load = async ({ locals}) => {

    //Set page data
    const cards = [
        {
            id: "adultgymnastics",
            title: "Adult Gymnastics",
            subclass: "",
            description: "Stay in shape or continue your love for gymnastics with Adult Gymnastics. Beginner through Advanced adults are welcome. The curriculum is accustomed to your strengths and weaknesses. Why are you in the class? To learn basics, or to stay accountable for your workouts? We will help you with whatever you need. Our professional and experienced coaches are able to assist with all levels.",
            src: adultgymnastics,
            alt: "Kid Ballet Class",
            ages: "18 Years & Up",
            duration: "1 Hour",
            payment: "$12/Drop-in",
            note: "Attire: Athletic Attire. Bare foot or Tennis shoes. Hair pulled out of face. No jewelry.",
            href: "https://app.iclasspro.com/portal/enduranceelite/classes?ages=18&levels=30",
            name: "Adult Gymnastics",
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