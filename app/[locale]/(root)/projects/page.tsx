import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { getProjects, ProjectInterface } from "@/config/projects";
import { pagesConfigMetadata } from "@/config/page-metadata";
import { getPagesConfig } from "@/config/pages";
import { getI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: pagesConfigMetadata.projects.metadata.title,
  description: pagesConfigMetadata.projects.metadata.description,
};

const renderContent = (tabVal: string, projectArr: ProjectInterface[]) => {
  if (tabVal === "personal") {
    projectArr = projectArr.filter((val) => val.type === "Personal");
  } else if (tabVal === "professional") {
    projectArr = projectArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default async function ProjectsPage() {
  const i18n = await getI18n();
  const pagesConfig = await getPagesConfig();
  let projectArr = await getProjects();

  const tabItems = [
    {
      value: "all",
      label: i18n('projects.all'),
      content: renderContent("all", projectArr),
    },
    {
      value: "personal",
      label: i18n('projects.personal'),
      content: renderContent("personal", projectArr),
    },
    {
      value: "professional",
      label: i18n('projects.professional'),
      content: renderContent("professional", projectArr),
    },
  ];

  return (
    <PageContainer
      title={i18n('projects.title')}
      description={i18n('projects.description')}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
