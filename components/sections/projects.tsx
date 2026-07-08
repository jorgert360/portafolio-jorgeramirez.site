import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-8 sm:py-10">
      <SectionHeading
        eyebrow="Proyectos"
        title={
          <>
            Casos de <span className="text-gradient">éxito</span>, no solo demos
          </>
        }
        description="Problemas reales resueltos con automatización, IA y desarrollo. Cada proyecto documenta el reto, la arquitectura y los resultados."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.slug} delay={0.05 * i} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">
            Ver todos los proyectos
            <ArrowRight />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
