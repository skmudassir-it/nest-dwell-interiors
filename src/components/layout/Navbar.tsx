"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="bg-gradient-to-r from-amber-500 via-primary to-secondary text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-1.5 text-xs font-semibold tracking-wide">
          <span className="inline-block px-8">🏡 Free Consultation — Transform Your Space Today!</span>
          <span className="inline-block px-8">🏡 Free Consultation — Transform Your Space Today!</span>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Nest & Dwell Interiors" className="h-9" />
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex">
                <Button
                  variant={pathname === l.href ? "default" : "ghost"}
                  size="sm"
                  className={pathname === l.href ? "" : "text-foreground/70 hover:text-foreground"}
                >
                  {l.label}
                </Button>
              </Link>
            ))}
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-12">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="inline-flex" onClick={() => setOpen(false)}>
                    <Button variant={pathname === l.href ? "default" : "ghost"} className="w-full justify-start">
                      {l.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
