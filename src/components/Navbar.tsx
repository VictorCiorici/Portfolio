"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Terminal, Settings } from "lucide-react";

const navLinks = [
  { name: "MANIFESTO", href: "/manifesto" },
  { name: "EVOLUTION", href: "/evolution" },
  { name: "PROJECTS", href: "/projects" },
  { name: "TECH_STACK", href: "/tech-stack" },
  { name: "CONTACT", href: "/contact" },
];

interface NavbarProps {
  profileData?: any;
}

export default function Navbar({ profileData }: NavbarProps) {
  const pathname = usePathname();
  
  // Use profileData from props if available, otherwise fallback (for safety)
  const resumePath = profileData?.resumePath || "/resume.pdf";
  const name = profileData?.name || "Victor Ciorici";

  const [timestamp, setTimestamp] = useState("");
  useEffect(() => {
    setTimestamp(`?v=${Date.now()}`);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="container mx-auto px-lg">
        <div className="h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-sm group no-underline">
            <div className="w-10 h-10 bg-primary-container/20 border border-primary-container/40 rounded-sm flex items-center justify-center group-hover:tech-glow transition-all">
              <Terminal className="w-6 h-6 text-primary-fixed-dim" />
            </div>
            <div className="flex flex-col">
              <span className="text-label-caps text-on-surface font-bold tracking-[0.2em] group-hover:text-primary-fixed-dim transition-colors">
                TECH_CORE
              </span>
              <span className="text-[10px] text-outline font-jetbrains">
                // DEV_PORTFOLIO
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-label-caps tracking-[0.2em] transition-all duration-300 py-2 group ${
                  pathname === link.href
                    ? "text-primary-fixed-dim"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-fixed-dim tech-glow"
                  />
                )}
                {/* Hover line */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-fixed-dim/40 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-lg">
            <a 
              href={`${resumePath}${timestamp}`} 
              download={`Resume_${name.replace(' ', '_')}.pdf`}
              className="hidden lg:flex items-center gap-xs text-label-caps text-on-surface border border-outline px-md py-sm rounded-sm hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-all no-underline group"
            >
              RESUME
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            
            {process.env.NODE_ENV === "development" && (
              <div className="flex items-center gap-xs">
                <span className="text-primary-fixed-dim opacity-40 font-jetbrains animate-pulse">_</span>
                <Link href="/admin">
                  <Settings className="w-5 h-5 text-outline hover:text-primary-fixed-dim transition-colors cursor-pointer rotate-0 hover:rotate-90 transition-transform duration-500" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
