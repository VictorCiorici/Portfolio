import * as Icons from "lucide-react";
import portfolioData from "./portfolio.json";

// Helper to map icon names to components
const getIcon = (name: string) => {
  const Icon = (Icons as any)[name];
  return Icon || Icons.HelpCircle;
};

export const profile = {
  ...portfolioData.profile,
  socials: portfolioData.profile.socials.map(s => ({
    ...s,
    icon: getIcon(s.icon)
  }))
};

export const stats = portfolioData.stats;

export const coreTechnologies = portfolioData.coreTechnologies.map(tech => ({
  ...tech,
  icon: getIcon(tech.icon)
}));

export const bentoSkills = portfolioData.bentoSkills.map(skill => ({
  ...skill,
  icon: getIcon(skill.icon)
}));

export const careerTimeline = portfolioData.careerTimeline;
export const manifesto = portfolioData.manifesto;
export const projects = portfolioData.projects;
