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
        date: "May 11-13, 2026",
        title: "WeTest Athenes",
        location: "Athens, Greece",
        description: "Testus Patronus: No Magic, just AI with your company context",
        link: "https://www.wetest-athens.gr/"
    },
    {
        date: "June 14-18, 2026",
        title: "EuroSTAR",
        location: "Oslo, Norway",
        description: "One Agent to Watch Them All: Building an AI Test Monitor",
        link: "https://conference.eurostarsoftwaretesting.com/event/2026/one-agent-to-watch-them-all-building-an-ai-test-monitor/"
    },

    {
        date: "TBD, 2026",
        title: "BCN PyDay",
        location: "Barcelona",
        description: "Testus Patronus: No Magic, just AI with your company context",
        link: "https://pybcn.org/events/pyday_bcn/pyday_bcn_2024/#content_section"
    }
];

export const photosData: PhotoItem[] = [
    // Reorganized to show variety in each set of 8 photos
    // Set 1: Mix of conferences, professional, work, and equipment
    {
        src: "/images/eurostar_2025.png",
        alt: "EuroSTAR 2025",
        caption: "EuroSTAR 2025"
    },
    {
        src: "/images/Paula_Bassaganas_Odena.png",
        alt: "Paula Bassagañas Òdena",
        caption: "Paula Bassagañas Òdena"
    },
    {
        src: "/images/IMG_1067.jpg",
        alt: "AI Hackathon at Boehringer Ingelheim",
        caption: "Designing AI solutions for Testing"
    },
    {
        src: "/images/cobas_liat.png",
        alt: "Cobas Liat: a PCR at point of care",
        caption: "Cobas Liat: Testing a PCR at point of care"
    },
    {
        src: "/images/automationstar_2025.jpg",
        alt: "AutomationSTAR 2025",
        caption: "AutomationSTAR 2025"
    },
    {
        src: "/images/IMG_20170419_113705.jpg",
        alt: "Installing Cobas Infinity in Huelva",
        caption: "Installing Cobas Infinity in Huelva"
    },
    {
        src: "/images/upf_quadrat.png",
        alt: "Teaching at UPF",
        caption: "Teaching at UPF"
    },
    {
        src: "/images/bcn_pydays_2024.png",
        alt: "BCN PyDays 2024",
        caption: "BCN PyDays 2024 - Barcelona",
        link: {
            url: "https://pybcn.org/events/pyday_bcn/pyday_bcn_2024/#content_section",
            label: "View Conference Materials"
        }
    },
    // Set 2: Mix of conferences, work, equipment, and professional
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
        src: "/images/IMG_1083.jpg",
        alt: "Work at Boehringer Ingelheim",
        caption: "Work at Boehringer Ingelheim"
    },
    {
        src: "/images/boehringer_ingelheim.png",
        alt: "Boehringer Ingelheim",
        caption: "Boehringer Ingelheim"
    },
    {
        src: "/images/atd_2025.JPG",
        alt: "Agile Testing Days 2025",
        caption: "Agile Testing Days 2025"
    },
    {
        src: "/images/20181220_191858.jpg",
        alt: "Work at Roche",
        caption: "Work at Roche"
    },
    {
        src: "/images/cobas_infinity.png",
        alt: "Cobas Infinity",
        caption: "Cobas Infinity"
    },
    {
        src: "/images/automationstar_2025_1.jpeg",
        alt: "AutomationSTAR 2025",
        caption: "AutomationSTAR 2025"
    },
    {
        src: "/images/Paula_Bassaganas_Odena_old.JPG",
        alt: "Paula Bassagañas Òdena",
        caption: "Paula Bassagañas Òdena"
    },
    // Set 3: Remaining photos
    {
        src: "/images/automationstar_2025_2.jpeg",
        alt: "AutomationSTAR 2025",
        caption: "AutomationSTAR 2025"
    },
    {
        src: "/images/IMG-20161021-WA0005.jpeg",
        alt: "Work at Roche",
        caption: "Work at Roche"
    },
    {
        src: "/images/upf.png",
        alt: "Universitat Pompeu Fabra",
        caption: "Universitat Pompeu Fabra"
    },
    {
        src: "/images/atd_2025_122.jpeg",
        alt: "Agile Testing Days 2025",
        caption: "Agile Testing Days 2025"
    },
    {
        src: "/images/cobas_infinity_1.png",
        alt: "Cobas Infinity",
        caption: "Cobas Infinity"
    },
    {
        src: "/images/automationstar_2024.png",
        alt: "AutomationSTAR 2024",
        caption: "AutomationSTAR 2024"
    },
    {
        src: "/images/cobas_711_511.png",
        alt: "Cobas 711/511",
        caption: "Cobas 711/511"
    },
    {
        src: "/images/lidl_pay.png",
        alt: "Lidl Pay",
        caption: "Lidl Pay"
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