import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    python,
    tailwind,
    MySql,
    mongodb,
    git,
    flutter,
    django,
    springboot,
    blender,
    xangars,
    otu,
    carrent,
    jobit,
    tripguide,
    photoshop,
} from "../assets";

export const navLinks = [
    {
        id: "",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "tech",
        title: "Tech",
    },
    {
        id: "blogs",
        title: "Blogs",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Backend Developer",
        icon: web,
    },
    {
        title: "knowledge seeker",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
    {
        title: "Learner",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "SpringBoot",
        icon: springboot,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "MySql",
        icon: MySql,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Photoshop",
        icon: photoshop,
    },
    {
        name: "Blender",
        icon: blender,
    },
];

const experiences = [
    {
        title: "Java Developer",
        company_name: "OTU",
        icon: otu,
        iconBg: "#E6DEDD",
        date: "Dec 2021 - Present",
        points: [
            "Requirement Gathering",
            "Technical Discussion",
            "Ensure development conform with business goals",
            "Java APIs Development",
            "Identify and resolve any technical issues arising",
            "Conducting software analysis, programming, testing, and debugging",
            "Managing JAVA, Docker, AWS things",
            "Managing Stage/ Production Server Deployments",
            "Provide after production support as required"
        ],
    },
    {
        title: "Java Developer",
        company_name: "Xangars Infratech",
        icon: xangars,
        iconBg: "#E6DEDD",
        date: "Feb 2021 - Dec 2021",
        points: [
            "Understanding of requirement",
            "Estimating efforts",
            "Designing architecture, development, unit testing of Java APIs",
            "Guiding quality testing team",
            "Releasing for User Acceptance testing",
            "supporting for UAT testing and finally making live"
        ],
    },
    {
        title: "Java Developer",
        company_name: "Xangars Solutions",
        icon: xangars,
        iconBg: "#383E56",
        date: "July 2020 - Jan 2021",
        points: [
            "Understanding of requirement",
            "Estimating efforts",
            "Designing architecture, development, unit testing of Java APIs",
            "Guiding quality testing team",
            "Releasing for User Acceptance testing",
            "supporting for UAT testing and finally making live"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };