import * as Icons from "lucide-react";
import portfolioData from "./portfolio.json";

// Helper to map icon names to components (safe for both client and server)
export const getIcon = (name: string) => {
  const Icon = (Icons as any)[name];
  return Icon || Icons.HelpCircle;
};

// Helper to normalize links
const normalizeLink = (href: string) => {
  if (href.startsWith("www.")) return `https://${href}`;
  if (href.includes("@") && !href.startsWith("mailto:")) return `mailto:${href}`;
  return href;
};

/**
 * Server-only: Reads fresh data from disk.
 * Returns serializable data (icons as strings).
 */
export function getPortfolioData() {
  // If we're on the server, try to read the file directly
  if (typeof window === "undefined") {
    try {
      const fs = require("fs");
      const path = require("path");
      const filePath = path.join(process.cwd(), "src/data/portfolio.json");
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(fileContent);

      return processData(data);
    } catch (error) {
      console.warn("Failed to read portfolio.json from disk, falling back to bundled data.");
    }
  }

  // Fallback for client-side or if disk read fails
  return processData(portfolioData);
}

function processData(data: any) {
  return {
    profile: {
      ...data.profile,
      socials: data.profile.socials.map((s: any) => ({
        ...s,
        href: normalizeLink(s.href),
        iconName: s.icon // Keep icon as string for serializability
      }))
    },
    stats: data.stats,
    coreTechnologies: data.coreTechnologies.map((tech: any) => ({
      ...tech,
      iconName: tech.icon // Keep icon as string
    })),
    bentoSkills: data.bentoSkills.map((skill: any) => ({
      ...skill,
      iconName: skill.icon // Keep icon as string
    })),
    careerTimeline: data.careerTimeline,
    manifesto: data.manifesto,
    projects: data.projects
  };
}

// Keep legacy exports for client components (now serializable)
export const profile = processData(portfolioData).profile;
export const stats = processData(portfolioData).stats;
export const coreTechnologies = processData(portfolioData).coreTechnologies;
export const bentoSkills = processData(portfolioData).bentoSkills;
export const careerTimeline = processData(portfolioData).careerTimeline;
export const manifesto = processData(portfolioData).manifesto;
export const projects = processData(portfolioData).projects;
