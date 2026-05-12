import PageLayout from "@/components/PageLayout";
import { getPortfolioData } from "@/data/portfolio";
import ManifestoClient from "@/components/ManifestoClient";

export const dynamic = "force-dynamic";

export default async function Manifesto() {
  const { manifesto } = getPortfolioData();
  
  return (
    <PageLayout>
      <ManifestoClient manifesto={manifesto} />
    </PageLayout>
  );
}
