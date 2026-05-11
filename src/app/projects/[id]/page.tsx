"use client";

import { use } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { PlayCircle, Code, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const projectData = {
  "neon-synthesis": {
    name: "PROJECT_NEON_SYNTHESIS",
    role: "Lead Gameplay Engineer",
    description: "A high-performance cybernetic simulation built to push the limits of Unity's Data-Oriented Technology Stack (DOTS). This project explores the intersection of massive-scale entity management and high-fidelity HDRP rendering.",
    tags: ["HDRP", "C#", "DOTS", "COMPUTE_SHADERS"],
    metrics: [
      { value: "60FPS", label: "TARGET" },
      { value: "-40%", label: "DRAW_CALLS" },
      { value: "2ms", label: "GEN_TIME" },
      { value: "4K", label: "TEXTURES" }
    ],
    challenges: [
      { title: "Memory Management", desc: "Optimizing the memory footprint for over 100,000 active entities using custom Burst-compiled jobs." },
      { title: "LOD Blending", desc: "Implementing a custom GPU-based LOD system to handle transition artifacts in high-density environments." },
      { title: "Determinism", desc: "Ensuring frame-perfect determinism across networked clients for physics-critical interactions." }
    ]
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projectData[id as keyof typeof projectData] || projectData["neon-synthesis"];

  return (
    <PageLayout>
      <section className="py-xl">
        <Link href="/projects" className="inline-flex items-center gap-xs text-label-caps text-outline hover:text-primary-fixed-dim transition-colors mb-lg group no-underline">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_GALLERY
        </Link>

        {/* Hero Banner */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-xl glass-panel group">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AK-Wp2b-X-v-')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000" />
          
          <div className="absolute bottom-0 left-0 p-xl z-20 max-w-3xl">
            <div className="flex gap-sm mb-md">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-primary-container/20 border border-primary-container/30 text-primary-fixed-dim text-[10px] font-label-caps rounded">
                  {tag}
                </span>
              ))}
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-display-lg text-on-surface mb-md tech-glow"
              style={{ textShadow: "0 0 15px rgba(0, 242, 255, 0.3)" }}
            >
              {project.name}
            </motion.h1>
            <div className="flex flex-wrap gap-md">
              <button className="bg-primary-container text-on-primary-container font-label-caps px-lg py-sm rounded tech-edge tech-glow hover:bg-primary-fixed transition-all flex items-center gap-sm">
                <PlayCircle className="w-5 h-5" />
                WATCH_TRAILER
              </button>
              <button className="bg-transparent border border-outline/30 text-on-surface font-label-caps px-lg py-sm rounded hover:bg-surface-container-high transition-all flex items-center gap-sm">
                <Code className="w-5 h-5" />
                VIEW_CODE
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-xl">
            <div>
              <h2 className="text-label-caps text-on-tertiary-container mb-lg border-b border-outline-variant/30 pb-xs">TECHNICAL_BRIEF</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed mb-xl">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                {project.metrics.map(metric => (
                  <div key={metric.label} className="glass-panel p-lg rounded-xl flex flex-col items-center justify-center text-center">
                    <div className="text-headline-md text-primary-fixed-dim">{metric.value}</div>
                    <div className="text-label-caps text-on-surface-variant text-[10px]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-label-caps text-on-tertiary-container mb-lg border-b border-outline-variant/30 pb-xs">VISUAL_SAMPLES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="aspect-video glass-panel rounded-xl overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-background/60 backdrop-blur-sm">
                    <div className="text-label-caps text-primary-fixed-dim">COMPUTE_NODE_GRAPH</div>
                  </div>
                  <div className="w-full h-full bg-surface-container-highest opacity-40 grid-bg" />
                </div>
                <div className="aspect-video glass-panel rounded-xl overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-background/60 backdrop-blur-sm">
                    <div className="text-label-caps text-primary-fixed-dim">WIREFRAME_TOPOLOGY</div>
                  </div>
                  <div className="w-full h-full bg-surface-container-highest opacity-40 grid-bg" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-lg rounded-xl sticky top-[100px]">
              <h2 className="text-label-caps text-on-tertiary-container mb-lg border-b border-outline-variant/30 pb-xs">KEY_CHALLENGES</h2>
              <div className="space-y-lg">
                {project.challenges.map((challenge, i) => (
                  <div key={challenge.title} className="flex gap-md">
                    <div className="mt-1">
                      {i === 0 ? <AlertTriangle className="w-5 h-5 text-error" /> : <CheckCircle2 className="w-5 h-5 text-primary-fixed-dim" />}
                    </div>
                    <div>
                      <h3 className="text-label-caps text-on-surface mb-xs">{challenge.title}</h3>
                      <p className="text-code-sm text-on-surface-variant">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-xl p-md bg-surface-container-highest/30 border border-outline-variant/30 rounded italic text-code-sm text-outline">
                "This project represents the current peak of our HDRP + DOTS optimization workflow."
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
