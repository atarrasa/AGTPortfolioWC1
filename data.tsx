import { Home, Presentation, Handshake, Send, ShieldCheck, Ship,Wrench,Briefcase,Cloud,Database } from "lucide-react"; 
//Data component where all the data is stored

export const navBarElements = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
        arialabel: "Home",
    },
    {
        id: 2,
        title: "About me",
        icon: <Presentation size={20} />,
        link: "#about",
        arialabel: "About me",
    },
    {
        id: 3,
        title: "Services",
        icon: <Handshake size={20} />,
        link: "/#services",
        arialabel: "Services",
    },
    {
        id: 4,
        title: "Contact me",
        icon: <Send size={20} />,
        link: "#contact",
        arialabel: "Contact me",
    },
   
];

export const aboutMe = [
    {
        id: 1,
        name: "International Proven Experienced",
        icon: <Ship/>,
        description: "+2 Years of experience over different countries",
    },
    {
        id: 2,
        name: "Microsoft Certified Professional",
        icon: <ShieldCheck/>,
        description: "+4 Microsoft Certifications awarded",
    },
    {
        id: 3,
        name: "Battleground Industry Proved",
        icon: <Wrench />,
        description: "+50 solutions successfully implemented",
    },
];

export const aboutMeCarousel = [
    {
        id: 1,
        url: "/img/businessdecision.jpg",
        alt: "Business Decision Picture",
    },
    {
        id: 2,
        url: "/img/cloud.jpg",
        alt: "Cloud Picture",
    },
    {
        id: 3,
        url: "/img/datainsights.jpg",
        alt: "Data Insights Picture",
    },
    {
        id: 4,
        url: "/img/erp.jpg",
        alt: "ERP Picture",
    },
];

export const servicesElements = [
    {
        id: 1,
        title: "Dynamics 365 Services", 
        icon: <Briefcase/>,
        features: [
            {
                name: "Develop tailored solutions",
            },
            {
                name: "Release management",
            },
            {
                name: "Integration with other systems",
            },
            {
                name: "Configuration of the system",
            }
            
        ]

    },
    {
        id: 2,
        title: "Azure",
        icon: <Cloud />,
        features: [
            {
                name: "Deployment of infrastructure",
            },
            {
                name: "Security and Compliance",
            },
            {
                name: "Automatization of processes",
            },
            {
                name: "ARM & API Management",
            }
        ]

    },
    {
        id: 3,
        title: "Data Migration",
        icon: <Database />,
        features: [
            {
                name: "Data Migration from Legacy Systems",

            },
            {
                name: "Data Optimization",

            },
            {
                name: "Mapping and Data Transformation",

            },
            {
                name: "Data Cleansing and Validation",
            }
        ]

    },
];