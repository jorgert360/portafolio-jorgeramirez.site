import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";
import { about } from "@/content/profile";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Jorge Luis Ramírez, Automation Engineer especializado en RPA, Inteligencia Artificial y Desarrollo de Software. Más de 5 años de experiencia transformando procesos empresariales.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Sobre mí | Jorge Luis Ramírez",
    description: "Automation Engineer especializado en RPA, IA y Desarrollo de Software.",
    url: "/about",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Sobre mí", item: `${site.url}/about` },
  ],
};

const milestones = [
  { year: "2019", event: "Inicio en zona franca — Productos Familia, primera aproximación a procesos industriales" },
  { year: "2023", event: "Analista de Automatización RPA — desarrollo del Robot Alejo 2.0, automatización del 100% del proceso PICI2" },
  { year: "2026", event: "Desarrollador RPA UiPath en banca — migración Pega → UiPath, arquitecturas con ReFramework" },
];

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "8", label: "Proyectos entregados" },
  { value: "100%", label: "Procesos automatizados" },
  { value: "45%", label: "Reducción promedio SLA" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={breadcrumbJsonLd} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">Sobre mí</span>
      </nav>

      {/* Hero */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-secondary/20 to-tertiary/20 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border">
            <Image src="/foto-perfil.png" alt={site.fullName} fill className="object-cover" priority />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl glass-strong px-3 py-2 text-xs">
              <span className="font-medium">{site.fullName}</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <MapPin className="size-3" />
                {site.location}
              </span>
            </div>
          </div>
        </div>
        <div>
          <Badge variant="primary">Automation Engineer</Badge>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl">
            {site.fullName}
          </h1>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {site.role}
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{about.paragraphs[0]}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{about.paragraphs[1]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/servicios">
                Ver servicios <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Stats */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-surface-2/40 p-5 text-center">
              <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Trayectoria */}
      <Reveal className="mt-16">
        <h2 className="text-2xl font-semibold">Trayectoria</h2>
        <div className="relative mt-8">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          {milestones.map((m) => (
            <Reveal key={m.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-primary/40 bg-background font-display text-xs font-bold text-primary shadow-[0_0_22px_-6px_rgba(59,130,246,0.5)]">
                {m.year}
              </span>
              <p className="leading-relaxed text-muted-foreground">{m.event}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Enfoque */}
      <Reveal className="mt-16">
        <h2 className="text-2xl font-semibold">Áreas de enfoque</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {about.focus.map((f) => (
            <div key={f} className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/40 px-4 py-3">
              <Check className="size-5 shrink-0 text-primary" />
              <span className="text-sm">{f}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent p-8 text-center sm:p-12">
        <h2 className="text-balance text-2xl font-semibold sm:text-3xl">¿Tienes un proyecto en mente?</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Conversemos sin compromiso sobre cómo puedo ayudarte a automatizar tus procesos.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gradient" size="lg">
            <a href="https://wa.me/573124249342?text=Hola%20Jorge%2C%20vi%20tu%20perfil%20y%20quiero%20consultarte" target="_blank" rel="noopener noreferrer">
              Escribirme por WhatsApp <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`mailto:${site.email}`}>Enviar correo</a>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
