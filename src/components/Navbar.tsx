"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Terminal, Settings, Cpu, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Manifesto", href: "/manifesto" },
  { name: "Evolution", href: "/evolution" },
  { name: "Projects", href: "/projects" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  profileData?: any;
}

export default function Navbar({ profileData }: NavbarProps) {
  const pathname = usePathname();
  
  // Use profileData from props if available, otherwise fallback (for safety)
  const resumePath = (profileData?.resumePath || "/resume.pdf").startsWith("http") 
    ? profileData?.resumePath 
    : `/Portfolio${profileData?.resumePath || "/resume.pdf"}`;
    
  const avatar = (profileData?.avatar || "/avatar.gif").startsWith("http")
    ? profileData?.avatar
    : `/Portfolio${profileData?.avatar || "/avatar.gif"}`;

  const name = profileData?.name || "Victor Ciorici";
  const role = profileData?.role || "Senior Unity Developer";

  const [isOpen, setIsOpen] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  
  useEffect(() => {
    // Set timestamp after mount to avoid hydration mismatch
    setTimestamp(`?v=${Date.now()}`);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="container mx-auto px-lg">
        <div className="h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-sm group no-underline">
            <div className="relative w-10 h-10 rounded-sm overflow-hidden border border-primary-container/40 group-hover:tech-glow transition-all">
              <img 
                src={avatar} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-xs">
                <span className="text-label-caps text-on-surface font-bold tracking-[0.1em] group-hover:text-primary-fixed-dim transition-colors uppercase">
                  {name}
                </span>
                <Cpu className="w-3.5 h-3.5 text-primary-fixed-dim opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-[10px] text-outline font-jetbrains uppercase">
                // {role}
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
              <div className="hidden sm:flex items-center gap-xs">
                <span className="text-primary-fixed-dim opacity-40 font-jetbrains animate-pulse">_</span>
                <Link href="/admin">
                  <Settings className="w-5 h-5 text-outline hover:text-primary-fixed-dim transition-colors cursor-pointer rotate-0 hover:rotate-90 transition-transform duration-500" />
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-sm text-on-surface hover:text-primary-fixed-dim transition-colors z-[60]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[55] bg-[#0a0c10] md:hidden flex flex-col items-center justify-center w-screen h-screen overflow-hidden"
          >
            {/* Grid Pattern for Technical Feel */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#00f2ff 1px, transparent 1px), linear-gradient(90deg, #00f2ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Design Accents */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-fixed-dim blur-[120px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-surface-tint blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full px-xl gap-xl">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-display-md uppercase tracking-[0.2em] no-underline transition-colors ${
                      pathname === `/Portfolio${link.href}` || pathname === link.href ? "text-primary-fixed-dim" : "text-on-surface hover:text-primary-fixed-dim"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-xl pt-xl border-t border-outline-variant/30 w-2/3 flex flex-col items-center gap-lg"
              >
                <a 
                  href={`${resumePath}${timestamp}`} 
                  download={`Resume_${name.replace(' ', '_')}.pdf`}
                  className="flex items-center gap-sm text-label-caps text-on-surface border border-outline px-xl py-md rounded-sm no-underline w-full justify-center"
                >
                  DOWNLOAD RESUME
                  <Download className="w-5 h-5" />
                </a>
                
                {process.env.NODE_ENV === "development" && (
                  <Link href="/admin" className="flex items-center gap-sm text-label-caps text-outline no-underline">
                    <Settings className="w-5 h-5" />
                    ADMIN_CONSOLE
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
