"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { ArrowLeft, CheckCircle2, Cpu, Zap, Box, Globe, Play, Image as ImageIcon } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { notFound } from "next/navigation";

interface ProjectDetailClientProps {
  id: string;
}

export default function ProjectDetailClient({ id }: ProjectDetailClientProps) {
  const project = projects.find((p: Project) => p.id === id);

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
          BACK TO PROJECT LOGS
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
              <h1 className="text-display-sm sm:text-display-md text-on-surface uppercase mb-md">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-sm">
                <div className={`px-3 py-1 rounded-sm text-[10px] font-label-caps border ${
                  project.status === "released" 
                    ? "bg-primary-container/10 border-primary-fixed-dim text-primary-fixed-dim" 
                    : project.status === "unreleased"
                      ? "bg-tertiary-container/10 border-tertiary-fixed text-tertiary-fixed"
                      : "bg-surface-container-high border-outline text-outline"
                }`}>
                  {project.status === "released" ? "STATUS RELEASED" : 
                   project.status === "unreleased" ? "STATUS UNRELEASED" : 
                   "STATUS IN DEVELOPMENT"}
                </div>
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container-high border border-outline-variant/30 rounded-sm text-code-sm text-on-surface-variant font-medium whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-lg rounded-xl mb-xl relative overflow-hidden group aspect-video">
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                  project.status === 'unreleased' 
                    ? 'opacity-40 grayscale group-hover:grayscale-0' 
                    : 'opacity-100 grayscale-0'
                }`}
                style={{ backgroundImage: `url(/Portfolio${project.image})` }}
              />
              
              {/* Status Overlay only for Unreleased */}
              {project.status === 'unreleased' && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-label-caps text-on-surface opacity-40 border border-on-surface/20 px-xl py-lg rounded tech-edge backdrop-blur-md">
                    UNRELEASED PROJECT
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-xl">
              <div>
                <h2 className="text-headline-sm text-on-surface mb-md flex items-center gap-sm">
                  <Cpu className="w-5 h-5 text-primary-fixed-dim" />
                  TECHNICAL CHALLENGES
                </h2>
                <div className="grid grid-cols-1 gap-md">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="flex gap-md p-md glass-panel rounded-lg border-l-2 border-l-primary-fixed-dim">
                      <div className="text-code-sm text-primary-fixed-dim font-bold">{String(i + 1).padStart(2, '0')}</div>
                      <p className="text-body-md text-on-surface-variant leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h2 className="text-headline-sm text-on-surface mb-md flex items-center gap-sm">
                    <ImageIcon className="w-5 h-5 text-primary-fixed-dim" />
                    PROJECT GALLERY
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="glass-panel p-sm rounded-xl overflow-hidden group">
                        <img 
                          src={`/Portfolio${img}`} 
                          alt={`${project.title} Gallery ${i + 1}`}
                          className="w-full aspect-video object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-lg"
          >
            <div className="glass-panel p-lg rounded-xl">
              <h2 className="text-label-caps text-on-tertiary-container mb-lg border-b border-outline-variant/30 pb-xs">SYSTEM METRICS</h2>
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
              <h2 className="text-label-caps text-on-tertiary-container mb-lg border-b border-outline-variant/30 pb-xs">PRODUCTION STACK</h2>
              <div className="grid grid-cols-2 gap-md">
                {[
                  { icon: Zap, label: "BURST COMPILER" },
                  { icon: Box, label: "ECS ENGINE" },
                  { icon: Cpu, label: "SYSTEM GRAPH" },
                  { icon: CheckCircle2, label: "PRODUCTION READY" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-sm p-sm bg-surface-container-high/50 rounded border border-outline-variant/20">
                    <item.icon className="w-4 h-4 text-primary-fixed-dim" />
                    <span className="text-[10px] font-label-caps text-on-surface-variant">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-lg rounded-xl border-primary-fixed-dim/20">
              <h2 className="text-label-caps text-primary-fixed-dim mb-md">MISSION OBJECTIVE</h2>
              <p className="text-body-sm text-on-surface-variant leading-relaxed mb-lg">
                Project status is verified as production-stable. Architecture adheres to high-performance data-oriented standards. Code is optimized for multi-threaded execution and minimal memory allocation.
              </p>
              
              <div className="space-y-sm">
                {project.projectUrl && (
                  <a 
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-md bg-primary-container text-on-primary-container rounded-default flex items-center justify-center gap-sm text-label-caps hover:bg-primary-fixed-dim transition-all tech-edge tech-glow no-underline"
                  >
                    <Globe className="w-4 h-4" />
                    OPEN PROJECT PAGE
                  </a>
                )}
                {project.videoUrl && (
                  <a 
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-md border border-outline text-on-surface rounded-default flex items-center justify-center gap-sm text-label-caps hover:bg-surface-container-high transition-all no-underline"
                  >
                    <Play className="w-4 h-4" />
                    WATCH VIDEO
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
