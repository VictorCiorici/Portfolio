import PageLayout from "@/components/PageLayout";
import { getPortfolioData } from "@/data/portfolio";
import ProjectsClient from "@/components/ProjectsClient";

export const dynamic = "force-dynamic";

export default async function Projects() {
  const { projects } = getPortfolioData();
  
  return (
    <PageLayout>
      <ProjectsClient projects={projects} />
    </PageLayout>
  );
}
