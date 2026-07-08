import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, Layers, Workflow, FileText, Settings, GitBranch, Stethoscope, Factory, Truck, Store, Landmark, ArrowRight, Code, Cable, ChartPie, Globe, Server, BrainCircuit, Cog, Search, Table2, Filter, Merge, Split, SortAsc, Sigma, CalendarClock, Eraser, PanelTop } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pandas | Jorge Luis Ramírez | Data Engineering & Automation",
  description:
    "Especialista en procesamiento y análisis de datos con Pandas para automatización empresarial, Inteligencia Artificial, ETL y Business Intelligence.",
  keywords: [
    "Pandas", "Python Pandas", "Data Analysis", "Data Engineering",
    "ETL", "Business Intelligence", "Automation", "Artificial Intelligence",
    "Data Science", "Python",
  ],
  alternates: { canonical: "/stack/pandas" },
  openGraph: {
    title: "Pandas | Jorge Luis Ramírez | Data Engineering & Automation",
    description:
      "Especialista en procesamiento y análisis de datos con Pandas para automatización empresarial, ETL y BI.",
    url: "/stack/pandas",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
    { "@type": "ListItem", position: 3, name: "Pandas", item: `${site.url}/stack/pandas` },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  jobTitle: "Data Engineering & Automation",
  description: "Especialista en procesamiento y análisis de datos con Pandas para automatización empresarial, IA y BI.",
  url: site.url,
};

const techArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Pandas — Procesamiento y Análisis de Datos Empresarial",
  author: { "@type": "Person", name: site.fullName },
  description: "Pandas como herramienta estratégica para ingeniería de datos, automatización empresarial y business intelligence.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Para qué utilizo Pandas?", acceptedAnswer: { "@type": "Answer", text: "Utilizo Pandas para limpiar, transformar, analizar e integrar información proveniente de múltiples fuentes de datos, preparando la información para automatización, Business Intelligence e Inteligencia Artificial." } },
    { "@type": "Question", name: "¿Pandas reemplaza una base de datos?", acceptedAnswer: { "@type": "Answer", text: "No. Pandas complementa las bases de datos permitiendo procesar información de forma eficiente antes de almacenarla, visualizarla o utilizarla en procesos automatizados." } },
    { "@type": "Question", name: "¿Puede integrarse con Power BI?", acceptedAnswer: { "@type": "Answer", text: "Sí. Pandas facilita la preparación de datos que posteriormente pueden ser utilizados en dashboards e indicadores empresariales desarrollados en Power BI." } },
    { "@type": "Question", name: "¿Puede utilizarse junto con UiPath?", acceptedAnswer: { "@type": "Answer", text: "Sí. Es una combinación muy poderosa para automatizar procesos donde se requiere transformar, validar o enriquecer información antes de ejecutar una automatización RPA." } },
    { "@type": "Question", name: "¿Qué ventajas ofrece frente al procesamiento manual?", acceptedAnswer: { "@type": "Answer", text: "Mayor velocidad, menor probabilidad de errores, automatización de tareas repetitivas, procesamiento de grandes volúmenes de información y generación de datos listos para análisis." } },
  ],
};

const statsCards = [
  { icon: Eraser, title: "Limpieza de Datos", description: "Transformación y depuración de información empresarial." },
  { icon: Search, title: "Análisis", description: "Exploración y análisis eficiente de grandes volúmenes de datos." },
  { icon: Workflow, title: "ETL", description: "Extracción, transformación y carga desde múltiples fuentes." },
  { icon: BarChart3, title: "Business Intelligence", description: "Preparación de datos para modelos analíticos y dashboards." },
];

const capabilities = [
  "Data Cleaning", "Data Wrangling", "ETL", "Data Analysis",
  "Data Transformation", "Data Integration", "High Performance", "Business Intelligence",
];

