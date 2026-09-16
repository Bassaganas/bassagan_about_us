export type TimelineItem = {
    date: string;
    title: string;
    description: string;
    type: 'experience' | 'speaking';
    /** Experience entries: the job title, shown as the card heading. Falls back to `title`. */
    role?: string;
    /** Experience entries: the organisation, shown under the heading. */
    company?: string;
    /** Speaking entries: the session title, shown under the conference name. */
    talk?: string;
    /** Speaking entries: the city and country, listed in the hero and counted as reach. */
    city?: string;
    country?: string;
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
    photo?: string; // Single photo (for backward compatibility)
    photos?: string[]; // Multiple photos (takes precedence over photo if both are present)
    feedback?: {
        award?: {
            category: string;
            title: string;
            averageRating: number;
            respondents: number;
            rank?: string; // e.g., "2nd"
            maxRating?: number; // Maximum rating scale (default: 5)
        };
        quote?: string; // A standout quote from the feedback
    };
};

export const timelineData: TimelineItem[] = [
    // Past speaking engagements, 2026
    {
        date: "June 2026",
        title: "EuroSTAR 2026",
        city: "Oslo",
        country: "Norway",
        talk: "One Agent to Watch Them All: Building an AI Test Monitor",
        description: "Opening tutorial of the conference in Oslo: building an autonomous agent with Model Context Protocols that watches CI/CD pipelines, reads build outcomes and failing commits, and surfaces root causes on its own.",
        type: 'speaking',
        tags: ["Conference", "Tutorial", "AI Agents", "MCP", "CI/CD"],
        link: {
            url: "https://conference.eurostarsoftwaretesting.com/event/2026/one-agent-to-watch-them-all-building-an-ai-test-monitor/",
            label: "View Conference Details"
        },
        feedback: {
            award: {
                category: "Excellent",
                title: "Tut A - One Agent to Watch Them All: Building an AI Test Monitor",
                averageRating: 8.24,
                respondents: 41,
                maxRating: 10
            },
            quote: "Best tutorial this year! Great opening energy, and you adapted to the room perfectly. I'm definitely leveraging your Sauron Tower analogy to explain AI."
        },
        testimonial: {
            quote: "Kicking off EuroSTAR 2026 with a bang with Paula Bassagañas Òdena. One agent to rule them all. A great take on how powerful agents can be in pipelines and really well explained using concepts from Lord of the Rings.",
            author: "Megan Ozanne",
            role: "QA Manager & International speaker"
        }
    },
    {
        date: "May 2026",
        title: "WeTest.Athens 2026",
        city: "Athens",
        country: "Greece",
        talk: "Testus Patronus: No Magic, Just AI with Your Company Context",
        description: "Half-day workshop on building a RAG assistant that understands your own product context and documentation, delivered to a packed room of more than 130 attendees.",
        type: 'speaking',
        tags: ["Conference", "Workshop", "Generative AI", "RAG"],
        photos: [
            "/images/2026_weTestAthens_1.jpg",
            "/images/2026_weTestAthens_2.jpg",
            "/images/2026_weTestAthens_3.jpg"
        ],
        link: {
            url: "https://www.wetest-athens.gr/",
            label: "View Conference Details"
        },
        feedback: {
            quote: "A packed room, lots of discussions, and huge interest around AI. From practical AI applications in testing to the importance of using company-specific context effectively, Paula guided attendees through real-world approaches that move beyond hype and into actionable solutions."
        },
        testimonial: {
            quote: "Special thanks to Paula Bassagañas Òdena for all the insights and the really cool idea discussions. Amazing workshop and great job overall.",
            author: "George Vatalis",
            role: "QA Lead Architect"
        }
    },
    // Earlier speaking engagements
    {
        date: "June 2025",
        title: "EuroSTAR 2025",
        city: "Edinburgh",
        country: "United Kingdom",
        description: "Speaking at EuroSTAR 2025 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Testing"],
        photo: "/images/eurostar_2025.webp",
        link: {
            url: "https://conference.eurostarsoftwaretesting.com/event/2025/testus-patronus-no-magic-just-ai-with-your-company-context/",
            label: "View Conference Details"
        },
        feedback: {
            award: {
                category: "Tutorial",
                title: "Tutorial G - Testus Patronus: No Magic, Just AI with Your Company Context",
                averageRating: 9.00,
                respondents: 36,
                rank: "2nd",
                maxRating: 10
            },
            quote: "It was a pleasure to learn how to create a RAG. Paula did an excellent job with preparation, set and actual presentation. Fantastic documentation and step by step support was provided for everyone. It was an intensive and enlightening experience!"
        }
    },
    {
        date: "November 2025",
        title: "AutomationSTAR 2025",
        city: "Amsterdam",
        country: "Netherlands",
        description: "Speaking at AutomationSTAR 2025 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Automation"],
        photos: [
            "/images/automationstar_2025.webp",
            "/images/automationstar_2025_1.webp",
            "/images/automationstar_2025_2.webp"
        ],
        link: {
            url: "https://automation.eurostarsoftwaretesting.com/event/2025/testus-patronus-no-magic-just-ai-with-your-company-context/",
            label: "View Conference Details"
        },
        feedback: {
            award: {
                category: "Best Tutorial Award",
                title: "Tut D - Testus Patronus: No Magic, Just AI with Your Company Context",
                averageRating: 4.70,
                respondents: 33
            },
            quote: "Best tutorial ever! I had knowledge on the topic and didn't feel like it would be too interesting to attend yet another lecture on the matter, but I was completely wrong. I'm so happy I attended this talk."
        },
        testimonial: {
            quote: "And my absolute highlight? The tutorial Testus Patronus: No Magic, Just AI with Your Company Context by Paula Bassagañas Òdena. Building a custom chatbot connected to our own JIRA data was both fun and practical.",
            author: "Jana Zientková",
            role: "Senior Test Consultant"
        }
    },
    {
        date: "November 2025",
        title: "Agile Testing Days 2025",
        city: "Potsdam",
        country: "Germany",
        description: "Speaking at Agile Testing Days 2025 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Automation"],
        photos: [
            "/images/atd_2025.webp",
            "/images/atd_2025_122.webp"
        ],
        link: {
            url: "https://agiletestingdays.com/2025/session/prompt-forward-hands-on-with-generative-ai-for-testers/",
            label: "View Conference Details"
        }
    },
    // Current experience
    {
        date: "July 2026 - Present",
        title: "Founder - Testing Fantasy",
        role: "Founder",
        company: "Testing Fantasy",
        description: "Testing Fantasy is a world-class learning experience for adults, built on one idea: curiosity is the only real glue between learning and long-term memory. Every workshop is a story and a quest, and every chapter teaches a real skill: test design, risk thinking, automation, AI in the SDLC. I design the worlds and the quests, build the material, and deliver the workshops for teams, conferences and public cohorts.",
        type: 'experience',
        tags: ["Founder", "Learning Design", "Workshops", "Test Design", "Risk Thinking", "AI in the SDLC", "Teaching"],
        link: {
            url: "https://testingfantasy.com",
            label: "Visit testingfantasy.com"
        },
    },
    {
        date: "April 2026 - Present",
        title: "Functional Architect - Boehringer Ingelheim",
        role: "Functional Architect",
        company: "Boehringer Ingelheim",
        description: "Functional Architect for the Enterprise Development Platform and AI in the software development lifecycle, serving an IT organisation of around 2,000 internal developers. I led the company-wide GitHub Copilot rollout and its chargeback model, and now drive agentic development practices, the SDLC AI Marketplace and the MCP registry that gives AI agents governed access to tools.",
        type: 'experience',
        tags: ["Enterprise Architecture", "AI in the SDLC", "Developer Platform", "GitHub Copilot", "Agentic Development", "MCP Registry", "Governance"],
        photo: "/images/boehringer_ingelheim.webp"
    },
    {
        date: "July 2022 - April 2026",
        title: "IT Architect - Boehringer Ingelheim",
        role: "IT Architect",
        company: "Boehringer Ingelheim",
        description: "Architect of TestingHub, a central platform for testing tools and strategy built on OpenShift for global IT systems, and testing advisor for IT products across the company. Led the working group on the global message-broker strategy, standardised SSO with Azure Entra ID, and built the company's first generative AI proofs of concept with RAG, LangChain and vector databases.",
        type: 'experience',
        tags: ["Technical Architecture", "Test Automation", "QA Architecture", "OpenShift", "Generative AI", "RAG", "Pharmaceutical", "Regulatory Compliance", "Presentations", "Databases", "Implementation Experience"],
        testimonial: {
            quote: "You have been incredible in supporting the team by delivering the testing strategy, concept, and implementation in data foundation. From day one, you were committed and engaged, providing fast, professional, and accurate support that tremendously ramped up the testing capabilities on the platform.",
            author: "Anonymous from Boehringer Ingelheim",
            role: "N/A",
            company: "Boehringer Ingelheim"
        },
        photo: "/images/boehringer_ingelheim.webp"
    },
    // Past speaking engagements
    {
        date: "October 2024",
        title: "AutomationSTAR 2024",
        city: "Vienna",
        country: "Austria",
        description: "Speaking at AutomationSTAR 2024 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Automation"],
        photo: "/images/automationstar_2024.webp",
        link: {
            url: "https://github.com/Bassaganas/etl-testing-fwk",
            label: "View Conference Material"
        },
        feedback: {
            award: {
                category: "Tutorial",
                title: "ETL Testing Framework",
                averageRating: 4.71,
                respondents: 15,
                maxRating: 5
            },
            quote: "Amazing tutorial! Really great explanations and the hands-on was so well prepared and useful"
        }
    },
    {
        date: "November 2024",
        title: "BCN PyDay 2024",
        city: "Barcelona",
        country: "Spain",
        description: "Speaking at BCN PyDay 2024 conference",
        type: 'speaking',
        tags: ["Conference", "Speaking", "Automation"],
        photo: "/images/bcn_pydays_2024.webp",
        link: {
            url: "https://github.com/Bassaganas/etl-testing-fwk/tree/feature/pydays",
            label: "View Conference Material"
        }
    },
    // Past experience
    {
        date: "August 2021 - July 2022",
        title: "Senior Backend Developer - Boehringer Ingelheim",
        role: "Senior Backend Developer",
        company: "Boehringer Ingelheim",
        description: "Developed applications for pharmacometrics department and migrated legacy applications to microservice architecture. Worked with C#, Java, JavaScript, and deployed to OpenShift using Jenkins and OpenDevStack.",
        type: 'experience',
        tags: ["C#", "Java", "Angular", "React", "Git", "Docker", "PostgreSQL", "Jenkins", "OpenDevStack", "OpenShift", "Jira", "SCRUM", "Cloud Migration", "Implementation Experience", "Databases"],
    },
    {
        date: "September 2021 - Present",
        title: "University Associate Teacher - Universitat Pompeu Fabra",
        role: "University Associate Teacher",
        company: "Universitat Pompeu Fabra",
        description: "Responsible Teacher for Introduction to Programming course, teaching Python to 90 students. Also teaching Information Retrieval and Web Analytics, and Data Structures and Algorithms.",
        type: 'experience',
        tags: ["Teaching", "Python", "Presentations", "Databases"],
        photo: "/images/upf.webp",
        testimonial: {
            quote: "She tries to make different classes, tries to challenge us, makes sure that we understand what is explained. Also is always ready to help us.",
            author: "Anonymous student",
            role: "Introduction to Programming"
        }
    },
    {
        date: "October 2019 - August 2021",
        title: "Backend Developer - SCRM Lidl International Hub",
        role: "Backend Developer",
        company: "SCRM Lidl International Hub",
        description: "Backend Development of a payment system for LidlPlus App based on microservices architecture. Developed microservices in C#, implemented API tests in Python, and worked with Azure services.",
        type: 'experience',
        tags: ["C#", "Python", "Microservices", "Azure", "Terraform", "DevOps", "BDD", "SCRUM", "Implementation Experience", "Distributed Applications"],
        photo: "/images/lidl_pay.webp"
    },
    {
        date: "January 2018 - October 2018",
        title: "Software Engineer in Testing - Roche",
        role: "Software Engineer in Testing",
        company: "Roche",
        description: "Developed automated tests for Infinity, a Laboratory Information System. Worked on backend black-box and white-box testing, frontend testing with Selenium, and continuous integration with Jenkins.",
        type: 'experience',
        tags: ["Java", "C#", "SpecFlow", "Cucumber", "Selenium", "Serenity", "Jenkins", "BDD", "SCRUM", "Implementation Experience"],
        photo: "/images/cobas_infinity.webp",
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
        role: "Test Analyst",
        company: "Roche Diagnostics",
        description: "Validation engineer in a Laboratory Information System. Performed risk assessment, wrote test cases, collaborated on story definitions, and executed system tests in an agile environment.",
        type: 'experience',
        tags: ["Test Analysis", "Requirements Analysis", "Test Planning", "Agile Testing", "SCRUM", "Implementation Experience"],
        photo: "/images/cobas_liat.webp",
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
        role: "Test Analyst Assistant",
        company: "Roche Swisslab GmbH",
        description: "Erasmus traineeship in Berlin. Performed functional analysis, test case specification, and system testing for Roche Swisslab.",
        type: 'experience',
        tags: ["Test Analysis", "Requirements Analysis", "Test Planning", "Agile Testing", "SCRUM"],

    },
    {
        date: "December 2014 - June 2015",
        title: "Internship - Roche Diagnostics",
        role: "Internship",
        company: "Roche Diagnostics",
        description: "Worked on the cobas 711/511 project related to coagulation analysis. Part of a software development team following scrum methodology. Performed exploratory testing, error reporting, and test case writing.",
        type: 'experience',
        tags: ["Exploratory Testing", "Test Case Writing", "Scrum", "HP-ALM"],
        photo: "/images/cobas_711_511.webp"
    }
]; 