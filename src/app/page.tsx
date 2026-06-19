import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch, faPaintRoller, faRulerCombined, faPalette, faBoxes, faHome,
  faCheckCircle, faStar,
} from "@fortawesome/free-solid-svg-icons";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const services = [
  { title: "Interior Design", description: "Full-service design from concept to completion. We create cohesive, beautiful spaces that reflect your style.", icon: faCouch, image: "/images/services/interior-design.jpg" },
  { title: "Home Staging", description: "Showcase your property's full potential. Our staging services help homes sell faster and at higher prices.", icon: faHome, image: "/images/services/home-staging.jpg" },
  { title: "Color Consulting", description: "The perfect palette transforms everything. Expert color selection for walls, trim, and accents.", icon: faPalette, image: "/images/services/color-consulting.jpg" },
];

const testimonials = [
  { name: "Sarah M.", role: "Homeowner", quote: "Nest & Dwell completely transformed our living room. It went from cluttered to a magazine-worthy space in just two weeks!" },
  { name: "Mark & Lisa T.", role: "Home Sellers", quote: "Our home sold in 3 days after staging — $40K over asking. Best investment we ever made." },
  { name: "Jennifer K.", role: "First-time Homebuyer", quote: "The color consultation alone was worth it. Our entire house feels warm, cohesive, and uniquely ours." },
  { name: "David R.", role: "Real Estate Agent", quote: "I recommend Nest & Dwell to all my sellers. Staged homes consistently outperform unstaged ones in our market." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4" variant="secondary">Portland&apos;s Premier Design Studio</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Spaces That <span className="text-primary">Tell Your Story</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Thoughtful interior design and expert home staging that transforms houses into homes 
            buyers fall in love with — or spaces you&apos;ll never want to leave.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Free Consultation</Button>
            </Link>
            <Link href="/projects" className="inline-flex">
              <Button size="lg" variant="outline">View Our Work</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From full-scale design to targeted staging, we offer everything you need to elevate your space.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} href={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="glass-card transition-shadow hover:shadow-lg h-full overflow-hidden group cursor-pointer">
                  <div className="w-full h-44 bg-accent/20 flex items-center justify-center overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-3">
                      <FontAwesomeIcon icon={s.icon} className="size-4" />
                    </div>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex">
              <Button variant="outline">All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A proven process that delivers stunning results, every time.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discover", desc: "We learn your vision, needs, and style preferences in a free consultation." },
              { step: "02", title: "Design", desc: "Custom mood boards, layouts, and selections tailored to your space." },
              { step: "03", title: "Transform", desc: "We manage the entire transformation — procurement to installation." },
              { step: "04", title: "Reveal", desc: "The big reveal — walk into your beautifully transformed space." },
            ].map((p) => (
              <Card key={p.step} className="glass-card text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary/20 mb-2">{p.step}</div>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Why Nest &amp; Dwell?</h2>
              <div className="space-y-4">
                {[
                  "Certified interior designers with 15+ years combined experience",
                  "Proven track record: staged homes sell 30% faster on average",
                  "Personalized approach — no two projects look the same",
                  "Full-service execution: we handle everything, you enjoy the result",
                  "Local Portland experts who understand PNW architecture and style",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/about" className="inline-flex">
                  <Button variant="outline">About Our Team</Button>
                </Link>
              </div>
            </div>
            <div className="w-full h-80 bg-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <img src="/images/about/studio.jpg" alt="Nest & Dwell studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg opacity-90 mb-8">Book your free consultation today and let&apos;s create the home you&apos;ve been dreaming of.</p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" variant="secondary">Get Started</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
