"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { ChevronRight, Quote, Info } from "lucide-react";

const tenets = [
  {
    id: "01",
    title: "DATA_ORIENTED_DESIGN",
    content: "Optimization is not an afterthought. By leveraging DOTS and ECS, we architect systems that scale with the hardware, prioritizing cache locality and parallel processing over traditional deep inheritance hierarchies.",
    tags: ["ECS", "BURST", "PERFORMANCE"]
  },
  {
    id: "02",
    title: "MODULAR_ARCHITECTURE",
    content: "Building for longevity means building for change. Systems should be decoupled, testable, and reusable across projects. We treat the engine as a toolset, not a rigid constraint.",
    tags: ["DECOUPLING", "ASSEMBLIES", "IOC"]
  },
  {
    id: "03",
    title: "PIPELINE_AUTOMATION",
    content: "Human error is the primary bottleneck. If a task is repetitive, it must be automated. From build distribution to asset validation, the pipeline is as critical as the runtime.",
    tags: ["CI/CD", "PYTHON", "TOOLING"]
  },
  {
    id: "04",
    title: "PROFILING_CULTURE",
    content: "We don't guess; we measure. Constant profiling and benchmarking are integrated into the daily dev cycle, ensuring every byte of memory and every millisecond of CPU time is accounted for.",
    tags: ["PROFILER", "BENCHMARKING", "MEMORY"]
  }
];

export default function Manifesto() {
  return (
    <PageLayout>
      <section className="py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-xl"
          >
            <div>
              <h1 className="text-display-lg text-on-surface mb-xs">ENGINEERING_TENETS</h1>
              <div className="text-label-caps text-primary-fixed-dim">CORE_PHILOSOPHY // MANIFESTO</div>
            </div>

            <div className="glass-panel p-lg rounded-xl border-l-4 border-l-primary-fixed-dim">
              <Quote className="w-8 h-8 text-primary-fixed-dim mb-md opacity-50" />
              <p className="text-body-lg text-on-surface italic font-medium leading-relaxed">
                "Technical excellence is not just about writing code that works, but about engineering systems that empower and endure."
              </p>
            </div>

            <div className="space-y-sm">
              <h3 className="text-label-caps text-outline text-[10px] mb-md tracking-[0.2em]">INDEX // TENETS</h3>
              {tenets.map(tenet => (
                <div key={tenet.id} className="flex items-center gap-md group cursor-pointer p-sm rounded hover:bg-surface-container transition-colors">
                  <span className="text-code-sm text-primary-fixed-dim font-bold">{tenet.id}</span>
                  <span className="text-label-caps text-on-surface-variant group-hover:text-primary transition-colors">{tenet.title}</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-outline group-hover:text-primary-fixed-dim transition-transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>

            <div className="glass-panel p-md rounded flex items-center gap-md">
              <div className="w-10 h-10 bg-primary-container/10 border border-primary-container/20 rounded-full flex items-center justify-center">
                <Info className="w-5 h-5 text-primary-fixed-dim" />
              </div>
              <div>
                <div className="text-label-caps text-primary-fixed-dim text-[10px]">MANIFESTO_STATE</div>
                <div className="text-code-sm text-on-surface">IMMUTABLE // SIGNED</div>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 space-y-lg"
          >
            {tenets.map((tenet, i) => (
              <motion.article 
                key={tenet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-xl rounded-xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-lg text-[120px] font-bold text-on-surface/5 font-jetbrains pointer-events-none select-none leading-none">
                  {tenet.id}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-baseline gap-md mb-lg">
                    <span className="text-headline-md text-outline group-hover:text-primary-fixed-dim transition-colors">{tenet.id}</span>
                    <h2 className="text-headline-md text-on-surface">{tenet.title}</h2>
                  </div>
                  <p className="text-body-lg text-on-surface-variant mb-xl max-w-2xl leading-relaxed">
                    {tenet.content}
                  </p>
                  <div className="flex gap-sm">
                    {tenet.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-container-high border border-outline-variant/30 rounded text-[10px] font-label-caps text-outline group-hover:text-primary-fixed-dim group-hover:border-primary-fixed-dim/30 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
