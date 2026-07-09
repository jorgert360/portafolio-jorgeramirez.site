import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  Bot,
  Code2,
  Code,
  BarChart3,
  Database,
  Layers,
  ChartPie,
  Cloud,
  GitBranch,
  Webhook,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";
import { stackPages } from "@/content/stack-pages";

export const metadata: Metadata = {
  title: "Stack Tecnológico",
  description:
    "Las tecnologías con las que Jorge Ramírez construye soluciones de automatización, IA y desarrollo: UiPath, Python, Pandas, SQL, Next.js, Power BI, Azure, REST APIs y más.",
  alternates: { canonical: "/stack" },
  openGraph: {
    title: "Stack Tecnológico | Jorge Luis Ramírez",
    description:
      "Automatización, datos, IA y desarrollo web: el stack completo de un Automation Engineer.",
    url: "/stack",
  },
};

/** Icono por tecnología (la elección visual vive en la capa de página). */
const iconFor: Record<string, typeof Bot> = {
  uipath: Bot,
  python: Code2,
  pandas: BarChart3,
  sql: Database,
  javascript: Code,
  nextjs: Layers,
  powerbi: ChartPie,
  azure: Cloud,
  github: GitBranch,
  apis: Webhook,
  bizagi: Workflow,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Stack", item: `${site.url}/stack` },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Stack Tecnológico",
  url: `${site.url}/stack`,
  inLanguage: "es",
  about: stackPages.map((t) => t.name),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: stackPages.length,
    itemListElement: stackPages.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${site.url}/stack/${t.slug}`,
    })),
  },
};

export default function StackHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, collectionJsonLd]} />

      <nav
        aria-label="Ruta de navegación"
        className="flex items-center gap-1 text-sm text-muted-foreground"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">Stack</span>
      </nav>

      <Reveal className="mt-8 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Tecnologías
        </span>
        <h1 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
          Mi <span className="text-gradient">stack</span> tecnológico
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          De la automatización robótica a la ingeniería de software. Explora cada
          tecnología para ver cómo la aplico en proyectos reales.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stackPages.map((t, i) => {
          const Icon = iconFor[t.slug];
          return (
            <Reveal key={t.slug} delay={0.04 * i} className="h-full">
              <Link
                href={`/stack/${t.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface-2/40 p-6 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_28px_-10px_var(--accent)]"
                style={{ "--accent": t.accent } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="grid size-12 place-items-center rounded-xl"
                    style={{ backgroundColor: `${t.accent}1a`, color: t.accent }}
                  >
                    <Icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                </div>
                <h2 className="mt-5 text-xl font-semibold">{t.name}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.tagline}
                </p>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent p-8 text-center sm:p-12">
        <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Combino estas tecnologías para automatizar procesos y construir
          soluciones a la medida.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gradient" size="lg">
            <Link href="/servicios">
              Ver servicios
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">Ver proyectos</Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
