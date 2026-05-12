import PageLayout from "@/components/PageLayout";
import { getPortfolioData } from "@/data/portfolio";
import TechStackClient from "@/components/TechStackClient";

export const dynamic = "force-dynamic";

export default async function TechStack() {
  const data = getPortfolioData();
  
  return (
    <PageLayout>
      <TechStackClient data={data} />
    </PageLayout>
  );
}
