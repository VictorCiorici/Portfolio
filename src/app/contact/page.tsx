"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Send, Download, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <PageLayout>
      <section className="py-xl">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-display-lg text-on-surface mb-xl"
        >
          COMM_LINK // <span className="text-primary-fixed-dim">CONTACT</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-lg"
          >
            <div className="glass-panel p-lg rounded-xl">
              <h2 className="text-label-caps text-on-tertiary-container mb-lg">TRANSMIT_DATA_PACKET</h2>
              <form className="space-y-md" action={`mailto:${profile.email}`} method="post" encType="text/plain">
                <div>
                  <label className="block text-code-sm text-on-surface-variant mb-xs uppercase">SENDER_ID (NAME)</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="ENTER IDENTITY..."
                    className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim focus:tech-glow transition-all placeholder:text-outline/30"
                  />
                </div>
                <div>
                  <label className="block text-code-sm text-on-surface-variant mb-xs uppercase">RETURN_ROUTE (EMAIL)</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="USER@DOMAIN.COM"
                    className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim focus:tech-glow transition-all placeholder:text-outline/30"
                  />
                </div>
                <div>
                  <label className="block text-code-sm text-on-surface-variant mb-xs uppercase">PAYLOAD_DATA (MESSAGE)</label>
                  <textarea 
                    name="message"
                    rows={4}
                    placeholder="TRANSMIT MESSAGE CONTENT..."
                    className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim focus:tech-glow transition-all placeholder:text-outline/30 resize-none"
                  />
                </div>
                <button type="submit" className="w-full bg-primary-container text-on-primary-container font-label-caps py-md rounded tech-edge hover:bg-primary-fixed transition-all flex items-center justify-center gap-sm group">
                  TRANSMIT_PACKET
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="grid grid-cols-3 gap-md">
              {profile.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-md rounded-xl flex flex-col items-center gap-sm hover:text-primary-fixed-dim transition-colors group no-underline"
                >
                  <social.icon className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[10px] font-label-caps">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Resume / Details Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-lg rounded-xl h-full relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-5 pointer-events-none grid-bg" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-xl">
                  <div className="flex items-center gap-lg">
                    {profile.avatar && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-outline-variant/30 shrink-0">
                        <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-headline-md text-on-surface mb-xs uppercase tracking-tight">
                        {profile.name.toUpperCase().replace(' ', '_')}_CV
                      </h2>
                      <div className="flex items-center gap-xs">
                        <div className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
                        <span className="text-label-caps text-primary-fixed-dim text-[10px]">CURRENT_STATE: {profile.role.toUpperCase().replace(' ', '_')}</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href={profile.resumePath} 
                    download
                    className="flex items-center gap-xs px-md py-sm border border-primary-fixed-dim text-primary-fixed-dim rounded font-label-caps hover:bg-primary-fixed-dim hover:text-on-primary transition-all no-underline"
                  >
                    <Download className="w-4 h-4" />
                    DOWNLOAD.PDF
                  </a>
                </div>

                <div className="space-y-xl">
                  <div>
                    <h3 className="text-label-caps text-on-surface opacity-60 mb-md border-b border-outline-variant/30 pb-xs">CORE_COMPETENCIES</h3>
                    <div className="flex flex-wrap gap-sm">
                      {[
                        "UNITY_ENGINE", "C#", "DOTS_ECS", "SHADERS", "PHOTON_FUSION", 
                        "MULTIPLAYER", "VR_AR", "GRAPHICS_PIPELINE", "TOOLING", "OPTIMIZATION"
                      ].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-surface-container-highest/50 border border-outline-variant/20 rounded text-code-sm text-on-surface-variant font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div>
                      <h3 className="text-label-caps text-on-surface opacity-60 mb-md border-b border-outline-variant/30 pb-xs">SYSTEM_SPECS</h3>
                      <ul className="space-y-sm">
                        {[
                          "12+ Years Professional Experience",
                          "Expert in Unity & C# Architecture",
                          "Multiplayer Systems (Photon Fusion)",
                          "VR/AR Specialist (Oculus/Quest)",
                          "Performance Profiling & Refactoring",
                        ].map(item => (
                          <li key={item} className="flex items-center gap-sm text-body-md text-on-surface-variant">
                            <CheckCircle2 className="w-4 h-4 text-primary-fixed-dim shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-label-caps text-on-surface opacity-60 mb-md border-b border-outline-variant/30 pb-xs">AVAILABILITY</h3>
                      <div className="space-y-md">
                        <div className="glass-panel p-md rounded bg-primary-container/5 border-primary-fixed-dim/20">
                          <div className="text-label-caps text-primary-fixed-dim mb-1">CURRENT_ENGAGEMENT</div>
                          <div className="text-headline-sm text-on-surface uppercase">LIMIT_BREAK // REMOTE</div>
                        </div>
                        <div className="glass-panel p-md rounded bg-surface-container-high/50">
                          <div className="text-label-caps text-on-surface-variant mb-1">LOCATION_DATA</div>
                          <div className="text-headline-sm text-on-surface uppercase">{profile.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-xl text-center text-code-sm text-outline/30 uppercase tracking-widest font-jetbrains">
                SYSTEM_END_OF_TRANSMISSION
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
