import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch, faHome, faLaptop, faPalette, faBoxes, faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Services",
  description: "Interior design, home staging, color consulting, and more — full-service design studio in Portland.",
};

const services = [
  {
    slug: "interior-design",
    title: "Interior Design",
    description: "Full-service interior design from concept to completion. We handle space planning, material selection, furniture procurement, and installation for a seamless transformation.",
    icon: faCouch,
    image: "/images/services/interior-design.jpg",
    features: ["Space planning & layout", "Material & finish selection", "Custom furniture design", "Lighting design", "Full project management"],
  },
  {
    slug: "home-staging",
    title: "Home Staging",
    description: "Maximize your property's market appeal with professional staging. We arrange furniture, art, and accessories to highlight your home's best features.",
    icon: faHome,
    image: "/images/services/home-staging.jpg",
    features: ["Full-home staging", "Partial/vacant staging", "Furniture rental coordination", "Pre-listing consultation", "Open house preparation"],
  },
  {
    slug: "virtual-design",
    title: "Virtual Design",
    description: "Remote interior design services via video consultation. Perfect for busy homeowners or out-of-area clients who want professional guidance.",
    icon: faLaptop,
    image: "/images/services/virtual-design.jpg",
    features: ["Video consultations", "Digital mood boards", "Shopping lists with links", "Floor plans & layouts", "Unlimited revisions"],
  },
  {
    slug: "color-consulting",
    title: "Color Consulting",
    description: "Expert color selection for interior and exterior spaces. From whole-house palettes to accent walls — we find the perfect hues for your style.",
    icon: faPalette,
    image: "/images/services/color-consulting.jpg",
    features: ["Whole-house color schemes", "Exterior paint selection", "Accent wall design", "Trim & ceiling coordination", "Paint brand recommendations"],
  },
  {
    slug: "furniture-selection",
    title: "Furniture Selection & Procurement",
    description: "Curated furniture sourcing tailored to your taste, budget, and space. We handle the search, ordering, and delivery so you don't have to.",
    icon: faBoxes,
    image: "/images/services/furniture-selection.jpg",
    features: ["Style assessment", "Budget-aligned sourcing", "Trade discounts passed to you", "Delivery coordination", "Staging & arrangement"],
  },
  {
    slug: "space-planning",
    title: "Space Planning & Layout",
    description: "Optimize flow and function in any room. We create detailed floor plans and 3D renderings that maximize every square foot.",
    icon: faRulerCombined,
    image: "/images/services/space-planning.jpg",
    features: ["Detailed floor plans", "3D renderings", "Traffic flow analysis", "Furniture layout optimization", "Multi-purpose space design"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to create a home you love — or sell one buyers can&apos;t resist.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <Card className="glass-card transition-shadow hover:shadow-lg h-full overflow-hidden group cursor-pointer">
                  <div className="w-full h-44 bg-accent/20 flex items-center justify-center overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-3">
                      <FontAwesomeIcon icon={s.icon} className="size-4" />
                    </div>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.description.slice(0, 100)}...</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
