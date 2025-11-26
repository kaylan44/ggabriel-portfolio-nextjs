import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { getPagesConfig } from "@/config/pages";
import { pagesConfigMetadata } from "@/config/page-metadata";
import ResumeCard from "@/components/resume/resume-card";


export const metadata: Metadata = {
  title: pagesConfigMetadata.resume.metadata.title,
  description: pagesConfigMetadata.resume.metadata.description,
};

export default async function ResumePage() {
  const pagesConfig = await getPagesConfig();

  return (
    <PageContainer
      title={pagesConfig.resume.title}
      description={pagesConfig.resume.description}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ResumeCard />
        </div>
      </div>
    </PageContainer>
  );
}
