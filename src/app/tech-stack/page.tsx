"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Layers, Palette, Terminal, Cpu, Monitor, Zap } from "lucide-react";

const bentoItems = [
  {
    title: "ENGINE_MASTERY",
    icon: Layers,
    skills: [
      { name: "Unity 3D / 2D", desc: "Expert knowledge of Core, HDRP, and URP pipelines." },
      { name: "C# / .NET", desc: "Advanced software architecture and design patterns." },
      { name: "DOTS / ECS", desc: "Building scalable data-oriented systems for massive simulations." }
    ],
    tags: ["CORE", "RUNTIME", "DOTS"]
  },
  {
    title: "GRAPHICS_PIPELINE",
    icon: Palette,
    skills: [
      { name: "Shader Development", desc: "Custom HLSL shaders and PBR materials." },
      { name: "Procedural Generation", desc: "Real-time generation of meshes, textures, and levels." },
      { name: "Rendering Optimization", desc: "GPU-accelerated simulations and draw call reduction." }
    ],
    tags: ["SHADERS", "GPU", "OPTIMIZATION"]
  },
  {
    title: "SYSTEM_ARCHITECTURE",
    icon: Terminal,
    skills: [
      { name: "Multiplayer Systems", desc: "Client/Server architecture using Photon Fusion." },
      { name: "Tools Development", desc: "Custom level editors and workflow automation utilities." },
      { name: "VR / AR Foundation", desc: "Immersive apps for Oculus, GearVR, and AR platforms." }
    ],
    tags: ["NETWORKING", "VR_AR", "TOOLS"]
  },
  {
    title: "PLATFORMS_MASTERED",
    icon: Monitor,
    skills: [
      { name: "PC (Steam)", desc: "Full lifecycle development for desktop releases." },
      { name: "Mobile (iOS / Android)", desc: "Optimization for high-traffic mobile titles." },
      { name: "WebGL / HTML5", desc: "Browser-based interactive experiences and simulations." }
    ],
    tags: ["PC", "MOBILE", "WEBGL"]
  }
];

const timeline = [
  { year: "2025 - PRESENT", role: "Senior Unity Developer", company: "Limit Break", active: true },
  { year: "2024 - 2025", role: "Senior Unity Developer", company: "SKR Games", active: false },
  { year: "2023 - 2024", role: "Senior Unity Developer", company: "Playgendary", active: false },
  { year: "2022 - 2023", role: "Lead Unity Developer", company: "GOAT Games Entertainment", active: false },
  { year: "2019 - 2022", role: "Lead Unity Developer", company: "Iron Will", active: false },
  { year: "2017 - 2019", role: "Senior Unity Developer", company: "Redox Entertainment", active: false },
  { year: "2013 - 2017", role: "Unity Developer", company: "01Devs", active: false },
  { year: "2013", role: "Junior Developer", company: "ITProlab", active: false },
];

export default function TechStack() {
  return (
    <PageLayout>
      <section className="py-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-xl"
        >
          <h1 className="text-display-lg text-on-surface mb-xs uppercase">SYSTEM_CAPABILITIES</h1>
          <div className="text-label-caps text-primary-fixed-dim border-l-2 border-primary-fixed-dim pl-md">
            TECHNICAL ARCHITECTURE & PRODUCTION_READY SKILLS
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-lg mb-20">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-lg rounded-xl relative overflow-hidden group hover:tech-glow transition-all"
            >
              <item.icon className="absolute -top-4 -right-4 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="flex items-center gap-md mb-lg">
                <div className="p-sm bg-primary-container/10 border border-primary-container/30 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary-fixed-dim" />
                </div>
                <h2 className="text-headline-sm text-on-surface">{item.title}</h2>
              </div>
              <div className="space-y-md mb-lg">
                {item.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="text-label-caps text-primary-fixed-dim mb-1">{skill.name}</div>
                    <p className="text-body-md text-on-surface-variant">{skill.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-sm pt-md border-t border-outline-variant/30">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-label-caps text-outline border border-outline/20 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-label-caps text-on-tertiary-container mb-xl text-center"
          >
            PROFESSIONAL_EVOLUTION
          </motion.h2>
          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-fixed-dim via-outline-variant/30 to-transparent md:-translate-x-1/2" />
            
            <div className="space-y-xl">
              {timeline.map((job, i) => (
                <motion.div 
                  key={`${job.company}-${job.year}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-background z-10 md:-translate-x-1/2 transition-colors ${
                    job.active ? "bg-primary-fixed-dim shadow-[0_0_10px_rgba(0,242,255,0.8)]" : "bg-outline-variant"
                  }`} />
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="glass-panel p-lg rounded-xl hover:tech-glow transition-all">
                      <div className="text-code-sm text-primary-fixed-dim mb-1">{job.year}</div>
                      <h3 className="text-headline-sm text-on-surface mb-xs uppercase">{job.role}</h3>
                      <div className="text-label-caps text-on-surface-variant opacity-70">{job.company}</div>
                    </div>
                  </div>
                  
                  {/* Empty Spacer for desktop */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
