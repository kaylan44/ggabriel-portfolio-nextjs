import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { pagesConfigMetadata } from "@/config/page-metadata";
import { getPagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: `${pagesConfigMetadata.experience.metadata.title} | Professional Experience Timeline`,
  description: `${pagesConfigMetadata.experience.metadata.description} Explore my professional journey and career milestones in software development.`,
  keywords: [
    "experience timeline",
    "professional experience",
    "software developer experience",
    "developer portfolio",
    "work experience",
  ],
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default async function ExperiencePage() {
  const pagesConfig = await getPagesConfig();

  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Timeline experiences={experiences} />
    </PageContainer>
  );
}