const coreComponents = [
  { icon: Table2, name: "Series", desc: "Estructura unidimensional para almacenar datos etiquetados." },
  { icon: Table2, name: "DataFrame", desc: "Tabla bidimensional para manipular grandes volúmenes de información." },
  { icon: SortAsc, name: "Index", desc: "Organiza y accede eficientemente a los datos." },
  { icon: Layers, name: "MultiIndex", desc: "Manejo avanzado de estructuras jerárquicas." },
  { icon: Filter, name: "GroupBy", desc: "Agrupación inteligente para análisis estadísticos." },
  { icon: Merge, name: "Merge & Join", desc: "Integración de múltiples fuentes de datos." },
  { icon: PanelTop, name: "Pivot Tables", desc: "Resúmenes dinámicos para análisis empresarial." },
  { icon: CalendarClock, name: "DateTime", desc: "Procesamiento avanzado de fechas y tiempo." },
  { icon: Eraser, name: "Missing Values", desc: "Gestión eficiente de datos faltantes." },
  { icon: FileText, name: "IO Tools", desc: "Lectura y escritura de múltiples formatos de archivos." },
  { icon: Sigma, name: "Categorical Data", desc: "Optimización del almacenamiento y análisis." },
  { icon: Split, name: "Window Functions", desc: "Análisis acumulativo y estadísticas avanzadas." },
];

const whyImportant = [
  { icon: Eraser, title: "Limpieza de Datos", desc: "Elimina inconsistencias antes del análisis." },
  { icon: Cog, title: "Transformación", desc: "Convierte información en formatos utilizables." },
  { icon: Merge, title: "Integración", desc: "Une datos provenientes de múltiples sistemas." },
  { icon: Server, title: "Escalabilidad", desc: "Procesa millones de registros de forma eficiente." },
  { icon: Cog, title: "Automatización", desc: "Reduce tareas manuales de procesamiento." },
  { icon: Search, title: "Análisis", desc: "Descubre patrones y genera conocimiento." },
];

const industryApps = [
  { icon: Landmark, title: "Sector Bancario", tags: ["Validación de información", "Conciliaciones", "Reportes"] },
  { icon: Factory, title: "Industria Manufacturera", tags: ["Producción", "Inventarios", "Calidad"] },
  { icon: Truck, title: "Sector Logístico", tags: ["Importaciones", "Exportaciones", "Trazabilidad"] },
  { icon: Stethoscope, title: "Sector Salud", tags: ["Información clínica", "Análisis"] },
  { icon: Store, title: "Sector Retail", tags: ["Ventas", "Clientes", "Inventarios"] },
  { icon: Landmark, title: "Gobierno", tags: ["Procesamiento masivo", "Analítica"] },
];

const ecosystemCards = [
  { icon: Cpu, name: "NumPy", desc: "Computación Numérica." },
  { icon: ChartPie, name: "Matplotlib", desc: "Visualización." },
  { icon: BarChart3, name: "Seaborn", desc: "Gráficos estadísticos." },
  { icon: BrainCircuit, name: "Scikit-learn", desc: "Machine Learning." },
  { icon: FileText, name: "OpenPyXL", desc: "Excel." },
  { icon: Database, name: "SQLAlchemy", desc: "Bases de Datos." },
  { icon: Server, name: "PyArrow", desc: "Procesamiento Columnar." },
  { icon: Cloud, name: "Dask", desc: "Big Data." },
  { icon: Globe, name: "FastAPI", desc: "Servicios REST." },
  { icon: BarChart3, name: "Power BI", desc: "Visualización Empresarial." },
];

const advantages = [
  "Procesamiento Rápido", "Automatización", "Integración", "Escalabilidad",
  "Alta Compatibilidad", "Gran Comunidad", "Preparación para IA", "Business Intelligence",
];

const methodologySteps = [
  "Obtención de datos",
  "Validación",
  "Limpieza",
  "Transformación",
  "Análisis",
  "Integración",
  "Visualización",
  "Automatización",
];

const bestPractices = [
  { icon: Eraser, title: "Data Cleaning", desc: "Eliminación de inconsistencias." },
  { icon: Settings, title: "Normalización", desc: "Estandarización de formatos." },
  { icon: Shield, title: "Tratamiento de valores nulos", desc: "Control de calidad." },
  { icon: Check, title: "Validación de datos", desc: "Verificación de reglas de negocio." },
  { icon: Cpu, title: "Optimización de memoria", desc: "Procesamiento eficiente." },
  { icon: Code, title: "Funciones reutilizables", desc: "Código mantenible." },
  { icon: FileText, title: "Documentación", desc: "Facilidad de mantenimiento." },
  { icon: Workflow, title: "Automatización ETL", desc: "Procesos repetibles." },
  { icon: GitBranch, title: "Versionamiento", desc: "Git." },
  { icon: Cable, title: "Integración", desc: "Arquitecturas desacopladas." },
];

