"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[plugin.current]} opts={{ loop: true, align: "start" }} className="max-w-4xl mx-auto">
      <CarouselContent>
        {items.map((t, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <FontAwesomeIcon key={j} icon={faStar} className="size-3" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
