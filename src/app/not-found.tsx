import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Room Not Found</h1>
        <p className="text-muted-foreground mb-8">This page seems to have been redesigned out of existence. Let&apos;s get you back to somewhere beautiful.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex">
            <Button>Back Home</Button>
          </Link>
          <Link href="/services" className="inline-flex">
            <Button variant="outline">Our Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
