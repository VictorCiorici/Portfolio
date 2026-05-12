import PageLayout from "@/components/PageLayout";
import { getPortfolioData } from "@/data/portfolio";
import EvolutionClient from "@/components/EvolutionClient";

export const dynamic = "force-dynamic";

export default async function Evolution() {
  const data = getPortfolioData();
  
  return (
    <PageLayout>
      <EvolutionClient data={data} />
    </PageLayout>
  );
}
