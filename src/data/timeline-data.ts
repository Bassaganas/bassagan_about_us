export type TimelineItem = {
    date: string;
    title: string;
    description: string;
    tags?: string[];
    link?: {
        url: string;
        label: string;
    };
    testimonial?: {
        quote: string;
        author: string;
        role: string;
        company?: string;
    };
    photo?: string;
};

export const experienceData: TimelineItem[] = [
    {
        date: "2020 - Present",
        title: "IT Architect - Pharmaceutical Field",
        description: "Led test automation initiatives and implemented quality frameworks for critical systems in the pharmaceutical industry.",
        tags: ["Test Automation", "QA Architecture", "Pharmaceutical", "Regulatory Compliance"],
        testimonial: {
            quote: "Paula's expertise in test architecture transformed our approach to quality assurance. Her strategic vision helped us implement robust automated testing that cut our release cycles in half.",
            author: "Thomas Weber",
            role: "Head of Development",
            company: "Boehringer Ingelheim"
        },
        photo: "/images/pharma-tech.jpg"
    },
    {
        date: "2016 - 2020",
        title: "Senior Test Engineer",
        description: "Designed and implemented automated testing solutions for complex software systems. Mentored junior team members and coordinated testing activities.",
        tags: ["Test Automation", "Mentoring", "CI/CD", "Test Strategy"],
        testimonial: {
            quote: "Working with Paula was a game-changer for our team. Her deep knowledge of both pharmaceutical regulations and modern testing approaches helped us navigate complex compliance requirements without sacrificing agility.",
            author: "Maria Rodriguez",
            role: "QA Director",
            company: "Roche"
        },
        photo: "/images/test-automation.jpg"
    },
    {
        date: "2012 - 2016",
        title: "Test Engineer",
        description: "Developed and executed test cases for software applications. Collaborated with development teams to ensure quality standards.",
        tags: ["Software Testing", "Quality Assurance", "Test Case Design"],
        testimonial: {
            quote: "Paula showed exceptional talent and dedication during her time at the university. Her analytical mindset and technical aptitude set her apart, predicting her successful career in IT architecture.",
            author: "Dr. Carlos Martinez",
            role: "Professor",
            company: "Universitat Pompeu Fabra"
        }
    }
];

export const conferencesData: TimelineItem[] = [
    {
        date: "October 2023",
        title: "Test Automation Summit 2023",
        description: "Presented a talk on 'Implementing Robust Test Automation in Regulated Industries' sharing best practices and strategies.",
        tags: ["Speaker", "Test Automation", "Regulated Industries"],
        link: {
            url: "#",
            label: "View Presentation"
        },
        testimonial: {
            quote: "Paula's workshop was a highlight of our conference. Attendees rated it as the most valuable session, with practical insights they could immediately apply in their organizations.",
            author: "Sarah Johnson",
            role: "Conference Organizer",
            company: "Test Automation Summit"
        },
        photo: "/images/conference-speaking.jpg"
    },
    {
        date: "May 2023",
        title: "QA & Test Conference",
        description: "Participated in panel discussion about the future of test automation and AI-driven testing approaches.",
        tags: ["Panelist", "AI in Testing", "Future Trends"]
    },
    {
        date: "September 2022",
        title: "Pharma Tech Conference",
        description: "Delivered workshop on 'Test Strategies for Pharmaceutical Software Systems' focusing on compliance and validation.",
        tags: ["Workshop", "Pharmaceutical", "Validation"],
        link: {
            url: "#",
            label: "Workshop Materials"
        },
        testimonial: {
            quote: "Paula's workshop transformed how our team approaches compliance testing. Her methodologies were innovative yet practical, demonstrating exceptional expertise in the pharmaceutical sector.",
            author: "Michael Chen",
            role: "Head of Quality",
            company: "PharmaTech Solutions"
        }
    }
]; 