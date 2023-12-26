import { processRidge,lti } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    airbnb,
    shoppingCart,
    robo,
    bitcoin,
    threeD,
    portfolio
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
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
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "LTI",
        icon: lti,
        iconBg: "#a2d2ff",
        date: "March 2019 - Sep 2022",
        points: [
            "Collaborated cross-functional teams.",
            "Developed and maintained applications for more efficiency, enhanced user experience, and streamlined business processes.",
            "Have been trained on various technologies like Azure, AWS, python, javascript, windows, linux, oracle, vmware.. etc",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Process Ridge Pvt Ltd",
        icon: processRidge,
        iconBg: "#a2d2ff",
        date: "Sep 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: airbnb,
        theme: 'btn-back-red',
        name: 'Airbnb Clone',
        description: 'Full-stack complete web application using the latest web development technologies including React, Tailwind, Prisma, MongoDB, and NextAuth..',
        link: 'https://clonebnb-shagufta.vercel.app/',
    },
    {
        iconUrl: threeD,
        theme: 'btn-back-black',
        name: '3D-iPhone',
        description: 'Used 3D models and display them on website using WebGi. React and GSAP is been used to make a 3D animation of that model. And optimized 3D animations in React for mobile devices.',
        link: 'https://3-d-website-q58eo0u1k-shaguftas-projects.vercel.app/',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-green',
        name: 'My Portfolio',
        description: 'Built Simple and complete React responsive website with React Icons, useState hooks, modern CSS3 designs, SwiperJS for carousels, and implement multiple contact options (WhatsApp, Messenger, EmailJS form submission).',
        link: 'https://shaguftanaureen.github.io/My-Portfolio/',
    },
    {
        iconUrl: shoppingCart,
        theme: 'btn-back-blue',
        name: 'Shopping Site-Redux',
        description: 'Built an engaging shopping website leveraging React for dynamic UI, CSS for styling, and Redux for state management to provide a seamless and efficient user experience.',
        link: 'https://shaguftanaureen.github.io/Redux-Shopping/',
    },
    {
        iconUrl: robo,
        theme: 'btn-back-pink',
        name: 'Search Robofriends',
        description: 'Built a straightforward website using React that fetches data of unique robo names and enables seamless searching functionality.',
        link: 'https://shaguftanaureen.github.io/Udemy_Robofriends/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Memory Game',
        description: 'Created an entertaining memory game website employing JavaScript for interactivity, HTML for structuring the content, and CSS for styling, ensuring a delightful user experience.',
        link: 'https://shaguftanaureen.github.io/Memory-Game/',
    },
    {
        iconUrl: bitcoin,
        theme: 'btn-back-green',
        name: 'React API Crypto-Fetch',
        description: 'Built a straightforward website using React that fetches data from an API and enables seamless searching functionality.',
        link: 'https://shaguftanaureen.github.io/ReactAPICrypto/',
    },
];