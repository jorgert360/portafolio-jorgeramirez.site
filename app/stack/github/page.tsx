import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, FileText, GitBranch, ArrowRight, Cable, Globe, Cog, Layers, Eye, BrainCircuit, Server, Users, RefreshCw, Code, Box, BookOpen, GitFork, GitMerge, GitPullRequest, GitCommit, Terminal } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Git & GitHub | Jorge Luis Ramírez | Version Control & DevOps",
  description: "Utilizo Git y GitHub para gestionar versiones, colaborar en proyectos, automatizar despliegues y mantener buenas prácticas durante todo el ciclo de desarrollo de software.",
  keywords: ["Git", "GitHub", "Version Control", "Source Control", "GitFlow", "GitHub Actions", "CI/CD", "DevOps", "Software Development", "Automation"],
  alternates: { canonical: "/stack/github" },
  openGraph: { title: "Git & GitHub | Jorge Luis Ramírez | Version Control & DevOps", description: "Control de versiones, colaboración y automatización con Git y GitHub.", url: "/stack/github" },
};

const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
  { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
  { "@type": "ListItem", position: 3, name: "Git & GitHub", item: `${site.url}/stack/github` },
]};
const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: site.fullName, jobTitle: "Version Control & DevOps", description: "Control de versiones, colaboración y automatización con Git y GitHub.", url: site.url };
const techArticleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: "Git & GitHub — Version Control & DevOps", author: { "@type": "Person", name: site.fullName }, description: "Git y GitHub como base del desarrollo profesional de software." };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "¿Para qué utilizas Git?", acceptedAnswer: { "@type": "Answer", text: "Utilizo Git para controlar versiones, mantener un historial completo del desarrollo y gestionar cambios de manera segura durante todo el ciclo de vida de un proyecto." } },
  { "@type": "Question", name: "¿Qué ventajas ofrece GitHub?", acceptedAnswer: { "@type": "Answer", text: "GitHub facilita el almacenamiento de repositorios, la colaboración entre desarrolladores, la revisión de código y la automatización de procesos mediante GitHub Actions." } },
  { "@type": "Question", name: "¿Cómo integras Git & GitHub con Azure?", acceptedAnswer: { "@type": "Answer", text: "GitHub almacena el código fuente y permite automatizar procesos de despliegue hacia Microsoft Azure mediante flujos de integración continua." } },
  { "@type": "Question", name: "¿Qué estrategia de ramas utilizas?", acceptedAnswer: { "@type": "Answer", text: "Trabajo con ramas independientes para nuevas funcionalidades, correcciones y versiones estables, facilitando la organización del desarrollo." } },
  { "@type": "Question", name: "¿Por qué Git & GitHub forman parte de tu stack tecnológico?", acceptedAnswer: { "@type": "Answer", text: "Porque permiten gestionar proyectos de software de manera profesional, garantizando trazabilidad, colaboración, automatización y mantenimiento continuo." } },
]};

