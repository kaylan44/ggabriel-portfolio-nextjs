import { Icons } from "@/components/common/icons";
import { getI18n } from "@/locales/server";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export async function createSkills() {
  // Translation
  const i18n = await getI18n()

  return (
    [
      {
        name: "Next.js",
        description: i18n('skills.nextJs.description'),
        rating: 5,
        icon: Icons.nextjs,
      },
      {
        name: "React",
        description: i18n('skills.react.description'),
        rating: 5,
        icon: Icons.react,
      },
      {
        name: "Node.js",
        description: i18n('skills.nodejs.description'),
        rating: 4,
        icon: Icons.nodejs,
      },
      {
        name: "MongoDB",
        description: i18n('skills.mongodb.description'),
        rating: 4,
        icon: Icons.mongodb,
      },
      {
        name: "Typescript",
        description: i18n('skills.typescript.description'),
        rating: 5,
        icon: Icons.typescript,
      },
      {
        name: "Javascript",
        description: i18n('skills.javascript.description'),
        rating: 4,
        icon: Icons.javascript,
      },
      {
        name: "HTML 5",
        description: i18n('skills.html5.description'),
        rating: 4,
        icon: Icons.html5,
      },
      {
        name: "IONIC",
        description: i18n('skills.ionic.description'),
        rating: 4,
        icon: Icons.ionic,
      },
      {
        name: "Angular",
        description: i18n('skills.angular.description'),
        rating: 5,
        icon: Icons.angular,
      },
      {
        name: "Terraform",
        description: i18n('skills.terraform.description'),
        rating: 4,
        icon: Icons.terraform,
      },
      {
        name: "Docker",
        description: i18n('skills.docker.description'),
        rating: 5,
        icon: Icons.socketio,
      },
      {
        name: "Tailwind CSS",
        description: i18n('skills.tailwindcss.description'),
        rating: 4,
        icon: Icons.tailwindcss,
      },
      {
        name: "Azure Cloud",
        description: i18n('skills.azurecloud.description'),
        rating: 3,
        icon: Icons.azurecloud,
      },
      {
        name: "Bootstrap",
        description: i18n('skills.bootstrap.description'),
        rating: 2,
        icon: Icons.bootstrap,
      },
      {
        name: "MySQL",
        description: i18n('skills.mysql.description'),
        rating: 3,
        icon: Icons.mysql,
      },
      {
        name: "Prometheus",
        description: i18n('skills.prometheus.description'),
        rating: 4,
        icon: Icons.prometheus,
      },
      {
        name: "Grafana",
        description: i18n('skills.grafana.description'),
        rating: 4,
        icon: Icons.grafana,
      },
      {
        name: "Kubernetes",
        description: i18n('skills.kubernetes.description'),
        rating: 4,
        icon: Icons.kubernetes,
      },
      {
        name: "Helm",
        description: i18n('skills.helm.description'),
        rating: 4,
        icon: Icons.helm,
      }
    ]
  )
}

export async function getSkills() {
  const skills = await createSkills();

  return skills.slice()
    .sort((a, b) => b.rating - a.rating);
}

export async function getfeaturedSkills() {
  const skills = await createSkills();

  return skills.slice(0, 6);
}
