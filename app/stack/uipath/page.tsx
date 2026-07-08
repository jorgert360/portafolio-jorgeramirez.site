import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, Layers, Workflow, Braces, FileText, Smartphone, GanttChartSquare, Settings, RefreshCw, KeyRound, GitBranch, Building2, Stethoscope, Factory, Truck, Store, Landmark, ArrowRight, Code, Blocks, Cable, ChartPie, Globe, Server } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "UiPath | Jorge Luis Ramírez | Automation Engineer",
  description:
    "Especialista en automatización empresarial con UiPath. Desarrollo robots RPA escalables utilizando Studio, Orchestrator, ReFramework, APIs, Python e Inteligencia Artificial para banca, manufactura y logística.",
  keywords: [
    "UiPath",
    "Automation Engineer",
    "RPA",
    "UiPath Studio",
    "UiPath Orchestrator",
    "ReFramework",
    "Python",
    "Automation Cloud",
    "Artificial Intelligence",
    "Robotic Process Automation",
  ],
  alternates: { canonical: "/stack/uipath" },
  openGraph: {
    title: "UiPath | Jorge Luis Ramírez | Automation Engineer",
    description:
      "Especialista en automatización empresarial con UiPath. Desarrollo robots RPA escalables.",
    url: "/stack/uipath",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Stack", item: `${site.url}/stack` },
    { "@type": "ListItem", position: 3, name: "UiPath", item: `${site.url}/stack/uipath` },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  jobTitle: "Automation Engineer",
  description: "Especialista en automatización empresarial con UiPath.",
  url: site.url,
};

const techArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "UiPath — Automatización Empresarial con RPA",
  author: { "@type": "Person", name: site.fullName },
  description: "Guía completa sobre UiPath, automatización RPA, componentes, arquitectura y casos de uso empresarial.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué procesos pueden automatizarse con UiPath?",
      acceptedAnswer: { "@type": "Answer", text: "Procesos administrativos, financieros, logísticos, bancarios, recursos humanos, ERP, SAP, atención al cliente, validación documental y cientos de procesos repetitivos." },
    },
    {
      "@type": "Question",
      name: "¿UiPath reemplaza a las personas?",
      acceptedAnswer: { "@type": "Answer", text: "No. UiPath automatiza tareas repetitivas para que las personas puedan enfocarse en actividades analíticas, estratégicas y de mayor valor para la organización." },
    },
    {
      "@type": "Question",
      name: "¿Puede integrarse con Inteligencia Artificial?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. UiPath puede integrarse con modelos de IA, Machine Learning, OCR, Document Understanding, Python y múltiples servicios cloud." },
    },
    {
      "@type": "Question",
      name: "¿Puede conectarse con SAP?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. UiPath dispone de conectores especializados para SAP y otros ERP empresariales." },
    },
    {
      "@type": "Question",
      name: "¿Qué beneficios obtiene una empresa?",
      acceptedAnswer: { "@type": "Answer", text: "Reducción de costos, disminución de errores, mayor productividad, trazabilidad, cumplimiento de SLA y escalabilidad operativa." },
    },
  ],
};

const statsCards = [
  { icon: Bot, title: "Studio", description: "Automatización visual mediante drag & drop." },
  { icon: Server, title: "Orchestrator", description: "Administración centralizada de robots." },
  { icon: Layers, title: "ReFramework", description: "Automatizaciones escalables y mantenibles." },
  { icon: Cpu, title: "AI + Python", description: "Integración con modelos de IA y procesamiento avanzado de datos." },
];