const statsCards = [
  { icon: GitBranch, title: "Control de Versiones", description: "Seguimiento completo de los cambios del proyecto." },
  { icon: Users, title: "Trabajo Colaborativo", description: "Gestión organizada del desarrollo." },
  { icon: RefreshCw, title: "Automatización", description: "Integración con procesos de despliegue." },
  { icon: Eye, title: "Trazabilidad", description: "Historial seguro de cada versión." },
];
const capabilities = ["Repositories", "Branches", "Commits", "Merge", "Pull Requests", "GitHub Actions", "Versioning", "Collaboration"];
const whyGit = [
  { icon: GitBranch, title: "Control de Versiones", desc: "Historial completo del proyecto." },
  { icon: Users, title: "Trabajo Colaborativo", desc: "Facilita el desarrollo en equipo." },
  { icon: Shield, title: "Seguridad", desc: "Recuperación de versiones anteriores." },
  { icon: RefreshCw, title: "Integración Continua", desc: "Automatización del ciclo de desarrollo." },
  { icon: Eye, title: "Trazabilidad", desc: "Seguimiento de cada cambio realizado." },
  { icon: Code, title: "Calidad del Software", desc: "Procesos organizados y mantenibles." },
];
const coreComponents = [
  { icon: Server, name: "Repository", desc: "Almacenamiento del proyecto." },
  { icon: GitCommit, name: "Commit", desc: "Registro de cambios." },
  { icon: GitBranch, name: "Branch", desc: "Desarrollo aislado de funcionalidades." },
  { icon: GitMerge, name: "Merge", desc: "Integración de cambios." },
  { icon: GitPullRequest, name: "Pull Request", desc: "Revisión antes de integrar." },
  { icon: Terminal, name: "Clone", desc: "Obtención del proyecto." },
  { icon: GitFork, name: "Fork", desc: "Copia independiente de un repositorio." },
  { icon: BookOpen, name: "Tags", desc: "Versiones oficiales." },
  { icon: Globe, name: "Releases", desc: "Distribución de versiones." },
  { icon: FileText, name: "Issues", desc: "Gestión de tareas e incidencias." },
  { icon: Cog, name: "Projects", desc: "Organización del trabajo." },
  { icon: RefreshCw, name: "GitHub Actions", desc: "Automatización de procesos." },
];
const branchStrategy = [
  { icon: Shield, name: "Main", desc: "Versión estable." },
  { icon: Layers, name: "Develop", desc: "Integración de nuevas funcionalidades." },
  { icon: GitBranch, name: "Feature", desc: "Desarrollo de funcionalidades." },
  { icon: Cog, name: "Hotfix", desc: "Correcciones urgentes." },
  { icon: Globe, name: "Release", desc: "Preparación de nuevas versiones." },
];
const ecosystemCards = [
  { icon: Globe, name: "Next.js", desc: "Aplicaciones web." },
  { icon: Cpu, name: "Python", desc: "Automatización." },
  { icon: Database, name: "SQL", desc: "Persistencia." },
  { icon: BarChart3, name: "Power BI", desc: "Analítica." },
  { icon: Cloud, name: "Azure", desc: "Cloud." },
  { icon: Cog, name: "GitHub Actions", desc: "CI/CD." },
  { icon: Code, name: "Docker", desc: "Contenedores." },
  { icon: Cable, name: "REST APIs", desc: "Integración." },
  { icon: BrainCircuit, name: "OpenAI", desc: "IA." },
  { icon: Bot, name: "UiPath", desc: "RPA." },
  { icon: Code, name: "VS Code", desc: "Editor." },
  { icon: FileText, name: "TypeScript", desc: "Tipado." },
];
const automationCards = [
  { icon: Cog, name: "Compilación automática", desc: "Build automatizado." },
  { icon: Check, name: "Pruebas automatizadas", desc: "Tests." },
  { icon: RefreshCw, name: "Despliegues automáticos", desc: "Deploy." },
  { icon: Code, name: "Validación del código", desc: "Linting." },
  { icon: Shield, name: "Control de calidad", desc: "QA." },
  { icon: RefreshCw, name: "Integración Continua", desc: "CI." },
];
const useCases = [
  { icon: Globe, title: "Aplicaciones Web", tags: [] },
  { icon: Bot, title: "Automatización RPA", tags: [] },
  { icon: BrainCircuit, title: "Proyectos de IA", tags: [] },
  { icon: BarChart3, title: "Dashboards", tags: [] },
  { icon: Cable, title: "APIs", tags: [] },
  { icon: Globe, title: "Portales Corporativos", tags: [] },
  { icon: Cloud, title: "Aplicaciones Cloud", tags: [] },
  { icon: Globe, title: "Soluciones Empresariales", tags: [] },
];
const bestPractices = [
  { icon: FileText, title: "Commits descriptivos", desc: "Claridad." },
  { icon: GitBranch, title: "Versionado organizado", desc: "Control." },
  { icon: GitBranch, title: "Ramas independientes", desc: "Aislamiento." },
  { icon: GitPullRequest, title: "Pull Requests", desc: "Revisión." },
  { icon: Eye, title: "Revisión de código", desc: "Calidad." },
  { icon: FileText, title: "Documentación", desc: "Mantenibilidad." },
  { icon: RefreshCw, title: "Automatización", desc: "Eficiencia." },
  { icon: RefreshCw, title: "Integración Continua", desc: "Agilidad." },
  { icon: Shield, title: "Respaldo del código", desc: "Seguridad." },
  { icon: Users, title: "Colaboración", desc: "Trabajo en equipo." },
  { icon: Eye, title: "Trazabilidad", desc: "Transparencia." },
  { icon: Cog, title: "Mantenimiento", desc: "Evolución." },
];
const projects = [
  { name: "Tengoya", desc: "Marketplace desarrollado con tecnologías modernas donde Git y GitHub permitieron administrar el desarrollo, incorporar nuevas funcionalidades y mantener un historial organizado del proyecto." },
  { name: "HISTECH", desc: "Portal corporativo optimizado para SEO, AEO y GEO donde Git facilitó la evolución continua del sitio y la gestión ordenada del código fuente." },
  { name: "Emisoras Latinas", desc: "Plataforma web para emisoras online administrada mediante control de versiones para garantizar estabilidad y facilitar futuras mejoras." },
  { name: "CarWeb", desc: "Proyecto orientado al sector automotriz desarrollado siguiendo buenas prácticas de versionamiento, organización del código y evolución incremental." },
];
const experienceBlocks = [
  {
    company: "Proyectos Web Empresariales", role: "Full Stack Developer",
    content: "Durante el desarrollo de proyectos propios como Tengoya, HISTECH, Emisoras Latinas y CarWeb utilicé Git y GitHub como base para gestionar la evolución del software. Cada nueva funcionalidad fue desarrollada mediante ramas independientes, permitiendo mantener versiones estables mientras se implementaban mejoras de forma segura. El control de versiones facilitó el seguimiento del desarrollo, la recuperación de cambios cuando fue necesario y una organización clara del crecimiento de cada proyecto.",
    indicators: [
      { value: "Versionamiento Profesional", label: "" }, { value: "Repositorios", label: "" },
      { value: "Control de Cambios", label: "" }, { value: "Trabajo Organizado", label: "" },
      { value: "Gestión del Código", label: "Buenas Prácticas" },
    ],
  },
  {
    company: "Automatización e IA", role: "Automation & AI Developer",
    content: "En proyectos relacionados con Automatización RPA, Ciencia de Datos e Inteligencia Artificial utilicé Git y GitHub para organizar scripts, modelos, integraciones y componentes reutilizables. El uso de repositorios permitió mantener un historial claro del desarrollo, facilitar la evolución de las soluciones y asegurar que cada cambio pudiera ser identificado, revisado y documentado antes de su implementación.",
    indicators: [
      { value: "Python", label: "" }, { value: "Automatización", label: "" },
      { value: "Versionamiento", label: "" }, { value: "Machine Learning", label: "" },
      { value: "Repositorios", label: "Integración Continua" },
    ],
  },
];
const integratedTechs = [
  { icon: Globe, name: "Next.js", desc: "Aplicaciones web." },
  { icon: Code, name: "JavaScript", desc: "Lenguaje base." },
  { icon: Cpu, name: "Python", desc: "Automatización." },
  { icon: Database, name: "SQL", desc: "Persistencia." },
  { icon: BarChart3, name: "Power BI", desc: "Analítica." },
  { icon: Cloud, name: "Azure", desc: "Cloud." },
  { icon: Cog, name: "UiPath", desc: "RPA." },
  { icon: BrainCircuit, name: "OpenAI", desc: "IA." },
  { icon: Cog, name: "Docker", desc: "Contenedores." },
  { icon: Code, name: "VS Code", desc: "Editor." },
  { icon: RefreshCw, name: "GitHub Actions", desc: "CI/CD." },
  { icon: Cable, name: "REST APIs", desc: "Integración." },
];
const complementaryTools = [
  { icon: Code, name: "Visual Studio Code", desc: "Editor principal de desarrollo." },
  { icon: GitBranch, name: "GitHub Desktop", desc: "Administración visual de repositorios." },
  { icon: RefreshCw, name: "GitHub Actions", desc: "Automatización de flujos de trabajo." },
  { icon: Cloud, name: "Azure DevOps", desc: "Gestión de despliegues y pipelines." },
  { icon: Box, name: "Docker", desc: "Contenedores para entornos consistentes." },
];
const methodologySteps = [
  "Planificación", "Creación del repositorio", "Desarrollo mediante ramas", "Commit",
  "Push", "Pull Request", "Revisión", "Merge", "Deploy", "Monitoreo y mejora continua",
];