const useCases = [
  { icon: Workflow, title: "Automatización ETL", tags: ["Extracción", "Transformación", "Carga"] },
  { icon: BarChart3, title: "Business Intelligence", tags: ["Preparación de información", "Dashboards"] },
  { icon: BrainCircuit, title: "Ciencia de Datos", tags: ["Preparación de datasets", "Machine Learning"] },
  { icon: Cog, title: "Automatización Empresarial", tags: ["Integración con UiPath", "Scripts inteligentes"] },
  { icon: Landmark, title: "Sector Financiero", tags: ["Procesamiento de operaciones", "Conciliaciones"] },
  { icon: Factory, title: "Sector Manufacturero", tags: ["Inventarios", "Producción", "Calidad"] },
];

const enterpriseApps = [
  { icon: BarChart3, title: "Business Intelligence", tags: ["Preparación de datos para dashboards"] },
  { icon: Cog, title: "Automatización Empresarial", tags: ["Transformación automática de archivos"] },
  { icon: Database, title: "Data Engineering", tags: ["Procesamiento masivo de información"] },
  { icon: BrainCircuit, title: "Machine Learning", tags: ["Preparación de datasets para entrenamiento"] },
  { icon: Landmark, title: "Sector Financiero", tags: ["Consolidación y análisis de operaciones"] },
  { icon: Factory, title: "Sector Manufacturero", tags: ["Control de producción", "Indicadores", "Inventarios"] },
  { icon: Truck, title: "Sector Logístico", tags: ["Procesamiento documental", "Trazabilidad", "Optimización de procesos"] },
];

const integratedTechs = [
  { icon: Code, name: "Python", desc: "Lenguaje principal para análisis de datos." },
  { icon: Cpu, name: "NumPy", desc: "Procesamiento numérico de alto rendimiento." },
  { icon: BarChart3, name: "Power BI", desc: "Visualización y análisis empresarial." },
  { icon: Database, name: "SQL", desc: "Consulta y almacenamiento de información." },
  { icon: Bot, name: "UiPath", desc: "Automatización Robótica de Procesos." },
  { icon: BrainCircuit, name: "OpenAI", desc: "Procesamiento Inteligente." },
  { icon: Cloud, name: "Azure", desc: "Servicios Cloud." },
  { icon: Globe, name: "FastAPI", desc: "Servicios REST." },
  { icon: GitBranch, name: "Git", desc: "Control de versiones." },
  { icon: FileText, name: "Excel", desc: "Automatización documental." },
  { icon: Database, name: "CSV", desc: "Procesamiento masivo de información." },
  { icon: Cable, name: "APIs REST", desc: "Integración entre plataformas." },
];

const experienceBlocks = [
  {
    company: "Industria Papelera",
    role: "Analista de Automatización de Procesos",
    content: "En proyectos orientados al sector manufacturero utilicé Pandas como motor principal para la transformación y validación de información proveniente de múltiples sistemas corporativos. Desarrollé procesos capaces de leer archivos Excel, CSV y bases de datos para consolidar información, eliminar inconsistencias y preparar los datos antes de ser utilizados por automatizaciones desarrolladas en UiPath. Mediante la integración entre Python y Pandas fue posible automatizar procesos de limpieza, normalización y validación de datos, reduciendo tiempos operativos y mejorando significativamente la calidad de la información utilizada por las diferentes áreas del negocio.",
    indicators: [
      { value: "Transformación de datos", label: "" },
      { value: "Automatización ETL", label: "" },
      { value: "Integración con UiPath", label: "" },
      { value: "Validación de información", label: "" },
      { value: "Procesamiento masivo", label: "Optimización operativa" },
    ],
  },
  {
    company: "Sector Bancario",
    role: "Automation Engineer",
    content: "Dentro del sector financiero utilicé Pandas para complementar procesos RPA mediante el procesamiento inteligente de información estructurada. La librería permitió consolidar datos provenientes de diferentes fuentes, realizar transformaciones complejas, validar registros y preparar información antes de ser enviada a sistemas internos o utilizada por automatizaciones críticas. Esta integración permitió desarrollar soluciones más robustas, facilitando el análisis de información y reduciendo considerablemente el trabajo manual asociado al tratamiento de datos.",
    indicators: [
      { value: "Análisis de datos", label: "" },
      { value: "Transformación empresarial", label: "" },
      { value: "Integración de plataformas", label: "" },
      { value: "Procesamiento financiero", label: "" },
      { value: "Automatización inteligente", label: "Calidad de datos" },
    ],
  },
];

