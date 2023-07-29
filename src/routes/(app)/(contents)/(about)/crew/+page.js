export const load = async ({ locals}) => {
    // TEMP
    //Set page data
    const crew = [
        {
            name: "Ashley Gilblair",
            roles: "Owner, Team Director",
            src: "https://static.wixstatic.com/media/b16c48_ce057bb8f01a4c49bfe6c57b6fabdfb4~mv2_d_3024_4032_s_4_2.jpg/v1/crop/x_504,y_288,w_1906,h_1906/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/UWH2rucgRx%2Bk8FAGDSDQcA.jpg",
            initials: "AG",
        },
        {
            name: "Ryan Gilblair",
            roles: "Owner, Team Coach",
            src: "https://static.wixstatic.com/media/b16c48_c7d2480121b342a890a0e8850152e575~mv2.jpg/v1/crop/x_0,y_92,w_404,h_404/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_2578_edited.jpg",
            initials: "RG",
        },
        {
            name: "Brian Blacketer",
            roles: "Gymnastics, Ninja & Team Coach",
            src: "https://static.wixstatic.com/media/b16c48_4a577857983940609ab2af2bc79d844e~mv2.jpeg/v1/crop/x_0,y_324,w_1944,h_1944/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91F78AE4-A48C-47B1-9F6F-F460EE66A0C8.jpeg",
            initials: "BB",
        },
        {
            name: "Ryan Cancino",
            roles: "Gymnastics Coach",
            src: "https://static.wixstatic.com/media/b16c48_8d48b74ed0d74a22bb32efef141ad984~mv2.png/v1/crop/x_0,y_504,w_3024,h_3024/fill/w_129,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FA9C4CF9-4B6B-4892-8AD0-86B08C79C011_heic.png",
            initials: "RC",
        },
        {
            name: "Shauna Flach",
            roles: "Owner, Team Director",
            src: "",
            initials: "SF",
        },
        {
            name: "Kindra Fleisher",
            roles: "Manager, Dance Director",
            src: "https://static.wixstatic.com/media/b16c48_1571f241a1c94b4eb4df964ba06c4018~mv2.jpeg/v1/crop/x_504,y_0,w_3024,h_3024/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/D98362AA-3981-4B1B-870D-E77DC088D978_1_201_a.jpeg",
            initials: "KF",
        },
        {
            name: "Natasha Anderson",
            roles: "Gymnastics & Team Coach",
            src: "https://static.wixstatic.com/media/b16c48_49de933fd42e410591fa2df050229131~mv2.jpeg/v1/crop/x_0,y_656,w_1312,h_1303/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/656B8322-B3CD-471C-A016-8E12AA3BDBA3.jpeg",
            initials: "NA",
        },
        {
            name: "Carlos Gonzalez",
            roles: "Gymnastics, Cheer & Ninja Coach",
            src: "https://static.wixstatic.com/media/b16c48_d0118d5129a0410aa804dc7dcd16e90d~mv2.png/v1/crop/x_0,y_512,w_3024,h_3008/fill/w_129,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9515D009-FDAD-4CE3-B224-D42179B34FA1_heic.png",
            initials: "CG",
        },
        {
            name: "Melissa Gonzalez",
            roles: "Gymnastics Coach",
            src: "",
            initials: "MG",
        },
        {
            name: "Sammy Graves",
            roles: "Birthday Party Reception",
            src: "",
            initials: "SG",
        },
        {
            name: "Sylvana Hernandez",
            roles: "Event & Camp Coach",
            src: "",
            initials: "SH",
        },
        {
            name: "Tiara James",
            roles: "Dance Instructor",
            src: "https://static.wixstatic.com/media/b16c48_826f635e77d44938a70eaf29628a6ab3~mv2.jpg/v1/crop/x_102,y_0,w_404,h_402/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Tiara.jpg",
            initials: "TJ",
        },
        {
            name: "Ariana Landivar",
            roles: "Event & Camp Coach",
            src: "https://static.wixstatic.com/media/b16c48_e5f300cc8fef4b63ba751b0ffdf72339~mv2.jpg/v1/crop/x_0,y_25,w_464,h_462/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5084_JPG.jpg",
            initials: "AL",
        },
        {
            name: "Kelcie Landivar",
            roles: "Event & Camp Coach",
            src: "",
            initials: "KL",
        },
        {
            name: "Cat Lyons",
            roles: "Gymnastics Coach",
            src: "https://static.wixstatic.com/media/b16c48_24525c2d914c4fa2ae9a9d6ebf5ea80f~mv2.jpeg/v1/crop/x_0,y_49,w_386,h_384/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/05757E34-6B0A-4809-8212-C4DCB2F3D56C.jpeg",
            initials: "CL",
        },
        {
            name: "Jade Mendoza",
            roles: "Event & Camp Coach",
            src: "",
            initials: "JM",
        },
        {
            name: "Megan Mollica",
            roles: "Event & Camp Coach",
            src: "https://static.wixstatic.com/media/b16c48_99b2fa126f324904a40bef2cdf02b51a~mv2.jpg/v1/crop/x_0,y_93,w_150,h_149/fill/w_129,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4284_JPG.jpg",
        },
        {
            name: "Meryn Nelson",
            roles: "Event & Camp Coach",
            src: "",
            initials: "MN",
        },
        {
            name: "Mia Nelson",
            roles: "Event & Camp Coach",
            src: "",
            initials: "MN",
        },
        {
            name: "Audi Oropez",
            roles: "Gymnastics Coach",
            src: "https://static.wixstatic.com/media/b16c48_99ded2f20f5a406eaed4c0527aa30d9d~mv2.png/v1/crop/x_836,y_0,w_1671,h_1661/fill/w_129,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/553458BC-A4A2-4E9E-A827-F24553DD5BED_heic.png",
            initials: "AO",
        },
        {
            name: "Kate Sanchez",
            roles: "Event & Camp Coach",
            src: "",
            initials: "KS",
        },
        {
            name: "Steven Sicard",
            roles: "Gymnastics & Ninja Coach",
            src: "https://static.wixstatic.com/media/b16c48_b6bd368af89146e1aea10152dba69a79~mv2.png/v1/crop/x_0,y_515,w_3024,h_3002/fill/w_129,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0D5E2DE3-C946-48B1-B921-BA508BFAA08C_heic.png",
            initials: "SS",
        },
        {
            name: "Ian Sprowls",
            roles: "Event & Camp Coach",
            src: "",
            initials: "IS",
        },
        {
            name: "Palvi Vagal",
            roles: "Event & Camp Coach",
            src: "https://static.wixstatic.com/media/b16c48_99ded2f20f5a406eaed4c0527aa30d9d~mv2.png/v1/crop/x_2008,y_647,w_1080,h_1058/fill/w_129,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/553458BC-A4A2-4E9E-A827-F24553DD5BED_heic.png",
            initials: "PV",
        },
        {
            name: "Blanca Zaragoza",
            roles: "Receptionist",
            src: "https://static.wixstatic.com/media/b16c48_f0c84e4d99e74df1a143e74aa7cdcce7~mv2.png/v1/crop/x_0,y_532,w_3024,h_2968/fill/w_129,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/E406AE66-4CD2-4FD2-BA6B-C1CE989A74B9_heic.png",
            initials: "BZ",
        },
        // {
        //     name: "",
        //     roles: "",
        //     src: "",
        // },
    ]

    return {
        crew
    }
}