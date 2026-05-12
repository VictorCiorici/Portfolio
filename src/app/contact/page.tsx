import PageLayout from "@/components/PageLayout";
import { getPortfolioData } from "@/data/portfolio";
import ContactClient from "@/components/ContactClient";

export const dynamic = "force-dynamic";

export default async function Contact() {
  const data = getPortfolioData();

  return (
    <PageLayout>
      <section className="py-xl">
        <h1 className="text-display-lg text-on-surface mb-xl">
          COMM_LINK // <span className="text-primary-fixed-dim">CONTACT</span>
        </h1>

        <ContactClient data={data} />
      </section>
    </PageLayout>
  );
}
