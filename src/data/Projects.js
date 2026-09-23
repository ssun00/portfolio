import antifraudIcon from '../assets/projects/cccis-antifraud.svg';
import emberFlickerIcon from '../assets/projects/info-ember-flicker.svg';
import zulipIcon from '../assets/projects/cs-zulip.svg';
import ctechWebIcon from '../assets/projects/ctech-web.svg';
import grasIcon from '../assets/projects/usda-gras.svg';
import ibmAccessibilityIcon from '../assets/projects/ibm-accessibility.svg';
import blossomIcon from '../assets/projects/ux-blossom.svg';

import ember_1 from '../assets/projects-ss/ember_1.png';
import ember_2 from '../assets/projects-ss/ember_2.png';
import ember_3 from '../assets/projects-ss/ember_3.png';
import ctech_1 from '../assets/projects-ss/ctech_1.png';
import ctech_2 from '../assets/projects-ss/ctech_2.png';
import ctech_3 from '../assets/projects-ss/ctech_3.png';
import ctech_4 from '../assets/projects-ss/ctech_4.png';
import zulip_1 from '../assets/projects-ss/zulip_1.png';
import zulip_2 from '../assets/projects-ss/zulip_2.png';
import zulip_3 from '../assets/projects-ss/zulip_3.png';

export const CATEGORIES = [
    { id: 'all', label: 'ALL' },
    { id: 'dev', label: 'DEV' },
    { id: 'ui', label: 'UI/UX' },
];

/*
  {
    id: string,           // used for routing
    title: string,        // short title, fits in cartridge label
    subtitle: string,     // one-line descriptor under title
    category: string,     // matches one of CATEGORIES (not 'all')
    color: 'pink'|'purple', // cartridge color
    level: number,        // sense of complexity/scope
    year: number,
    start: string,
    end?: string,
    party?: number,
    status: 'COMPLETE'|'IN PROGRESS'|'ARCHIVED',
    thumbnail: string,    // path to image, or null for placeholder sprite
    description: string[],  // longer text for detail view
    techStack: string[],
    links: {
      figma?: string,
      github?: string,
      writeup?: string,
    },
    screenshots?: {         // optional — shown in the detail-page gallery
      src: string,
      alt?: string,
      caption?: string,
    }[],
  }
*/

