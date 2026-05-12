"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/data/portfolio";

interface TechStackClientProps {
  data: any;
}

export default function TechStackClient({ data }: TechStackClientProps) {
  const { bentoSkills } = data;

  return (
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
        {bentoSkills.map((item: any, i: number) => {
          const Icon = getIcon(item.iconName);
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-lg rounded-xl relative overflow-hidden group hover:tech-glow transition-all"
            >
              <Icon className="absolute -top-4 -right-4 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="flex items-center gap-md mb-lg">
                <div className="p-sm bg-primary-container/10 border border-primary-container/30 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-fixed-dim" />
                </div>
                <h2 className="text-headline-sm text-on-surface">{item.title}</h2>
              </div>
              <div className="space-y-md mb-lg">
                {item.skills.map((skill: any) => (
                  <div key={skill.name}>
                    <div className="text-label-caps text-primary-fixed-dim mb-1">{skill.name}</div>
                    <p className="text-body-md text-on-surface-variant">{skill.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-sm pt-md border-t border-outline-variant/30">
                {item.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] font-label-caps text-outline border border-outline/20 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
