import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for interior design, home staging, and consulting services in Portland.",
};

const plans = [
  {
    name: "Essential",
    price: "$1,500",
    description: "Perfect for a single-room refresh or color consultation.",
    features: ["One-room design plan", "Color palette selection", "Shopping list with links", "1 revision round", "Email support"],
    popular: false,
  },
  {
    name: "Signature",
    price: "$4,500",
    description: "Our most popular package — full design for multiple rooms.",
    features: ["Up to 3 rooms", "Full design concept & mood boards", "Furniture & material selection", "3D renderings", "3 revision rounds", "Procurement management", "Priority support"],
    popular: true,
  },
  {
    name: "Complete",
    price: "$8,500+",
    description: "Whole-home transformation with white-glove service.",
    features: ["Whole-home design", "Custom furniture design", "Lighting plan", "Project management", "Unlimited revisions", "Installation day coordination", "6 months post-completion support"],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Choose the package that fits your project. All pricing includes design fees — furniture and materials are separate.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((p) => (
            <Card key={p.name} className={`glass-card relative ${p.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
              )}
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <div className="text-4xl font-bold mt-2">{p.price}</div>
                <CardDescription className="mt-2">{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faCheck} className="size-4 text-secondary shrink-0" />
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex w-full">
                  <Button className="w-full" variant={p.popular ? "default" : "outline"}>Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Home staging pricing starts at $2,000 and is quoted per project.</p>
          <p className="mt-1">Virtual design consultations available at $250/hour.</p>
          <Link href="/contact" className="inline-flex mt-4">
            <Button variant="outline">Request Custom Quote</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
