export type EventItem = {
    date: string;
    title: string;
    location: string;
    /** Listed in the hero alongside the cities of past talks. */
    city?: string;
    country?: string;
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
    /** Optional source, for quotes that live in a published piece. */
    link?: {
        url: string;
        label: string;
    };
};

export const upcomingEventsData: EventItem[] = [
    {
        date: "October 6-8, 2026",
        title: "HUSTEF 2026",
        location: "Budapest, Hungary",
        city: "Budapest",
        country: "Hungary",
        description: "One Agent to Watch Them All: Building an AI Test Monitor. A full-day, hands-on tutorial framed in a Lord of the Rings narrative.",
        link: "https://hustef.com/paula-bassaganas_2026/"
    },
    {
        date: "October 27-28, 2026",
        title: "VLC Testing 2026",
        location: "Valencia, Spain",
        city: "Valencia",
        country: "Spain",
        description: "Testus Patronus: No es magia, es IA con contexto. Main stage, day one of Spain's largest software testing festival.",
        link: "https://www.vlctesting.es/programa"
    },
    {
        date: "November 4-5, 2026",
        title: "AutomationSTAR 2026",
        location: "Antwerp, Belgium",
        city: "Antwerp",
        country: "Belgium",
        description: "One Agent to Watch Them All. Tutorial B on the morning of 4 November.",
        link: "https://automation.eurostarsoftwaretesting.com/conference/2026/programme/"
    }
];

export const photosData: PhotoItem[] = [
    // Reorganized to show variety in each set of 8 photos
    // Set 1: Mix of conferences, professional, work, and equipment
    {
        src: "/images/2026_weTestAthens_3.jpg",
        alt: "A full room at WeTest.Athens 2026",
        caption: "A full room at WeTest.Athens 2026",
        link: {
            url: "https://www.wetest-athens.gr/",
            label: "View Conference Details"
        }
    },
    {
        src: "/images/2026_weTestAthens_1.jpg",
        alt: "Paula Bassagañas speaking at WeTest.Athens 2026",
        caption: "Testus Patronus at WeTest.Athens 2026"
    },
    {
        src: "/images/eurostar_2025.webp",
        alt: "EuroSTAR 2025",
        caption: "EuroSTAR 2025"
    },
    {
        src: "/images/Paula_Bassaganas_Odena.webp",
        alt: "Paula Bassagañas Òdena",
        caption: "Paula Bassagañas Òdena"
    },
    {
        src: "/images/IMG_1067.webp",
        alt: "AI Hackathon at Boehringer Ingelheim",
        caption: "Designing AI solutions for Testing"
    },
    {
        src: "/images/cobas_liat.webp",
        alt: "Cobas Liat: a PCR at point of care",
        caption: "Cobas Liat: Testing a PCR at point of care"
    },
    {
        src: "/images/automationstar_2025.webp",
        alt: "AutomationSTAR 2025",
        caption: "AutomationSTAR 2025"
    },
    {
        src: "/images/IMG_20170419_113705.webp",
        alt: "Installing Cobas Infinity in Huelva",
        caption: "Installing Cobas Infinity in Huelva"
    },
    {
        src: "/images/upf_quadrat.webp",
        alt: "Teaching at UPF",
        caption: "Teaching at UPF"
    },
    {
        src: "/images/bcn_pydays_2024.webp",
        alt: "BCN PyDays 2024",
        caption: "BCN PyDays 2024 - Barcelona",
        link: {
            url: "https://pybcn.org/events/pyday_bcn/pyday_bcn_2024/#content_section",
            label: "View Conference Materials"
        }
    },
    // Set 2: Mix of conferences, work, equipment, and professional
    {
        src: "/images/automationstar_2024_big.webp",
        alt: "AutomationSTAR 2024 Conference",
        caption: "AutomationSTAR 2024 - Vienna",
        link: {
            url: "https://automation.eurostarsoftwaretesting.com/",
            label: "View Conference Details"
        }
    },
    {
        src: "/images/IMG_1083.webp",
        alt: "Work at Boehringer Ingelheim",
        caption: "Work at Boehringer Ingelheim"
    },
    {
        src: "/images/boehringer_ingelheim.webp",
        alt: "Boehringer Ingelheim",
        caption: "Boehringer Ingelheim"
    },
    {
        src: "/images/atd_2025.webp",
        alt: "Agile Testing Days 2025",
        caption: "Agile Testing Days 2025"
    },
    {
        src: "/images/20181220_191858.webp",
        alt: "Work at Roche",
        caption: "Work at Roche"
    },
    {
        src: "/images/cobas_infinity.webp",
        alt: "Cobas Infinity",
        caption: "Cobas Infinity"
    },
    {
        src: "/images/automationstar_2025_1.webp",
        alt: "AutomationSTAR 2025",
        caption: "AutomationSTAR 2025"
    },
    {
        src: "/images/Paula_Bassaganas_Odena_old.webp",
        alt: "Paula Bassagañas Òdena",
        caption: "Paula Bassagañas Òdena"
    },
    // Set 3: Remaining photos
    {
        src: "/images/automationstar_2025_2.webp",
        alt: "AutomationSTAR 2025",
        caption: "AutomationSTAR 2025"
    },
    {
        src: "/images/IMG-20161021-WA0005.webp",
        alt: "Work at Roche",
        caption: "Work at Roche"
    },
    {
        src: "/images/upf.webp",
        alt: "Universitat Pompeu Fabra",
        caption: "Universitat Pompeu Fabra"
    },
    {
        src: "/images/atd_2025_122.webp",
        alt: "Agile Testing Days 2025",
        caption: "Agile Testing Days 2025"
    },
    {
        src: "/images/cobas_infinity_1.webp",
        alt: "Cobas Infinity",
        caption: "Cobas Infinity"
    },
    {
        src: "/images/automationstar_2024.webp",
        alt: "AutomationSTAR 2024",
        caption: "AutomationSTAR 2024"
    },
    {
        src: "/images/cobas_711_511.webp",
        alt: "Cobas 711/511",
        caption: "Cobas 711/511"
    },
    {
        src: "/images/lidl_pay.webp",
        alt: "Lidl Pay",
        caption: "Lidl Pay"
    }
];

