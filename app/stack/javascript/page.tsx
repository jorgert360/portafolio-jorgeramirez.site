import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, FileText, GitBranch, ArrowRight, Code, Cable, ChartPie, Globe, Server, Cog, Activity, Smartphone, Layers, Zap, Hash, Box, Brackets, Network, Eye } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "JavaScript | Jorge Luis Ramírez | Full Stack & AI Developer",
  description: "Especialista en desarrollo con JavaScript para aplicaciones web modernas, interfaces dinámicas, integración de APIs y soluciones empresariales escalables.",
  keywords: ["JavaScript", "Frontend Developer", "Full Stack Developer", "Web Development", "REST API", "ECMAScript", "SPA", "Automation", "Artificial Intelligence", "Responsive Design"],
  alternates: { canonical: "/stack/javascript" },
  openGraph: {
    title: "JavaScript | Jorge Luis Ramírez | Full Stack & AI Developer",
    description: "Especialista en desarrollo con JavaScript para aplicaciones web modernas, interfaces dinámicas e integración de APIs.",
    url: "/stack/javascript",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
    { "@type": "ListItem", position: 3, name: "JavaScript", item: `${site.url}/stack/javascript` },
  ],
};
const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: site.fullName, jobTitle: "Full Stack & AI Developer", description: "Especialista en desarrollo con JavaScript para aplicaciones web modernas.", url: site.url };
const techArticleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: "JavaScript — Desarrollo de Aplicaciones Web Modernas", author: { "@type": "Person", name: site.fullName }, description: "JavaScript como tecnología estratégica para aplicaciones web, integración de APIs y soluciones empresariales." };
const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Para qué utilizo JavaScript?", acceptedAnswer: { "@type": "Answer", text: "Utilizo JavaScript para desarrollar interfaces dinámicas, integrar aplicaciones mediante APIs y construir soluciones web modernas orientadas a automatización y transformación digital." } },
    { "@type": "Question", name: "¿JavaScript puede integrarse con Python?", acceptedAnswer: { "@type": "Answer", text: "Sí. JavaScript permite construir la interfaz de usuario mientras Python se encarga del procesamiento de datos, automatización e IA." } },
    { "@type": "Question", name: "¿Qué ventajas ofrece JavaScript en aplicaciones empresariales?", acceptedAnswer: { "@type": "Answer", text: "Permite crear interfaces rápidas, responsivas e interactivas, facilitando la comunicación entre usuarios y sistemas mediante APIs." } },
    { "@type": "Question", name: "¿JavaScript puede trabajar junto con SQL?", acceptedAnswer: { "@type": "Answer", text: "Sí. JavaScript consume información almacenada en bases de datos SQL a través de servicios backend, mostrando datos dinámicamente." } },
    { "@type": "Question", name: "¿Por qué JavaScript forma parte de tu stack tecnológico?", acceptedAnswer: { "@type": "Answer", text: "Porque permite desarrollar la capa visual conectando la experiencia del usuario con procesos automatizados, bases de datos, APIs e IA." } },
  ],
};

