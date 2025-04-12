export type EventItem = {
    date: string;
    title: string;
    location: string;
    description: string;
    link?: string;
};

export type PhotoItem = {
    src: string;
    alt: string;
    caption: string;
    link?: {
        url: string;
        label: string;
    };
};

export type TestimonialItem = {
    quote: string;
    author: string;
    role: string;
    company?: string;
};

export const upcomingEventsData: EventItem[] = [
    {
        date: "June 03-06, 2025",
        title: "EuroSTAR",
        location: "Edinburgh, UK",
        description: "Testus Patronus: No Magic, just AI with your company context.",
        link: "https://conference.eurostarsoftwaretesting.com/"
    },
    {
        date: "November 10-11, 2025",
        title: "AutomationSTAR",
        location: "Amsterdam",
        description: "Testus Patronus: No Magic, just AI with your company context",
        link: "https://automation.eurostarsoftwaretesting.com/"
    },
    {
        date: "TBD, 2025",
        title: "BCN PyDay",
        location: "Barcelona",
        description: "Testus Patronus: No Magic, just AI with your company context",
        link: "https://pybcn.org/events/pyday_bcn/pyday_bcn_2024/#content_section"
    }
];

export const photosData: PhotoItem[] = [
    {
        src: "images/eurostar_2025.png",
        alt: "EuroSTAR 2025 panel",
        caption: "EuroSTAR 2025 panel"
    }
    ,
    {
        src: "images/upf_quadrat.png",
        alt: "Teaching at UPF",
        caption: "Teaching at UPF"
    }
    ,
    {
        src: "/images/bcn_pydays_2024.png",
        alt: "BCN PyDays 2024",
        caption: "BCN PyDays 2024 - Barcelona",
        link: {
            url: "https://pybcn.org/events/pyday_bcn/pyday_bcn_2024/#content_section",
            label: "View Conference Materials"
        }
    },
    {

        src: "/images/automationstar_2024_big.jpg",
        alt: "AutomationSTAR 2024 Conference",
        caption: "AutomationSTAR 2024 - Amsterdam",
        link: {
            url: "https://automation.eurostarsoftwaretesting.com/",
            label: "View Conference Details"
        }
    },
    {
        src: "/images/IMG_1067.jpg",
        alt: "AI Hackathon at Boehringer Ingelheim",
        caption: "Designing a AI solutions for Testing "
    },
    {
        src: "/images/IMG_20170419_113705.jpg",
        alt: "Installing Cobas Infinity in Huelva",
        caption: "Installing Cobas Infinity in Huelva"
    },
    {
        src: "images/cobas_liat.png",
        alt: "Cobas Liat: a PCR at point of care",
        caption: "Cobas Liat: Testing a PCR at point of care"
    }
    ,
    {
        src: "images/Paula_Bassaganas_Odena.png",
        alt: "Paula Bassagañas Òdena",
        caption: "Paula Bassagañas Òdena"
    }

];

export const testimonialsData: TestimonialItem[] = [
    {
        quote: "Paula is a passioned and motivated person who is actively collaborating with me in the IVD GPS Domain Community at Roche Diagnostics. She is open-minded and has a deep knowledge in Biomedical Engineering. Besides being a pleasure to work with, Paula is a take-charge person who is able to present creative ideas and communicate effectively to other community participants. Her ability in making inspiring and teaching presentations is just outstanding. It is a joy to work with you.",
        author: "Josep Martinez Gomar",
        role: "IVD GPS Domain Community Member",
        company: "Roche Diagnostics"
    },
    {
        quote: "Thank you for your Tutroial Yesterday, it was awesome",
        author: "Marcus Daratha",
        role: "Test Engineer",
        company: "PROGNOST"
    },
    {
        quote: "She tries to make different classes, tries to challenge us, makes sure that we understand what is explained. Also is always ready to help us.",
        author: "Anonymous student",
        role: "Introduction to Programming",
        company: "Pompeu Fabra University Student"
    },
    {
        quote: "very comfortable teacher to student relation",
        author: "Anonymous student",
        role: "Introduction to Programming",
        company: "Pompeu Fabra University Student"
    },
    {
        quote: "És atenta amb els alumnes, qualsevol dubte ho explica.",
        author: "Anonymous student",
        role: "Object Oriented Programming",
        company: "Pompeu Fabra University Student"
    },
    {
        quote: "Paula is very bright and capable, always having creative ideas, and never hesitating to share them. She has great communication skills and motivation to use them at every chance she has. I would be delighted to have the opportunity to work with her again.",
        author: "Cristian Torras",
        role: "Senior Software Architect",
        company: "Roche Diagnostics"
    },
    {
        quote: "És atenta amb els alumnes, qualsevol dubte ho explica.",
        author: "Anonymous student",
        role: "Object Oriented Programming",
        company: "Pompeu Fabra University Student"
    }
]; 