const platformComponents = [
  { icon: Bot, name: "UiPath Studio", desc: "Entorno visual de desarrollo donde se diseñan automatizaciones mediante workflows reutilizables." },
  { icon: Bot, name: "Robot", desc: "Ejecuta los procesos desarrollados en Studio simulando las acciones de un usuario." },
  { icon: Smartphone, name: "Assistant", desc: "Permite a los usuarios ejecutar automatizaciones bajo demanda desde su estación de trabajo." },
  { icon: Server, name: "Orchestrator", desc: "Administra robots, credenciales, colas, activos, monitoreo y programación centralizada." },
  { icon: Cloud, name: "Automation Cloud", desc: "Servicios empresariales administrados desde la nube con alta disponibilidad y escalabilidad." },
  { icon: FileText, name: "Document Understanding", desc: "Extrae información inteligente desde facturas, contratos, formularios y documentos utilizando IA." },
  { icon: Cpu, name: "AI Center", desc: "Permite entrenar, administrar e integrar modelos de Machine Learning dentro de automatizaciones." },
  { icon: BarChart3, name: "Communications Mining", desc: "Analiza correos electrónicos, chats y conversaciones utilizando modelos de IA." },
  { icon: GanttChartSquare, name: "Process Mining", desc: "Descubre automáticamente procesos empresariales mediante análisis de eventos." },
  { icon: Settings, name: "Task Mining", desc: "Analiza el comportamiento del usuario para descubrir oportunidades de automatización." },
  { icon: Cable, name: "Integration Service", desc: "Conecta UiPath con cientos de aplicaciones empresariales mediante conectores listos para usar." },
  { icon: Blocks, name: "Agent Builder", desc: "Diseña agentes inteligentes capaces de colaborar con robots y personas utilizando IA." },
];

const whyLeaders = [
  { icon: BarChart3, title: "Escalabilidad", desc: "Automatizaciones preparadas para crecer con el negocio." },
  { icon: Shield, title: "Seguridad", desc: "Gestión empresarial de credenciales, permisos y auditoría." },
  { icon: Cable, title: "Integración", desc: "Compatible con SAP, Oracle, Microsoft, Salesforce, APIs REST y cientos de plataformas." },
  { icon: Cpu, title: "Inteligencia Artificial", desc: "Automatización inteligente mediante IA Generativa y modelos predictivos." },
  { icon: Workflow, title: "Productividad", desc: "Reduce tiempos operativos y elimina tareas repetitivas." },
  { icon: Shield, title: "Gobierno", desc: "Control centralizado de todos los robots mediante Orchestrator." },
];

const industryApps = [
  { icon: Landmark, title: "Sector Bancario", tags: ["Créditos", "Validación documental", "KYC", "Conciliaciones", "Reportes regulatorios"] },
  { icon: Stethoscope, title: "Sector Salud", tags: ["Historias clínicas", "Facturación", "Procesamiento documental", "Autorizaciones"] },
  { icon: Factory, title: "Sector Manufactura", tags: ["Inventarios", "Planeación", "Producción", "Calidad", "ERP"] },
  { icon: Truck, title: "Sector Logística", tags: ["Importaciones", "Exportaciones", "Trazabilidad", "Inventarios", "Documentación aduanera"] },
  { icon: Store, title: "Sector Retail", tags: ["Pedidos", "Facturación", "Inventarios", "Atención al cliente"] },
  { icon: Landmark, title: "Sector Gobierno", tags: ["Procesamiento masivo", "Digitalización documental", "Gestión tributaria", "Atención al ciudadano"] },
];

const methodologySteps = [
  "Levantamiento del proceso.",
  "Análisis funcional.",
  "Diseño de arquitectura.",
  "Desarrollo en UiPath.",
  "Integración con APIs y sistemas.",
  "Pruebas funcionales.",
  "Despliegue mediante Orchestrator.",
  "Monitoreo y mejora continua.",
];

