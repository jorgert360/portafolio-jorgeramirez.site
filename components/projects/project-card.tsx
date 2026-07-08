"use client";

import Link from "next/link";
import Image from "next/image";
import { Bot, BrainCircuit, Globe, ArrowUpRight, ExternalLink } from "lucide-react";
import { TiltCard } from "@/components/motion/tilt-card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons/brand";
import { cn } from "@/lib/utils";
import type { Project, ProjectType } from "@/content/types";

const typeMeta: Record<ProjectType, { icon: typeof Bot; label: string }> = {
  web: { icon: Globe, label: "Web" },
  rpa: { icon: Bot, label: "RPA" },
  ai: { icon: BrainCircuit, label: "IA" },
};

function ProjectCover({ project }: { project: Project }) {
  const { icon: Icon, label } = typeMeta[project.type];
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {/* Fondo branded (placeholder). Cuando exista la imagen real, se muestra encima. */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 100% at 20% 0%, ${project.accent}30, transparent 60%), linear-gradient(160deg, #0a0f1c, #05070f)`,
        }}
      />
      <div className="bg-grid absolute inset-0 opacity-[0.15]" />
      <span
        className="absolute right-5 top-1/2 -translate-y-1/2 font-display text-6xl font-bold opacity-10"
        aria-hidden
      >
        {project.title.split(" ")[0]}
      </span>

      {/* Imagen real si está disponible */}
      <Image
        src={project.cover}
        alt={`Vista previa de ${project.title}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover opacity-80 transition-opacity duration-500 hover:opacity-100"
        unoptimized
      />

      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass-strong px-2.5 py-1 text-xs font-medium">
        <Icon className="size-3.5" style={{ color: project.accent }} />
        {label}
      </span>

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium">
          Ver caso de éxito <ArrowUpRight className="size-4" />
        </span>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <TiltCard glow={project.accent} intensity={5} className={cn("h-full rounded-2xl", className)}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-2/40 transition-colors duration-300 hover:border-border-strong">
        <ProjectCover project={project} />

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-muted-foreground">{project.category}</span>
            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h3 className="mt-2 text-lg font-semibold">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors after:absolute after:inset-0 hover:text-primary"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Badge key={t} variant="outline" className="text-[11px]">
                {t}
              </Badge>
            ))}
          </div>

          <div className="relative z-10 mt-5 flex items-center gap-2 pt-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Sitio en vivo de ${project.title}`}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <ExternalLink className="size-4" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositorio de ${project.title}`}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
            )}
            <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
              Leer caso <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
