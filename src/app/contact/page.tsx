import PageLayout from "@/components/PageLayout";
import { processData } from "@/data/portfolio";
import { getFreshPortfolioData } from "@/data/server-data";
import portfolioData from "@/data/portfolio.json";
import ContactClient from "@/components/ContactClient";

export default async function Contact() {
  const data = getFreshPortfolioData(portfolioData, processData);

  return (
    <PageLayout>
      <section className="py-xl">
        <h1 className="text-display-lg text-on-surface mb-xl">
          Get in <span className="text-primary-fixed-dim">Touch</span>
        </h1>

        <ContactClient data={data} />
      </section>
    </PageLayout>
  );
}
