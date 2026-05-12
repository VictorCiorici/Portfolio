import PageLayout from "@/components/PageLayout";
import { processData } from "@/data/portfolio";
import { getFreshPortfolioData } from "@/data/server-data";
import portfolioData from "@/data/portfolio.json";
import ManifestoClient from "@/components/ManifestoClient";

export const dynamic = "force-dynamic";

export default async function Manifesto() {
  const { manifesto } = getFreshPortfolioData(portfolioData, processData);
  
  return (
    <PageLayout>
      <ManifestoClient manifesto={manifesto} />
    </PageLayout>
  );
}
