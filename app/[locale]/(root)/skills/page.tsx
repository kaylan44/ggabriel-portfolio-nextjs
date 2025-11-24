import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { getSkills } from "@/config/skills";
import { getI18n } from "@/locales/server";
import { pagesConfigMetadata } from "@/config/page-metadata";
import { getPagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfigMetadata.skills.metadata.title,
  description: pagesConfigMetadata.skills.metadata.description,
};

export default async function SkillsPage() {
  // Translation
  const i18n = await getI18n();

  const skills = await getSkills();
  const pagesConfig = await getPagesConfig();


  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={i18n('skills.summary')}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
}