const timelineEvents = [
  { year: "2008", text: "Nacimiento de Pandas como proyecto Open Source." },
  { year: "2012", text: "Adopción masiva por la comunidad científica." },
  { year: "2015", text: "Consolidación como estándar para Data Science." },
  { year: "2018", text: "Integración con Machine Learning y Big Data." },
  { year: "2022", text: "Optimización para procesamiento de grandes volúmenes de datos." },
  { year: "Actualidad", text: "Pilar fundamental en proyectos de Inteligencia Artificial, Ingeniería de Datos y Automatización Empresarial." },
];

export default function PandasPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />

      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack Tecnológico</span>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">Pandas</span>
      </nav>

      {/* ===== HERO ===== */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Data Analyst</Badge>
            <Badge variant="secondary">Automation Engineer</Badge>
            <Badge variant="tertiary">Data Engineering</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Pandas
          </h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Transforming Data Into Business Intelligence
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Pandas es la librería que utilizo para transformar grandes volúmenes de datos en información confiable y accionable. Gracias a su potencia para limpiar, organizar, analizar y preparar datos, puedo construir soluciones empresariales que integran automatización, Inteligencia Artificial y analítica avanzada para optimizar la toma de decisiones.
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
                Explorar proyectos
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#06b6d4]/25 via-[#3b82f6]/20 to-[#8b5cf6]/20 blur-2xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#06b6d4]/20 bg-slate-950/60">
            <Image
              src="/stack/pandas/hero-pandas.webp"
              alt="Pandas — Data Engineering & Business Intelligence"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#06b6d4]/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* ===== STATS CARDS ===== */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {statsCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#06b6d4]/50 hover:shadow-[0_0_24px_-8px_rgba(6,182,212,0.5)]"
            >
              <card.icon className="size-8 text-[#06b6d4]" />
              <h3 className="mt-3 font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ===== CAPACIDADES ===== */}
      <Reveal className="mt-16">
        <div className="flex flex-wrap justify-center gap-2">
          {capabilities.map((cap) => (
            <Badge key={cap} variant="outline" className="text-xs">{cap}</Badge>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿QUÉ ES PANDAS? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#06b6d4] to-transparent" />
            Librería
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Qué es Pandas?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Pandas es la librería más utilizada del ecosistema Python para la manipulación, limpieza, transformación y análisis de datos estructurados.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Su principal objetivo es facilitar el trabajo con grandes volúmenes de información mediante estructuras de datos eficientes, permitiendo desarrollar soluciones empresariales orientadas al análisis, automatización y toma de decisiones.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Gracias a sus estructuras DataFrame y Series, Pandas simplifica procesos complejos relacionados con integración de información, preparación de datos para Inteligencia Artificial, análisis financiero, Business Intelligence y procesamiento masivo de información.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#06b6d4]/20 via-[#3b82f6]/15 to-transparent blur-2xl"
          />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/pandas/pandas-data.webp"
              alt="Procesamiento de datos empresariales con Pandas"
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
            Historia
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            La evolución de Pandas
          </h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6]" />
          {timelineEvents.map((item) => (
            <Reveal key={item.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#06b6d4]/40 bg-background font-display text-xs font-bold text-[#06b6d4] shadow-[0_0_22px_-6px_#06b6d4]">
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
            Componentes
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Componentes fundamentales de Pandas
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coreComponents.map((comp) => (
            <Reveal key={comp.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#06b6d4]/50 hover:shadow-[0_0_24px_-8px_rgba(6,182,212,0.4)]">
                <comp.icon className="size-6 text-[#06b6d4]" />
                <h3 className="mt-3 font-semibold">{comp.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{comp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿POR QUÉ PANDAS ES IMPORTANTE? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyImportant.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#06b6d4]/50"
              >
                <item.icon className="size-6 text-[#06b6d4]" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#06b6d4] to-transparent" />
            Importancia
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            La herramienta que convierte datos en información
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Pandas se ha convertido en el estándar de facto para el procesamiento de datos estructurados, permitiendo a las organizaciones transformar información cruda en activos analíticos listos para la toma de decisiones.
          </p>
        </div>
      </Reveal>

      {/* ===== APLICACIONES EMPRESARIALES ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Aplicaciones
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Dónde utilizo Pandas?
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseApps.map((app) => (
            <Reveal key={app.title} delay={0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_0_24px_-8px_rgba(59,130,246,0.4)]">
                <app.icon className="size-6 text-[#3b82f6]" />
                <h3 className="mt-3 font-semibold">{app.title}</h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {app.tags.map((tag) => (
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

      {/* ===== ARQUITECTURA ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Arquitectura
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Arquitectura típica de procesamiento de datos
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Excel", "CSV", "Base de Datos", "Pandas", "Limpieza", "Transformación", "Análisis", "Power BI", "Dashboard"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-4 py-2 font-mono text-sm text-[#06b6d4]">
                  {item}
                </span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">
            Pandas actúa como el núcleo del procesamiento de datos, permitiendo integrar información proveniente de múltiples fuentes y prepararla para análisis, Inteligencia Artificial y visualización.
          </p>
        </div>
      </Reveal>

      {/* ===== ECOSISTEMA ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ecosistema
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Tecnologías que complementan Pandas
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {ecosystemCards.map((eco) => (
            <Reveal key={eco.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#06b6d4]/50">
                <eco.icon className="mx-auto size-6 text-[#06b6d4]" />
                <h3 className="mt-2 text-sm font-semibold">{eco.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{eco.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== VENTAJAS ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4">
          <span className="mx-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#06b6d4] to-transparent" />
            Ventajas
          </span>
          <h2 className="mx-auto text-balance text-center text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Por qué las empresas utilizan Pandas?
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {advantages.map((adv) => (
            <Badge key={adv} variant="primary" className="text-xs sm:text-sm">{adv}</Badge>
          ))}
        </div>
      </Reveal>

      {/* ===== INDUSTRIAS ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Industrias
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Sectores donde Pandas genera valor
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryApps.map((app) => (
            <Reveal key={app.title} delay={0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50">
                <app.icon className="size-6 text-[#8b5cf6]" />
                <h3 className="mt-3 font-semibold">{app.title}</h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {app.tags.map((tag) => (
                    <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#8b5cf6]" />
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
              Mi experiencia utilizando Pandas en proyectos empresariales
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pandas se ha convertido en una de las herramientas fundamentales dentro de mi flujo de trabajo para automatización, integración de datos y análisis empresarial. Gracias a su capacidad para procesar grandes volúmenes de información, puedo construir soluciones que mejoran la calidad de los datos, optimizan procesos y generan información útil para la toma de decisiones.
            </p>
          </div>
        </Reveal>

        {experienceBlocks.map((block) => (
          <Reveal key={block.company} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
              <h3 className="text-xl font-semibold">{block.role}</h3>
              <p className="mt-1 text-[#06b6d4]">{block.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {block.indicators.map((ind) => (
                  <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                    <p className="font-display text-lg font-bold text-[#06b6d4]">{ind.value}</p>
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
            Tecnologías que integro con Pandas
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {integratedTechs.map((tech) => (
            <Reveal key={tech.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#06b6d4]/50 hover:shadow-[0_0_20px_-8px_rgba(6,182,212,0.4)]">
                <tech.icon className="size-6 text-[#06b6d4]" />
                <h3 className="mt-2 font-semibold">{tech.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tech.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== METODOLOGÍA ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Proceso
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Mi metodología de trabajo con datos
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
          Antes de analizar cualquier información considero indispensable garantizar la calidad de los datos. Por ello cada proyecto sigue un flujo estructurado que inicia con la obtención de la información, continúa con su validación y transformación, y finaliza con la automatización o visualización de resultados mediante herramientas de Business Intelligence.
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
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#06b6d4]/50">
                <bp.icon className="mx-auto size-6 text-[#06b6d4]" />
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
            Escenarios donde utilizo Pandas
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <Reveal key={uc.title} delay={0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#06b6d4]/50 hover:shadow-[0_0_24px_-8px_rgba(6,182,212,0.4)]">
                <uc.icon className="size-6 text-[#06b6d4]" />
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

      {/* ===== ¿POR QUÉ PANDAS? ===== */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#06b6d4]/10 via-[#3b82f6]/5 to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Decisión
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Por qué utilizo Pandas?
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Considero que una automatización es tan buena como la calidad de la información que procesa. Por esta razón Pandas ocupa un lugar central dentro de mi ecosistema tecnológico.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Su capacidad para transformar, validar y estructurar datos me permite desarrollar soluciones confiables, escalables y preparadas para integrarse con herramientas de Inteligencia Artificial, Automatización Robótica de Procesos y plataformas analíticas.
          </p>
        </div>
      </Reveal>

      {/* ===== DIAGRAMA INTEGRACIÓN ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Integración
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Cómo se integra Pandas dentro de mi ecosistema?
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Python", "Pandas", "Transformación de Datos", "NumPy", "Machine Learning", "Power BI", "Dashboards", "UiPath", "Automatización Empresarial"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-4 py-2 font-mono text-sm text-[#06b6d4]">
                  {item}
                </span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">
            Pandas representa el núcleo del procesamiento de datos dentro de mi ecosistema tecnológico. Cada solución desarrollada parte de información limpia y estructurada, permitiendo construir automatizaciones, modelos analíticos e integraciones mucho más confiables.
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
            { q: "¿Para qué utilizo Pandas?", a: "Utilizo Pandas para limpiar, transformar, analizar e integrar información proveniente de múltiples fuentes de datos, preparando la información para automatización, Business Intelligence e Inteligencia Artificial." },
            { q: "¿Pandas reemplaza una base de datos?", a: "No. Pandas complementa las bases de datos permitiendo procesar información de forma eficiente antes de almacenarla, visualizarla o utilizarla en procesos automatizados." },
            { q: "¿Puede integrarse con Power BI?", a: "Sí. Pandas facilita la preparación de datos que posteriormente pueden ser utilizados en dashboards e indicadores empresariales desarrollados en Power BI." },
            { q: "¿Puede utilizarse junto con UiPath?", a: "Sí. Es una combinación muy poderosa para automatizar procesos donde se requiere transformar, validar o enriquecer información antes de ejecutar una automatización RPA." },
            { q: "¿Qué ventajas ofrece frente al procesamiento manual?", a: "Mayor velocidad, menor probabilidad de errores, automatización de tareas repetitivas, procesamiento de grandes volúmenes de información y generación de datos listos para análisis." },
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
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">
            Los datos generan valor cuando se transforman en decisiones.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Utilizo Pandas para convertir grandes volúmenes de información en datos confiables que impulsan automatización, analítica e Inteligencia Artificial. Mi objetivo es construir soluciones que permitan a las organizaciones tomar decisiones mejor fundamentadas y optimizar sus procesos mediante información de calidad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <a href="mailto:jorge.ramtroz1989@gmail.com">
                Conversemos sobre su proyecto
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/stack/python">
                Explorar mi Stack Tecnológico
                <ExternalLink />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>

      {/* ===== TECNOLOGÍAS RELACIONADAS ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Navegación
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Tecnologías relacionadas
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { name: "UiPath", href: "/stack/uipath", icon: Bot, accent: "#3b82f6" },
            { name: "Python", href: "/stack/python", icon: Code, accent: "#8b5cf6" },
            { name: "NumPy", href: "#", icon: Cpu, accent: "#06b6d4" },
            { name: "SQL", href: "#", icon: Database, accent: "#3b82f6" },
            { name: "Power BI", href: "#", icon: BarChart3, accent: "#8b5cf6" },
            { name: "Azure", href: "#", icon: Cloud, accent: "#06b6d4" },
            { name: "FastAPI", href: "#", icon: Globe, accent: "#8b5cf6" },
            { name: "Git", href: "#", icon: GitBranch, accent: "#06b6d4" },
          ].map((tech) => (
            <Reveal key={`${tech.name}-${tech.accent}`} delay={0.04}>
              <Link
                href={tech.href}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_-8px_var(--accent)]"
                style={{ "--accent": tech.accent } as React.CSSProperties}
              >
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