export const PROJECTS = [
    {
        id: 'cccis-antifraud',
        title: 'ANTIFRAUD',
        subtitle: 'CCCIS',
        category: 'dev',
        color: 'pink',
        level: 16,
        year: 2026,
        start: '05/26',
        status: 'IN PROGRESS',
        thumbnail: antifraudIcon,
        description: [
            "At CCC Intelligent Solutions, I’m working as a Software Engineer on the Fraud team, contributing to tools that help analysts investigate potentially fraudulent claims. My work has been full-stack, spanning Java/Spring backend services, REST APIs, Kafka, SQL, and React/TypeScript on the frontend. I’ve also been involved in the broader development lifecycle, from technical design and implementation to testing and deployment.",
            "CCC is also very AI-forward, and that is becoming an increasingly important part of how we build software. Beginning in October, the organization is moving toward a more AI-driven development lifecycle, where AI tools will be incorporated more deeply into areas such as planning, coding, testing, documentation, and developer workflows. I’m especially excited to gain experience working in an environment that is actively rethinking how AI can improve the software engineering process rather than treating it as a standalone feature."
        ],
        techStack: ['JAVA', 'KAFKA', 'SPRINGBOOT', 'SQL', 'REST API', 'TYPESCRIPT', 'REACT', 'TAILWIND CSS'],
        links: {
            writeup: ''
        },
    },
    {
        id: 'info-ember-flicker',
        title: 'EMBER & FLICKER',
        subtitle: 'INFO 6400',
        category: 'ui',
        color: 'purple',
        level: 10,
        year: 2026,
        start: '01/26',
        end: '05/26',
        party: 2,
        status: 'COMPLETE',
        thumbnail: emberFlickerIcon,
        description: [
            "A paired physical prototype and mobile app designed to support connection in long-distance romantic relationships through small, meaningful moments of remembering.",
            "Through a five-day diary study with participants in long-distance relationships and a ten-day autoethnography, our research explored how everyday environments, emotions, and shared experiences naturally trigger thoughts of a romantic partner. We found that remembering often emerged spontaneously during mood shifts or familiar routines, creating an urge to reconnect.",
            "From these insights, we designed a playful and low-effort system for documenting and exchanging subtle moments of remembering. Ember & Flicker transforms fleeting moments into opportunities for connection, encouraging partners to feel present in each other's daily lives despite physical distance."
        ],
        techStack: ['FIGMA', 'FIGJAM'],
        screenshots: [
            {
                src: ember_1,
                alt: 'Ember Figma Mockup (1)',
                caption: 'Ember Figma Mockup (1)'
            },
            {
                src: ember_2,
                alt: 'Ember Figma Mockup (2)',
                caption: 'Ember Figma Mockup (2)'
            },
            {
                src: ember_3,
                alt: 'Ember Figma Mockup (3)',
                caption: 'Ember Figma Mockup (3)'
            },
        ],
        links: {
            figma: 'https://www.figma.com/proto/d7OxFepkEObwRLNXtHnJiP/ember?node-id=133-339&p=f&t=I4RqErDmGVMoBDqe-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=133%3A339',
            writeup: 'https://drive.google.com/file/d/17_OJZL1YqmE3WRadqeUabuCl-buoWbeX/view?usp=drive_link',
            github: 'https://drive.google.com/file/d/1lE5xa2Lh6HlMmLAx_rwpAAd5Q5sIUYBL/view?usp=drive_link',
        },
    },
    {
        id: 'cs-zulip',
        title: 'ZULIP',
        subtitle: 'CS 5150',
        category: 'dev',
        color: 'pink',
        level: 10,
        year: 2026,
        start: '01/26',
        end: '05/26',
        party: 5,
        status: 'COMPLETE',
        thumbnail: zulipIcon,
        description: [
            "As a frontend developer on Zulip's meeting scheduler project, I led the implementation of core scheduling workflows and interactive UI components integrated directly into the chat platform.",
            `I developed a complete "Prpose a Meeting" experience that allows users to create meetings by selecting topics, invitees, deadlines, date/time ranges, and optional video call links. I also helped implement the When2Meet-style availability interface where participants can submit and see their availability through responsive grids and headmap views synchronized with backend APIs.`,
            'Our team worked together for frontend/backend integration for RSVP handling, organizer confirmation flows, and permission-based interactions. The project evolved from an early scheduling prototype into a feature-complete collaborative scheduling system integrated within ZUlip conversations, emphasizing usability, real-time interaction, and scalable frontend architecture.'
        ],
        techStack: ['TYPESCRIPT', 'JAVASCRIPT', 'CSS', 'FIGMA', 'NODE.JS'],
        screenshots: [
            {
                src: zulip_1,
                alt: 'Zulip RSVP Feature',
                caption: 'Zulip RSVP Feature'
            },
            {
                src: zulip_2,
                alt: 'Zulip Propose Meeting Feature',
                caption: 'Zulip Propose Meeting Feature'
            },
            {
                src: zulip_3,
                alt: 'Zulip Select Availability Feature',
                caption: 'Zulip Select Availability Feature'
            },
        ],
        links: {
            github: 'https://github.com/ssun00/zulip',
            writeup: 'https://drive.google.com/file/d/1zC_B5JaVwkE9ThmNJCjakBmcWCyqNOQN/view?usp=drive_link',
            figma: 'https://www.figma.com/design/Y6kbIZSd7TamrCNtLUztjg/Zulip?node-id=0-1&t=Ldq4VUbAnl6ZXTyT-1'
        },
    },
    {
        id: 'ctech-web',
        title: 'WEBSITE',
        subtitle: 'CTECH',
        category: 'dev',
        color: 'pink',
        level: 14,
        year: 2026,
        start: '01/26',
        end: '05/26',
        party: 2,
        status: 'COMPLETE',
        thumbnail: ctechWebIcon,
        description: [
            'As the only frontend developer for Phase I of the CTECH Open Lab website, I built a modern, scalable platform that showcases research projects, datasets, tools, collaborations, and team members for the initiative.',
            'Starting from a Figma design and without an existing codebase, I developed the website from scratch with a strong focus on usability, accessibility, and responsive design. The platform was created to support multiple audiences, including Gao Lab researchers presenting their work, external stakholders exploring research initiatives, and potential sponsors and collaborators.',
            'My work centered on translating research content into an engaging and professional digital eperience while building reusable frontend components that support future scalability and expansion of the platform.'
        ],
        techStack: ['TYPESCRIPT', 'REACT', 'VITE', 'CSS', 'VITEST', 'REACT TESTING LIBRARY'],
        screenshots: [
            {
                src: ctech_1,
                alt: 'CTECH Home Page',
                caption: 'CTECH Home Page'
            },
            {
                src: ctech_2,
                alt: 'CTECH Creation Studio',
                caption: 'CTECH Creation Studio'
            },
            {
                src: ctech_3,
                alt: 'CTECH Subpage',
                caption: 'CTECH Subpage'
            },
            {
                src: ctech_4,
                alt: 'CTECH Login',
                caption: 'CTECH Login'
            },
        ],
        links: {
            writeup: 'https://drive.google.com/file/d/1BvHYorG9bltf5Frnp7Y6EwznMyy3-kTB/view?usp=sharing'
        },
    },
    {
        id: 'usda-gras',
        title: 'GRAS',
        subtitle: 'USDA',
        category: 'dev',
        color: 'pink',
        level: 15,
        year: 2025,
        start: '02/24',
        end: '07/25',
        status: 'COMPLETE',
        thumbnail: grasIcon,
        description: [
            "USDA's Grazinglands Resource Analysis System (GRAS) Services is a geospatial (GIS) web application designed to support the National Resource Conservation System (NRCS). This application provides tools for planners and conservation specialists to tackle environmental and agricultural issues.",
            "As a frontend developer for this project, I built user interface components that advanced the development of features such as Animal Inventory and Forage Adjustment Areas using Typescript, React and MobX, allowing for users to manage and view their herds, animal groups, and land units. I maintained 508 compliance status and implemented unit test coverage above 80% using Jest and React Testing Library.",
            "I collaborated with a cross-functional team, including backend, UI/UX designers, and stakeholders, to establish seamless production and alignment with project goals. I also presented the features I implemented to our government product owners every other week, and demoed to over 800 people at the end of our iterations."
        ],
        techStack: ['TYPESCRIPT', 'REACT', 'MOBX', 'CSS', 'JEST', 'REACT TESTING LIBRARY'],
        links: {
            writeup: ''
        },
    },
    {
        id: 'ibm-accessibility',
        title: 'RUBIK',
        subtitle: 'IBM',
        category: 'dev',
        color: 'pink',
        level: 8,
        year: 2022,
        start: '05/22',
        end: '08/22',
        status: 'COMPLETE',
        thumbnail: ibmAccessibilityIcon,
        description: [
            "Rubik is one of IBM's leading business platforms that allows customers and clients to keep track of contracts within and outside the company. For internal products that IBM implements, there are accessibility guidelines that need to be met prior to publishing these digital products. As a front end developer intern, my major role was to improve Rubik's digital accessibility, which had not been priority in recent years."
        ],
        techStack: ['JAVASCRIPT', 'REACT', 'ACCESSIBILITY'],
        links: {
            writeup: 'https://www.canva.com/design/DAFIGstxcD0/hi0Rr3ECsRMwyY-3OXBlDw/view?utm_content=DAFIGstxcD0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
        },
    },
    {
        id: 'ux-blossom',
        title: 'BLOSSOM',
        subtitle: 'PERSONAL',
        category: 'ui',
        color: 'purple',
        level: 8,
        year: 2021,
        start: '06/21',
        end: '08/21',
        party: 1,
        status: 'COMPLETE',
        thumbnail: blossomIcon,
        description: [
            "Blossom Floral Shop is a local floral shop that offers a variety of different floral arrangements, as well as the option to create your own. The website I designed provides a seamless experience for customers to explore different flower options, customize their bouquets, and place their order. Explore more about this project that I undertook for the Google UX course."
        ],
        techStack: ['ADOBE XD'],
        links: {
            writeup: 'https://ssun00.wixsite.com/portfolio/portfolio-collections/my-portfolio/project-title-1',
        },
    },
];