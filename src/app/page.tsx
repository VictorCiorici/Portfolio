import PageLayout from "@/components/PageLayout";
import { getPortfolioData } from "@/data/portfolio";
import HomeClient from "@/components/HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = getPortfolioData();
  
  return (
    <PageLayout>
      <HomeClient data={data} />
    </PageLayout>
  );
}