const statsCards = [
  { icon: Smartphone, title: "Interfaces Dinámicas", description: "Experiencias de usuario modernas e interactivas." },
  { icon: Cable, title: "Integración de APIs", description: "Comunicación eficiente entre aplicaciones." },
  { icon: Globe, title: "Aplicaciones Web", description: "Desarrollo de soluciones empresariales escalables." },
  { icon: Cog, title: "Automatización Web", description: "Procesos inteligentes desde el navegador." },
];
const capabilities = ["DOM Manipulation", "REST APIs", "Responsive Design", "Asynchronous Programming", "Event Driven", "Web Components", "SPA", "Performance Optimization"];
const timelineEvents = [
  { year: "1995", text: "Nacimiento de JavaScript." },
  { year: "1997", text: "Estandarización mediante ECMAScript." },
  { year: "2009", text: "Aparición de Node.js." },
  { year: "2015", text: "Lanzamiento de ES6 con nuevas características modernas." },
  { year: "2020", text: "Consolidación del desarrollo Full Stack basado en JavaScript." },
  { year: "Actualidad", text: "JavaScript es una de las tecnologías más utilizadas para aplicaciones web, móviles, cloud e IA." },
];
const whyImportant = [
  { icon: Zap, title: "Lenguaje Interpretado", desc: "Ejecución rápida sin compilación previa." },
  { icon: Layers, title: "Multiparadigma", desc: "Funcional, orientada a objetos y basada en eventos." },
  { icon: Activity, title: "Asíncrono", desc: "Múltiples operaciones simultáneamente." },
  { icon: Smartphone, title: "Multiplataforma", desc: "Navegadores, servidores y aplicaciones híbridas." },
  { icon: Box, title: "Gran Ecosistema", desc: "Miles de librerías y frameworks disponibles." },
  { icon: BarChart3, title: "Escalabilidad", desc: "Desde sitios web hasta plataformas empresariales." },
];
const coreComponents = [
  { icon: Hash, name: "Variables", desc: "let, const." },
  { icon: Brackets, name: "Funciones", desc: "Lógica reutilizable." },
  { icon: Box, name: "Objetos", desc: "Modelado de información." },
  { icon: Layers, name: "Arrays", desc: "Colecciones de datos." },
  { icon: Eye, name: "DOM", desc: "Manipulación de interfaces." },
  { icon: Zap, name: "Eventos", desc: "Interacción del usuario." },
  { icon: Activity, name: "Promises", desc: "Programación asíncrona." },
  { icon: Cog, name: "Async / Await", desc: "Código limpio y mantenible." },
  { icon: Network, name: "Fetch API", desc: "Consumo de servicios REST." },
  { icon: Box, name: "Módulos ES6", desc: "Arquitectura modular." },
  { icon: FileText, name: "JSON", desc: "Intercambio de información." },
  { icon: Database, name: "Local Storage", desc: "Persistencia en el navegador." },
];
const ecosystemCards = [
  { icon: Server, name: "Node.js", desc: "Backend." },
  { icon: Globe, name: "Next.js", desc: "Framework Full Stack." },
  { icon: Code, name: "React", desc: "Interfaces modernas." },
  { icon: FileText, name: "TypeScript", desc: "Tipado estático." },
  { icon: Cable, name: "Express", desc: "Servicios REST." },
  { icon: Network, name: "Axios", desc: "Consumo de APIs." },
  { icon: Zap, name: "Vite", desc: "Herramienta de desarrollo." },
  { icon: Code, name: "Tailwind CSS", desc: "Diseño moderno." },
  { icon: GitBranch, name: "Git", desc: "Control de versiones." },
  { icon: Cloud, name: "Azure", desc: "Despliegue Cloud." },
];
const enterpriseApps = [
  { icon: Globe, title: "Portales Corporativos", tags: ["Aplicaciones empresariales"] },
  { icon: BarChart3, title: "Dashboards", tags: ["Visualización interactiva"] },
  { icon: Cog, title: "Automatización Web", tags: ["Interfaces inteligentes"] },
  { icon: Cable, title: "Integración de APIs", tags: ["Comunicación entre plataformas"] },
  { icon: Server, title: "Paneles Administrativos", tags: ["Gestión empresarial"] },
  { icon: Cloud, title: "Aplicaciones Cloud", tags: ["Soluciones escalables"] },
];
const advantages = [
  { icon: Eye, title: "Experiencia de Usuario", desc: "Interfaces dinámicas." },
  { icon: Zap, title: "Alto Rendimiento", desc: "Aplicaciones rápidas." },
  { icon: BarChart3, title: "Escalabilidad", desc: "Arquitecturas modernas." },
  { icon: Cable, title: "Integración", desc: "Compatible con cualquier API." },
  { icon: Globe, title: "Comunidad Global", desc: "Gran ecosistema." },
  { icon: Activity, title: "Actualización Continua", desc: "Innovación permanente." },
];
const bestPractices = [
  { icon: Layers, title: "Código Modular", desc: "Separación por componentes." },
  { icon: Box, title: "Reutilización", desc: "Componentes reutilizables." },
  { icon: Activity, title: "Programación Asíncrona", desc: "Uso de Async/Await." },
  { icon: Network, title: "Consumo de APIs", desc: "Comunicación eficiente." },
  { icon: Shield, title: "Validaciones", desc: "Control de errores." },
  { icon: Smartphone, title: "Responsive Design", desc: "Experiencia en cualquier dispositivo." },
  { icon: Zap, title: "Optimización", desc: "Carga rápida." },
  { icon: Eye, title: "Accesibilidad", desc: "Buenas prácticas de UX." },
  { icon: GitBranch, title: "Versionamiento", desc: "Git." },
  { icon: FileText, title: "Documentación", desc: "Código mantenible." },
];
const useCases = [
  { icon: Globe, title: "Aplicaciones Corporativas", tags: ["Interfaces empresariales"] },
  { icon: BarChart3, title: "Dashboards", tags: ["Visualización de indicadores"] },
  { icon: Cog, title: "Automatización Web", tags: ["Interacción con plataformas"] },
  { icon: Cable, title: "Integración de APIs", tags: ["Comunicación entre sistemas"] },
  { icon: Database, title: "Portales Empresariales", tags: ["Gestión de información"] },
  { icon: Cloud, title: "Aplicaciones Cloud", tags: ["Servicios escalables"] },
];
const experienceBlocks = [
  {
    company: "Industria Manufacturera", role: "Desarrollador Web y Analista de Automatización",
    content: "En proyectos desarrollados para el sector manufacturero utilicé JavaScript para construir interfaces web que permitieron visualizar información operacional, interactuar con sistemas internos y optimizar procesos empresariales. Desarrollé componentes dinámicos que consumían APIs REST para mostrar información en tiempo real, integrando datos provenientes de bases de datos SQL y procesos automatizados desarrollados con Python y UiPath. Gracias a la arquitectura basada en componentes fue posible mejorar la experiencia del usuario, reducir tiempos de carga y facilitar el mantenimiento de las aplicaciones.",
    indicators: [
      { value: "Interfaces Responsivas", label: "" }, { value: "Integración de APIs", label: "" },
      { value: "Aplicaciones Empresariales", label: "" }, { value: "Automatización Web", label: "" },
      { value: "Dashboards", label: "Optimización Frontend" },
    ],
  },
  {
    company: "Sector Bancario", role: "Automation Engineer",
    content: "Dentro del sector financiero utilicé JavaScript para desarrollar interfaces orientadas a la consulta de información, integración con servicios empresariales y construcción de aplicaciones que interactúan con plataformas internas. La comunicación mediante APIs REST permitió conectar diferentes sistemas corporativos, facilitando la visualización de información y complementando automatizaciones desarrolladas sobre plataformas RPA. El uso de JavaScript permitió construir soluciones modernas orientadas a mejorar la experiencia del usuario, manteniendo un enfoque en rendimiento, escalabilidad y mantenibilidad.",
    indicators: [
      { value: "Frontend Empresarial", label: "" }, { value: "Integración REST", label: "" },
      { value: "Procesamiento Asíncrono", label: "" }, { value: "Experiencia de Usuario", label: "" },
      { value: "Escalabilidad", label: "Arquitectura Web" },
    ],
  },
];
const integratedTechs = [
  { icon: Code, name: "HTML5", desc: "Estructura de aplicaciones web." },
  { icon: Code, name: "CSS3", desc: "Diseño y estilos modernos." },
  { icon: Code, name: "Tailwind CSS", desc: "Interfaces responsivas." },
  { icon: Server, name: "Node.js", desc: "Backend JavaScript." },
  { icon: Globe, name: "Next.js", desc: "Framework Full Stack." },
  { icon: Code, name: "React", desc: "Interfaces basadas en componentes." },
  { icon: FileText, name: "TypeScript", desc: "Desarrollo tipado." },
  { icon: Database, name: "SQL", desc: "Persistencia de información." },
  { icon: Cpu, name: "Python", desc: "Procesamiento de datos." },
  { icon: GitBranch, name: "Git", desc: "Control de versiones." },
  { icon: Cable, name: "REST APIs", desc: "Comunicación entre plataformas." },
  { icon: Cloud, name: "Azure", desc: "Despliegue en la nube." },
];
const methodologySteps = [
  "Análisis de requerimientos", "Diseño de la interfaz", "Desarrollo de componentes",
  "Integración con APIs", "Validación y pruebas", "Optimización del rendimiento",
  "Despliegue", "Mejora continua",
];

