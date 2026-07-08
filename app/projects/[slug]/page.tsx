import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  Bot,
  BrainCircuit,
  Globe,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/brand";
import { JsonLd } from "@/components/seo/json-ld";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";
import type { ProjectType } from "@/content/types";

const typeMeta: Record<ProjectType, { icon: typeof Bot; label: string }> = {
  web: { icon: Globe, label: "Desarrollo Web" },
  rpa: { icon: Bot, label: "Automatización RPA" },
  ai: { icon: BrainCircuit, label: "Inteligencia Artificial" },
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `/projects/${slug}`;
  return {
    title: `${project.title} — Caso de éxito`,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${project.title} — Caso de éxito`,
      description: project.summary,
      url,
    },
  };
}

function Chapter({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="grid gap-3 border-t border-border pt-8 md:grid-cols-[auto_1fr] md:gap-8">
      <span className="font-mono text-sm text-primary">{index}</span>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="mt-3 leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { icon: Icon, label } = typeMeta[project.type];
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
        { "@type": "ListItem", position: 2, name: "Proyectos", item: `${site.url}/projects` },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: `${site.url}/projects/${slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.title,
      description: project.summary,
      about: project.category,
      keywords: project.tech.join(", "),
      author: { "@type": "Person", name: site.fullName },
      url: `${site.url}/projects/${slug}`,
    },
  ];

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={jsonLd} />

      <nav
        aria-label="Ruta de navegación"
        className="flex items-center gap-1 text-sm text-muted-foreground"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="size-4" />
        <Link href="/projects" className="transition-colors hover:text-foreground">
          Proyectos
        </Link>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">{project.title}</span>
      </nav>

      {/* Cabecera */}
      <header className="mt-8">
        <Badge variant="primary" className="gap-1.5">
          <Icon className="size-3.5" />
          {label}
        </Badge>
        <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{project.category}</span>
          <span aria-hidden>·</span>
          <span className="font-mono">{project.year}</span>
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.live && (
            <Button asChild variant="gradient">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                Ver sitio en vivo
                <ExternalLink />
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button asChild variant="outline">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" />
                Código
              </a>
            </Button>
          )}
        </div>
      </header>

      {/* Banner visual */}
      <div
        className="relative mt-10 aspect-[16/7] overflow-hidden rounded-2xl border border-border"
        style={{
          background: `radial-gradient(120% 120% at 15% 0%, ${project.accent}33, transparent 55%), linear-gradient(160deg, #0a0f1c, #05070f)`,
        }}
      >
        <div className="bg-grid absolute inset-0 opacity-[0.15]" />
        <Image
          src={project.cover}
          alt={`Vista previa de ${project.title}`}
          fill
          className="object-cover opacity-70"
          unoptimized
        />
        <span
          aria-hidden
          className="absolute bottom-4 right-6 font-display text-7xl font-bold opacity-10 sm:text-8xl"
        >
          {project.title.split(" ")[0]}
        </span>
      </div>

      {/* Tecnologías */}
      <section className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Stack utilizado
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </section>

      {/* Métricas */}
      {project.metrics.length > 0 && (
        <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-surface-2/40 p-5"
            >
              <p
                className="font-display text-3xl font-bold"
                style={{ color: project.accent }}
              >
                {m.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </section>
      )}

      {/* Capítulos del caso */}
      <div className="mt-14 flex flex-col gap-10">
        <Chapter index="01" title="El problema">
          <p>{project.problem}</p>
        </Chapter>
        <Chapter index="02" title="La solución">
          <p>{project.solution}</p>
        </Chapter>
        <Chapter index="03" title="Arquitectura">
          <p>{project.architecture}</p>
        </Chapter>

        <Chapter index="04" title="Resultados">
          <ul className="flex flex-col gap-2.5">
            {project.results.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Chapter>

        <Chapter index="05" title="Lecciones aprendidas">
          <ul className="flex flex-col gap-2.5">
            {project.lessons.map((l) => (
              <li key={l} className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 size-5 shrink-0 text-secondary" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Chapter>
      </div>

      {/* CTA + siguiente proyecto */}
      <div className="mt-16 flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="ghost">
          <Link href="/projects">
            <ArrowLeft />
            Todos los proyectos
          </Link>
        </Button>
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-2/40 p-4 transition-colors hover:border-border-strong"
        >
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Siguiente proyecto</p>
            <p className="font-semibold">{next.title}</p>
          </div>
          <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-surface-2/40 p-8 text-center sm:p-12">
        <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
          ¿Tienes un reto parecido?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Construyamos juntos la solución. Cuéntame tu proceso y te propongo cómo
          automatizarlo.
        </p>
        <Button asChild variant="gradient" size="lg" className="mt-6">
          <Link href="/#contact">
            Hablemos
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
