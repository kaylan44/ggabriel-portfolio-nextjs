import { getI18n } from "@/locales/server";
import { ValidSkills } from "./constants";
import culturaLogo from "@/public/experience/cultura-logo.png";
import atosLogo from "@/public/experience/atos-logo.png";
import sanofiLogo from "@/public/experience/sanofi-logo.png";
import { StaticImageData } from "next/image";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: StaticImageData;
}

export async function getExperiences(): Promise<ExperienceInterface[]> {
  const i18n = await getI18n();

  return [
    {
      id: "freelance",
      position: i18n("experience.freelance.position"),
      company: "Freelance",
      location: "Remote",
      startDate: new Date("2025-10-01"),
      endDate: "Present",
      description: [
        i18n("experience.freelance.description1"),
        i18n("experience.freelance.description2"),
        i18n("experience.freelance.description3"),
        i18n("experience.freelance.description4"),
      ],
      skills: ["React", "Next.js", "React Native", "Typescript", "Node.js", "Java", "PostgreSQL", "Supabase", "Docker", "CI/CD", "Vercel"],
    },
    {
      id: "cultura",
      position: i18n("experience.cultura.position"),
      company: "Cultura",
      location: "Bordeaux, France",
      startDate: new Date("2022-10-01"),
      endDate: new Date("2024-02-25"),
      description: [
        i18n("experience.cultura.description1"),
        i18n("experience.cultura.description2"),
        i18n("experience.cultura.description3"),
        i18n("experience.cultura.description4"),
      ],
      skills: ["Kubernetes", "Docker", "Prometheus", "Ansible", "Python"],
      companyUrl: "https://cultura.com",
      logo: culturaLogo,
    },
    {
      id: "sanofi",
      position: i18n("experience.sanofi.position"),
      company: "Sanofi",
      location: "International",
      startDate: new Date("2020-08-01"),
      endDate: new Date("2022-09-01"),
      description: [
        i18n("experience.sanofi.description1"),
        i18n("experience.sanofi.description2"),
        i18n("experience.sanofi.description3"),
        i18n("experience.sanofi.description4"),
        i18n("experience.sanofi.description5"),
      ],
      skills: ["SOTI", "Velocity", "Project Management"],
      companyUrl: "https://sanofi.com",
      logo: sanofiLogo,
    },
    {
      id: "atos",
      position: i18n("experience.atos.position"),
      company: "Atos",
      location: "Bordeaux, France",
      startDate: new Date("2018-10-01"),
      endDate: new Date("2020-08-01"),
      description: [
        i18n("experience.atos.description1"),
        i18n("experience.atos.description2"),
        i18n("experience.atos.description3"),
        i18n("experience.atos.description4"),
      ],
      skills: ["Angular", "MongoDB", "Typescript", "HTML 5", "CSS 3", "Javascript"],
      companyUrl: "https://atos.com",
      logo: atosLogo,
    },
    {
      id: "atosinter",
      position: i18n("experience.atosinter.position"),
      company: "Atos",
      location: "Bordeaux, France",
      startDate: new Date("2018-02-01"),
      endDate: new Date("2018-09-30"),
      description: [
        i18n("experience.atosinter.description1"),
        i18n("experience.atosinter.description2"),
        i18n("experience.atosinter.description3"),
        i18n("experience.atosinter.description4"),
      ],
      skills: ["Angular", "MongoDB", "Typescript", "HTML 5", "CSS 3", "Javascript"],
      companyUrl: "https://atos.com",
      logo: atosLogo,
    },
  ];
}
