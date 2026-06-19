import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Browse our portfolio of interior design and home staging projects across Portland.",
};

const projects = [
  { id: "1", title: "Modern Pearl District Loft", category: "interior-design", image: "/images/projects/project-1.jpg", description: "Full interior design for a 1,200 sq ft industrial loft. Open concept living with warm minimalist aesthetic." },
  { id: "2", title: "Hawthorne Craftsman Staging", category: "staging", image: "/images/projects/project-2.jpg", description: "Complete staging for a 1920s Craftsman. Sold in 5 days, $25K over asking." },
  { id: "3", title: "Lake Oswego Family Home", category: "interior-design", image: "/images/projects/project-3.jpg", description: "Whole-home redesign for a growing family. Functional, durable, and beautiful." },
  { id: "4", title: "Sellwood Bungalow Refresh", category: "color-consulting", image: "/images/projects/project-4.jpg", description: "Color consultation and furniture selection for a charming 1940s bungalow." },
  { id: "5", title: "NW District Luxury Condo", category: "staging", image: "/images/projects/project-5.jpg", description: "High-end staging for a penthouse condo. Luxury furnishings that attracted multiple offers." },
  { id: "6", title: "Alberta Arts Victorian", category: "interior-design", image: "/images/projects/project-6.jpg", description: "Eclectic design blending Victorian architecture with modern art and furniture." },
];

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}

export type { Project };
interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
