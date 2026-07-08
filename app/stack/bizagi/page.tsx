import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, FileText, GitBranch, ArrowRight, Cable, Globe, Cog, Layers, Eye, BrainCircuit, Users, RefreshCw, Code, Activity, Workflow, Search, TrendingUp, BookOpen, GitMerge, Landmark } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Bizagi | Jorge Luis Ramírez | Business Process Modeling & BPMN",
  description: "Utilizo Bizagi para modelar procesos de negocio con BPMN, identificar oportunidades de mejora y diseñar soluciones preparadas para automatización, integración de sistemas e IA.",
  keywords: ["Bizagi", "BPMN", "Business Process Management", "Business Process Modeling", "Business Analysis", "Workflow", "Automation", "RPA", "Digital Transformation", "Process Optimization"],
  alternates: { canonical: "/stack/bizagi" },
  openGraph: { title: "Bizagi | Jorge Luis Ramírez | BPMN & Process Modeling", description: "Modelado de procesos de negocio con BPMN para automatización e integración.", url: "/stack/bizagi" },
};

const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
  { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
  { "@type": "ListItem", position: 3, name: "Bizagi", item: `${site.url}/stack/bizagi` },
]};
const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: site.fullName, jobTitle: "BPMN & Process Modeling", description: "Modelado de procesos con BPMN para automatización e integración.", url: site.url };
const techArticleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: "Bizagi — Business Process Modeling con BPMN", author: { "@type": "Person", name: site.fullName }, description: "Bizagi como herramienta estratégica para modelado de procesos de negocio." };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "¿Para qué utilizas Bizagi?", acceptedAnswer: { "@type": "Answer", text: "Utilizo Bizagi para modelar procesos de negocio, identificar oportunidades de mejora y documentar el funcionamiento de una organización antes de implementar automatizaciones o soluciones tecnológicas." } },
  { "@type": "Question", name: "¿Qué ventajas ofrece BPMN?", acceptedAnswer: { "@type": "Answer", text: "BPMN proporciona un lenguaje visual estandarizado que facilita la comunicación entre las áreas de negocio y los equipos técnicos." } },
  { "@type": "Question", name: "¿Cómo integras Bizagi con otras tecnologías?", acceptedAnswer: { "@type": "Answer", text: "El modelado sirve como base para desarrollar automatizaciones con UiPath, aplicaciones web con Next.js, integraciones mediante REST APIs, análisis con Power BI y soluciones de IA con OpenAI." } },
  { "@type": "Question", name: "¿Por qué modelar un proceso antes de automatizarlo?", acceptedAnswer: { "@type": "Answer", text: "Porque permite identificar ineficiencias, reglas de negocio y excepciones antes de desarrollar la solución tecnológica, reduciendo riesgos." } },
  { "@type": "Question", name: "¿Por qué Bizagi forma parte de tu stack tecnológico?", acceptedAnswer: { "@type": "Answer", text: "Porque me permite comprender el negocio antes de escribir código, asegurando que cada desarrollo responda realmente a las necesidades de la organización." } },
]};

