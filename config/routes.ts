import { getCurrentLocale, getI18n } from "@/locales/server"

export async function getRoutesConfig() {
  // Translation
  const [locale, i18n] = await Promise.all([getCurrentLocale(), getI18n()])
  return {
    mainNav: [
      {
        title: i18n('skills.title'),
        href: `/${locale}/skills`,
      },
      // {
      //   title: i18n('projects.title'),
      //   href: `/${locale}/projects`,
      // },
      {
        title: i18n('experience.title'),
        href: `/${locale}/experience`,
      },
      // {
      //   title: i18n('contact.title'),
      //   href: `/${locale}/contact`,
      // },
      {
        title: i18n('resume.title'),
        href: `/${locale}/resume`,
      },
    ],
  }
};
