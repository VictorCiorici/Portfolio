import PageLayout from "@/components/PageLayout";
import { processData } from "@/data/portfolio";
import { getFreshPortfolioData } from "@/data/server-data";
import portfolioData from "@/data/portfolio.json";
import TechStackClient from "@/components/TechStackClient";

export default async function TechStack() {
  const data = getFreshPortfolioData(portfolioData, processData);
  
  return (
    <PageLayout>
      <TechStackClient data={data} />
    </PageLayout>
  );
}