const statsCards = [
  { icon: Search, title: "Análisis de Procesos", description: "Comprensión del flujo de trabajo actual." },
  { icon: Workflow, title: "Modelado BPMN", description: "Representación visual estandarizada." },
  { icon: TrendingUp, title: "Optimización", description: "Identificación de mejoras antes de automatizar." },
  { icon: Globe, title: "Transformación Digital", description: "Base para proyectos tecnológicos exitosos." },
];
const capabilities = ["BPMN 2.0", "Workflow", "Business Analysis", "Process Mapping", "Optimization", "Documentation", "Automation Readiness", "Continuous Improvement"];
const whyModel = [
  { icon: Eye, title: "Comprensión del Negocio", desc: "Permite entender cómo opera la organización." },
  { icon: Search, title: "Detección de Ineficiencias", desc: "Identifica actividades repetitivas y cuellos de botella." },
  { icon: FileText, title: "Estandarización", desc: "Define un proceso claro y documentado." },
  { icon: Users, title: "Comunicación", desc: "Facilita el entendimiento entre negocio y tecnología." },
  { icon: Shield, title: "Reducción de Riesgos", desc: "Evita automatizar procesos incorrectos." },
  { icon: Cog, title: "Base para la Automatización", desc: "Prepara el proceso para RPA, APIs e IA." },
];
const bpmnElements = [
  { icon: Cog, name: "Evento de Inicio", desc: "Comienza el proceso." },
  { icon: Cog, name: "Actividad", desc: "Tarea realizada." },
  { icon: Layers, name: "Subproceso", desc: "Proceso dentro del proceso." },
  { icon: GitMerge, name: "Gateway", desc: "Punto de decisión." },
  { icon: ArrowRight, name: "Flujo de Secuencia", desc: "Orden de actividades." },
  { icon: Cable, name: "Flujo de Mensajes", desc: "Comunicación entre procesos." },
  { icon: Users, name: "Pool", desc: "Participante principal." },
  { icon: Users, name: "Lane", desc: "Rol dentro del participante." },
  { icon: Database, name: "Objeto de Datos", desc: "Información del proceso." },
  { icon: Activity, name: "Evento Intermedio", desc: "Ocurre durante el proceso." },
  { icon: FileText, name: "Anotaciones", desc: "Información adicional." },
];
const analysisElements = [
  { icon: FileText, title: "Entradas", desc: "Información requerida para iniciar el proceso." },
  { icon: Cog, title: "Actividades", desc: "Tareas realizadas durante la operación." },
  { icon: Users, title: "Responsables", desc: "Áreas o personas involucradas." },
  { icon: BookOpen, title: "Reglas de Negocio", desc: "Condiciones que gobiernan el proceso." },
  { icon: GitMerge, title: "Decisiones", desc: "Puntos donde cambia el flujo." },
  { icon: Eye, title: "Salidas", desc: "Resultados obtenidos." },
  { icon: TrendingUp, title: "Indicadores", desc: "Variables para medir desempeño." },
  { icon: Shield, title: "Excepciones", desc: "Escenarios no habituales." },
];
const ecosystemCards = [
  { icon: Bot, name: "UiPath", desc: "Automatización RPA." },
  { icon: Cable, name: "REST APIs", desc: "Integración." },
  { icon: Cpu, name: "Python", desc: "Automatización." },
  { icon: Database, name: "SQL", desc: "Persistencia." },
  { icon: BarChart3, name: "Power BI", desc: "Analítica." },
  { icon: Cloud, name: "Azure", desc: "Cloud." },
  { icon: Globe, name: "Next.js", desc: "Aplicaciones." },
  { icon: BrainCircuit, name: "OpenAI", desc: "IA." },
  { icon: GitBranch, name: "Git & GitHub", desc: "Versionamiento." },
  { icon: Code, name: "JavaScript", desc: "Lenguaje." },
  { icon: BarChart3, name: "Business Intelligence", desc: "Analítica." },
  { icon: Cog, name: "Automatización", desc: "RPA." },
];
const useCaseCards = [
  { icon: Bot, title: "Automatización RPA", tags: [] },
  { icon: Globe, title: "Transformación Digital", tags: [] },
  { icon: Cable, title: "Integración de Sistemas", tags: [] },
  { icon: Globe, title: "Aplicaciones Empresariales", tags: [] },
  { icon: TrendingUp, title: "Optimización de Procesos", tags: [] },
  { icon: BarChart3, title: "Business Intelligence", tags: [] },
  { icon: FileText, title: "Gestión Documental", tags: [] },
  { icon: Cog, title: "Procesos Administrativos", tags: [] },
  { icon: Landmark, title: "Procesos Financieros", tags: [] },
  { icon: Users, title: "Servicios Compartidos", tags: [] },
];
const bestPractices = [
  { icon: FileText, title: "Documentar antes de desarrollar", desc: "Base sólida." },
  { icon: Users, title: "Validar con el negocio", desc: "Alineación." },
  { icon: FileText, title: "Utilizar BPMN 2.0", desc: "Estándar." },
  { icon: Shield, title: "Identificar excepciones", desc: "Completitud." },
  { icon: Cog, title: "Eliminar actividades innecesarias", desc: "Eficiencia." },
  { icon: Users, title: "Definir responsables", desc: "Claridad." },
  { icon: TrendingUp, title: "Medir indicadores", desc: "Control." },
  { icon: FileText, title: "Estandarizar procesos", desc: "Uniformidad." },
  { icon: Layers, title: "Pensar en escalabilidad", desc: "Futuro." },
  { icon: Cog, title: "Diseñar para automatizar", desc: "Preparación." },
  { icon: FileText, title: "Documentación continua", desc: "Evolución." },
  { icon: RefreshCw, title: "Mejora permanente", desc: "Optimización." },
];
const benefits = [
  { icon: Eye, title: "Mayor Visibilidad", desc: "Procesos documentados y transparentes." },
  { icon: Shield, title: "Reducción de Errores", desc: "Menos reprocesos operativos." },
  { icon: TrendingUp, title: "Mayor Productividad", desc: "Procesos optimizados." },
  { icon: Cog, title: "Automatización Exitosa", desc: "Base sólida para RPA." },
  { icon: Cable, title: "Integración Tecnológica", desc: "Facilita la conexión entre sistemas." },
  { icon: RefreshCw, title: "Mejora Continua", desc: "Optimización permanente." },
];
const projects = [
  { name: "Automatización de procesos administrativos", desc: "Antes de implementar robots RPA se documentan y analizan los procesos mediante diagramas BPMN para identificar actividades repetitivas, excepciones y oportunidades de mejora." },
  { name: "Plataformas empresariales", desc: "Durante el diseño de aplicaciones web es fundamental comprender el flujo de negocio para construir interfaces y funcionalidades alineadas con los procesos reales." },
  { name: "Integración de Sistemas", desc: "El modelado facilita identificar los puntos donde diferentes aplicaciones deben intercambiar información mediante APIs y servicios empresariales." },
  { name: "Transformación Digital", desc: "Bizagi sirve como punto de partida para iniciativas donde procesos manuales evolucionan hacia soluciones digitales apoyadas por automatización e IA." },
];
const experienceBlocks = [
  {
    company: "Sector Manufacturero", role: "Analista de Automatización de Procesos",
    content: "En proyectos del sector manufacturero participé en el análisis de procesos administrativos y operativos con el objetivo de identificar actividades repetitivas, cuellos de botella y oportunidades de automatización. El modelado mediante BPMN permitió documentar el proceso actual, definir escenarios de mejora y establecer una base sólida para implementar automatizaciones, integraciones entre sistemas y herramientas de análisis de datos.",
    indicators: [
      { value: "BPMN 2.0", label: "" }, { value: "Análisis de Procesos", label: "" },
      { value: "Optimización", label: "" }, { value: "Documentación", label: "" },
      { value: "Automatización", label: "Mejora Continua" },
    ],
  },
  {
    company: "Sector Financiero", role: "Automation Engineer",
    content: "En iniciativas orientadas al sector financiero el modelado de procesos permitió comprender reglas de negocio, puntos de decisión y excepciones antes de desarrollar automatizaciones o integrar diferentes plataformas. Este enfoque ayudó a reducir riesgos durante la implementación, mejorar la comunicación entre las áreas involucradas y construir soluciones más robustas y sostenibles.",
    indicators: [
      { value: "Business Process", label: "" }, { value: "Workflow", label: "" },
      { value: "Reglas de Negocio", label: "" }, { value: "Procesos Financieros", label: "" },
      { value: "Transformación Digital", label: "Arquitectura Empresarial" },
    ],
  },
];
const integratedTechs = [
  { icon: Bot, name: "UiPath", desc: "Automatización RPA." },
  { icon: Cable, name: "REST APIs", desc: "Integración." },
  { icon: Cpu, name: "Python", desc: "Procesamiento." },
  { icon: Database, name: "SQL", desc: "Persistencia." },
  { icon: BarChart3, name: "Power BI", desc: "Analítica." },
  { icon: Cloud, name: "Azure", desc: "Cloud." },
  { icon: Globe, name: "Next.js", desc: "Aplicaciones." },
  { icon: BrainCircuit, name: "OpenAI", desc: "IA." },
  { icon: GitBranch, name: "Git & GitHub", desc: "Versionamiento." },
  { icon: Code, name: "JavaScript", desc: "Lenguaje." },
];
const methodologySteps = [
  "Levantamiento del proceso", "Entrevistas con usuarios", "Modelado BPMN",
  "Análisis de oportunidades", "Diseño de la solución", "Automatización e integración",
  "Pruebas", "Implementación", "Seguimiento y mejora continua",
];
const bpBenefits = [
  { icon: Eye, title: "Mayor comprensión del negocio", desc: "Comunicación clara entre áreas." },
  { icon: Shield, title: "Reducción de errores", desc: "Menos reprocesos." },
  { icon: TrendingUp, title: "Optimización de tiempos", desc: "Procesos más eficientes." },
  { icon: Cog, title: "Preparación para RPA", desc: "Automatización sobre procesos estandarizados." },
  { icon: Cable, title: "Integración Tecnológica", desc: "Conexión entre aplicaciones y servicios." },
  { icon: RefreshCw, title: "Mejora Continua", desc: "Evolución permanente de los procesos." },
];

