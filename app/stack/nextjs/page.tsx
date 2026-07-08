import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Cpu, Database, Cloud, Shield, BarChart3, FileText, GitBranch, ArrowRight, Code, Cable, Globe, Server, Cog, Activity, Smartphone, Layers, Box, Eye, Rocket, Search, BrainCircuit, Split, Play } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Next.js | Jorge Luis Ramírez | Full Stack & AI Developer",
  description: "Desarrollo aplicaciones empresariales modernas utilizando Next.js, React, TypeScript, Inteligencia Artificial, SEO técnico y arquitecturas escalables.",
  keywords: ["Next.js", "React", "Full Stack", "Web Development", "SSR", "SEO", "App Router", "Server Components", "Artificial Intelligence", "Automation"],
  alternates: { canonical: "/stack/nextjs" },
  openGraph: {
    title: "Next.js | Jorge Luis Ramírez | Full Stack & AI Developer",
    description: "Desarrollo aplicaciones empresariales modernas utilizando Next.js, React, TypeScript, IA y SEO técnico.",
    url: "/stack/nextjs",
  },
};

const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
  { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
  { "@type": "ListItem", position: 3, name: "Next.js", item: `${site.url}/stack/nextjs` },
]};
const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: site.fullName, jobTitle: "Full Stack & AI Developer", description: "Desarrollo aplicaciones empresariales modernas con Next.js.", url: site.url };
const techArticleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: "Next.js — Aplicaciones Web Empresariales Modernas", author: { "@type": "Person", name: site.fullName }, description: "Next.js como framework principal para aplicaciones web empresariales de alto rendimiento." };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "¿Por qué utilizas Next.js en tus proyectos?", acceptedAnswer: { "@type": "Answer", text: "Porque ofrece un excelente equilibrio entre rendimiento, SEO, escalabilidad y experiencia de desarrollo, permitiéndome construir aplicaciones empresariales modernas." } },
  { "@type": "Question", name: "¿Qué ventajas tiene frente a React puro?", acceptedAnswer: { "@type": "Answer", text: "Next.js incorpora App Router, Server Components, renderizado híbrido, optimización automática de imágenes y herramientas SEO, reduciendo la complejidad del desarrollo." } },
  { "@type": "Question", name: "¿Puede integrarse con Inteligencia Artificial?", acceptedAnswer: { "@type": "Answer", text: "Sí. Next.js facilita la integración con APIs de modelos de IA, servicios de procesamiento de datos y asistentes inteligentes." } },
  { "@type": "Question", name: "¿Qué tipo de proyectos desarrollas con Next.js?", acceptedAnswer: { "@type": "Answer", text: "Portales corporativos, aplicaciones empresariales, plataformas de automatización, sitios optimizados para SEO, dashboards y soluciones Full Stack." } },
  { "@type": "Question", name: "¿Por qué mostrar proyectos reales?", acceptedAnswer: { "@type": "Answer", text: "Porque la mejor forma de demostrar experiencia es mediante soluciones funcionales. Los proyectos incluidos representan aplicaciones desarrolladas por mí." } },
]};

