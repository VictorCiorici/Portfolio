"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, Code2, Layers, Cpu, Box, Terminal, Zap } from "lucide-react";

const stats = [
  { value: "30+", label: "SHIPPED TITLES" },
  { value: "60fps", label: "MINIMUM TARGET" },
  { value: "8", label: "PLATFORMS MASTERED" },
];

const technologies = [
  { name: "UNITY_CORE", icon: Layers },
  { name: "DOTS_ECS", icon: Cpu },
  { name: "XR_TOOLKIT", icon: Box },
  { name: "C#_7.0+", icon: Terminal },
  { name: "BURST_COMPILER", icon: Zap },
];

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center relative z-10 py-xl">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl opacity-30 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-surface-tint blur-[120px] rounded-full mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-inverse-primary blur-[100px] rounded-full mix-blend-screen opacity-50"
          />
          
          {/* Simulated Code Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 p-lg text-code-sm text-on-surface-variant whitespace-pre pointer-events-none hidden lg:block"
          >
{`using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

[UpdateInGroup(typeof(SimulationSystemGroup))]
public partial struct OptimizeRenderSystem : ISystem
{
    public void OnUpdate(ref SystemState state)
    {
        var deltaTime = SystemAPI.Time.DeltaTime;
        // High-performance DOTS computation
        new RenderJob { DT = deltaTime }.ScheduleParallel();
    }
}`}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-sm px-sm py-xs bg-surface-container-high border border-outline-variant rounded-default mb-lg tech-edge">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
            <span className="text-label-caps text-primary-fixed-dim">SYSTEM STATUS: OPTIMAL // 12_YRS_EXP</span>
          </div>
          
          <h1 className="text-display-lg text-on-surface mb-md">
            12 YEARS OF ARCHITECTING <br/>
            <span className="text-primary-fixed-dim">INTERACTIVE WORLDS</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-xl border-l-2 border-outline-variant pl-md"
          >
            Senior Unity Developer with 12+ years of expertise in the full development lifecycle—from 
            concept and architecture to high-performance implementation. Specializing in gameplay systems, 
            multiplayer architecture, and cross-platform optimization for PC, Mobile, and VR/AR.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-md">
            <Link 
              href="/projects" 
              className="bg-primary-container text-on-primary-container text-label-caps px-lg py-md rounded-default hover:bg-primary-fixed transition-all flex items-center justify-center gap-xs tech-edge tech-glow no-underline group"
            >
              EXPLORE PROJECTS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/tech-stack" 
              className="bg-transparent border border-outline text-primary-fixed-dim text-label-caps px-lg py-md rounded-default hover:border-primary-fixed-dim hover:bg-surface-container-high transition-all flex items-center justify-center gap-xs no-underline"
            >
              VIEW TECHNICAL STACK
              <Code2 className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="glass-panel p-lg rounded-xl hover:tech-glow transition-all group"
          >
            <div className="text-headline-md text-primary-fixed-dim mb-xs group-hover:scale-110 transition-transform origin-left">
              {stat.value}
            </div>
            <div className="text-label-caps text-on-surface-variant">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Tech Logo Bar */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="py-xl border-t border-b border-outline-variant/20 mb-xl flex flex-col items-center"
      >
        <div className="text-label-caps text-on-tertiary-container mb-lg opacity-60">
          TECHNOLOGIES DEPLOYED IN PRODUCTION
        </div>
        <div className="flex flex-wrap justify-center gap-xl">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-xs text-on-surface opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <tech.icon className="w-8 h-8" />
              <span className="text-headline-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </PageLayout>
  );
}
