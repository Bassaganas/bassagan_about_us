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
};

export type TestimonialItem = {
    quote: string;
    author: string;
    role: string;
    company?: string;
};

export const upcomingEventsData: EventItem[] = [
    {
        date: "June 15-16, 2024",
        title: "Test Automation Summit 2024",
        location: "Berlin, Germany",
        description: "Presenting a workshop on 'Advanced Test Automation Patterns in Regulated Environments'",
        link: "https://example.com/event1"
    },
    {
        date: "September 5-7, 2024",
        title: "PharmaTech Conference",
        location: "Barcelona, Spain",
        description: "Panel speaker on 'Quality Assurance in Pharmaceutical Software Development'",
        link: "https://example.com/event2"
    },
    {
        date: "November 12, 2024",
        title: "Women in Tech Meetup",
        location: "Frankfurt, Germany",
        description: "Lightning talk on career progression in IT architecture",
        link: "https://example.com/event3"
    }
];

export const photosData: PhotoItem[] = [
    {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        alt: "Speaking at a tech conference",
        caption: "Presenting at the Quality Assurance Summit 2023"
    },
    {
        src: "https://images.unsplash.com/photo-1565728744382-61accd4aa148",
        alt: "Leading a workshop",
        caption: "Workshop on Test Architecture at company headquarters"
    },
    {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        alt: "Team collaboration",
        caption: "Working with the development team on a critical project"
    },
    {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        alt: "Speaking event",
        caption: "Keynote speech at industry event"
    }
];

export const testimonialsData: TestimonialItem[] = [
    {
        quote: "Paula's expertise in test architecture transformed our approach to quality assurance. Her strategic vision helped us implement robust automated testing that cut our release cycles in half.",
        author: "Maria Rodriguez",
        role: "CTO",
        company: "PharmaTech Solutions"
    },
    {
        quote: "Working with Paula was a game-changer for our team. Her deep knowledge of both pharmaceutical regulations and modern testing approaches helped us navigate complex compliance requirements without sacrificing agility.",
        author: "Thomas Weber",
        role: "Head of Development",
        company: "MedSoft GmbH"
    },
    {
        quote: "Paula's workshops on test automation transformed how our QA team approaches testing. Her ability to explain complex concepts in accessible ways made the training incredibly effective.",
        author: "Sara Johnson",
        role: "QA Manager",
        company: "HealthTech International"
    }
]; 