const statsCards = [
  { icon: Search, title: "SEO Técnico", description: "Aplicaciones optimizadas para motores de búsqueda." },
  { icon: Rocket, title: "Alto Rendimiento", description: "Carga rápida y excelente experiencia de usuario." },
  { icon: Layers, title: "Arquitectura Escalable", description: "Aplicaciones preparadas para crecer." },
  { icon: Cpu, title: "Integración IA", description: "Preparado para consumir APIs y modelos de IA." },
];
const capabilities = ["SSR", "SSG", "ISR", "Server Components", "API Routes", "App Router", "Performance", "SEO"];
const timelineEvents = [
  { year: "2016", text: "Lanzamiento oficial por Vercel." },
  { year: "2018", text: "Implementación de Static Generation." },
  { year: "2020", text: "Incremento del uso empresarial." },
  { year: "2022", text: "Introducción del App Router." },
  { year: "2023", text: "Server Components. Streaming. Optimización automática." },
  { year: "Actualidad", text: "Uno de los frameworks más utilizados para aplicaciones empresariales de alto rendimiento." },
];
const whyNext = [
  { icon: Search, title: "SEO Técnico", desc: "Posicionamiento optimizado." },
  { icon: Rocket, title: "Alto Rendimiento", desc: "Carga extremadamente rápida." },
  { icon: Layers, title: "Escalabilidad", desc: "Arquitecturas preparadas para crecer." },
  { icon: Server, title: "Server Side Rendering", desc: "Contenido generado desde el servidor." },
  { icon: Code, title: "Developer Experience", desc: "Desarrollo moderno." },
  { icon: Cpu, title: "Integración IA", desc: "Preparado para consumir APIs inteligentes." },
];
const coreFeatures = [
  { icon: Globe, name: "App Router", desc: "Sistema moderno de navegación." },
  { icon: Globe, name: "Pages Router", desc: "Compatibilidad con proyectos existentes." },
  { icon: Server, name: "Server Components", desc: "Renderizado eficiente." },
  { icon: Smartphone, name: "Client Components", desc: "Interactividad del usuario." },
  { icon: Layers, name: "Layouts", desc: "Reutilización de estructuras." },
  { icon: Activity, name: "Loading UI", desc: "Experiencias fluidas." },
  { icon: Shield, name: "Error Handling", desc: "Gestión elegante de errores." },
  { icon: FileText, name: "Metadata API", desc: "SEO dinámico." },
  { icon: Eye, name: "Image Optimization", desc: "Optimización automática de imágenes." },
  { icon: FileText, name: "Font Optimization", desc: "Carga optimizada de tipografías." },
  { icon: Cable, name: "Dynamic Routes", desc: "Rutas inteligentes." },
  { icon: Cog, name: "Middleware", desc: "Lógica antes de cada petición." },
];
const renderStrategies = [
  { icon: Server, name: "SSR", desc: "Server Side Rendering." },
  { icon: Database, name: "SSG", desc: "Static Site Generation." },
  { icon: Activity, name: "ISR", desc: "Incremental Static Regeneration." },
  { icon: Smartphone, name: "CSR", desc: "Client Side Rendering." },
  { icon: Play, name: "Streaming", desc: "Carga progresiva." },
  { icon: Cog, name: "Server Actions", desc: "Ejecución segura desde servidor." },
];
const ecosystemCards = [
  { icon: Code, name: "React", desc: "Interfaces modernas." },
  { icon: FileText, name: "TypeScript", desc: "Código seguro." },
  { icon: Code, name: "Tailwind CSS", desc: "Diseño responsivo." },
  { icon: Server, name: "Node.js", desc: "Backend." },
  { icon: Database, name: "SQL", desc: "Persistencia." },
  { icon: Cpu, name: "Python", desc: "Procesamiento." },
  { icon: BrainCircuit, name: "OpenAI", desc: "Inteligencia Artificial." },
  { icon: Cloud, name: "Azure", desc: "Cloud." },
  { icon: GitBranch, name: "GitHub", desc: "Versionamiento." },
  { icon: Globe, name: "Vercel", desc: "Despliegue." },
  { icon: Cable, name: "REST APIs", desc: "Integración." },
];
const enterpriseApps = [
  { icon: Globe, title: "Portales Corporativos", tags: ["Sitios institucionales modernos"] },
  { icon: Server, title: "Aplicaciones Empresariales", tags: ["Sistemas internos"] },
  { icon: BarChart3, title: "Dashboards", tags: ["Visualización de indicadores"] },
  { icon: Cog, title: "Plataformas de Automatización", tags: ["Integración con robots RPA"] },
  { icon: Cpu, title: "Aplicaciones impulsadas por IA", tags: ["Interfaces para modelos inteligentes"] },
  { icon: Search, title: "Landing Pages", tags: ["SEO avanzado"] },
  { icon: Globe, title: "Portales Informativos", tags: ["Optimización para buscadores"] },
  { icon: Cloud, title: "Plataformas SaaS", tags: ["Arquitecturas escalables"] },
];
const projects = [
  { slug: "tengoya", name: "Tengoya", status: "En desarrollo", year: "2024", desc: "Tengoya es una plataforma desarrollada para facilitar la búsqueda y promoción de empresas mediante una experiencia web moderna. El proyecto fue diseñado con una arquitectura escalable, optimización SEO y preparado para integrar motores de Inteligencia Artificial.", tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Técnico", "App Router", "Responsive Design"], contributions: ["Diseño de la arquitectura del proyecto.", "Desarrollo Frontend.", "Optimización SEO.", "Diseño responsive.", "Preparación para IA."], accent: "#8B5CF6" },
  { slug: "histech", name: "Histech", status: "Activo", year: "2023", desc: "Sitio corporativo desarrollado con enfoque en posicionamiento SEO, velocidad de carga y arquitectura moderna. Se implementaron estrategias orientadas a mejorar la indexación y preparar la plataforma para escenarios AEO y GEO.", tags: ["Next.js", "React", "TypeScript", "SEO Técnico", "Structured Data", "Open Graph"], contributions: ["Arquitectura Frontend.", "Optimización SEO.", "Mejora del rendimiento.", "Implementación de buenas prácticas."], accent: "#3B82F6" },
  { slug: "carweb", name: "CarWeb", status: "Activo", year: "2024", desc: "Aplicación web enfocada en el sector automotriz desarrollada mediante componentes reutilizables, navegación moderna y arquitectura escalable.", tags: ["Next.js", "JavaScript", "Tailwind CSS", "Responsive", "Componentes reutilizables"], contributions: ["Desarrollo Frontend.", "Diseño de componentes.", "Optimización de navegación.", "Arquitectura escalable."], accent: "#06B6D4" },
  { slug: "emisoras-latinas", name: "Emisoras Latinas", status: "Activo", year: "2025", desc: "Portal especializado en emisoras de radio online desarrollado para ofrecer navegación rápida, excelente posicionamiento SEO y una experiencia optimizada para dispositivos móviles.", tags: ["Next.js", "Streaming", "SEO", "Responsive", "Performance"], contributions: ["Arquitectura Web.", "Optimización SEO.", "Experiencia de usuario.", "Optimización de rendimiento."], accent: "#22d3ee" },
  { slug: "christmas-radio", name: "Christmas Radio Navidad", status: "Activo", year: "2024", desc: "Plataforma temática orientada a emisoras navideñas desarrollada utilizando Next.js para garantizar velocidad, estabilidad y excelente experiencia de navegación durante temporadas de alta demanda.", tags: ["Next.js", "Streaming", "SEO", "Performance", "Responsive"], contributions: ["Diseño Frontend.", "Optimización de carga.", "Arquitectura moderna."], accent: "#8B5CF6" },
];
const integratedTechs = [
  { icon: Code, name: "React", desc: "Interfaces modernas." },
  { icon: FileText, name: "TypeScript", desc: "Código seguro." },
  { icon: Code, name: "JavaScript", desc: "Lenguaje base." },
  { icon: Server, name: "Node.js", desc: "Backend." },
  { icon: Code, name: "Tailwind CSS", desc: "Diseño responsivo." },
  { icon: Database, name: "SQL", desc: "Persistencia." },
  { icon: Cpu, name: "Python", desc: "Procesamiento." },
  { icon: BrainCircuit, name: "OpenAI", desc: "Inteligencia Artificial." },
  { icon: GitBranch, name: "Git", desc: "Versionamiento." },
  { icon: Cloud, name: "Azure", desc: "Cloud." },
  { icon: Cable, name: "REST APIs", desc: "Integración." },
  { icon: Globe, name: "Vercel", desc: "Despliegue." },
];
const methodologySteps = [
  "Levantamiento de requerimientos", "Diseño de arquitectura", "Construcción de componentes reutilizables",
  "Integración con APIs", "Optimización SEO", "Pruebas funcionales", "Despliegue", "Mejora continua",
];
const bestPractices = [
  { icon: Box, title: "Componentes reutilizables", desc: "Código modular." },
  { icon: Layers, title: "Arquitectura modular", desc: "Escalabilidad." },
  { icon: Search, title: "SEO técnico", desc: "Posicionamiento." },
  { icon: Eye, title: "Optimización de imágenes", desc: "Carga rápida." },
  { icon: Activity, title: "Lazy Loading", desc: "Carga bajo demanda." },
  { icon: Split, title: "Code Splitting", desc: "Código eficiente." },
  { icon: Smartphone, title: "Responsive Design", desc: "Multiplataforma." },
  { icon: Eye, title: "Accesibilidad", desc: "Buenas prácticas UX." },
  { icon: Rocket, title: "Core Web Vitals", desc: "Rendimiento." },
  { icon: GitBranch, title: "Versionamiento Git", desc: "Control." },
  { icon: FileText, title: "Documentación", desc: "Mantenibilidad." },
  { icon: Code, title: "Clean Code", desc: "Calidad." },
];
const useCases = [
  { icon: Globe, title: "Portales Corporativos", tags: [] },
  { icon: Globe, title: "Landing Pages", tags: [] },
  { icon: Server, title: "Aplicaciones Empresariales", tags: [] },
  { icon: BarChart3, title: "Dashboards", tags: [] },
  { icon: Cloud, title: "Plataformas SaaS", tags: [] },
  { icon: Cpu, title: "Integración IA", tags: [] },
  { icon: Cog, title: "Automatización", tags: [] },
  { icon: Globe, title: "Plataformas Informativas", tags: [] },
];
const enterpriseAdvantages = [
  "Escalabilidad", "SEO Avanzado", "Performance", "Seguridad",
  "Arquitectura Modular", "Experiencia de Usuario", "Cloud Ready", "Integración IA",
];

export default function NextjsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link>
        <ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack Tecnológico</span>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">Next.js</span>
      </nav>

      {/* HERO */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Full Stack Developer</Badge>
            <Badge variant="secondary">Next.js Developer</Badge>
            <Badge variant="tertiary">AI Solutions</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">Next.js</h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">Building High Performance Web Applications</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Next.js es actualmente el framework principal que utilizo para desarrollar aplicaciones web empresariales de alto rendimiento. Gracias a sus capacidades de renderizado híbrido, optimización automática y excelente posicionamiento SEO, puedo construir plataformas modernas preparadas para Inteligencia Artificial, automatización e integración con servicios empresariales.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg"><Link href="/projects">Ver proyectos<ExternalLink className="size-4" /></Link></Button>
            <Button asChild variant="outline" size="lg"><a href="#experience">Explorar experiencia<ArrowRight className="size-4" /></a></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#000]/20 via-[#3b82f6]/20 to-[#8b5cf6]/15 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60">
            <Image
              src="/stack/nextjs/hero-nextjs.webp"
              alt="Next.js — Full Stack & Web Applications"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* STATS CARDS */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{statsCards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_24px_-8px_rgba(255,255,255,0.15)]">
            <c.icon className="size-8 text-white" /><h3 className="mt-3 font-semibold">{c.title}</h3>
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

      {/* ¿QUÉ ES NEXT.JS? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-white to-transparent" />Framework</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué es Next.js?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Next.js es un framework Full Stack construido sobre React que permite desarrollar aplicaciones web modernas, rápidas y altamente optimizadas. Su arquitectura incorpora renderizado híbrido, optimización automática, enrutamiento inteligente y herramientas orientadas al rendimiento.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Dentro de mi ecosistema tecnológico utilizo Next.js como el framework principal para desarrollar aplicaciones corporativas, portales empresariales, plataformas digitales y soluciones preparadas para integrarse con Inteligencia Artificial, automatización, APIs y servicios Cloud.</p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-white/10 via-[#3b82f6]/10 to-transparent blur-2xl" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/nextjs/nextjs-apps.webp"
              alt="Aplicaciones empresariales modernas con Next.js"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </Reveal>

      {/* EVOLUCIÓN */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Historia</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">La evolución de Next.js</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-white via-[#3b82f6] to-[#8b5cf6]" />
          {timelineEvents.map((item) => (
            <Reveal key={item.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-white/30 bg-background font-display text-xs font-bold text-white shadow-[0_0_22px_-6px_rgba(255,255,255,0.4)]">{item.year}</span>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ¿POR QUÉ NEXT.JS? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{whyNext.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-white/30">
              <item.icon className="size-6 text-white" /><h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}</div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-white to-transparent" />Ventajas</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo Next.js?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Next.js se ha convertido en mi framework principal por su capacidad para construir aplicaciones web rápidas, escalables y optimizadas para buscadores, integrando frontend y backend en una sola plataforma.</p>
        </div>
      </Reveal>

      {/* COMPONENTES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Características</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Características que hacen único a Next.js</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{coreFeatures.map((feat) => (
          <Reveal key={feat.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-white/30">
              <feat.icon className="size-6 text-white" /><h3 className="mt-2 text-sm font-semibold">{feat.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{feat.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* RENDERIZADO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Estrategias</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Estrategias de renderizado</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{renderStrategies.map((rs) => (
          <Reveal key={rs.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-white/30">
              <rs.icon className="mx-auto size-6 text-white" /><h3 className="mt-2 text-sm font-semibold">{rs.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{rs.desc}</p>
            </div>
          </Reveal>
        ))}</div>
        <p className="mt-8 text-center leading-relaxed text-muted-foreground">Cada estrategia de renderizado es seleccionada según las necesidades del proyecto. Utilizo SSR para contenido dinámico, SSG para sitios estáticos, ISR para contenido que requiere actualización periódica y Streaming para mejorar la percepción de velocidad.</p>
      </Reveal>

      {/* ARQUITECTURA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Infraestructura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Arquitectura de una aplicación Next.js</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Usuario", "Next.js", "Server Components", "API Routes", "Node.js", "Base de Datos", "Python", "Servicios IA", "Respuesta optimizada"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 font-mono text-sm text-white">{item}</span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Next.js actúa como el núcleo de mis aplicaciones web, integrando frontend, backend, automatización e Inteligencia Artificial dentro de una arquitectura moderna y altamente optimizada.</p>
        </div>
      </Reveal>

      {/* ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que complemento con Next.js</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{ecosystemCards.map((eco) => (
          <Reveal key={eco.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-white/30">
              <eco.icon className="size-6 text-white" /><h3 className="mt-2 font-semibold">{eco.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{eco.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* APLICACIONES EMPRESARIALES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Aplicaciones</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué tipo de soluciones desarrollo con Next.js?</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{enterpriseApps.map((app) => (
          <Reveal key={app.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-white/30">
              <app.icon className="size-6 text-white" /><h3 className="mt-3 font-semibold">{app.title}</h3>
              <ul className="mt-3 flex flex-col gap-1.5">{app.tags.map((tag) => (
                <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-3.5 shrink-0 text-[#06b6d4]" />{tag}</li>
              ))}</ul>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* VENTAJAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ventajas</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Ventajas empresariales</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">{enterpriseAdvantages.map((adv) => (
          <Badge key={adv} variant="primary" className="text-xs sm:text-sm">{adv}</Badge>
        ))}</div>
      </Reveal>

      {/* PROYECTOS REALES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Portafolio</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Proyectos reales desarrollados con Next.js</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Cada proyecto representa una solución empresarial real donde Next.js fue el framework principal para construir interfaces modernas, optimizadas para SEO y preparadas para escalar.</p>
        </div>
        <div className="mt-10 flex flex-col gap-8">{projects.map((p, i) => (
          <Reveal key={p.slug} delay={0.05 * i}>
            <div className="group rounded-2xl border border-border bg-surface-2/40 p-6 transition-all duration-300 hover:border-border-strong sm:p-8" style={{ borderColor: `${p.accent}22`, boxShadow: `0 0 30px -15px ${p.accent}40` }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#06b6d4]">
                      <Check className="size-3" /> Proyecto Real
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-xs">{p.status}</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((tag) => (
                <Badge key={tag} variant="default" className="text-[11px]">{tag}</Badge>
              ))}</div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">{p.contributions.map((c) => (
                <span key={c} className="rounded-lg border border-border bg-background/30 px-2.5 py-1.5 text-xs text-muted-foreground">{c}</span>
              ))}</div>
              <div className="mt-5 flex gap-3">
                <Button asChild variant="gradient" size="sm"><Link href={`/projects/${p.slug}`}>Ver Caso de Estudio<ArrowRight className="size-3.5" /></Link></Button>
              </div>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* EXPERIENCIA */}
      <section id="experience">
        <Reveal className="mt-24">
          <div className="flex flex-col gap-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria profesional</span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi experiencia desarrollando aplicaciones con Next.js</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Next.js se ha convertido en el framework principal que utilizo para construir aplicaciones web modernas. Gracias a su arquitectura basada en React, sus capacidades de renderizado híbrido y su excelente integración con SEO técnico, APIs y servicios Cloud, puedo desarrollar plataformas empresariales preparadas para crecer.</p>
          </div>
        </Reveal>
      </section>

      {/* TECNOLOGÍAS QUE INTEGRO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que integro con Next.js</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{integratedTechs.map((tech) => (
          <Reveal key={tech.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-white/30">
              <tech.icon className="size-6 text-white" /><h3 className="mt-2 font-semibold">{tech.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{tech.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* METODOLOGÍA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proceso</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi metodología de desarrollo</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          {methodologySteps.map((step, i) => (
            <Reveal key={step} delay={0.05 * i} className="relative pl-16 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-white/30 bg-background font-display text-xs font-bold text-white shadow-[0_0_22px_-6px_rgba(255,255,255,0.4)]">{i + 1}</span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">Mi enfoque de desarrollo busca construir aplicaciones sostenibles en el tiempo. Cada proyecto es diseñado pensando en escalabilidad, mantenibilidad, rendimiento y facilidad de integración con nuevas tecnologías como Inteligencia Artificial, automatización y servicios Cloud.</p>
      </Reveal>

      {/* BUENAS PRÁCTICAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Calidad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Buenas prácticas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{bestPractices.map((bp) => (
          <Reveal key={bp.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-white/30">
              <bp.icon className="mx-auto size-6 text-white" /><h3 className="mt-2 text-sm font-semibold">{bp.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{bp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* CASOS DE USO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Escenarios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Casos de uso</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{useCases.map((uc) => (
          <Reveal key={uc.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-white/30">
              <uc.icon className="mx-auto size-6 text-white" /><h3 className="mt-2 text-sm font-semibold">{uc.title}</h3>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ¿POR QUÉ NEXT.JS? */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white/5 via-[#3b82f6]/5 to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisión</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo Next.js?</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Next.js representa actualmente el núcleo de mis desarrollos web. Su arquitectura me permite construir aplicaciones modernas donde rendimiento, posicionamiento SEO, escalabilidad y experiencia del usuario trabajan conjuntamente.</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Gracias a su integración con React, APIs y servicios Cloud puedo desarrollar soluciones preparadas para evolucionar junto con las necesidades del negocio.</p>
        </div>
      </Reveal>

      {/* MI ARQUITECTURA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi arquitectura de desarrollo</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {["Usuario", "Next.js", "Server Components", "API Routes", "Node.js", "SQL", "Python", "OpenAI", "Power BI", "UiPath"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i}>
                <div className="rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-center font-mono text-xs text-white">{item}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center leading-relaxed text-muted-foreground">Esta arquitectura representa la forma en que desarrollo soluciones tecnológicas completas. Next.js actúa como la puerta de entrada para construir interfaces modernas que posteriormente se integran con bases de datos, automatización, Inteligencia Artificial y plataformas analíticas.</p>
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
            { q: "¿Por qué utilizas Next.js en tus proyectos?", a: "Porque ofrece un excelente equilibrio entre rendimiento, SEO, escalabilidad y experiencia de desarrollo, permitiéndome construir aplicaciones empresariales modernas y preparadas para el crecimiento." },
            { q: "¿Qué ventajas tiene frente a React puro?", a: "Next.js incorpora funcionalidades como App Router, Server Components, renderizado híbrido, optimización automática de imágenes y herramientas SEO, reduciendo la complejidad del desarrollo y mejorando el rendimiento." },
            { q: "¿Puede integrarse con Inteligencia Artificial?", a: "Sí. Next.js facilita la integración con APIs de modelos de IA, servicios de procesamiento de datos y asistentes inteligentes, siendo una excelente base para aplicaciones impulsadas por Inteligencia Artificial." },
            { q: "¿Qué tipo de proyectos desarrollas con Next.js?", a: "Desarrollo portales corporativos, aplicaciones empresariales, plataformas de automatización, sitios optimizados para SEO, dashboards y soluciones Full Stack integradas con bases de datos, APIs y servicios Cloud." },
            { q: "¿Por qué mostrar proyectos reales?", a: "Porque considero que la mejor forma de demostrar experiencia es mediante soluciones funcionales. Los proyectos incluidos en esta página representan aplicaciones desarrolladas por mí, donde Next.js ha sido una pieza fundamental." },
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
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">Construyamos aplicaciones preparadas para el futuro.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Utilizo Next.js para desarrollar plataformas rápidas, escalables y optimizadas para SEO, integrando automatización, Inteligencia Artificial y arquitecturas modernas. Mi objetivo es crear soluciones digitales que generen valor real para empresas y usuarios.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg"><a href="mailto:jorge.ramtroz1989@gmail.com">Conversemos sobre su proyecto<ArrowRight /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/projects">Ver mis proyectos<ExternalLink /></Link></Button>
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
            { name: "React", href: "#", icon: Code, accent: "#3b82f6" },
            { name: "JavaScript", href: "/stack/javascript", icon: Code, accent: "#f7df1e" },
            { name: "Node.js", href: "#", icon: Server, accent: "#3b82f6" },
            { name: "TypeScript", href: "#", icon: FileText, accent: "#3b82f6" },
            { name: "SQL", href: "/stack/sql", icon: Database, accent: "#06b6d4" },
            { name: "Python", href: "/stack/python", icon: Cpu, accent: "#8b5cf6" },
            { name: "Azure", href: "#", icon: Cloud, accent: "#3b82f6" },
            { name: "Git", href: "#", icon: GitBranch, accent: "#f7df1e" },
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
