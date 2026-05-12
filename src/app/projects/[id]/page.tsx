import { projects } from "@/data/portfolio";
import ProjectDetailClient from "@/components/ProjectDetailClient";

/**
 * SERVER COMPONENT
 * Required for static export with dynamic routes in Next.js.
 */

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 15+, params is a Promise.
  const resolvedParams = await params;
  
  return <ProjectDetailClient id={resolvedParams.id} />;
}
