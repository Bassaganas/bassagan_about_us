export type TimelineItem = {
    date: string;
    title: string;
    description: string;
    tags?: string[];
    link?: {
        url: string;
        label: string;
    };
};

export const experienceData: TimelineItem[] = [
    {
        date: "2020 - Present",
        title: "IT Architect - Pharmaceutical Field",
        description: "Led test automation initiatives and implemented quality frameworks for critical systems in the pharmaceutical industry.",
        tags: ["Test Automation", "QA Architecture", "Pharmaceutical", "Regulatory Compliance"]
    },
    {
        date: "2016 - 2020",
        title: "Senior Test Engineer",
        description: "Designed and implemented automated testing solutions for complex software systems. Mentored junior team members and coordinated testing activities.",
        tags: ["Test Automation", "Mentoring", "CI/CD", "Test Strategy"]
    },
    {
        date: "2012 - 2016",
        title: "Test Engineer",
        description: "Developed and executed test cases for software applications. Collaborated with development teams to ensure quality standards.",
        tags: ["Software Testing", "Quality Assurance", "Test Case Design"]
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
        }
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
        }
    }
]; 