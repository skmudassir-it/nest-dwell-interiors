"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Projects</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">A curated selection of our recent work across Portland.</p>
        </div>

        <Tabs value={filter} onValueChange={(v: string | null) => setFilter(v || "all")} className="mb-10">
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="interior-design">Interior Design</TabsTrigger>
            <TabsTrigger value="staging">Staging</TabsTrigger>
            <TabsTrigger value="color-consulting">Color</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card key={p.id} className="glass-card overflow-hidden group">
              <div className="w-full h-52 bg-accent/20 flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
