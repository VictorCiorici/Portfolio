"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "neon-synthesis",
    name: "PROJECT_NEON_SYNTHESIS",
    role: "Lead Gameplay Engineer",
    description: "High-performance cybernetic simulation with DOTS-based entity management and custom SRP rendering.",
    tags: ["HDRP", "C#", "DOTS"],
    image: "https://lh3.googleusercontent.com/aida-public/AK-Wp2b-X-v-..." // Simplified for now
  },
  {
    id: "node-weaver",
    name: "PROJECT_NODE_WEAVER",
    role: "Technical Architect",
    description: "Node-based visual scripting engine for procedural world generation in Unity.",
    tags: ["TOOLS", "C#", "EDITOR_EXT"],
    image: "https://lh3.googleusercontent.com/aida-public/AK-Wp2b-X-v-..."
  },
  {
    id: "aura-ar",
    name: "PROJECT_AURA_AR",
    role: "XR Speciallist",
    description: "Location-based AR experience with advanced occlusion and real-time lighting estimation.",
    tags: ["AR_FOUNDATION", "URP", "MOBILE"],
    image: "https://lh3.googleusercontent.com/aida-public/AK-Wp2b-X-v-..."
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <PageLayout>
      <section className="py-xl">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-display-lg text-on-surface mb-lg"
        >
          FIELD_DATA // <span className="text-primary-fixed-dim">PROJECTS</span>
        </motion.h1>

        {/* Filter Tabs - Placeholder for now */}
        <div className="flex gap-sm mb-xl overflow-x-auto pb-2">
          {["ALL_VECTORS", "PC/CONSOLE", "VR/AR", "TOOLS/PLUGINS"].map((tab, i) => (
            <button 
              key={tab}
              className={`px-md py-xs rounded-default text-label-caps whitespace-nowrap transition-all ${
                i === 0 ? "bg-primary-container text-on-primary-container tech-glow" : "bg-surface-container-high text-on-surface-variant hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="glass-panel rounded-xl overflow-hidden group hover:tech-glow transition-all"
            >
              <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 z-10" />
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
              <div className="p-lg">
                <Link 
                  href={`/projects/${project.id}`}
                  className="text-headline-sm text-on-surface group-hover:text-primary-fixed-dim transition-colors mb-xs block no-underline"
                >
                  {project.name}
                </Link>
                <div className="text-code-sm text-outline mb-md uppercase tracking-wider">
                  Role: {project.role}
                </div>
                <p className="text-body-md text-on-surface-variant mb-lg line-clamp-2">
                  {project.description}
                </p>
                <div className="pt-md border-t border-outline-variant/30 flex justify-between items-center">
                  <div className="flex gap-xs">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] font-label-caps rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="w-4 h-4 text-outline group-hover:text-primary-fixed-dim transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageLayout>
  );
}
