import PageLayout from "@/components/PageLayout";
import { processData } from "@/data/portfolio";
import { getFreshPortfolioData } from "@/data/server-data";
import portfolioData from "@/data/portfolio.json";
import HomeClient from "@/components/HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = getFreshPortfolioData(portfolioData, processData);
  
  return (
    <PageLayout>
      <HomeClient data={data} />
    </PageLayout>
  );
}
