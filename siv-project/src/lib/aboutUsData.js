// special benefits
import benefit1 from "../assets/images/aboutUs/aboutUs_benefits1.png"
import benefit2 from "../assets/images/aboutUs/aboutUs_benefits2.png"
import benefit3 from "../assets/images/aboutUs/aboutUs_benefits3.png"
// city guides
import cityGuide1 from "../assets/images/aboutUs/aboutUs_cityGuides1.png"
import cityGuide2 from "../assets/images/aboutUs/aboutUs_cityGuides2.png"
import cityGuide3 from "../assets/images/aboutUs/aboutUs_cityGuides3.png"
// prof advisors
import profAdvisor1 from "../assets/images/aboutUs/aboutUs_profAdvisors1.png"
import profAdvisor2 from "../assets/images/aboutUs/aboutUs_profAdvisors2.png"
import profAdvisor3 from "../assets/images/aboutUs/aboutUs_profAdvisors3.png"
import profAdvisor4 from "../assets/images/aboutUs/aboutUs_profAdvisors4.png"
// whats new
import whatsNew1 from "../assets/images/aboutUs/aboutUs_whatsNew1.png"
import whatsNew2 from "../assets/images/aboutUs/aboutUs_whatsNew2.png"
import whatsNew3 from "../assets/images/aboutUs/aboutUs_whatsNew3.png"


export const specialBenefits = [
    {
        id: Math.random() * 1000,
        imgSrc: benefit1,
        heading: "The Škrabec Homestead",
        city: "Hrovača, Slovenia",
        discount: "10% discount on standard rate",
        type: "accommodation"
    },
    {
        id: Math.random() * 1000,
        imgSrc: benefit2,
        heading: "Faedra Beach Resort",
        city: "Agios Nikolaos, Crete, Greece",
        discount: "10% Discount",
        type: "accommodation"
    },
    {
        id: Math.random() * 1000,
        imgSrc: benefit3,
        heading: "HF Hotels",
        city: "Lisbon & Porto, Portugal",
        discount: "6% discount over bar rate",
        type: "accommodation"
    }
]

export const cityGuides = [
    {
        imgSrc: cityGuide1,
        city: "Milan, Italy"
    },
    {
        imgSrc: cityGuide2,
        city: "Marrakesh, Morocco"
    },
    {
        imgSrc: cityGuide3,
        city: "Kathmandu, Nepal"
    }
]

export const profAdvisors = [
    {
        imgSrc: profAdvisor1,
        name: "Amber Turner",
        role: "Holistic Legal Consultant",
        location: "Global"
    },
    {
        imgSrc: profAdvisor2,
        name: "Simona Belcheva",
        role: "Lawyer",
        location: "Global"
    },
    {
        imgSrc: profAdvisor3,
        name: "Rohan George",
        role: "Immigration Lawyer",
        location: "Canada"
    },
    {
        imgSrc: profAdvisor4,
        name: "Carol Sinnott",
        role: "Immigration Lawyer",
        location: "Ireland"
    }
]

export const whatsNew = [
    {
        imgSrc: whatsNew1,
        header: "9 Time Management Techniques for Digital Nomads",
        date: "November 6, 2022",
        by: "Andy",
        content: "Effective time management is crucial for being productive and succeeding in your work. When it comes to digital nomads, who also want to make time for travelling and exploring the city, time management takes a whole new level!"
    },
    {
        imgSrc: whatsNew2,
        header: "How this digital nomad is able to call a new city home every month, all thanks to Pinterest.",
        date: "October 30, 2022",
        by: "DNworld",
        content: "My name is Justyn and I’m a travel blogger and Pinterest marketer working with clients worldwide. When I first started traveling, I wanted to find work I could do from anywhere, that would allow me to keep traveling the world. I really ‘fell’ into Pinterest but it’s been the biggest blessing ever since. I now teach courses on Pinterest growth and management, as well as manage accounts for clients around the world, all while traveling full-time."
    },
    {
        imgSrc: whatsNew3,
        header: "Portugal’s Digital Nomad Visa",
        date: "October 30, 2022",
        by: "Maanvir Jaaglan",
        content: "Thinking about becoming a digital nomad? Portugal has just the right visa for you. The country became the first in Europe to offer a visa specifically for digital nomads, and it’s already proving to be popular"
    }
]