export default function BizagiPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link><ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack Tecnológico</span><ChevronRight className="size-4" />
        <span className="truncate text-foreground">Bizagi</span>
      </nav>

      {/* HERO */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">BPMN</Badge>
            <Badge variant="secondary">Process Modeling</Badge>
            <Badge variant="tertiary">Business Analysis</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">Bizagi</h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">Modelando procesos antes de automatizarlos</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Bizagi forma parte de mi metodología para comprender, documentar y optimizar procesos de negocio antes de desarrollar una solución tecnológica. Mediante modelos BPMN identifico oportunidades de mejora, elimino actividades innecesarias y establezco una base sólida para proyectos de automatización, integración de sistemas e Inteligencia Artificial.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg"><a href="#methodology">Ver metodología<ExternalLink className="size-4" /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="#bpmn">Explorar modelado BPMN<ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#0066b3]/25 via-[#004b8d]/15 to-transparent blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#0066b3]/20 bg-slate-950/60">
            <Image
              src="/stack/bizagi/hero-bizagi.webp"
              alt="Bizagi — BPMN & Business Process Modeling"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0066b3]/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* STATS CARDS */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{statsCards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0066b3]/50 hover:shadow-[0_0_24px_-8px_rgba(0,102,179,0.4)]">
            <c.icon className="size-8 text-[#0066b3]" /><h3 className="mt-3 font-semibold">{c.title}</h3>
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

      {/* DEL PROCESO AL RESULTADO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Metodología</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Del proceso al resultado</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Proceso Actual", "Análisis", "Modelado BPMN", "Identificación de mejoras", "Proceso Optimizado", "Automatización", "Integración", "Resultados"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#0066b3]/30 bg-[#0066b3]/10 px-4 py-2 font-mono text-sm text-[#0066b3]">{item}</span>
                {i < 7 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">El modelado de procesos permite comprender cómo funciona una organización antes de automatizar sus actividades. Este enfoque reduce riesgos, mejora la comunicación entre equipos y facilita el desarrollo de soluciones tecnológicas alineadas con los objetivos del negocio.</p>
        </div>
      </Reveal>

      {/* ¿QUÉ ES BIZAGI? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#0066b3] to-transparent" />Plataforma</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué es Bizagi?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Bizagi es una plataforma especializada en el modelado y documentación de procesos de negocio utilizando el estándar internacional BPMN 2.0. Más que una herramienta para crear diagramas, representa un apoyo estratégico para comprender cómo funciona una organización antes de implementar cambios tecnológicos.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Dentro de mi metodología utilizo Bizagi para analizar procesos existentes, identificar oportunidades de mejora, documentar reglas de negocio y construir una base sólida para proyectos de automatización, integración de sistemas e Inteligencia Artificial.</p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#0066b3]/20 via-transparent to-transparent blur-2xl" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/bizagi/bizagi-bpmn.webp"
              alt="Modelado de procesos empresariales con Bizagi"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </Reveal>

      {/* ¿POR QUÉ MODELAR? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{whyModel.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0066b3]/50">
              <item.icon className="size-6 text-[#0066b3]" /><h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}</div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#0066b3] to-transparent" />Importancia</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué modelar un proceso antes de automatizarlo?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Modelar los procesos permite identificar ineficiencias, comprender reglas de negocio y diseñar soluciones tecnológicas alineadas con la operación real de la organización, reduciendo riesgos y mejorando la calidad del resultado final.</p>
        </div>
      </Reveal>

      {/* BPMN */}
      <section id="bpmn">
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Estándar</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">BPMN 2.0</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{bpmnElements.map((el) => (
          <Reveal key={el.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#0066b3]/50">
              <el.icon className="mx-auto size-6 text-[#0066b3]" /><h3 className="mt-2 text-sm font-semibold">{el.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{el.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>
      </section>

      {/* CICLO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ciclo</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Ciclo de optimización de procesos</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Proceso Actual", "Levantamiento de Información", "Modelado BPMN", "Análisis", "Identificación de Mejoras", "Proceso Optimizado", "Automatización", "Monitoreo", "Mejora Continua"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#0066b3]/30 bg-[#0066b3]/10 px-4 py-2 font-mono text-sm text-[#0066b3]">{item}</span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">El modelado de procesos no tiene como objetivo únicamente documentar el funcionamiento de una organización. Su verdadero valor consiste en descubrir oportunidades de mejora antes de implementar cambios tecnológicos, reduciendo costos y aumentando la eficiencia operativa.</p>
        </div>
      </Reveal>

      {/* ELEMENTOS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Análisis</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Elementos que analizo en un proceso</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{analysisElements.map((el) => (
          <Reveal key={el.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#0066b3]/50">
              <el.icon className="size-6 text-[#0066b3]" /><h3 className="mt-2 text-sm font-semibold">{el.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{el.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Integración</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que complemento con Bizagi</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{ecosystemCards.map((eco) => (
          <Reveal key={eco.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#0066b3]/50">
              <eco.icon className="size-6 text-[#0066b3]" /><h3 className="mt-2 font-semibold">{eco.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{eco.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* EXPERIENCIA */}
      <section id="experience">
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria profesional</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi experiencia analizando y modelando procesos de negocio</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">El análisis de procesos representa el primer paso dentro de mi metodología de trabajo. Antes de automatizar un proceso o desarrollar una aplicación, es fundamental comprender cómo funciona la operación, identificar oportunidades de mejora y documentar el flujo utilizando estándares internacionales como BPMN 2.0.</p>
        </div>
      </Reveal>
      {experienceBlocks.map((block) => (
        <Reveal key={block.company} className="mt-12">
          <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
            <h3 className="text-xl font-semibold">{block.role}</h3>
            <p className="mt-1 text-[#0066b3]">{block.company}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{block.indicators.map((ind) => (
              <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                <p className="font-display text-lg font-bold text-[#0066b3]">{ind.value}</p>
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
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Proyectos donde el análisis de procesos es fundamental</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">{projects.map((p) => (
          <Reveal key={p.name} delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0066b3]/50">
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
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que complemento con Bizagi</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{integratedTechs.map((tech) => (
          <Reveal key={tech.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#0066b3]/50">
              <tech.icon className="size-6 text-[#0066b3]" /><h3 className="mt-2 font-semibold">{tech.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{tech.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* METODOLOGÍA */}
      <section id="methodology">
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proceso</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi metodología de trabajo</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          {methodologySteps.map((step, i) => (
            <Reveal key={step} delay={0.05 * i} className="relative pl-16 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#0066b3]/40 bg-background font-display text-xs font-bold text-[#0066b3] shadow-[0_0_22px_-6px_#0066b3]">{i + 1}</span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">Mi metodología busca garantizar que cada solución tecnológica responda a una necesidad real del negocio. Comprender el proceso antes de desarrollar permite reducir errores, optimizar recursos y construir soluciones escalables.</p>
      </Reveal>
      </section>

      {/* BUENAS PRÁCTICAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Calidad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Buenas prácticas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{bestPractices.map((bp) => (
          <Reveal key={bp.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#0066b3]/50">
              <bp.icon className="mx-auto size-6 text-[#0066b3]" /><h3 className="mt-2 text-sm font-semibold">{bp.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{bp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* CASOS DE USO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Escenarios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Escenarios donde aplico Bizagi</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{useCaseCards.map((uc) => (
          <Reveal key={uc.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#0066b3]/50">
              <uc.icon className="mx-auto size-6 text-[#0066b3]" /><h3 className="mt-2 text-sm font-semibold">{uc.title}</h3>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* BENEFICIOS PARA ORGANIZACIONES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Beneficios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Beneficios para las organizaciones</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map((b) => (
          <Reveal key={b.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0066b3]/50">
              <b.icon className="size-6 text-[#0066b3]" /><h3 className="mt-3 font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* BENEFICIOS DEL MODELADO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Valor</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Beneficios del modelado de procesos</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{bpBenefits.map((b) => (
          <Reveal key={b.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0066b3]/50">
              <b.icon className="size-6 text-[#0066b3]" /><h3 className="mt-3 font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ¿POR QUÉ? */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#0066b3]/10 via-transparent to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisión</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué Bizagi forma parte de mi metodología?</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Bizagi representa el punto de partida para comprender el funcionamiento de una organización antes de implementar cambios tecnológicos. Modelar los procesos permite identificar oportunidades de mejora, reducir riesgos y diseñar soluciones de automatización, integración e Inteligencia Artificial alineadas con los objetivos estratégicos del negocio.</p>
        </div>
      </Reveal>

      {/* DEL PROCESO A LA SOLUCIÓN */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Del proceso a la solución tecnológica</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Proceso Actual", "Levantamiento", "Bizagi BPMN", "Análisis", "Diseño Téc.", "UiPath", "APIs", "Next.js", "Power BI", "OpenAI", "Proceso Digital"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i}>
                <div className="rounded-xl border border-[#0066b3]/30 bg-[#0066b3]/10 px-3 py-3 text-center font-mono text-xs text-[#0066b3]">{item}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center leading-relaxed text-muted-foreground">Este flujo representa la metodología que sigo para transformar procesos manuales en soluciones digitales. Bizagi permite comprender el negocio; posteriormente, las tecnologías del stack se integran para automatizar, analizar e innovar sobre una base correctamente documentada.</p>
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Preguntas frecuentes</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">FAQ</h2>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {[{q:"¿Para qué utilizas Bizagi?",a:"Utilizo Bizagi para modelar procesos de negocio, identificar oportunidades de mejora y documentar el funcionamiento de una organización antes de implementar automatizaciones o soluciones tecnológicas."},{q:"¿Qué ventajas ofrece BPMN?",a:"BPMN proporciona un lenguaje visual estandarizado que facilita la comunicación entre las áreas de negocio y los equipos técnicos, permitiendo comprender procesos complejos de forma clara."},{q:"¿Cómo integras Bizagi con otras tecnologías?",a:"El modelado sirve como base para desarrollar automatizaciones con UiPath, aplicaciones web con Next.js, integraciones mediante APIs, análisis con Power BI y soluciones de IA con OpenAI."},{q:"¿Por qué modelar un proceso antes de automatizarlo?",a:"Porque permite identificar ineficiencias, reglas de negocio y excepciones antes de desarrollar la solución tecnológica, reduciendo riesgos y mejorando la calidad del resultado."},{q:"¿Por qué Bizagi forma parte de tu stack tecnológico?",a:"Porque me permite comprender el negocio antes de escribir código, asegurando que cada desarrollo responda realmente a las necesidades de la organización."}].map((faq) => (
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
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">Transformemos procesos en soluciones inteligentes.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Analizo, documento y optimizo procesos de negocio utilizando estándares BPMN para construir soluciones tecnológicas preparadas para automatización, integración de sistemas e Inteligencia Artificial.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg"><a href="mailto:jorge.ramtroz1989@gmail.com">Conversemos sobre su proyecto<ArrowRight /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/stack/uipath">Explorar mi Stack Tecnológico<ExternalLink /></Link></Button>
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
            {name:"UiPath",href:"/stack/uipath",icon: Bot,accent:"#3b82f6"},
            {name:"Python",href:"/stack/python",icon: Cpu,accent:"#8b5cf6"},
            {name:"SQL",href:"/stack/sql",icon: Database,accent:"#3b82f6"},
            {name:"Power BI",href:"/stack/powerbi",icon: BarChart3,accent:"#f2c811"},
            {name:"Azure",href:"/stack/azure",icon: Cloud,accent:"#0078d4"},
            {name:"Next.js",href:"/stack/nextjs",icon: Globe,accent:"#fff"},
            {name:"OpenAI",href:"#",icon: BrainCircuit,accent:"#8b5cf6"},
            {name:"REST APIs",href:"/stack/apis",icon: Cable,accent:"#8b5cf6"},
          ].map((tech) => (
            <Reveal key={`${tech.name}-${tech.accent}`} delay={0.04}>
              <Link href={tech.href} className="flex items-center gap-3 rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_-8px_var(--accent)]" style={{"--accent": tech.accent} as React.CSSProperties}>
                <tech.icon className="size-6 shrink-0" style={{color: tech.accent}} />
                <span className="font-medium">{tech.name}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
