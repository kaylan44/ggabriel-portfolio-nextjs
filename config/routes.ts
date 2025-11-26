import { getI18n } from "@/locales/server"

export async function getRoutesConfig() {
  // Translation
  const i18n = await getI18n()
  return {
    mainNav: [
      {
        title: i18n('skills.title'),
        href: "/skills",
      },
      // {
      //   title: i18n('projects.title'),
      //   href: "/projects",
      // },
      {
        title: i18n('experience.title'),
        href: "/experience",
      },
      // {
      //   title: i18n('contact.title'),
      //   href: "/contact",
      // },
      {
        title: i18n('resume.title'),
        href: "/resume",
      },
    ],
  }
};
