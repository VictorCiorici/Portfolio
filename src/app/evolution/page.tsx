import PageLayout from "@/components/PageLayout";
import { processData } from "@/data/portfolio";
import { getFreshPortfolioData } from "@/data/server-data";
import portfolioData from "@/data/portfolio.json";
import EvolutionClient from "@/components/EvolutionClient";

export default async function Evolution() {
  const data = getFreshPortfolioData(portfolioData, processData);
  
  return (
    <PageLayout>
      <EvolutionClient data={data} />
    </PageLayout>
  );
}
