import { getI18n } from "@/locales/server";
import { ValidCategory, ValidExpType, ValidSkills } from "./constants";
import balijewelryhome from "@/public/projects/balijewelry/balijewelryhome.png";
import dashdesktop1 from "@/public/projects/dashboard/desktop1.png";
import dashdesktop2 from "@/public/projects/dashboard/desktop2.png";
import dashdesktop3 from "@/public/projects/dashboard/desktop3.png";
import dashmobile from "@/public/projects/dashboard/mobile.png";
import andromedaHomepage from "@/public/projects/andromeda/andromeda-homepage.png";
import andromedadesktop1 from "@/public/projects/andromeda/andromeda-desktop1.png";
import andromedadesktop2 from "@/public/projects/andromeda/andromeda-desktop2.png";
import andromedamobilefolio from "@/public/projects/andromeda/andromeda-mobile-folio.png";

interface PagesInfoInterface {
  title: string;
  imgArr: any[];
  description?: string;
  arcadeLink?: string;
  arcadeSrc?: string;
  videoSrc?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

// export const Projects: ProjectInterface[] = [
//   {
//     id: "bali-jewelry",
//     companyName: "Bali Jewelry",
//     type: "Personal",
//     category: ["Mobile Dev", "Full Stack", "UI/UX", "Shopify"],
//     shortDescription:
//       "Online shopify shop selling Handmade silver & gold Jewelry.",
//     websiteLink:
//       "https://gabyjewelry.myshopify.com/",
//     techStack: ["Shopify", "Liquid"],
//     startDate: new Date("2026-01-01"),
//     endDate: new Date("2022-01-15"),
//     companyLogoImg: balijewelryhome,
//     pagesInfoArr: [
//       {
//         title: "Desktop Overview",
//         description:
//           "Website overview on desktop, showcasing the clean and elegant design that highlights the jewelry products, with intuitive navigation and a seamless shopping experience.",
//         imgArr: [],
//         arcadeSrc: "https://demo.arcade.software/1m80zVyE9TuNDnaf6PcI?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
//       },
//       {
//         title: "Mobile Overview",
//         description:
//           "Website overview on mobile, showcasing the responsive design that adapts to smaller screens while maintaining usability and visual appeal.",
//         imgArr: [],
//         arcadeSrc: "https://demo.arcade.software/xyLgIw9sOKnV0WAUl75M?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
//       },
//     ],
//     descriptionDetails: {
//       paragraphs: [
//         `Development of an online handmade jewelry store built on Shopify, with a mobile-first and conversion-focused approach.
//         The website features a clean, minimalist aesthetic designed to highlight the products, while offering smooth navigation and a simplified purchasing journey.
//         A project combining branding, user experience, and e-commerce performance.`,
//       ],
//       bullets: [
//         "Full Shopify setup (catalog, collections, cart, checkout)",
//         "UX optimization and content hierarchy structuring",
//         "Responsive design",
//         "Implementation of international settings (currencies / countries)"
//       ],
//     },
//   },
//   {
//     id: "next-dashboard",
//     companyName: "Next Dashboard",
//     type: "Personal",
//     category: ["Mobile Dev", "Full Stack", "UI/UX", "Backend"],
//     shortDescription:
//       "Dashboard & CRM portfolio project built with React and Next.js + SQL.",
//     websiteLink:
//       "https://nextjs-dashboard-app-three-delta.vercel.app/",
//     techStack: ["React", "Next.js", "PostgreSQL"],
//     startDate: new Date("2026-01-15"),
//     endDate: new Date("2022-01-30"),
//     companyLogoImg: dashdesktop1,
//     pagesInfoArr: [
//       {
//         title: "Desktop Overview",
//         description:
//           "Website overview on desktop, showcasing dashboards, invoice management & CRM features with a simple design.",
//         imgArr: [dashdesktop1, dashdesktop2, dashdesktop3],
//       },
//       {
//         title: "Mobile Overview",
//         description:
//           "Website overview on mobile, showcasing the responsive design that adapts to smaller screens while maintaining usability and visual appeal.",
//         imgArr: [dashmobile],
//       },
//     ],
//     descriptionDetails: {
//       paragraphs: [
//         `A modern full-stack dashboard application built with Next.js, showcasing authentication, server-side data fetching, and dynamic data visualization.
//         The project demonstrates how to build scalable, data-driven interfaces using modern React features, responsive UI components, and a PostgreSQL database.
//         Designed to illustrate best practices for building high-performance web dashboards.`,
//       ],
//       bullets: [
//         "Dynamic dashboard displaying key business metrics",
//         "Full CRUD invoice management system",
//         "PostgreSQL database integration",
//         "Server-side data fetching with Next.js",
//         "Responsive UI optimized for desktop and mobile built with modern Next.js architecture"
//       ],
//     },
//   },
// ];


export async function createProjects(): Promise<ProjectInterface[]> {
  // Translation
  const i18n = await getI18n()

  return (
    [
      {
        id: "andromeda",
        companyName: "Andromeda Italian Restaurant",
        type: "Personal",
        category: ["Mobile Dev", "Full Stack", "UI/UX"],
        shortDescription:
          i18n('projects.andromeda.description'),
        websiteLink:
          "https://andromeda-italia.vercel.app/",
        techStack: ["React", "Next.js", "Tailwind CSS"],
        startDate: new Date("2026-03-01"),
        endDate: new Date("2022-03-10"),
        companyLogoImg: andromedaHomepage,
        pagesInfoArr: [
          {
            title: "Desktop Overview",
            description:
              i18n('projects.andromeda.desktopdesc'),
            imgArr: [andromedaHomepage, andromedadesktop1, andromedadesktop2],
            videoSrc: "/projects/andromeda/andromeda-video-desktop.mp4",
          },
          {
            title: "Mobile Overview",
            description:
              i18n('projects.andromeda.mobiledesc'),
            imgArr: [andromedamobilefolio],
            videoSrc: "/projects/andromeda/andromeda-video-mobile.mp4",
          },
        ],
        descriptionDetails: {
          paragraphs: [
            i18n('projects.andromeda.detailsdesc'),
          ],
          bullets: [
            i18n('projects.andromeda.bullet1'),
            i18n('projects.andromeda.bullet2'),
            i18n('projects.andromeda.bullet3'),
            i18n('projects.andromeda.bullet4')
          ],
        },
      },
      {
        id: "bali-jewelry",
        companyName: "Bali Jewelry",
        type: "Personal",
        category: ["Mobile Dev", "Full Stack", "UI/UX", "Shopify"],
        shortDescription:
          i18n('projects.balijewelry.description'),
        websiteLink:
          "https://gabyjewelry.myshopify.com/",
        techStack: ["Shopify", "Liquid"],
        startDate: new Date("2026-01-01"),
        endDate: new Date("2022-01-15"),
        companyLogoImg: balijewelryhome,
        pagesInfoArr: [
          {
            title: "Desktop Overview",
            description:
              i18n('projects.balijewelry.desktopdesc'),
            imgArr: [],
            arcadeSrc: "https://demo.arcade.software/1m80zVyE9TuNDnaf6PcI?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
          },
          {
            title: "Mobile Overview",
            description:
              i18n('projects.balijewelry.mobiledesc'),
            imgArr: [],
            arcadeSrc: "https://demo.arcade.software/xyLgIw9sOKnV0WAUl75M?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
          },
        ],
        descriptionDetails: {
          paragraphs: [
            i18n('projects.balijewelry.detailsdesc'),
          ],
          bullets: [
            i18n('projects.balijewelry.bullet1'),
            i18n('projects.balijewelry.bullet2'),
            i18n('projects.balijewelry.bullet3'),
            i18n('projects.balijewelry.bullet4')
          ],
        },
      },
      {
        id: "next-dashboard",
        companyName: "Next Dashboard",
        type: "Personal",
        category: ["Mobile Dev", "Full Stack", "UI/UX", "Backend"],
        shortDescription:
          i18n('projects.nextdashboard.description'),
        websiteLink:
          "https://nextjs-dashboard-app-three-delta.vercel.app/",
        techStack: ["React", "Next.js", "PostgreSQL"],
        startDate: new Date("2026-01-15"),
        endDate: new Date("2022-01-30"),
        companyLogoImg: dashdesktop1,
        pagesInfoArr: [
          {
            title: "Desktop Overview",
            description:
              i18n('projects.nextdashboard.desktopdesc'),
            imgArr: [dashdesktop1, dashdesktop2, dashdesktop3],
          },
          {
            title: "Mobile Overview",
            description:
              i18n('projects.nextdashboard.mobiledesc'),
            imgArr: [dashmobile],
          },
        ],
        descriptionDetails: {
          paragraphs: [
            i18n('projects.nextdashboard.detailsdesc'),
          ],
          bullets: [
            i18n('projects.nextdashboard.bullet1'),
            i18n('projects.nextdashboard.bullet2'),
            i18n('projects.nextdashboard.bullet3'),
            i18n('projects.nextdashboard.bullet4'),
            i18n('projects.nextdashboard.bullet5')
          ],
        },
      },
    ]
  )
}


export async function getProjects(): Promise<ProjectInterface[]> {
  const projects = await createProjects();
  return projects;
}

export async function getFeaturedProjects(): Promise<ProjectInterface[]> {
  const projects = await getProjects();
  return projects.slice(0, 3);
}