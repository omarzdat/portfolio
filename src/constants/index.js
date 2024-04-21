import { unsw, soprano, student } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    c,
    haskell,
    python,
    sql,
    aws,
    tiramisu,
    squirrel,
    circles,
    lighthouse
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: haskell,
        name: "Haskell",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Platform",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Intern Software Engineer",
        company_name: "Soprano",
        icon: soprano,
        iconBg: "#ec94ba",
        date: "December 2023 - Present",
        points: [
            "Designing, documenting, constructing, and maintaining BDD and Serenity-based automation testing for the Soprano platform UI and functionality.",
            "Collaborating with cross-functional teams including QA, product managers, and other developers to create high-quality products.",
            "Implementing responsive design in new web feature improvements to the Soprano product including UI additions and improving API functionality",
            "Contributing to DevOps as a member of the team and as a release engineer, and Developer-On-Support.",
        ],
    },
    {
        title: "UNSW Student Ambassador",
        company_name: "UNSW",
        icon: unsw,
        iconBg: "#f2e08a",
        date: "Feb 2023 - Present",
        points: [
            "Leading the education of Grade 7-11 students as part of UNSW's campaigns, incusrions and excursions.",
            "Successfully conducting on-campus Open Days and education programs, maintaining and communicating with classes of up to 30 students.",
            "Resolving conflicts between students, liaising with educators, assisting in mentoring new University Ambassadors.",
            "Inspiring students of all ages to see a path forward for themselves at universities, representing their cultures, faiths, and status on a university level.",
        ],
    },
    {
        title: "Tertiary Tutor",
        company_name: "Self Employed",
        icon: student,
        iconBg: "#b7e4c7",
        date: "Jan 2020 - Dec 2023",
        points: [
            "Organising and maintaing a small educational supplementation business of up to 20 students.",
            "Analysing school requirements and educating students on relevant subjects and components.",
            "Succesfully graduated over 90% of students with an ATAR over 90.",
            "Specialising in higher English, successfully bolstered student reading, writing, comprehension, and appreciation for literature.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/omarzdat',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/omarzdat/',
    }
];

export const projects = [
    {
        iconUrl: tiramisu,
        theme: 'btn-back-red',
        name: 'Sentiment Driven Stock Management',
        description: 'Developed a system of lambdas that analyses social media posts with NLTK to provide sentiment analysis, then built a stock trading MVP around this functionality.',
        link: 'https://temp-six-bay.vercel.app/dashboard',
    },
    {
        iconUrl: circles,
        theme: 'btn-back-green',
        name: 'AI-Driven Calendaring App',
        description: 'In 48 hours, created a full-stack AI-powered NLP calendaring solution. Pitched and submitted this application to UNIHACK 2024!',
        link: 'https://devpost.com/software/circles-4j2rug#updates',
    },
    {
        iconUrl: lighthouse,
        theme: 'btn-back-blue',
        name: 'Social Media Aggregator',
        description: 'In 24 hours, coneptualised, designed, built and pitched an MVP of a social media aggregator, judged second in CSESoc\'s Flagship Hackathon by judges from Google, Pearler and Canva.',
        link: 'https://github.com/2022hackathon/lighthouse',
    },
    {
        iconUrl: squirrel,
        theme: 'btn-back-pink',
        name: 'Full Stack Invoice Manager',
        description: 'Built a simple API system with a basic HTML/CSS Frontend that utilises Optus API to receive and send invoices.',
        link: 'https://github.com/SENG2021-LCB',
    }
];