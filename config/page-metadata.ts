import { ValidPages } from "./constants";

type PagesConfigMetadata = {
  [key in ValidPages]: {
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfigMetadata: PagesConfigMetadata = {
  home: {
    metadata: {
      title: "Home",
      description: "Guillaume Gabriel's portfolio website.",
    },
  },
  skills: {
    metadata: {
      title: "Skills",
      description:
        "Guillaume Gabriel's key skills that define his professional identity.",
    },
  },
  projects: {
    metadata: {
      title: "Projects",
      description: "Guillaume Gabriel's projects in building web applications.",
    },
  },
  contact: {
    metadata: {
      title: "Contact",
      description: "Contact Guillaume Gabriel.",
    },
  },
  experience: {
    metadata: {
      title: "Experience",
      description:
        "Guillaume Gabriel's professional journey and experience timeline.",
    },
  },
};