export default function GithubPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link><ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack Tecnológico</span><ChevronRight className="size-4" />
        <span className="truncate text-foreground">Git & GitHub</span>
      </nav>

      {/* HERO */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Version Control</Badge>
            <Badge variant="secondary">GitHub</Badge>
            <Badge variant="tertiary">DevOps</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">Git & GitHub</h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">Controlando la evolución del software</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Git y GitHub forman parte esencial de mi flujo de trabajo como desarrollador. Gracias al control de versiones puedo mantener un historial completo de los cambios realizados, colaborar de forma organizada, automatizar procesos de despliegue y garantizar la trazabilidad de cada proyecto desde su desarrollo hasta su publicación.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg"><a href="#experience">Ver experiencia<ExternalLink className="size-4" /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/stack/azure">Explorar flujo de trabajo<ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#f5f5f5]/20 via-[#c9510c]/10 to-transparent blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60">
            <Image
              src="/stack/github/hero-github.webp"
              alt="Git & GitHub — Version Control & DevOps"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/5 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* STATS CARDS */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{statsCards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#c9510c]/50 hover:shadow-[0_0_24px_-8px_rgba(201,81,12,0.4)]">
            <c.icon className="size-8 text-[#c9510c]" /><h3 className="mt-3 font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
          </div>
        ))}</div>
      </Reveal>

      {/* CAPACIDADES */}
      <Reveal className="mt-16">
        <div className="flex flex-wrap justify-center gap-2">{capabilities.map((cap) => (
          <Badge key={cap} variant="outline" className="text-xs">{cap}</Badge>
        ))}</div>
      </Reveal>

      {/* CICLO DE VIDA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ciclo</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">El ciclo de vida del desarrollo</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Idea", "Desarrollo", "Commit", "Push", "GitHub", "Pull Request", "Review", "Merge", "Deploy", "Producción"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#c9510c]/30 bg-[#c9510c]/10 px-4 py-2 font-mono text-sm text-[#c9510c]">{item}</span>
                {i < 9 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Git y GitHub permiten mantener un proceso de desarrollo organizado, facilitando la colaboración, el control de cambios y la automatización del ciclo de vida del software.</p>
        </div>
      </Reveal>

      {/* ¿QUÉ ES GIT? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#c9510c] to-transparent" />Control de Versiones</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué es Git?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Git es un sistema de control de versiones distribuido que permite registrar cada cambio realizado en un proyecto de software, facilitando la colaboración entre equipos de desarrollo y garantizando la trazabilidad del código a lo largo del tiempo.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Dentro de mi flujo de trabajo utilizo Git para administrar versiones, mantener un historial organizado de los cambios, experimentar con nuevas funcionalidades mediante ramas independientes y asegurar que cada modificación pueda integrarse de forma controlada.</p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#c9510c]/20 via-transparent to-transparent blur-2xl" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/github/github-devops.webp"
              alt="Control de versiones distribuido con Git"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </Reveal>

      {/* ¿QUÉ ES GITHUB? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#f5f5f5]/10 via-transparent to-transparent blur-2xl" />
            <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-surface-2/40">
              <div className="flex flex-col items-center gap-3 p-8 text-center">
                <Users className="size-16 text-white" /><p className="text-sm text-muted-foreground">Colaboración y automatización</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-white to-transparent" />Plataforma</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué es GitHub?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">GitHub es una plataforma de colaboración basada en Git que permite alojar repositorios, gestionar proyectos de desarrollo, revisar código, automatizar procesos y facilitar el trabajo colaborativo.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">En mi ecosistema tecnológico GitHub representa el punto central donde se almacenan los proyectos, se gestionan las versiones y se preparan los procesos de integración y despliegue continuo.</p>
        </div>
      </Reveal>

      {/* ¿POR QUÉ? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{whyGit.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#c9510c]/50">
              <item.icon className="size-6 text-[#c9510c]" /><h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}</div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#c9510c] to-transparent" />Importancia</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo Git y GitHub?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Git y GitHub representan la base de un flujo de desarrollo profesional, permitiendo mantener control de versiones, colaboración organizada y automatización del ciclo de vida de las aplicaciones.</p>
        </div>
      </Reveal>

      {/* COMPONENTES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Componentes</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Elementos fundamentales del flujo de trabajo</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{coreComponents.map((comp) => (
          <Reveal key={comp.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#c9510c]/50">
              <comp.icon className="size-6 text-[#c9510c]" /><h3 className="mt-2 text-sm font-semibold">{comp.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{comp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* FLUJO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Flujo</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Flujo profesional de desarrollo</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Repositorio", "Nueva Rama", "Desarrollo", "Commit", "Push", "Pull Request", "Revisión", "Merge", "Deploy", "Producción"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#c9510c]/30 bg-[#c9510c]/10 px-4 py-2 font-mono text-sm text-[#c9510c]">{item}</span>
                {i < 9 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Cada proyecto sigue un flujo de trabajo estructurado que permite desarrollar nuevas funcionalidades de forma segura, validar cambios antes de su integración y mantener la estabilidad de la aplicación.</p>
        </div>
      </Reveal>

      {/* ESTRATEGIA DE RAMAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ramas</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Organización del desarrollo mediante ramas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{branchStrategy.map((bs) => (
          <Reveal key={bs.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#c9510c]/50">
              <bs.icon className="mx-auto size-6 text-[#c9510c]" /><h3 className="mt-2 text-sm font-semibold">{bs.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{bs.desc}</p>
            </div>
          </Reveal>
        ))}</div>
        <p className="mt-8 text-center leading-relaxed text-muted-foreground">Esta estrategia permite mantener proyectos organizados, facilitar el trabajo colaborativo y reducir riesgos durante la integración de nuevas funcionalidades o correcciones.</p>
      </Reveal>

      {/* ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que complemento con Git y GitHub</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{ecosystemCards.map((eco) => (
          <Reveal key={eco.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#c9510c]/50">
              <eco.icon className="size-6 text-[#c9510c]" /><h3 className="mt-2 font-semibold">{eco.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{eco.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* AUTOMATIZACIÓN */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Automatización</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Automatización mediante GitHub Actions</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{automationCards.map((ac) => (
          <Reveal key={ac.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#c9510c]/50">
              <ac.icon className="mx-auto size-6 text-[#c9510c]" /><h3 className="mt-2 text-sm font-semibold">{ac.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{ac.desc}</p>
            </div>
          </Reveal>
        ))}</div>
        <p className="mt-8 text-center leading-relaxed text-muted-foreground">GitHub Actions permite automatizar tareas repetitivas, ejecutar pruebas, validar código y desplegar aplicaciones de forma automática, mejorando la calidad y velocidad del desarrollo.</p>
      </Reveal>

      {/* EXPERIENCIA */}
      <section id="experience">
        <Reveal className="mt-24">
          <div className="flex flex-col gap-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria profesional</span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi experiencia gestionando proyectos con Git & GitHub</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Git y GitHub forman parte de mi flujo de trabajo diario para desarrollar aplicaciones web, automatizaciones, soluciones de Inteligencia Artificial y plataformas empresariales. Gracias al control de versiones puedo mantener la estabilidad del código, colaborar de forma organizada y garantizar la trazabilidad de cada cambio durante todo el ciclo de desarrollo.</p>
          </div>
        </Reveal>
        {experienceBlocks.map((block) => (
          <Reveal key={block.company} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
              <h3 className="text-xl font-semibold">{block.role}</h3>
              <p className="mt-1 text-[#c9510c]">{block.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{block.indicators.map((ind) => (
                <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                  <p className="font-display text-lg font-bold text-[#c9510c]">{ind.value}</p>
                  {ind.label && <p className="mt-1 text-xs text-muted-foreground">{ind.label}</p>}
                </div>
              ))}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* PROYECTOS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proyectos</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Proyectos donde utilizo Git & GitHub</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">{projects.map((p) => (
          <Reveal key={p.name} delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#c9510c]/50">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* TECNOLOGÍAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que integro con Git & GitHub</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{integratedTechs.map((tech) => (
          <Reveal key={tech.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#c9510c]/50">
              <tech.icon className="size-6 text-[#c9510c]" /><h3 className="mt-2 font-semibold">{tech.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{tech.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* METODOLOGÍA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proceso</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi flujo de desarrollo</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          {methodologySteps.map((step, i) => (
            <Reveal key={step} delay={0.05 * i} className="relative pl-16 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#c9510c]/40 bg-background font-display text-xs font-bold text-[#c9510c] shadow-[0_0_22px_-6px_#c9510c]">{i + 1}</span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">Cada proyecto sigue un flujo de trabajo estructurado que garantiza estabilidad, trazabilidad y facilidad de mantenimiento. Este proceso permite evolucionar el software de manera controlada y reducir riesgos durante cada nueva versión.</p>
      </Reveal>

      {/* BUENAS PRÁCTICAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Calidad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Buenas prácticas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{bestPractices.map((bp) => (
          <Reveal key={bp.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#c9510c]/50">
              <bp.icon className="mx-auto size-6 text-[#c9510c]" /><h3 className="mt-2 text-sm font-semibold">{bp.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{bp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* CASOS DE USO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Escenarios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Escenarios donde aplico Git & GitHub</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{useCases.map((uc) => (
          <Reveal key={uc.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#c9510c]/50">
              <uc.icon className="mx-auto size-6 text-[#c9510c]" /><h3 className="mt-2 text-sm font-semibold">{uc.title}</h3>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ECOSISTEMA DE DESARROLLO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi ecosistema de desarrollo</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["VS Code", "Git", "GitHub", "GitHub Actions", "Azure", "App Web", "Base de Datos", "Power BI", "IA", "Usuario Final"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#c9510c]/30 bg-[#c9510c]/10 px-4 py-2 font-mono text-sm text-[#c9510c]">{item}</span>
                {i < 9 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Este flujo representa la arquitectura que sigo para desarrollar proyectos tecnológicos. Cada herramienta cumple un papel específico dentro del proceso, desde el desarrollo local hasta la entrega de aplicaciones empresariales listas para producción.</p>
        </div>
      </Reveal>

      {/* HERRAMIENTAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Herramientas</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Herramientas complementarias</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{complementaryTools.map((ct) => (
          <Reveal key={ct.name} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#c9510c]/50">
              <ct.icon className="size-6 text-[#c9510c]" /><h3 className="mt-3 font-semibold">{ct.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{ct.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ¿POR QUÉ? */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#c9510c]/10 via-transparent to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisión</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué Git & GitHub forman parte de mi stack?</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Git y GitHub representan el núcleo del ciclo de vida del desarrollo de software. Gracias a estas herramientas puedo administrar versiones, mantener la trazabilidad del código, colaborar de manera organizada y automatizar procesos de integración y despliegue.</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Su integración con tecnologías como Next.js, Azure, Python, SQL y Power BI permite construir soluciones modernas preparadas para evolucionar de forma segura y sostenible.</p>
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Preguntas frecuentes</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">FAQ</h2>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {[
            { q: "¿Para qué utilizas Git?", a: "Utilizo Git para controlar versiones, mantener un historial completo del desarrollo y gestionar cambios de manera segura durante todo el ciclo de vida de un proyecto." },
            { q: "¿Qué ventajas ofrece GitHub?", a: "GitHub facilita el almacenamiento de repositorios, la colaboración entre desarrolladores, la revisión de código y la automatización de procesos mediante GitHub Actions." },
            { q: "¿Cómo integras Git & GitHub con Azure?", a: "GitHub almacena el código fuente y permite automatizar procesos de despliegue hacia Microsoft Azure mediante flujos de integración continua, asegurando entregas más rápidas y confiables." },
            { q: "¿Qué estrategia de ramas utilizas?", a: "Trabajo con ramas independientes para nuevas funcionalidades, correcciones y versiones estables, facilitando la organización del desarrollo y reduciendo riesgos durante la integración del código." },
            { q: "¿Por qué Git & GitHub forman parte de tu stack tecnológico?", a: "Porque permiten gestionar proyectos de software de manera profesional, garantizando trazabilidad, colaboración, automatización y mantenimiento continuo durante todo el ciclo de desarrollo." },
          ].map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-border bg-surface-2/40 transition-all duration-300 hover:border-border-strong">
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-medium sm:text-base">{faq.q}<ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-90" /></summary>
              <div className="border-t border-border px-5 pb-5 pt-3"><p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p></div>
            </details>
          ))}
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface-2/40 p-8 text-center sm:p-12">
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">Desarrollemos software con procesos profesionales.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Cada proyecto que construyo incorpora buenas prácticas de control de versiones, colaboración y automatización para garantizar soluciones estables, mantenibles y preparadas para evolucionar con el tiempo.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg"><a href="mailto:jorge.ramtroz1989@gmail.com">Conversemos sobre su proyecto<ArrowRight /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/stack/azure">Explorar mi Stack Tecnológico<ExternalLink /></Link></Button>
          </div>
        </div>
      </Reveal>

      {/* TECNOLOGÍAS RELACIONADAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Navegación</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías relacionadas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { name: "JavaScript", href: "/stack/javascript", icon: Code, accent: "#f7df1e" },
            { name: "Next.js", href: "/stack/nextjs", icon: Globe, accent: "#fff" },
            { name: "Python", href: "/stack/python", icon: Cpu, accent: "#8b5cf6" },
            { name: "Azure", href: "/stack/azure", icon: Cloud, accent: "#0078d4" },
            { name: "SQL", href: "/stack/sql", icon: Database, accent: "#3b82f6" },
            { name: "Power BI", href: "/stack/powerbi", icon: BarChart3, accent: "#f2c811" },
            { name: "UiPath", href: "/stack/uipath", icon: Bot, accent: "#3b82f6" },
            { name: "OpenAI", href: "#", icon: BrainCircuit, accent: "#8b5cf6" },
          ].map((tech) => (
            <Reveal key={`${tech.name}-${tech.accent}`} delay={0.04}>
              <Link href={tech.href} className="flex items-center gap-3 rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_-8px_var(--accent)]" style={{ "--accent": tech.accent } as React.CSSProperties}>
                <tech.icon className="size-6 shrink-0" style={{ color: tech.accent }} />
                <span className="font-medium">{tech.name}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