export default function JavascriptPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link>
        <ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack Tecnológico</span>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">JavaScript</span>
      </nav>

      {/* HERO */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Frontend Developer</Badge>
            <Badge variant="secondary">Full Stack Developer</Badge>
            <Badge variant="tertiary">Web Applications</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">JavaScript</h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">Building Interactive Digital Experiences</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">JavaScript es una de las tecnologías esenciales dentro de mi stack de desarrollo web. Lo utilizo para construir interfaces dinámicas, integrar servicios mediante APIs, desarrollar aplicaciones modernas y crear experiencias digitales rápidas, escalables y orientadas a las necesidades del negocio.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg"><a href="#experience">Ver experiencia<ExternalLink className="size-4" /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/projects">Explorar proyectos<ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#f7df1e]/20 via-[#3b82f6]/15 to-[#8b5cf6]/15 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#f7df1e]/20 bg-slate-950/60">
            <Image
              src="/stack/javascript/hero-javascript.webp"
              alt="JavaScript — Web Development & APIs"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f7df1e]/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* STATS CARDS */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{statsCards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f7df1e]/50 hover:shadow-[0_0_24px_-8px_rgba(247,223,30,0.4)]">
            <c.icon className="size-8 text-[#f7df1e]" />
            <h3 className="mt-3 font-semibold">{c.title}</h3>
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

      {/* ¿QUÉ ES JAVASCRIPT? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#f7df1e] to-transparent" />Lenguaje</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué es JavaScript?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">JavaScript es el lenguaje de programación que impulsa la mayor parte de las aplicaciones web modernas. Su capacidad para ejecutar lógica tanto en el navegador como en el servidor lo convierte en una tecnología fundamental para desarrollar experiencias digitales interactivas, aplicaciones empresariales y plataformas escalables.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Dentro de mi ecosistema tecnológico utilizo JavaScript para construir interfaces dinámicas, consumir APIs REST, integrar aplicaciones con servicios externos y desarrollar soluciones web que complementan proyectos de Automatización, Inteligencia Artificial y Ciencia de Datos.</p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#f7df1e]/20 via-[#3b82f6]/15 to-transparent blur-2xl" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/javascript/javascript-web.webp"
              alt="Desarrollo web moderno con JavaScript"
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
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">La evolución de JavaScript</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-[#f7df1e] via-[#3b82f6] to-[#8b5cf6]" />
          {timelineEvents.map((item) => (
            <Reveal key={item.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#f7df1e]/40 bg-background font-display text-xs font-bold text-[#f7df1e] shadow-[0_0_22px_-6px_#f7df1e]">{item.year}</span>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* CARACTERÍSTICAS */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{whyImportant.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f7df1e]/50">
              <item.icon className="size-6 text-[#f7df1e]" /><h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}</div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#f7df1e] to-transparent" />Importancia</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué JavaScript es tan importante?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">JavaScript se ha convertido en el lenguaje más utilizado del mundo gracias a su versatilidad, su enorme ecosistema y su capacidad para ejecutarse en cualquier plataforma.</p>
        </div>
      </Reveal>

      {/* COMPONENTES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Fundamentos</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Conceptos fundamentales de JavaScript</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{coreComponents.map((comp) => (
          <Reveal key={comp.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#f7df1e]/50">
              <comp.icon className="size-6 text-[#f7df1e]" />
              <h3 className="mt-2 text-sm font-semibold">{comp.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{comp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ARQUITECTURA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Infraestructura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Arquitectura de una aplicación web</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Usuario", "Frontend JavaScript", "API REST", "Backend", "Base de Datos", "Respuesta", "Interfaz Dinámica"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#f7df1e]/30 bg-[#f7df1e]/10 px-4 py-2 font-mono text-sm text-[#f7df1e]">{item}</span>
                {i < 6 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">JavaScript actúa como la capa de interacción entre el usuario y los servicios empresariales, permitiendo desarrollar aplicaciones rápidas, intuitivas y completamente integradas con sistemas internos y externos.</p>
        </div>
      </Reveal>

      {/* ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que complementan JavaScript</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{ecosystemCards.map((eco) => (
          <Reveal key={eco.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#f7df1e]/50">
              <eco.icon className="mx-auto size-6 text-[#f7df1e]" />
              <h3 className="mt-2 text-sm font-semibold">{eco.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{eco.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* APLICACIONES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Aplicaciones</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Dónde utilizo JavaScript?</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{enterpriseApps.map((app) => (
          <Reveal key={app.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f7df1e]/50">
              <app.icon className="size-6 text-[#f7df1e]" /><h3 className="mt-3 font-semibold">{app.title}</h3>
              <ul className="mt-3 flex flex-col gap-1.5">{app.tags.map((tag) => (
                <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-3.5 shrink-0 text-[#06b6d4]" />{tag}</li>
              ))}</ul>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* VENTAJAS */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{advantages.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f7df1e]/50">
              <item.icon className="size-6 text-[#f7df1e]" /><h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}</div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#f7df1e] to-transparent" />Ventajas</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué las empresas utilizan JavaScript?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">JavaScript es el estándar global para el desarrollo de aplicaciones web modernas, permitiendo construir experiencias de usuario rápidas, interactivas y accesibles.</p>
        </div>
      </Reveal>

      {/* MI ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Integración</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Cómo utilizo JavaScript dentro de mis proyectos?</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Usuario", "Interfaz Web", "JavaScript", "Node.js", "SQL", "Python", "Inteligencia Artificial", "Power BI"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#f7df1e]/30 bg-[#f7df1e]/10 px-4 py-2 font-mono text-sm text-[#f7df1e]">{item}</span>
                {i < 7 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">JavaScript representa la puerta de entrada a mis soluciones empresariales. Desde la interfaz del usuario se conecta con APIs, bases de datos, automatizaciones y servicios de Inteligencia Artificial para construir aplicaciones completas, modernas y escalables.</p>
        </div>
      </Reveal>

      {/* EXPERIENCIA */}
      <section id="experience">
        <Reveal className="mt-24">
          <div className="flex flex-col gap-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria profesional</span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi experiencia utilizando JavaScript en proyectos empresariales</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">JavaScript representa la base del desarrollo Frontend dentro de mi ecosistema tecnológico. Lo utilizo para construir interfaces modernas, desarrollar aplicaciones web interactivas e integrar plataformas empresariales mediante APIs, creando experiencias digitales rápidas, intuitivas y escalables.</p>
          </div>
        </Reveal>
        {experienceBlocks.map((block) => (
          <Reveal key={block.company} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
              <h3 className="text-xl font-semibold">{block.role}</h3>
              <p className="mt-1 text-[#f7df1e]">{block.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{block.indicators.map((ind) => (
                <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                  <p className="font-display text-lg font-bold text-[#f7df1e]">{ind.value}</p>
                  {ind.label && <p className="mt-1 text-xs text-muted-foreground">{ind.label}</p>}
                </div>
              ))}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* TECNOLOGÍAS QUE INTEGRO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que integro con JavaScript</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{integratedTechs.map((tech) => (
          <Reveal key={tech.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#f7df1e]/50 hover:shadow-[0_0_20px_-8px_rgba(247,223,30,0.4)]">
              <tech.icon className="size-6 text-[#f7df1e]" /><h3 className="mt-2 font-semibold">{tech.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tech.desc}</p>
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
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#f7df1e]/40 bg-background font-display text-xs font-bold text-[#f7df1e] shadow-[0_0_22px_-6px_#f7df1e]">{i + 1}</span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">Mi metodología de desarrollo está enfocada en construir aplicaciones web mantenibles, escalables y orientadas a la experiencia del usuario. Cada componente es desarrollado pensando en reutilización, rendimiento e integración con el resto del ecosistema tecnológico.</p>
      </Reveal>

      {/* BUENAS PRÁCTICAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Calidad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Buenas prácticas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{bestPractices.map((bp) => (
          <Reveal key={bp.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#f7df1e]/50">
              <bp.icon className="mx-auto size-6 text-[#f7df1e]" /><h3 className="mt-2 text-sm font-semibold">{bp.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{bp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* CASOS DE USO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Escenarios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Escenarios donde utilizo JavaScript</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{useCases.map((uc) => (
          <Reveal key={uc.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f7df1e]/50 hover:shadow-[0_0_24px_-8px_rgba(247,223,30,0.4)]">
              <uc.icon className="size-6 text-[#f7df1e]" /><h3 className="mt-3 font-semibold">{uc.title}</h3>
              <ul className="mt-3 flex flex-col gap-1.5">{uc.tags.map((tag) => (
                <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-3.5 shrink-0 text-[#06b6d4]" />{tag}</li>
              ))}</ul>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ¿POR QUÉ JAVASCRIPT? */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#f7df1e]/10 via-[#3b82f6]/5 to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisión</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo JavaScript?</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Considero que una buena experiencia de usuario es tan importante como la lógica del negocio. JavaScript me permite construir aplicaciones dinámicas, rápidas y totalmente integradas con el resto de mi ecosistema tecnológico.</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Gracias a su versatilidad puedo conectar interfaces modernas con APIs, bases de datos, automatizaciones y servicios de Inteligencia Artificial, ofreciendo soluciones completas orientadas a empresas.</p>
        </div>
      </Reveal>

      {/* ARQUITECTURA COMPLETA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Arquitectura de una solución desarrollada por mí</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {["Usuario", "Frontend JS", "Next.js", "API REST", "Node.js", "SQL", "Python", "Modelo IA", "Power BI", "Robot UiPath"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i}>
                <div className="rounded-xl border border-[#f7df1e]/30 bg-[#f7df1e]/10 px-3 py-3 text-center font-mono text-xs text-[#f7df1e]">{item}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center leading-relaxed text-muted-foreground">Esta arquitectura representa la forma en que diseño soluciones empresariales modernas, integrando tecnologías especializadas para cada etapa del proceso. El objetivo es construir aplicaciones escalables donde frontend, backend, automatización e IA trabajan como un único ecosistema.</p>
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
            { q: "¿Para qué utilizo JavaScript?", a: "Utilizo JavaScript para desarrollar interfaces dinámicas, integrar aplicaciones mediante APIs y construir soluciones web modernas orientadas a automatización y transformación digital." },
            { q: "¿JavaScript puede integrarse con Python?", a: "Sí. JavaScript permite construir la interfaz de usuario mientras Python se encarga del procesamiento de datos, automatización e Inteligencia Artificial, formando una arquitectura altamente escalable." },
            { q: "¿Qué ventajas ofrece JavaScript en aplicaciones empresariales?", a: "Permite crear interfaces rápidas, responsivas e interactivas, facilitando la comunicación entre usuarios, sistemas internos y servicios externos mediante APIs." },
            { q: "¿JavaScript puede trabajar junto con SQL?", a: "Sí. JavaScript consume información almacenada en bases de datos SQL a través de servicios backend, permitiendo mostrar datos dinámicamente dentro de aplicaciones empresariales." },
            { q: "¿Por qué JavaScript forma parte de tu stack tecnológico?", a: "Porque me permite desarrollar la capa visual de las soluciones, conectando la experiencia del usuario con procesos automatizados, bases de datos, APIs e Inteligencia Artificial." },
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
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">Las mejores aplicaciones nacen cuando la tecnología y la experiencia del usuario trabajan juntas.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Utilizo JavaScript para construir aplicaciones web modernas, escalables e integradas con Inteligencia Artificial, Automatización y Analítica de Datos. Mi objetivo es desarrollar soluciones que generen valor tanto para los usuarios como para las organizaciones.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg"><a href="mailto:jorge.ramtroz1989@gmail.com">Conversemos sobre su proyecto<ArrowRight /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/stack/python">Explorar mi Stack Tecnológico<ExternalLink /></Link></Button>
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
            { name: "Next.js", href: "#", icon: Globe, accent: "#f7df1e" },
            { name: "Node.js", href: "#", icon: Server, accent: "#3b82f6" },
            { name: "Python", href: "/stack/python", icon: Cpu, accent: "#8b5cf6" },
            { name: "SQL", href: "/stack/sql", icon: Database, accent: "#06b6d4" },
            { name: "Git", href: "#", icon: GitBranch, accent: "#f7df1e" },
            { name: "Azure", href: "#", icon: Cloud, accent: "#3b82f6" },
            { name: "Power BI", href: "#", icon: ChartPie, accent: "#8b5cf6" },
            { name: "UiPath", href: "/stack/uipath", icon: Bot, accent: "#06b6d4" },
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
