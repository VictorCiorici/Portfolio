"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Download, CheckCircle2 } from "lucide-react";
import { getIcon } from "@/data/portfolio";

interface ContactClientProps {
  data: {
    profile: any;
    careerTimeline: any[];
    contactSpecs: {
      coreCompetencies: string[];
      professionalSpecs: string[];
    };
  };
}

export default function ContactClient({ data }: ContactClientProps) {
  const { profile, careerTimeline, contactSpecs } = data;
  const activeJob = careerTimeline.find((job: any) => job.active);
  const [timestamp, setTimestamp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCopyFallback, setShowCopyFallback] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Set timestamp after mount to avoid hydration mismatch
    setTimestamp(`?v=${Date.now()}`);
  }, []);

  const resumePath = (profile.resumePath || "/resume.pdf").startsWith("http")
    ? profile.resumePath
    : `/Portfolio${profile.resumePath || "/resume.pdf"}`;

  const avatarPath = (profile.avatar || "/avatar.gif").startsWith("http")
    ? profile.avatar
    : `/Portfolio${profile.avatar || "/avatar.gif"}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Create a temporary link and click it to trigger mailto
    // This is more robust than window.location.assign in some environments
    const mailtoLink = document.createElement("a");
    mailtoLink.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    mailtoLink.click();
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowCopyFallback(true);
      // Reset success state after a while, but keep fallback visible for longer
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  const handleCopyToClipboard = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const fullText = `To: ${profile.email}\nSubject: Portfolio Contact from ${name}\n\nMessage:\n${message}\n\n(Sender Email: ${email})`;
    
    navigator.clipboard.writeText(fullText);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:col-span-5 space-y-lg"
      >
        <div className="glass-panel p-lg rounded-xl">
          <h2 className="text-label-caps text-on-tertiary-container mb-lg">Send Message</h2>
          <form className="space-y-md" onSubmit={handleSubmit}>
            <div>
              <label className="block text-code-sm text-on-surface-variant mb-xs uppercase">Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Enter your name..."
                className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim focus:tech-glow transition-all placeholder:text-outline/30"
              />
            </div>
            <div>
              <label className="block text-code-sm text-on-surface-variant mb-xs uppercase">Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="your@email.com"
                className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim focus:tech-glow transition-all placeholder:text-outline/30"
              />
            </div>
            <div>
              <label className="block text-code-sm text-on-surface-variant mb-xs uppercase">Message</label>
              <textarea 
                name="message"
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim focus:tech-glow transition-all placeholder:text-outline/30 resize-none"
              />
            </div>
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-error text-[11px] font-medium uppercase tracking-wider"
              >
                {error}
              </motion.div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`w-full font-label-caps py-md rounded tech-edge transition-all flex items-center justify-center gap-sm group disabled:cursor-not-allowed ${
                isSuccess 
                  ? "bg-primary-fixed text-on-primary" 
                  : "bg-primary-container text-on-primary-container hover:bg-primary-fixed"
              }`}
            >
              {isSubmitting ? "Opening Mail Client..." : isSuccess ? "Mail Client Triggered!" : "Send Message"}
              {!isSubmitting && !isSuccess && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              {isSuccess && <CheckCircle2 className="w-4 h-4" />}
            </button>

            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-sm text-center"
              >
                <p className="text-[11px] text-on-surface-variant opacity-80">
                  {showCopyFallback 
                    ? "Your mail client should have opened. If not, you can copy the message below:" 
                    : "Message copied to clipboard!"}
                </p>
                {showCopyFallback && (
                  <button 
                    type="button"
                    onClick={handleCopyToClipboard}
                    className="text-code-sm text-primary-fixed-dim hover:text-primary-fixed underline transition-colors"
                  >
                    Copy formatted message to clipboard
                  </button>
                )}
              </motion.div>
            )}
          </form>
        </div>

        <div className="grid grid-cols-3 gap-md">
          {profile.socials.map((social: any) => {
            const Icon = getIcon(social.iconName);
            const isEmail = social.name.toUpperCase() === "EMAIL";
            
            const handleClick = (e: React.MouseEvent) => {
              if (isEmail) {
                // For email, we trigger the mailto but also copy to clipboard
                // to ensure the user has the address if the mail client fails.
                navigator.clipboard.writeText(profile.email);
                setIsSuccess(true);
                setTimeout(() => setIsSuccess(false), 3000);
              }
            };

            const linkProps = isEmail 
              ? { href: social.href, onClick: handleClick } 
              : { href: social.href, target: "_blank", rel: "noopener noreferrer" };

            return (
              <a 
                key={social.name} 
                {...linkProps}
                title={isEmail ? "Click to open mail client & copy address" : `Visit ${social.name}`}
                className="glass-panel p-md rounded-xl flex flex-col items-center gap-sm hover:text-primary-fixed-dim transition-colors group no-underline relative overflow-hidden"
              >
                <Icon className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-[10px] font-label-caps">{social.name}</span>
                {isEmail && isSuccess && (
                  <motion.div 
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="absolute inset-0 bg-primary-fixed text-on-primary flex items-center justify-center text-[8px] font-bold uppercase"
                  >
                    Copied!
                  </motion.div>
                )}
              </a>
            );
          })}
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
                    <img src={avatarPath} alt={profile.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                )}
                <div>
                  <h2 className="text-headline-md text-on-surface mb-xs uppercase tracking-tight">
                    {profile.name.toUpperCase()}
                  </h2>
                  <div className="flex items-center gap-xs">
                    <div className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
                    <span className="text-label-caps text-primary-fixed-dim text-[10px]">Current Role: {profile.role}</span>
                  </div>
                </div>
              </div>
              <a 
                href={`${resumePath}${timestamp}`} 
                download={`Resume_${profile.name.replace(' ', '_')}.pdf`}
                className="flex items-center gap-xs px-md py-sm border border-primary-fixed-dim text-primary-fixed-dim rounded font-label-caps hover:bg-primary-fixed-dim hover:text-on-primary transition-all no-underline"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            <div className="space-y-xl">
              <div>
                <h3 className="text-label-caps text-on-surface opacity-60 mb-md border-b border-outline-variant/30 pb-xs">Core Competencies</h3>
                <div className="flex flex-wrap gap-sm">
                  {contactSpecs.coreCompetencies.map((skill: string) => (
                    <span key={skill} className="px-3 py-1 bg-surface-container-highest/50 border border-outline-variant/20 rounded text-code-sm text-on-surface-variant font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div>
                  <h3 className="text-label-caps text-on-surface opacity-60 mb-md border-b border-outline-variant/30 pb-xs">Professional Specs</h3>
                  <ul className="space-y-sm">
                    {contactSpecs.professionalSpecs.map((item: string) => (
                      <li key={item} className="flex items-center gap-sm text-body-md text-on-surface-variant">
                        <CheckCircle2 className="w-4 h-4 text-primary-fixed-dim shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-label-caps text-on-surface opacity-60 mb-md border-b border-outline-variant/30 pb-xs">Availability</h3>
                  <div className="space-y-md">
                    <div className="glass-panel p-md rounded bg-primary-container/5 border-primary-fixed-dim/20">
                      <div className="text-label-caps text-primary-fixed-dim mb-1">Current Project</div>
                      <div className="text-headline-sm text-on-surface uppercase">
                        {activeJob ? `${activeJob.company} // Remote` : "Freelance Ready"}
                      </div>
                    </div>
                    <div className="glass-panel p-md rounded bg-surface-container-high/50">
                      <div className="text-label-caps text-on-surface-variant mb-1">Location</div>
                      <div className="text-headline-sm text-on-surface uppercase">{profile.location}</div>
                    </div>
                    {profile.phone && (
                      <div className="glass-panel p-md rounded bg-surface-container-high/50">
                        <div className="text-label-caps text-on-surface-variant mb-1">Phone</div>
                        <div className="text-headline-sm text-on-surface uppercase">{profile.phone}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
