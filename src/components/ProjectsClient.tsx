"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectsClientProps {
  projects: any[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <section className="py-xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-xl"
      >
        <h1 className="text-display-lg text-on-surface mb-xs uppercase">PROJECT_LOGS</h1>
        <div className="text-label-caps text-primary-fixed-dim border-l-2 border-primary-fixed-dim pl-md">
          MISSION_CRITICAL SYSTEMS & INTERACTIVE PRODUCTIONS
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
        {projects.map((project: any, i: number) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <Link href={`/projects/${project.id}`} className="block no-underline">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-outline-variant/30 glass-panel">
                {/* Image with overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-label-caps rounded-sm tech-edge">
                    {project.category}
                  </span>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 p-lg opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 bg-primary-fixed-dim rounded-full flex items-center justify-center text-on-primary shadow-lg tech-glow">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="mt-lg">
                <div className="flex gap-2 mb-sm">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-[9px] font-label-caps text-outline border border-outline/20 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-headline-md text-on-surface group-hover:text-primary-fixed-dim transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <div className="mt-md grid grid-cols-3 gap-sm border-t border-outline-variant/20 pt-md">
                  {project.metrics.map((metric: any) => (
                    <div key={metric.label}>
                      <div className="text-[9px] text-outline uppercase">{metric.label}</div>
                      <div className="text-label-caps text-on-surface text-[10px]">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
