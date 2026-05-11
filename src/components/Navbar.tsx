"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Terminal, Settings } from "lucide-react";

const navLinks = [
  { name: "MANIFESTO", href: "/manifesto" },
  { name: "PROJECTS", href: "/projects" },
  { name: "TECH_STACK", href: "/tech-stack" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-surface-container/60 backdrop-blur-xl fixed top-0 left-0 w-full z-50 border-b border-outline-variant/30 shadow-sm shadow-primary/5"
    >
      <div className="max-w-[1440px] mx-auto px-margin-desktop py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-headline-sm text-primary tracking-tighter font-bold no-underline hover:text-primary-fixed-dim transition-colors"
        >
          TECH_CORE // DEV_PORTFOLIO
        </Link>
        
        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-caps text-label-caps transition-all relative py-1 ${
                  isActive ? "text-primary-fixed-dim font-bold" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-fixed-dim"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-md">
          <a 
            href="/resume.pdf" 
            download 
            className="text-label-caps text-on-surface-variant hover:text-primary-fixed-dim transition-colors hidden md:block no-underline"
          >
            RESUME.PDF
          </a>
          <div className="flex gap-sm">
            <Terminal className="w-5 h-5 text-on-surface-variant hover:text-primary-fixed-dim cursor-pointer transition-colors" />
            <Settings className="w-5 h-5 text-on-surface-variant hover:text-primary-fixed-dim cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
