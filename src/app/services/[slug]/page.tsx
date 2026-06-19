import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch, faHome, faLaptop, faPalette, faBoxes, faRulerCombined,
  faCheckCircle, faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const services: Record<string, {
  title: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
}> = {
  "interior-design": {
    title: "Interior Design",
    description: "Full-service interior design from concept to completion. We handle space planning, material selection, furniture procurement, and installation for a seamless transformation that reflects your personal style.",
    icon: faCouch,
    image: "/images/services/interior-design.jpg",
    features: ["Space planning & layout", "Material & finish selection", "Custom furniture design", "Lighting design", "Full project management", "Installation & styling"],
  },
  "home-staging": {
    title: "Home Staging",
    description: "Maximize your property's market appeal with professional staging. We arrange furniture, art, and accessories to highlight your home's best features and help it sell faster and at a higher price.",
    icon: faHome,
    image: "/images/services/home-staging.jpg",
    features: ["Full-home staging", "Partial/vacant staging", "Furniture rental coordination", "Pre-listing consultation", "Open house preparation", "Decluttering guidance"],
  },
  "virtual-design": {
    title: "Virtual Design",
    description: "Remote interior design services via video consultation. Perfect for busy homeowners or out-of-area clients who want professional guidance without in-person visits.",
    icon: faLaptop,
    image: "/images/services/virtual-design.jpg",
    features: ["Video consultations", "Digital mood boards", "Shopping lists with links", "Floor plans & layouts", "Unlimited revisions", "Email & chat support"],
  },
  "color-consulting": {
    title: "Color Consulting",
    description: "Expert color selection for interior and exterior spaces. From whole-house palettes to accent walls — we find the perfect hues that complement your architecture and lighting.",
    icon: faPalette,
    image: "/images/services/color-consulting.jpg",
    features: ["Whole-house color schemes", "Exterior paint selection", "Accent wall design", "Trim & ceiling coordination", "Paint brand recommendations", "Sample testing guidance"],
  },
  "furniture-selection": {
    title: "Furniture Selection & Procurement",
    description: "Curated furniture sourcing tailored to your taste, budget, and space. We leverage trade relationships to get you the best pieces at the best prices.",
    icon: faBoxes,
    image: "/images/services/furniture-selection.jpg",
    features: ["Style assessment", "Budget-aligned sourcing", "Trade discounts passed to you", "Delivery coordination", "Staging & arrangement", "Returns handling"],
  },
  "space-planning": {
    title: "Space Planning & Layout",
    description: "Optimize flow and function in any room with detailed floor plans and 3D renderings. We maximize every square foot for beauty and practicality.",
    icon: faRulerCombined,
    image: "/images/services/space-planning.jpg",
    features: ["Detailed floor plans", "3D renderings", "Traffic flow analysis", "Furniture layout optimization", "Multi-purpose space design", "ADA accessibility planning"],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.description.slice(0, 160) };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="inline-flex"><Button>Back to Services</Button></Link>
      </section>
    );
  }

  const IconComponent = service.icon;

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <FontAwesomeIcon icon={faArrowLeft} className="size-3" /> Back to Services
          </Link>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <FontAwesomeIcon icon={IconComponent} className="size-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{service.title}</h1>
              <p className="text-muted-foreground mb-8">{service.description}</p>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">What&apos;s Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-secondary mt-0.5 shrink-0" />
                        <span className="text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg">Get a Free Quote</Button>
                </Link>
              </div>
            </div>
            <div className="w-full h-80 lg:h-96 bg-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
