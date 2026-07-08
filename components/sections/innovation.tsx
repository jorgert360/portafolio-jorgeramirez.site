import { Search, Bot, BrainCircuit, Braces, Code2, Network } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: Search,
    title: "SEO técnico avanzado",
    desc: "Metadata dinámica, sitemap y robots automáticos, canonical, breadcrumbs y Core Web Vitals monitoreados en cada despliegue.",
    accent: "#3b82f6",
  },
  {
    icon: Bot,
    title: "AEO · Answer Engine Optimization",
    desc: "Contenido conciso y con FAQs estructuradas para que los asistentes e IA generativa citen tu marca como fuente.",
    accent: "#8b5cf6",
    tag: "IA",
  },
  {
    icon: BrainCircuit,
    title: "GEO · Generative Engine Optimization",
    desc: "Información modelada con claridad y autoridad temática para que los motores generativos la extraigan con confianza.",
    accent: "#06b6d4",
    tag: "IA",
  },
  {
    icon: Braces,
    title: "Datos estructurados (JSON-LD)",
    desc: "Person, WebSite, Article, FAQPage y BreadcrumbList: contenido legible tanto por Google como por modelos de lenguaje.",
    accent: "#3b82f6",
  },
  {
    icon: Code2,
    title: "Diseño semántico y accesible",
    desc: "HTML jerárquico y WCAG 2.2: mejor experiencia para personas, buscadores y lectores de pantalla.",
    accent: "#8b5cf6",
  },
  {
    icon: Network,
    title: "Arquitectura lista para IA",
    desc: "Enlazado interno estratégico y estructura modular, preparada para integrar agentes y asistentes inteligentes sin reescribir.",
    accent: "#06b6d4",
  },
];

const badges = [
  "SEO",
  "AEO",
  "GEO",
  "JSON-LD",
  "Schema.org",
  "WCAG 2.2",
  "Core Web Vitals",
];

export function Innovation() {
  return (
    <section
      id="innovacion"
      className="relative mx-auto max-w-6xl px-6 py-8 sm:py-10"
    >
      <SectionHeading
        eyebrow="Innovación"
        title={
          <>
            Ingeniería preparada para la{" "}
            <span className="text-gradient">era de la IA</span>
          </>
        }
        description="No basta con posicionar en Google. Diseño experiencias visibles también para los motores de respuesta y la IA generativa — SEO, AEO y GEO en una sola arquitectura."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i} className="h-full">
            <TiltCard glow={p.accent} className="h-full rounded-2xl">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors duration-300 hover:border-border-strong">
                <div className="flex items-center justify-between">
                  <span
                    className="grid size-11 place-items-center rounded-xl"
                    style={{ background: `${p.accent}1f`, color: p.accent }}
                  >
                    <p.icon className="size-5" />
                  </span>
                  {p.tag && <Badge variant="secondary">{p.tag}</Badge>}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2">
        {badges.map((b) => (
          <Badge key={b} variant="outline">
            {b}
          </Badge>
        ))}
      </Reveal>
    </section>
  );
}
