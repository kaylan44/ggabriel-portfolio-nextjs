import { ValidCategory, ValidExpType, ValidSkills } from "./constants";
import balijewelryhome from "@/public/projects/balijewelry/balijewelryhome.png";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
  arcadeLink?: string;
  arcadeSrc?: string;
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
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  // {
  //   id: "the-super-quotes",
  //   companyName: "The Super Quotes",
  //   type: "Professional",
  //   category: ["Mobile Dev", "Full Stack", "UI/UX"],
  //   shortDescription:
  //     "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
  //   websiteLink:
  //     "https://play.google.com/store/apps/details?id=com.thesuperlife",
  //   techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
  //   startDate: new Date("2021-07-01"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/projects/superquotes/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Quotes View Page",
  //       description:
  //         "Elegantly designed quotes display with customizable themes and sharing options",
  //       imgArr: ["/projects/superquotes/app_2.webp"],
  //     },
  //     {
  //       title: "Quotes Download Component",
  //       description:
  //         "Feature allowing users to download quotes as beautiful images for social media sharing",
  //       imgArr: [
  //         "/projects/superquotes/app_4.webp",
  //         "/projects/superquotes/app_7.webp",
  //       ],
  //     },
  //     {
  //       title: "Account Management",
  //       description:
  //         "User profile management with favorites, history, and personalization settings",
  //       imgArr: ["/projects/superquotes/app_6.webp"],
  //     },
  //     {
  //       title: "Interest Selection and Update Page",
  //       description:
  //         "Interactive interface for users to select and update their quote preferences and interests",
  //       imgArr: [
  //         "/projects/superquotes/app_1.webp",
  //         "/projects/superquotes/app_3.webp",
  //       ],
  //     },
  //     {
  //       title: "Responsiveness",
  //       description:
  //         "Adaptive design ensuring optimal user experience across various device sizes and orientations",
  //       imgArr: ["/projects/superquotes/app_5.webp"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
  //       `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
  //       `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
  //       `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
  //     ],
  //     bullets: [
  //       "Led the end-to-end development of a captivating application using JavaScript and React Native.",
  //       "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
  //       "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
  //       "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
  //     ],
  //   },
  // },
  {
    id: "bali-jewelry",
    companyName: "Bali Jewelry",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack", "UI/UX", "Shopify"],
    shortDescription:
      "Online shopify shop selling Handmade silver & gold Jewelry.",
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
          "Website overview on desktop, showcasing the clean and elegant design that highlights the jewelry products, with intuitive navigation and a seamless shopping experience.",
        imgArr: [],
        arcadeSrc: "https://demo.arcade.software/1m80zVyE9TuNDnaf6PcI?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
      },
      {
        title: "Mobile Overview",
        description:
          "Website overview on mobile, showcasing the responsive design that adapts to smaller screens while maintaining usability and visual appeal.",
        imgArr: [],
        arcadeSrc: "https://demo.arcade.software/xyLgIw9sOKnV0WAUl75M?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Development of an online handmade jewelry store built on Shopify, with a mobile-first and conversion-focused approach.
        The website features a clean, minimalist aesthetic designed to highlight the products, while offering smooth navigation and a simplified purchasing journey.
        A project combining branding, user experience, and e-commerce performance.`,
      ],
      bullets: [
        "Full Shopify setup (catalog, collections, cart, checkout)",
        "UX optimization and content hierarchy structuring",
        "Responsive design",
        "Implementation of international settings (currencies / countries)"
      ],
    },
  }
];

export const featuredProjects = Projects.slice(0, 3);
