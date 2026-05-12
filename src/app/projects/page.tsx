import PageLayout from "@/components/PageLayout";
import { processData } from "@/data/portfolio";
import { getFreshPortfolioData } from "@/data/server-data";
import portfolioData from "@/data/portfolio.json";
import ProjectsClient from "@/components/ProjectsClient";

export default async function Projects() {
  const { projects } = getFreshPortfolioData(portfolioData, processData);
  
  return (
    <PageLayout>
      <ProjectsClient projects={projects} />
    </PageLayout>
  );
}
