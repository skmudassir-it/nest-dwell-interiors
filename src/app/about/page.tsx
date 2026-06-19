import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faAward, faHeart } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the Nest & Dwell team — Portland's trusted interior designers and home staging experts with 15+ years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Nest &amp; Dwell</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">We believe every space has a story — and we&apos;re here to help tell yours beautifully.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Nest &amp; Dwell Interiors was founded in 2014 by lead designer Elena Torres, a Portland native with a passion for transforming spaces. What started as a solo design consultancy has grown into a full-service studio known for warm, livable luxury.
              </p>
              <p className="text-muted-foreground mb-4">
                Our philosophy is simple: great design should feel effortless. We blend your personality with timeless principles of proportion, color, and light to create spaces that feel both beautiful and deeply personal.
              </p>
              <p className="text-muted-foreground">
                Over the years, we&apos;ve transformed 300+ homes, staged properties that sold 30% faster than market average, and built lasting relationships with Portland homeowners, realtors, and builders.
              </p>
            </div>
            <div className="w-full h-80 bg-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <img src="/images/about/studio.jpg" alt="Nest & Dwell studio" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 mb-20">
            {[
              { icon: faAward, value: "300+", label: "Projects Completed" },
              { icon: faUsers, value: "200+", label: "Happy Clients" },
              { icon: faHeart, value: "15+", label: "Years Experience" },
            ].map((s) => (
              <Card key={s.label} className="glass-card text-center">
                <CardContent className="p-8">
                  <FontAwesomeIcon icon={s.icon} className="size-8 text-primary mb-4" />
                  <div className="text-3xl font-bold mb-1">{s.value}</div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Elena Torres", role: "Lead Designer & Founder", image: "/images/about/team-1.jpg" },
              { name: "Marcus Chen", role: "Senior Designer", image: "/images/about/team-2.jpg" },
              { name: "Priya Sharma", role: "Staging Specialist", image: "/images/about/team-3.jpg" },
            ].map((m) => (
              <Card key={m.name} className="glass-card text-center overflow-hidden">
                <div className="w-full h-60 bg-accent/20 flex items-center justify-center overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{m.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Work With Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
