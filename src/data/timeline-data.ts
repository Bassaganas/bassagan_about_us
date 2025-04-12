export type TimelineItem = {
    date: string;
    title: string;
    description: string;
    type: 'experience' | 'speaking';
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

export const timelineData: TimelineItem[] = [
    // Upcoming speaking engagements
    {
        date: "June 2025",
        title: "EuroSTAR 2025",
        description: "Speaking at EuroSTAR 2025 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Testing"],
        photo: "/images/eurostar_2025.png"
    },
    {
        date: "November 2025",
        title: "AutomationSTAR 2025",
        description: "Speaking at AutomationSTAR 2025 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Automation"],
        photo: "/images/automation-star-2025.jpg"
    },
    // Current experience
    {
        date: "July 2022 - Present",
        title: "IT Architect - Boehringer Ingelheim",
        description: "IT Architect at Testing Platform Services. Leading test automation initiatives and implementing quality frameworks for critical systems in the pharmaceutical industry.",
        type: 'experience',
        tags: ["Test Automation", "QA Architecture", "Pharmaceutical", "Regulatory Compliance", "Presentations", "Technical Architecture", "Databases", "Implementation Experience"],
        testimonial: {
            quote: "You have been incredible in supporting the team by delivering the testing strategy, concept, and implementation in data foundation. From day one, you were committed and engaged, providing fast, professional, and accurate support that tremendously ramped up the testing capabilities on the platform.",
            author: "Anonymous from Boehringer Ingelheim",
            role: "N/A",
            company: "Boehringer Ingelheim"
        },
        photo: "/images/boehringer_ingelheim.png"
    },
    // Past speaking engagements
    {
        date: "October 2024",
        title: "AutomationSTAR 2025",
        description: "Speaking at AutomationSTAR 2025 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Automation"],
        photo: "/images/automationstar_2024.png"
    },
    {
        date: "November 2024",
        title: "BCN PyDay 2024",
        description: "Speaking at BCN PyDay 2024 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Automation"],
        photo: "/images/bcn_pydays_2024.png"
    },
    // Past experience
    {
        date: "August 2021 - July 2022",
        title: "Senior Backend Developer - Boehringer Ingelheim",
        description: "Developed applications for pharmacometrics department and migrated legacy applications to microservice architecture. Worked with C#, Java, JavaScript, and deployed to OpenShift using Jenkins and OpenDevStack.",
        type: 'experience',
        tags: ["C#", "Java", "Angular", "React", "Git", "Docker", "PostgreSQL", "Jenkins", "OpenDevStack", "OpenShift", "Jira", "SCRUM", "Cloud Migration", "Implementation Experience", "Databases"],
    },
    {
        date: "September 2021 - 2023",
        title: "University Associate Teacher - Universitat Pompeu Fabra",
        description: "Responsible Teacher for Introduction to Programming course, teaching Python to 90 students. Also teaching Information Retrieval and Web Analytics, and Data Structures and Algorithms.",
        type: 'experience',
        tags: ["Teaching", "Python", "Presentations", "Databases"],
        photo: "/images/upf.png",
        testimonial: {
            quote: "She tries to make different classes, tries to challenge us, makes sure that we understand what is explained. Also is always ready to help us.",
            author: "Anonymous student",
            role: "Introduction to Programming"
        }
    },
    {
        date: "October 2019 - August 2021",
        title: "Backend Developer - SCRM Lidl International Hub",
        description: "Backend Development of a payment system for LidlPlus App based on microservices architecture. Developed microservices in C#, implemented API tests in Python, and worked with Azure services.",
        type: 'experience',
        tags: ["C#", "Python", "Microservices", "Azure", "Terraform", "DevOps", "BDD", "SCRUM", "Implementation Experience", "Distributed Applications"],
        photo: "/images/lidl_pay.png"
    },
    {
        date: "January 2018 - October 2018",
        title: "Software Engineer in Testing - Roche",
        description: "Developed automated tests for Infinity, a Laboratory Information System. Worked on backend black-box and white-box testing, frontend testing with Selenium, and continuous integration with Jenkins.",
        type: 'experience',
        tags: ["Java", "C#", "SpecFlow", "Cucumber", "Selenium", "Serenity", "Jenkins", "BDD", "SCRUM", "Implementation Experience"],
        photo: "/images/cobas_infinity.png",
        testimonial: {
            quote: "Paula is a passioned and motivated person who is actively collaborating with me in the IVD GPS Domain Community at Roche Diagnostics. She is open-minded and has a deep knowledge in Biomedical Engineering. Besides being a pleasure to work with, Paula is a take-charge person who is able to present creative ideas and communicate effectively to other community participants. Her ability in making inspiring and teaching presentations is just outstanding. It is a joy to work with you.",
            author: "Josep Martinez Gomar",
            role: "IVD GPS Domain Community Member",
            company: "Roche Diagnostics"
        }
    },
    {
        date: "January 2016 - January 2018",
        title: "Test Analyst - Roche Diagnostics",
        description: "Validation engineer in a Laboratory Information System. Performed risk assessment, wrote test cases, collaborated on story definitions, and executed system tests in an agile environment.",
        type: 'experience',
        tags: ["Test Analysis", "Requirements Analysis", "Test Planning", "Agile Testing", "SCRUM", "Implementation Experience"],
        photo: "/images/cobas_liat.png",
        testimonial: {
            quote: "Paula is very bright and capable, always having creative ideas, and never hesitating to share them. She has great communication skills and motivation to use them at every chance she has. I would be delighted to have the opportunity to work with her again.",
            author: "Cristian Torras",
            role: "Senior Software Architect",
            company: "Roche Diagnostics"
        },
    },
    {
        date: "August 2015 - September 2015",
        title: "Test Analyst Assistant - Roche Swisslab GmbH",
        description: "Erasmus traineeship in Berlin. Performed functional analysis, test case specification, and system testing for Roche Swisslab.",
        type: 'experience',
        tags: ["Test Analysis", "Requirements Analysis", "Test Planning", "Agile Testing", "SCRUM"],

    },
    {
        date: "December 2014 - June 2015",
        title: "Internship - Roche Diagnostics",
        description: "Worked on the cobas 711/511 project related to coagulation analysis. Part of a software development team following scrum methodology. Performed exploratory testing, error reporting, and test case writing.",
        type: 'experience',
        tags: ["Exploratory Testing", "Test Case Writing", "Scrum", "HP-ALM"],
        photo: "/images/cobas_711_511.png"
    }
]; 