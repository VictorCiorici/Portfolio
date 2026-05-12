"use client";

import { motion } from "framer-motion";
import { History, Milestone, Briefcase, GraduationCap, Target, Cpu } from "lucide-react";

interface EvolutionClientProps {
  data: any;
}

export default function EvolutionClient({ data }: EvolutionClientProps) {
  const { careerTimeline, stats } = data;

  // Map icons to stats from portfolio.json
  const statIcons = [History, Target, Cpu];
  const displayStats = stats.slice(0, 3).map((stat: any, i: number) => ({
    ...stat,
    icon: statIcons[i] || Briefcase
  }));

  return (
    <section className="py-xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-xl"
      >
        <h1 className="text-display-lg text-on-surface mb-xs uppercase">PROFESSIONAL_EVOLUTION</h1>
        <div className="text-label-caps text-primary-fixed-dim border-l-2 border-primary-fixed-dim pl-md">
          CHRONOLOGICAL CAREER LOG & ARCHITECTURAL MILESTONES
        </div>
      </motion.div>

      {/* Career Stats / Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-24">
        {displayStats.map((stat: any, i: number) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-lg rounded-xl flex items-center gap-lg border-l-4 border-l-primary-fixed-dim"
          >
            <div className="p-md bg-primary-container/10 rounded-lg">
              <stat.icon className="w-6 h-6 text-primary-fixed-dim" />
            </div>
            <div>
              <div className="text-[10px] font-label-caps text-outline mb-1">{stat.label.replace(' ', '_')}</div>
              <div className="text-headline-md text-on-surface">{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Timeline */}
      <div className="max-w-5xl mx-auto">
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-fixed-dim via-outline-variant/30 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-24">
            {careerTimeline.map((job: any, i: number) => (
              <motion.div 
                key={`${job.company}-${job.year}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot with pulse for active job */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background z-10 md:-translate-x-1/2 transition-all ${
                  job.active 
                    ? "bg-primary-fixed-dim shadow-[0_0_20px_rgba(0,242,255,0.8)] scale-125" 
                    : "bg-outline-variant"
                }`} />
                
                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <div className={`glass-panel p-xl rounded-2xl relative group hover:tech-glow transition-all duration-500 ${
                    job.active ? "border-primary-fixed-dim/40 bg-primary-container/5" : ""
                  }`}>
                    {/* Side Highlight */}
                    <div className={`absolute top-0 bottom-0 w-1 ${i % 2 === 0 ? "left-0" : "right-0"} bg-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className="flex justify-between items-start mb-md">
                      <span className="text-code-sm text-primary-fixed-dim font-bold tracking-widest">{job.year}</span>
                      {job.active && (
                        <span className="px-2 py-0.5 bg-primary-fixed-dim text-on-primary text-[8px] font-label-caps rounded-sm animate-pulse">
                          ACTIVE_STATION
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-display-sm text-on-surface mb-sm uppercase tracking-tighter leading-none group-hover:text-primary-fixed-dim transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-sm">
                      <div className="w-4 h-px bg-outline-variant" />
                      <span className="text-label-caps text-on-surface-variant font-medium text-xs">
                        {job.company}
                      </span>
                    </div>

                    {/* Achievements and Description */}
                    <div className="mt-lg pt-lg border-t border-outline-variant/20 group-hover:block transition-all">
                      {job.description && (
                        <p className="text-body-sm text-outline leading-relaxed mb-md">
                          {job.description}
                        </p>
                      )}
                      {job.achievements && job.achievements.length > 0 && (
                        <ul className="space-y-sm">
                          {job.achievements.map((achievement: string, idx: number) => (
                            <li key={idx} className="flex gap-sm items-start">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-fixed-dim shrink-0" />
                              <span className="text-[11px] text-on-surface-variant font-jetbrains leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Time Label for larger screens on the opposite side */}
                <div className={`hidden md:flex w-[45%] ${i % 2 === 0 ? "justify-end pr-16" : "justify-start pl-16"}`}>
                  <span className="text-display-lg opacity-5 font-jetbrains tracking-tighter select-none">
                    {job.year.split(' - ')[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Education Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 pt-24 border-t border-outline-variant/30 text-center"
      >
        <div className="inline-flex items-center gap-sm px-xl py-lg glass-panel rounded-full border-primary-fixed-dim/20">
          <GraduationCap className="w-5 h-5 text-primary-fixed-dim" />
          <span className="text-label-caps text-on-surface">ACADEMIC_FOUNDATION_VERIFIED</span>
        </div>
      </motion.div>
    </section>
  );
}