const bestPractices = [
  { icon: Layers, title: "ReFramework", desc: "Arquitecturas reutilizables." },
  { icon: Shield, title: "Exception Handling", desc: "Gestión robusta de errores." },
  { icon: RefreshCw, title: "Retry Mechanism", desc: "Recuperación automática." },
  { icon: FileText, title: "Logging", desc: "Trazabilidad completa." },
  { icon: Settings, title: "Assets", desc: "Configuración centralizada." },
  { icon: Database, title: "Queues", desc: "Procesamiento masivo." },
  { icon: KeyRound, title: "Credential Manager", desc: "Seguridad empresarial." },
  { icon: GitBranch, title: "Versionamiento", desc: "Control mediante Git." },
  { icon: Server, title: "Orchestrator", desc: "Administración centralizada." },
  { icon: Layers, title: "Modularización", desc: "Componentes reutilizables." },
];

const useCases = [
  { icon: Building2, title: "Automatización Bancaria", tags: ["Migraciones", "Gestión documental", "Notificaciones", "Conciliaciones"] },
  { icon: Factory, title: "Manufactura", tags: ["Producción", "Inventarios", "Calidad"] },
  { icon: Truck, title: "Logística", tags: ["Procesos aduaneros", "PICIZ", "SIGLO", "MUISCA"] },
  { icon: Globe, title: "Recursos Humanos", tags: ["Ingreso de personal", "Validaciones"] },
  { icon: Database, title: "ERP", tags: ["SAP", "Bases de datos", "Power BI"] },
  { icon: Cpu, title: "Inteligencia Artificial", tags: ["Python", "OCR", "Machine Learning"] },
];

const integratedTechs = [
  { icon: Code, name: "Python", desc: "Automatización avanzada y procesamiento de datos." },
  { icon: BarChart3, name: "Pandas", desc: "Transformación y análisis de grandes volúmenes de información." },
  { icon: Database, name: "SQL", desc: "Consultas e integración con bases de datos." },
  { icon: Cable, name: "REST APIs", desc: "Comunicación entre aplicaciones empresariales." },
  { icon: ChartPie, name: "Power BI", desc: "Visualización y seguimiento de indicadores." },
  { icon: Globe, name: "SAP ERP", desc: "Automatización de procesos empresariales." },
  { icon: Workflow, name: "Bizagi", desc: "Orquestación BPM." },
  { icon: Cloud, name: "Azure", desc: "Servicios Cloud." },
  { icon: GitBranch, name: "Git", desc: "Control de versiones." },
  { icon: Braces, name: "C#", desc: "Componentes personalizados." },
  { icon: FileText, name: "Excel", desc: "Automatización documental." },
];

const experienceBlocks = [
  {
    company: "Industria de Papel",
    role: "Analista de Automatización de Procesos (RPA)",
    content: "Durante mi experiencia en la industria del papel participé en el diseño, desarrollo e implementación de soluciones RPA enfocadas en optimizar procesos críticos del negocio. Uno de los proyectos más representativos fue el desarrollo del Robot Alejo 2.0, construido con UiPath para automatizar completamente el ingreso de información al sistema corporativo PICIZ. La solución permitió eliminar la digitación manual, reducir errores humanos y liberar tiempo operativo para que los equipos se enfocaran en actividades de mayor valor estratégico. Además de la automatización principal, integré UiPath con Python (Pandas) y Bizagi para crear flujos inteligentes capaces de validar información, transformar datos y ejecutar procesos de manera totalmente automática. El resultado fue una reducción aproximada del 45% en los tiempos de respuesta (SLA), incrementando la eficiencia operativa del área y mejorando la calidad del servicio interno.",
    indicators: [
      { value: "100%", label: "Automatización del ingreso de datos." },
      { value: "45%", label: "Reducción del tiempo de respuesta." },
      { value: "Python + UiPath", label: "Integración inteligente." },
      { value: "Bizagi", label: "Automatización BPM." },
      { value: "PICIZ", label: "Integración corporativa." },
    ],
  },
  {
    company: "Banca",
    role: "Desarrollador RPA UiPath",
    content: "En el sector bancario participé en la migración técnica de procesos desarrollados en Pega hacia UiPath, garantizando la continuidad operativa de procesos críticos dentro de un entorno altamente regulado. Diseñé automatizaciones utilizando ReFramework, implementando una arquitectura orientada a la reutilización de componentes, manejo de excepciones, trazabilidad y monitoreo mediante UiPath Orchestrator. Las soluciones fueron complementadas con desarrollos en Python y C# para resolver escenarios específicos de negocio, integrando diferentes sistemas internos mediante servicios y automatizaciones robustas. También participé en procesos relacionados con notificaciones físicas y administrativas, optimizando tiempos de ejecución y fortaleciendo la estabilidad de las automatizaciones en ambientes empresariales.",
    indicators: [
      { value: "Migración Pega → UiPath", label: "" },
      { value: "ReFramework", label: "" },
      { value: "Python", label: "" },
      { value: "C#", label: "" },
      { value: "Orchestrator", label: "Alta disponibilidad" },
    ],
  },
];

