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

export const experiences: ExperienceInterface[] = [
  {
    id: "cultura",
    position: "DevOps Engineer",
    company: "Cultura",
    location: "Bordeaux, France",
    startDate: new Date("2022-10-01"),
    endDate: new Date("2024-02-25"),
    description: [
      "Implementation and development of monitoring and visualization tools (Prometheus/Grafana/AlertManager), as well as management of monitoring and alerting for non-production and production environments.",
      "Deployment and optimization of projects through CI/CD pipelines using GitLab CI.",
      "Setup of DevOps tooling with Kubernetes & Helm, along with management, creation, and optimization of Docker images using Azure Container Registry.",
      "Development of Infrastructure as Code with Terraform and deployment of various Azure Cloud services, including support for Kubernetes cluster administration."
    ],
    skills: ["Kubernetes", "Docker", "Prometheus", "Ansible", "Python"],
    companyUrl: "https://cultura.com",
    logo: culturaLogo,
  },
  {
    id: "sanofi",
    position: "Industrial Device Expert",
    company: "Sanofi",
    location: "International",
    startDate: new Date("2020-08-01"),
    endDate: new Date("2022-09-01"),
    description: [
      'Management of industrial device fleets, deployment activities, and solution design & consulting in an international context within the “Mobility Industrial Devices” team, covering all SANOFI industrial sites.',
      'Management of multiple major SANOFI projects independently for the Mobility & Devices scope, including support with ordering, solution design, planning coordination, and deployment of new hardware/applications.',
      'Management of a fleet of approximately 4,000 devices across various sites worldwide, high-level support, and design of new solutions based on site requirements. Collaboration with industrial infrastructure teams (Wi-Fi, LAN, Firewall, AD management, cybersecurity, etc.).',
      'Design of an industrial device catalog and testing of new equipment to address SANOFI’s numerous IT challenges (Android, Windows, ATEX Zones 1 & 2, scanning devices, etc.).',
      'Coordination with various manufacturers and hardware suppliers to recommend optimal solutions for the sites (price/performance/quality) and co-construction of new projects in collaboration with suppliers.',
    ],
    skills: ["SOTI", "Velocity", "Project Management"],
    companyUrl: "https://sanofi.com",
    logo: sanofiLogo,

  },
  {
    id: "atos",
    position: "Fullstack Developer",
    company: "Atos",
    location: "Bordeaux, France",
    startDate: new Date("2018-10-01"),
    endDate: new Date("2020-08-01"),
    description: [
      "Full-Stack development within a Scrum team for an innovative corporate carpooling solution in an IoT environment, including the creation of the entire application ecosystem from scratch.",
      "Design of a containerized backend environment supporting the carpooling system and integrating multiple data sources (GPS, public transport, application data, parking information, etc.)",
      "Management of environments and a CI/CD pipeline to ensure deployment quality (Docker/Jenkins/SonarQube)",
      "Development carried out following the SCRUM methodology"
    ],
    skills: [
      "Angular",
      "MongoDB",
      "Typescript",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://builtdesign.in",
    logo: atosLogo,
  },
  {
    id: "atosinter",
    position: "Intern - Fullstack Developer",
    company: "Atos",
    location: "Bordeaux, France",
    startDate: new Date("2018-02-01"),
    endDate: new Date("2020-08-01"),
    description: [
      "Design and development of cross-platform mobile applications integrated into a Smart-City management system with multimodal transportation.",
      "Design of a containerized backend environment supporting the carpooling system and integrating multiple data sources (GPS, public transport, application data, parking information, etc.)",
      "Management of environments and a CI/CD pipeline to ensure deployment quality (Docker/Jenkins/SonarQube)",
      "Development carried out following the SCRUM methodology"
    ],
    skills: [
      "Angular",
      "MongoDB",
      "Typescript",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://atos.com",
    logo: atosLogo,
  },
];
