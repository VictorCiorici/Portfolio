"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { ArrowLeft, CheckCircle2, Cpu, Zap, Box } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p: Project) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <section className="py-xl">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-sm text-label-caps text-outline hover:text-primary-fixed-dim transition-colors mb-xl no-underline group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          BACK_TO_PROJECT_LOGS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="mb-xl">
              <span className="text-label-caps text-primary-fixed-dim mb-xs block tracking-widest">{project.category}</span>
              <h1 className="text-display-md text-on-surface uppercase mb-md">{project.title}</h1>
              <div className="flex gap-sm">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container-high border border-outline-variant/30 rounded-sm text-code-sm text-on-surface-variant font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-lg rounded-xl mb-xl relative overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
              <div className="relative z-10 aspect-video flex items-center justify-center">
                <div className="text-label-caps text-on-surface opacity-40 border border-on-surface/20 px-xl py-lg rounded tech-edge backdrop-blur-md">
                  RENDER_VIEWPORT_ACTIVE
                </div>
              </div>
            </div>

            <div className="space-y-xl">
              <div>
                <h2 className="text-headline-sm text-on-surface mb-md flex items-center gap-sm">
                  <Cpu className="w-5 h-5 text-primary-fixed-dim" />
                  TECHNICAL_CHALLENGES
                </h2>
                <div className="grid grid-cols-1 gap-md">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="flex gap-md p-md glass-panel rounded-lg border-l-2 border-l-primary-fixed-dim">
                      <div className="text-code-sm text-primary-fixed-dim font-bold">{String(i + 1).padStart(2, '0')}</div>
                      <p className="text-body-md text-on-surface-variant leading-relaxed">
                        {challenge.split(/(\[.*?\]\(.*?\))/g).map((part, index) => {
                          const match = part.match(/\[(.*?)\]\((.*?)\)/);
                          if (match) {
                            return (
                              <a 
                                key={index} 
                                href={match[2]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary-fixed-dim hover:underline underline-offset-4"
                              >
                                {match[1]}
                              </a>
                            );
                          }
                          return part;
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-lg"
          >
            <div className="glass-panel p-lg rounded-xl">
              <h2 className="text-label-caps text-on-tertiary-container mb-lg border-b border-outline-variant/30 pb-xs">SYSTEM_METRICS</h2>
              <div className="space-y-lg">
                {project.metrics.map(metric => (
                  <div key={metric.label}>
                    <div className="text-[10px] text-outline uppercase mb-1">{metric.label}</div>
                    <div className="text-headline-sm text-on-surface uppercase tracking-tight">{metric.value}</div>
                    <div className="h-1 w-full bg-surface-container-highest mt-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-primary-fixed-dim"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-lg rounded-xl">
              <h2 className="text-label-caps text-on-tertiary-container mb-lg border-b border-outline-variant/30 pb-xs">PRODUCTION_STACK</h2>
              <div className="grid grid-cols-2 gap-md">
                {[
                  { icon: Zap, label: "BURST_COMPILER" },
                  { icon: Box, label: "ECS_ENGINE" },
                  { icon: Cpu, label: "SYSTEM_GRAPH" },
                  { icon: CheckCircle2, label: "PRODUCTION_READY" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-sm p-sm bg-surface-container-high/50 rounded border border-outline-variant/20">
                    <item.icon className="w-4 h-4 text-primary-fixed-dim" />
                    <span className="text-[10px] font-label-caps text-on-surface-variant">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-lg rounded-xl border-primary-fixed-dim/20">
              <h2 className="text-label-caps text-primary-fixed-dim mb-md">MISSION_OBJECTIVE</h2>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                Project status is verified as production-stable. Architecture adheres to high-performance data-oriented standards. Code is optimized for multi-threaded execution and minimal memory allocation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
