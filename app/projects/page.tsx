import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos de éxito en automatización RPA, inteligencia artificial y desarrollo web de Jorge Ramírez.",
  alternates: { canonical: "/projects" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Proyectos", item: `${site.url}/projects` },
  ],
};

export default function ProjectsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={breadcrumbJsonLd} />

      <nav
        aria-label="Ruta de navegación"
        className="flex items-center gap-1 text-sm text-muted-foreground"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">Proyectos</span>
      </nav>

      <Reveal className="mt-8 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Portafolio
        </span>
        <h1 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
          Todos los <span className="text-gradient">proyectos</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Desde robots de software que operan sistemas bancarios hasta
          plataformas web con miles de visitas. Explora cada caso en detalle.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={0.04 * i} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