export default function UiPathPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />

      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack</span>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">UiPath</span>
      </nav>

      {/* ===== HERO ===== */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Automation Engineer</Badge>
            <Badge variant="secondary">RPA Developer</Badge>
            <Badge variant="tertiary">Python Integration</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            UiPath
          </h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Enterprise Automation Platform
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Construyo soluciones empresariales mediante Automatización Robótica de Procesos (RPA), integrando UiPath, Python, APIs e Inteligencia Artificial para optimizar operaciones críticas, reducir tiempos de ejecución y aumentar la productividad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg">
              <a href="#experience">
                Ver experiencia
                <ExternalLink className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                Ver proyectos
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#3b82f6]/25 via-[#8b5cf6]/20 to-[#06b6d4]/20 blur-2xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-sky-300/20 bg-slate-950/60">
            <Image
              src="/stack/uipath/hero.webp"
              alt="UiPath — Enterprise Automation Platform"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sky-400/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* ===== STATS CARDS ===== */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {statsCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_0_24px_-8px_rgba(59,130,246,0.5)]"
            >
              <card.icon className="size-8 text-[#3b82f6]" />
              <h3 className="mt-3 font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿QUÉ ES UIPATH? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#3b82f6] to-transparent" />
            Plataforma
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Qué es UiPath?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            UiPath es una plataforma líder mundial de Automatización Robótica de Procesos (RPA) diseñada para automatizar tareas repetitivas, procesos empresariales e integraciones entre aplicaciones de forma rápida, segura y escalable.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Su ecosistema permite construir robots de software capaces de interactuar con aplicaciones de escritorio, páginas web, sistemas ERP, bases de datos, archivos de Office, APIs y servicios en la nube sin modificar la infraestructura existente.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Actualmente UiPath ha evolucionado más allá del concepto tradicional de RPA incorporando Inteligencia Artificial, Machine Learning, Document Understanding, Process Mining y Agentic Automation, permitiendo que las organizaciones automaticen procesos completos de principio a fin.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Hoy miles de empresas utilizan UiPath para optimizar operaciones críticas, mejorar la productividad, reducir costos y aumentar la calidad de sus procesos.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[36rem] md:mx-0">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#3b82f6]/20 via-[#8b5cf6]/15 to-transparent blur-2xl"
          />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/uipath/que-es.webp"
              alt="Automatización empresarial con UiPath"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </Reveal>

      {/* ===== EVOLUCIÓN ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trayectoria
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            La evolución de UiPath
          </h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-[#06b6d4]" />
          {[
            { year: "2015", text: "Expansión internacional y crecimiento del ecosistema RPA." },
            { year: "2018", text: "UiPath Enterprise se convierte en uno de los líderes del mercado." },
            { year: "2020", text: "Automation Cloud. Document Understanding. AI Center." },
            { year: "2022", text: "Process Mining. Task Mining. Communications Mining." },
            { year: "2024+", text: "Agentic Automation. Autopilot. Agent Builder. Integración avanzada con IA Generativa." },
          ].map((item) => (
            <Reveal key={item.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#3b82f6]/40 bg-background font-display text-xs font-bold text-[#3b82f6] shadow-[0_0_22px_-6px_#3b82f6]">
                {item.year}
              </span>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== COMPONENTES ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Plataforma
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Componentes principales de UiPath
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {platformComponents.map((comp) => (
            <Reveal key={comp.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_0_24px_-8px_rgba(59,130,246,0.4)]">
                <comp.icon className="size-6 text-[#3b82f6]" />
                <h3 className="mt-3 font-semibold">{comp.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{comp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿POR QUÉ ES LÍDER? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyLeaders.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50"
              >
                <item.icon className="size-6 text-[#8b5cf6]" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#8b5cf6] to-transparent" />
            Liderazgo
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Por qué las empresas eligen UiPath?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            UiPath se ha consolidado como la plataforma líder en automatización empresarial gracias a su capacidad para escalar desde procesos simples hasta automatizaciones complejas impulsadas por Inteligencia Artificial.
          </p>
        </div>
      </Reveal>

      {/* ===== APLICACIONES EN LA INDUSTRIA ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Industrias
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Dónde puede utilizarse UiPath?
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryApps.map((app) => (
            <Reveal key={app.title} delay={0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#06b6d4]/50">
                <app.icon className="size-6 text-[#06b6d4]" />
                <h3 className="mt-3 font-semibold">{app.title}</h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {app.tags.map((tag) => (
                    <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#06b6d4]" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== MI EXPERIENCIA ===== */}
      <section id="experience">
        <Reveal className="mt-24">
          <div className="flex flex-col gap-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Trayectoria profesional
            </span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Mi experiencia desarrollando soluciones con UiPath
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Más que automatizar tareas, mi objetivo ha sido diseñar soluciones empresariales escalables que integren personas, sistemas y datos, generando resultados medibles para las organizaciones.
            </p>
          </div>
        </Reveal>

        {experienceBlocks.map((block) => (
          <Reveal key={block.company} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
              <h3 className="text-xl font-semibold">{block.role}</h3>
              <p className="mt-1 text-[#3b82f6]">{block.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {block.indicators.map((ind) => (
                  <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                    <p className="font-display text-lg font-bold text-[#3b82f6]">{ind.value}</p>
                    {ind.label && <p className="mt-1 text-xs text-muted-foreground">{ind.label}</p>}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ===== TECNOLOGÍAS QUE INTEGRO ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ecosistema
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Tecnologías que integro con UiPath
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {integratedTechs.map((tech) => (
            <Reveal key={tech.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_20px_-8px_rgba(139,92,246,0.4)]">
                <tech.icon className="size-6 text-[#8b5cf6]" />
                <h3 className="mt-2 font-semibold">{tech.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tech.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== ARQUITECTURA ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Infraestructura
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Arquitectura de una solución empresarial
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          {/* TODO(jorge): Insertar diagrama de arquitectura oficial */}
          <div className="flex flex-col items-center gap-4 text-center">
            {["Usuario", "UiPath Assistant", "Robot", "Studio", "Orchestrator", "ERP", "SAP", "Base de Datos", "API REST", "Power BI"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-4 py-2 font-mono text-sm text-[#3b82f6]">
                  {item}
                </span>
                {i < 9 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">
            Una arquitectura empresarial basada en UiPath permite integrar procesos, aplicaciones y personas dentro de un ecosistema centralizado, garantizando escalabilidad, monitoreo y trazabilidad de extremo a extremo.
          </p>
        </div>
      </Reveal>

      {/* ===== METODOLOGÍA ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Proceso
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Mi metodología de desarrollo
          </h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          {methodologySteps.map((step, i) => (
            <Reveal key={step} delay={0.05 * i} className="relative pl-16 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#06b6d4]/40 bg-background font-display text-xs font-bold text-[#06b6d4] shadow-[0_0_22px_-6px_#06b6d4]">
                {i + 1}
              </span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">
          Cada automatización que desarrollo sigue un enfoque orientado a calidad, escalabilidad y mantenimiento. Mi prioridad no es únicamente automatizar tareas, sino construir soluciones sostenibles que puedan evolucionar junto con las necesidades del negocio.
        </p>
      </Reveal>

      {/* ===== BUENAS PRÁCTICAS ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Calidad
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Buenas prácticas
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {bestPractices.map((bp) => (
            <Reveal key={bp.title} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#3b82f6]/50">
                <bp.icon className="mx-auto size-6 text-[#3b82f6]" />
                <h3 className="mt-2 text-sm font-semibold">{bp.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{bp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== CASOS DE USO ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Escenarios
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Escenarios donde implemento UiPath
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <Reveal key={uc.title} delay={0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_0_24px_-8px_rgba(59,130,246,0.4)]">
                <uc.icon className="size-6 text-[#3b82f6]" />
                <h3 className="mt-3 font-semibold">{uc.title}</h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {uc.tags.map((tag) => (
                    <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#06b6d4]" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿POR QUÉ ELEGÍ UIPATH? ===== */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#3b82f6]/10 via-[#8b5cf6]/5 to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Decisión
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Por qué elegí UiPath?
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Elegí UiPath como mi plataforma principal de automatización porque combina rapidez de desarrollo, estabilidad empresarial y una capacidad excepcional para integrarse con tecnologías modernas como Python, Inteligencia Artificial, APIs REST y plataformas Cloud.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Mi experiencia desarrollando soluciones para sectores como banca, manufactura y logística me ha demostrado que una automatización exitosa no depende únicamente del robot, sino de una arquitectura bien diseñada, una correcta administración mediante Orchestrator y una estrategia de mejora continua que garantice escalabilidad y mantenimiento a largo plazo.
          </p>
        </div>
      </Reveal>

      {/* ===== FAQ ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Preguntas frecuentes
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            FAQ
          </h2>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {[
            { q: "¿Qué procesos pueden automatizarse con UiPath?", a: "Procesos administrativos, financieros, logísticos, bancarios, recursos humanos, ERP, SAP, atención al cliente, validación documental y cientos de procesos repetitivos." },
            { q: "¿UiPath reemplaza a las personas?", a: "No. UiPath automatiza tareas repetitivas para que las personas puedan enfocarse en actividades analíticas, estratégicas y de mayor valor para la organización." },
            { q: "¿Puede integrarse con Inteligencia Artificial?", a: "Sí. UiPath puede integrarse con modelos de IA, Machine Learning, OCR, Document Understanding, Python y múltiples servicios cloud." },
            { q: "¿Puede conectarse con SAP?", a: "Sí. UiPath dispone de conectores especializados para SAP y otros ERP empresariales." },
            { q: "¿Qué beneficios obtiene una empresa?", a: "Reducción de costos, disminución de errores, mayor productividad, trazabilidad, cumplimiento de SLA y escalabilidad operativa." },
          ].map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-border bg-surface-2/40 transition-all duration-300 hover:border-border-strong">
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-medium sm:text-base">
                {faq.q}
                <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-90" />
              </summary>
              <div className="border-t border-border px-5 pb-5 pt-3">
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Reveal>

      {/* ===== CTA ===== */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface-2/40 p-8 text-center sm:p-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 via-[#8b5cf6]/5 to-transparent" />
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">
            ¿Está buscando automatizar procesos empresariales?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Diseño e implemento soluciones RPA con UiPath orientadas a resultados reales, integrando Inteligencia Artificial, Python, APIs y arquitecturas escalables para optimizar procesos críticos de negocio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <a href="mailto:jorge.ramtroz1989@gmail.com">
                Hablemos de su proyecto
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#experience">
                Ver mi experiencia
                <ExternalLink />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
