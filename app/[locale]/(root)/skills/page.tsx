import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";
import { getI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default async function SkillsPage() {
  // Translation
  const i18n = await getI18n()

  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={i18n('skills.summary')}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
}
