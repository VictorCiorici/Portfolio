"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { manifesto } from "@/data/portfolio";

export default function Manifesto() {
  return (
    <PageLayout>
      <section className="py-xl">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-xl"
          >
            <h1 className="text-display-lg text-on-surface mb-md">{manifesto.headline}</h1>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {manifesto.intro}
            </p>
          </motion.div>

          <div className="space-y-24">
            {manifesto.tenets.map((tenet, i) => (
              <motion.article 
                key={tenet.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-lg"
              >
                <div className="md:col-span-2">
                  <span className="text-display-sm text-primary-fixed-dim opacity-30 font-jetbrains tracking-tighter">
                    {tenet.id}
                  </span>
                </div>
                <div className="md:col-span-10 glass-panel p-xl rounded-xl relative overflow-hidden group hover:tech-glow transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary-fixed-dim opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h2 className="text-headline-md text-on-surface mb-md uppercase tracking-tight group-hover:text-primary-fixed-dim transition-colors">
                    {tenet.title}
                  </h2>
                  <p className="text-body-lg text-on-surface-variant leading-relaxed">
                    {tenet.content}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 p-xl border border-outline-variant/30 rounded-xl bg-surface-container-low text-center"
          >
            <div className="text-label-caps text-outline mb-4">COMMIT_HASH // STABLE_RELEASE</div>
            <div className="text-headline-sm text-on-surface uppercase tracking-widest">
              Built for performance. Architected for scale.
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
