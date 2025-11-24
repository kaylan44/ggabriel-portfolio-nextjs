import { ValidPages } from "./constants";
import { getI18n } from "@/locales/server";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export async function getPagesConfig(): Promise<PagesConfig> {
  // Translation
  const i18n = await getI18n()

  return {
    home: {
      title: i18n('home.title'),
      description: i18n('home.description'),
      metadata: {
        title: i18n('home.title'),
        description: i18n('home.metadata.description'),
      },
    }, 
    skills: {
      title: i18n('skills.title'),
      description: i18n('skills.description'),
      metadata: {
        title: i18n('skills.title'),
        description: i18n('skills.metadata.description'),
      },
    },
    projects: {
      title: i18n('projects.title'),
      description: i18n('projects.description'),
      metadata: {
        title: i18n('projects.title'),
        description: i18n('projects.metadata.description'),
      },
    },
    contact: {
      title: i18n('contact.title'),
      description: i18n('contact.description'),
      metadata: {
        title: i18n('contact.title'),
        description: i18n('contact.metadata.description'),
      },
    },
    experience: {
      title: i18n('experience.title'),
      description: i18n('experience.description'),
      metadata: {
        title: i18n('experience.title'),
        description: i18n('experience.metadata.description'),
      },
    },
  }

};