export const testimonialsData: TestimonialItem[] = [
    // Public posts from conference speakers and attendees
    {
        quote: "A huge thank you to all the amazing speakers for sharing their expertise. I have to give a special shout-out to Paula Bassagañas Òdena. Your tutorial was outstanding and a personal highlight of the conference!",
        author: "Leonid Klimenko",
        role: "SDET",
        company: "TeamViewer"
    },
    {
        quote: "I want to add a special thank you to Paula Bassagañas Òdena for a great and so well prepared tutorial on building our own RAG.",
        author: "Oleksandra Kalmykova",
        role: "Staff Software Engineer, Test",
        company: "FDJ United"
    },
    {
        quote: "Paula Bassagañas Òdena's tutorial, One Agent to Rule Them All, proved that The Lord of the Rings makes perfect sense if you view it as a massive, poorly managed, traumatizing IT project.",
        author: "Sergiusz Golec",
        role: "Wrote an article built on the tutorial",
        link: {
            url: "https://www.linkedin.com/pulse/you-building-safety-net-saurons-tower-dark-reality-agentic-golec-rbqkf/",
            label: "Read the article"
        }
    },
    {
        quote: "Attending a tutorial by Paula Bassagañas Òdena is a no-regret move! Her knowledge combined with her enthusiasm and storytelling capabilities makes every tutorial a true joy filled with practical learnings you can start applying immediately!",
        author: "Sonja Nešić",
        role: "Staff Engineer",
        company: "bol"
    },
    {
        quote: "Full house at Paula's master class! An interesting perspective on how to create a RAG in order to help testers cope with the huge amount of information.",
        author: "Almudena Vivanco",
        role: "Principal Performance Engineer",
        company: "SCRM Lidl International Hub"
    },
    // Anonymous delegate feedback collected by conference organisers
    // (full transcripts live in src/data/conference-feedback.ts)
    {
        quote: "Best tutorial this year! Great opening energy, and you adapted to the room perfectly. I'm definitely leveraging your Sauron Tower analogy to explain AI.",
        author: "Conference delegate",
        role: "Tutorial feedback",
        company: "EuroSTAR 2026"
    },
    {
        quote: "I love the Lord of the Rings theme, it made the topic memorable. All the materials were also so well organized and easy to follow, considering the complexity of the subject.",
        author: "Conference delegate",
        role: "Tutorial feedback",
        company: "EuroSTAR 2026"
    },
    {
        quote: "Paula gave us a lot of useful and structured information. A real take away workshop.",
        author: "Conference delegate",
        role: "Tutorial feedback",
        company: "EuroSTAR 2026"
    },
    {
        quote: "The session was fantastic! The presentation was top-notch, clearly structured, and engaging. The hands-on portion was incredibly well-prepared, allowing us to apply what we learned effectively. Overall, it was a valuable learning experience.",
        author: "Conference delegate",
        role: "Tutorial feedback",
        company: "AutomationSTAR 2024"
    },
    {
        quote: "I think Paula really has a good energy as a speaker and that made me feel the passion she has for the topic. She was quick to think on her feet when things didn't work, so we could continue with the tutorial. She brought the topic, unknown to me, in the best possible way.",
        author: "Conference delegate",
        role: "Tutorial feedback",
        company: "AutomationSTAR 2024"
    },
    {
        quote: "I enjoyed your tutorial so much. I appreciate the simple and clear way you explained things, the practical character of lecturing resulting in much more information gained. Thank you, I enjoyed you so much and love HP too.",
        author: "Conference delegate",
        role: "Tutorial feedback",
        company: "AutomationSTAR 2025"
    },
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