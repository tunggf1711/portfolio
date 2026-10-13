import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Claude } from "@/components/ui/svgs/claude";
import { Sap } from "@/components/ui/svgs/sap";
import { GGCloud } from "@/components/ui/svgs/ggcloud";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { PhP } from "@/components/ui/svgs/php";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Tung Nguyen - Software Engineer",
  initials: "TN",
  url: "https://tunggf1711.dev",
  location: "Ha Noi, Viet Nam",
  locationLink: "https://www.google.com/maps/place/austin+tx",
  description:
    "Full-stack developer with a strong interest in backend engineering, complex problem-solving, and building scalable systems, always learning and exploring new challenges.",
  summary:
    "I started my career as a Full-stack Magento developer in late 2022. Over the years, I’ve developed a strong interest in backend engineering and am now expanding my skills by learning and building backend systems with Java and Go.",
  avatarUrl: "/picofme.JPG",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to get in touch? Feel free to email me or connect with me on LinkedIn. I'll get back to you as soon as I can. Please, no unsolicited sales pitches.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Java", icon: Java },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    {name: "Php", icon: PhP },
    {name: "Claude Code", icon: Claude },
    {name: "Sap Commerce", icon: Sap },
    {name: "Google Cloud", icon: GGCloud }
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "tunggf1711@gmail.com",
    tel: "+84378188128",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tunggf1711/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tunggf1711@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Nitori Digital Base",
      href: "",
      badges: [],
      location: "Ha Noi, Viet Nam",
      title: "Backend Developer",
      logoUrl: "/nitori.jpeg",
      start: "Jan 2025",
      end: null,
      description:
        "Responsible for developing backend services for the e-commerce sales platform supporting Nitori, one of Japan’s largest furniture and home furnishing retailers.",
    },
    {
      company: "Phenikaa-X",
      href: "",
      badges: [],
      location: "Ha Noi, Viet Nam",
      title: "Backend Developer",
      logoUrl: "/phenikaa-x.jpg",
      start: "Jan 2024",
      end: "Jan 2025",
      description:
        "Developed services for Phenikaa University Hospital’s smart hospital project, focusing on backend development for health checkups and patient information management.",
    },
    {
      company: "Bss Group",
      href: "",
      badges: [],
      location: "Ha Noi, Viet Nam",
      title: "Magento 2 Fullstack Developer",
      logoUrl: "/bss.jpg",
      start: "May 2022",
      end: "Jan 2024",
      description:
        "Full-stack Magento 2 developer responsible for building and maintaining projects, from custom frontend development to backend module implementation.",
    }
  ],
  education: [
    {
      school: "Academy of Cryptography Techniques",
      href: "https://actvn.edu.vn/",
      degree: "Bachelor of Engineering in Information Security",
      logoUrl: "/kma.jpeg",
      start: "2019",
      end: "2024",
    }
  ]
} as const;
