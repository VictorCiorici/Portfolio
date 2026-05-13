import * as Icons from "lucide-react";
import portfolioData from "./portfolio.json";

/**
 * @file portfolio.ts
 * @description Centralized Type Definitions and Client-Safe Data Processing.
 * This file is bundled for the browser. DO NOT import Node.js modules (fs, path) here.
 */

// --- Types ---

/** Represents the Hero section configuration on the landing page. */
export interface HeroData {
  headline: string;
  subheadline: string;
  status: string;
}

/** Professional competencies and specifications used in the Contact and Tech Stack pages. */
export interface ContactSpecs {
  coreCompetencies: string[];
  professionalSpecs: string[];
}

/** Serializable representation of a social media link. */
export interface SocialLink {
  name: string;
  icon: string;      // The raw icon name from JSON (e.g., "Github")
  iconName?: string; // Processed name for mapping
  href: string;      // Normalized URL (includes mailto: if applicable)
}

/** Core identity data for the developer. */
export interface ProfileData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  avatar: string;     // Path to image in /public
  resumePath: string; // Path to PDF in /public
  socials: SocialLink[];
}

/** Individual metric displayed in statistics rows. */
export interface Stat {
  value: string;
  label: string;
}

/** Core technology identifiers with associated icons. */
export interface CoreTech {
  name: string;
  icon: string;
  iconName?: string;
}

/** Individual skill item within a Bento category. */
export interface SkillItem {
  name: string;
  desc: string;
}

/** A grouped category of skills displayed in a Bento-style grid. */
export interface BentoSkillCategory {
  title: string;
  icon: string;
  iconName?: string;
  skills: SkillItem[];
  tags: string[];
}

/** Represents a professional role in the career timeline. */
export interface CareerEntry {
  year: string;
  role: string;
  company: string;
  active: boolean;      // If true, displays a pulsing 'Active' indicator
  description: string;
  achievements: string[];
}

/** Technical KPI for a specific project (e.g., FPS, Memory usage). */
export interface ProjectMetric {
  label: string;
  value: string;
}

/** Detailed information for a portfolio project. */
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  metrics: ProjectMetric[];
  challenges: string[];
  gallery?: string[];
  projectUrl?: string;
  videoUrl?: string;
  status?: "released" | "development" | "unreleased";
}

/** A single principle in the Engineering Manifesto. */
export interface ManifestoTenet {
  id: string;
  title: string;
  content: string;
}

/** Configuration for the Philosophy/Manifesto page. */
export interface ManifestoData {
  headline: string;
  intro: string;
  tenets: ManifestoTenet[];
}

/** The complete, aggregate structure of the portfolio data store. */
export interface PortfolioData {
  hero: HeroData;
  contactSpecs: ContactSpecs;
  profile: ProfileData;
  stats: Stat[];
  coreTechnologies: CoreTech[];
  bentoSkills: BentoSkillCategory[];
  careerTimeline: CareerEntry[];
  manifesto: ManifestoData;
  projects: Project[];
}

// --- Helpers ---

/**
 * Maps a string icon name to a Lucide React component.
 * @param name - The name of the icon (e.g., "Zap", "Cpu").
 * @returns The React icon component or a fallback HelpCircle icon.
 */
export const getIcon = (name: string) => {
  const Icon = (Icons as any)[name];
  return Icon || Icons.HelpCircle;
};

/**
 * Normalizes strings into valid URLs (e.g., adding https:// or mailto:).
 * @param href - The raw string from JSON.
 */
export const normalizeLink = (href: string) => {
  if (href.startsWith("www.")) return `https://${href}`;
  if (href.includes("@") && !href.startsWith("mailto:")) return `mailto:${href}`;
  return href;
};

/**
 * Processes raw JSON data into a serializable PortfolioData object.
 * This performs link normalization and field mapping to ensure UI components receive clean data.
 * @param data - The raw data from portfolio.json.
 */
export function processData(data: any): PortfolioData {
  if (!data) return {} as PortfolioData;
  
  return {
    hero: data.hero,
    contactSpecs: data.contactSpecs,
    profile: {
      ...data.profile,
      socials: (data.profile?.socials || []).map((s: any) => ({
        ...s,
        href: normalizeLink(s.href),
        iconName: s.icon 
      }))
    },
    stats: data.stats || [],
    coreTechnologies: (data.coreTechnologies || []).map((tech: any) => ({
      ...tech,
      iconName: tech.icon 
    })),
    bentoSkills: (data.bentoSkills || []).map((skill: any) => ({
      ...skill,
      iconName: skill.icon 
    })),
    careerTimeline: data.careerTimeline || [],
    manifesto: data.manifesto,
    projects: data.projects || []
  };
}

/**
 * Fetches the bundled portfolio data.
 * This is safe for Client Components but uses a static version from the build.
 */
export function getPortfolioData(): PortfolioData {
  return processData(portfolioData);
}

// Legacy exports for direct access in Client Components
const processed = processData(portfolioData);
export const profile = processed.profile;
export const stats = processed.stats;
export const coreTechnologies = processed.coreTechnologies;
export const bentoSkills = processed.bentoSkills;
export const careerTimeline = processed.careerTimeline;
export const manifesto = processed.manifesto;
export const projects = processed.projects;
