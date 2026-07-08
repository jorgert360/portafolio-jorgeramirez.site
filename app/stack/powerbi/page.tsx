import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, FileText, GitBranch, ArrowRight, Cable, Globe, Cog, Activity, Smartphone, Layers, Eye, Search, BrainCircuit, TrendingUp, Table2, Filter, RefreshCw, Lock, Users, Bell, Landmark, Factory, PieChart } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Power BI | Jorge Luis Ramírez | Data Analytics & Business Intelligence",
  description: "Especialista en Power BI para desarrollar dashboards empresariales, análisis de datos, indicadores estratégicos e integración con SQL, Python, Automatización e IA.",
  keywords: ["Power BI", "Business Intelligence", "Dashboard", "KPIs", "Data Analytics", "SQL", "Python", "Pandas", "Data Visualization", "Automation", "Artificial Intelligence"],
  alternates: { canonical: "/stack/powerbi" },
  openGraph: { title: "Power BI | Jorge Luis Ramírez | Data Analytics & Business Intelligence", description: "Especialista en Power BI para dashboards empresariales e integración con SQL, Python, Automatización e IA.", url: "/stack/powerbi" },
};

const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
  { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
  { "@type": "ListItem", position: 3, name: "Power BI", item: `${site.url}/stack/powerbi` },
]};
const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: site.fullName, jobTitle: "Data Analytics & Business Intelligence", description: "Especialista en Power BI para dashboards empresariales y analítica de datos.", url: site.url };
const techArticleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: "Power BI — Business Intelligence Empresarial", author: { "@type": "Person", name: site.fullName }, description: "Power BI como plataforma estratégica para visualización de datos y toma de decisiones empresariales." };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "¿Para qué utilizas Power BI?", acceptedAnswer: { "@type": "Answer", text: "Utilizo Power BI para convertir datos de diferentes fuentes en dashboards interactivos e indicadores estratégicos que apoyan la toma de decisiones." } },
  { "@type": "Question", name: "¿Power BI puede integrarse con SQL?", acceptedAnswer: { "@type": "Answer", text: "Sí. SQL constituye una de las principales fuentes de información para los modelos analíticos que desarrollo en Power BI." } },
  { "@type": "Question", name: "¿Qué papel desempeña Python dentro de una solución Power BI?", acceptedAnswer: { "@type": "Answer", text: "Python permite automatizar procesos de extracción, limpieza y transformación de datos antes de ser visualizados mediante Power BI." } },
  { "@type": "Question", name: "¿Qué tipo de dashboards desarrollas?", acceptedAnswer: { "@type": "Answer", text: "Desarrollo dashboards ejecutivos, operativos, financieros, comerciales y de seguimiento de procesos, adaptados a cada organización." } },
  { "@type": "Question", name: "¿Por qué Power BI forma parte de tu stack tecnológico?", acceptedAnswer: { "@type": "Answer", text: "Porque representa la etapa donde los datos se convierten en información útil para el negocio, integrado con SQL, Python, Pandas, Automatización e IA." } },
]};

const statsCards = [
  { icon: BarChart3, title: "Dashboard Ejecutivo", description: "Indicadores estratégicos para la dirección." },
  { icon: Search, title: "Análisis de Datos", description: "Información basada en evidencia." },
  { icon: Cable, title: "Integración Empresarial", description: "Conecta múltiples fuentes de información." },
  { icon: Eye, title: "Visualización Interactiva", description: "Experiencias intuitivas para el análisis." },
];
const capabilities = ["Dashboards", "KPIs", "Power Query", "Modelo de Datos", "DAX", "Visualizaciones", "ETL", "Business Intelligence"];
const timelineEvents = [
  { year: "2011", text: "Microsoft inicia el proyecto de Business Intelligence en Excel." },
  { year: "2015", text: "Nacimiento oficial de Power BI." },
  { year: "2017", text: "Integración con Azure y servicios Cloud." },
  { year: "2020", text: "Expansión del análisis colaborativo." },
  { year: "2023", text: "Integración con Inteligencia Artificial y Microsoft Fabric." },
  { year: "Actualidad", text: "Una de las plataformas de BI más utilizadas por organizaciones de todo el mundo." },
];
const whyPowerBi = [
  { icon: Eye, title: "Visualización de Datos", desc: "Transforma datos complejos en información clara." },
  { icon: TrendingUp, title: "KPIs", desc: "Seguimiento de indicadores estratégicos." },
  { icon: BarChart3, title: "Business Intelligence", desc: "Apoyo para la toma de decisiones." },
  { icon: Cable, title: "Integración Empresarial", desc: "Conecta múltiples fuentes de información." },
  { icon: RefreshCw, title: "Actualización Automática", desc: "Datos siempre disponibles." },
  { icon: Layers, title: "Escalabilidad", desc: "Preparado para organizaciones de cualquier tamaño." },
];
const coreComponents = [
  { icon: Filter, name: "Power Query", desc: "Extracción y transformación de datos." },
  { icon: Table2, name: "Modelo de Datos", desc: "Relaciones entre tablas." },
  { icon: BrainCircuit, name: "DAX", desc: "Cálculos avanzados." },
  { icon: PieChart, name: "Visualizaciones", desc: "Gráficos e indicadores." },
  { icon: BarChart3, name: "Dashboards", desc: "Consolidación ejecutiva." },
  { icon: Users, name: "Workspaces", desc: "Colaboración empresarial." },
  { icon: Database, name: "Dataflows", desc: "Procesamiento reutilizable." },
  { icon: Shield, name: "Gateway", desc: "Actualización segura." },
  { icon: Globe, name: "Publicación", desc: "Power BI Service." },
  { icon: Lock, name: "Seguridad", desc: "Roles y permisos." },
  { icon: TrendingUp, name: "KPIs", desc: "Indicadores estratégicos." },
  { icon: Bell, name: "Alertas", desc: "Monitoreo continuo." },
];
const daxFunctions = [
  { icon: BrainCircuit, name: "Medidas", desc: "Indicadores dinámicos." },
  { icon: Table2, name: "Columnas Calculadas", desc: "Transformación de información." },
  { icon: Activity, name: "Funciones de Tiempo", desc: "Comparativos históricos." },
  { icon: BarChart3, name: "Funciones de Agregación", desc: "Suma, promedio, máximos." },
  { icon: Filter, name: "Filtros", desc: "Análisis contextual." },
  { icon: TrendingUp, name: "KPIs", desc: "Indicadores empresariales." },
];
const ecosystemCards = [
  { icon: Database, name: "SQL", desc: "Fuente principal de datos." },
  { icon: Cpu, name: "Python", desc: "Procesamiento avanzado." },
  { icon: BarChart3, name: "Pandas", desc: "Transformación." },
  { icon: FileText, name: "Excel", desc: "Análisis operativo." },
  { icon: Cloud, name: "Azure", desc: "Servicios Cloud." },
  { icon: Filter, name: "Power Query", desc: "ETL." },
  { icon: Cog, name: "Power Automate", desc: "Automatización." },
  { icon: GitBranch, name: "Git", desc: "Versionamiento." },
  { icon: BrainCircuit, name: "OpenAI", desc: "Análisis Inteligente." },
  { icon: Cable, name: "REST APIs", desc: "Integración." },
];
const enterpriseApps = [
  { icon: BarChart3, title: "Dashboards Ejecutivos", tags: ["Indicadores gerenciales"] },
  { icon: Landmark, title: "Sector Financiero", tags: ["Seguimiento de procesos"] },
  { icon: Factory, title: "Industria Manufacturera", tags: ["Producción e inventarios"] },
  { icon: Activity, title: "Control Operacional", tags: ["Indicadores diarios"] },
  { icon: Cog, title: "Automatización", tags: ["Seguimiento de robots RPA"] },
  { icon: TrendingUp, title: "Analítica Comercial", tags: ["Ventas y clientes"] },
  { icon: Globe, title: "Planeación Estratégica", tags: ["Toma de decisiones"] },
  { icon: Shield, title: "Auditoría", tags: ["Control y trazabilidad"] },
];
const bestPractices = [
  { icon: Layers, title: "Modelo Estrella", desc: "Optimización." },
  { icon: BrainCircuit, title: "Optimización DAX", desc: "Rendimiento." },
  { icon: Filter, title: "Power Query", desc: "ETL." },
  { icon: Lock, title: "Seguridad", desc: "Roles." },
  { icon: RefreshCw, title: "Actualizaciones Automáticas", desc: "Disponibilidad." },
  { icon: Smartphone, title: "Dashboards Responsivos", desc: "UX." },
  { icon: TrendingUp, title: "KPIs Claros", desc: "Enfoque." },
  { icon: Shield, title: "Gobierno del Dato", desc: "Calidad." },
  { icon: Activity, title: "Performance", desc: "Velocidad." },
  { icon: FileText, title: "Documentación", desc: "Mantenibilidad." },
  { icon: GitBranch, title: "Versionamiento", desc: "Git." },
  { icon: Layers, title: "Escalabilidad", desc: "Crecimiento." },
];
const useCases = [
  { icon: BarChart3, title: "Dashboards Gerenciales", tags: ["Indicadores Ejecutivos"] },
  { icon: Activity, title: "Seguimiento Operacional", tags: ["Control Financiero"] },
  { icon: Factory, title: "Industria Manufacturera", tags: ["Automatización de Reportes"] },
  { icon: TrendingUp, title: "Análisis Comercial", tags: ["Seguimiento de Robots RPA"] },
  { icon: Cog, title: "Análisis de Producción", tags: ["Monitoreo de Procesos"] },
];
const indicators = [
  { icon: TrendingUp, title: "KPIs Financieros", desc: "Seguimiento de rentabilidad y costos." },
  { icon: Cog, title: "Indicadores Operativos", desc: "Eficiencia de procesos." },
  { icon: Factory, title: "Producción", desc: "Cumplimiento de metas." },
  { icon: Activity, title: "Productividad", desc: "Rendimiento del equipo." },
  { icon: Shield, title: "Calidad", desc: "Control de estándares." },
  { icon: Database, title: "Inventarios", desc: "Rotación y disponibilidad." },
  { icon: Cog, title: "Automatización", desc: "Seguimiento de procesos." },
  { icon: Activity, title: "Cumplimiento", desc: "Tiempos de ejecución." },
  { icon: TrendingUp, title: "Análisis Comercial", desc: "Gestión de servicios." },
];
const experienceBlocks = [
  {
    company: "Industria Manufacturera", role: "Analista de Automatización de Procesos",
    content: "Durante mi experiencia en el sector manufacturero participé en proyectos donde la información provenía de múltiples sistemas corporativos. Utilicé Power BI para transformar esa información en indicadores ejecutivos que permitían realizar seguimiento a procesos operativos, identificar oportunidades de mejora y visualizar datos críticos para la toma de decisiones. La integración con SQL, Python y procesos automatizados permitió construir reportes confiables alimentados por información actualizada y validada automáticamente.",
    indicators: [
      { value: "Dashboards Ejecutivos", label: "" }, { value: "KPIs Operativos", label: "" },
      { value: "Business Intelligence", label: "" }, { value: "Automatización de Reportes", label: "" },
      { value: "Visualización de Datos", label: "Seguimiento de Indicadores" },
    ],
  },
  {
    company: "Sector Bancario", role: "Automation Engineer",
    content: "En proyectos desarrollados para el sector financiero participé en soluciones donde Power BI fue utilizado para consolidar información proveniente de diferentes plataformas empresariales. Los dashboards permitían monitorear indicadores operativos, visualizar el comportamiento de procesos automatizados y facilitar el análisis de información mediante reportes interactivos. La integración con automatizaciones RPA y consultas SQL permitió reducir tiempos de generación de reportes y mejorar la disponibilidad de información para diferentes áreas del negocio.",
    indicators: [
      { value: "Dashboards Financieros", label: "" }, { value: "KPIs", label: "" },
      { value: "Automatización", label: "" }, { value: "Seguimiento Operacional", label: "" },
      { value: "Business Intelligence", label: "Análisis de Datos" },
    ],
  },
];
const integratedTechs = [
  { icon: Database, name: "SQL", desc: "Fuente principal de datos." },
  { icon: Cpu, name: "Python", desc: "Procesamiento avanzado." },
  { icon: BarChart3, name: "Pandas", desc: "Transformación." },
  { icon: Filter, name: "Power Query", desc: "ETL." },
  { icon: BrainCircuit, name: "DAX", desc: "Medidas avanzadas." },
  { icon: FileText, name: "Excel", desc: "Análisis operativo." },
  { icon: Cog, name: "Power Automate", desc: "Automatización." },
  { icon: Cable, name: "REST APIs", desc: "Integración." },
  { icon: Cloud, name: "Azure", desc: "Servicios Cloud." },
  { icon: GitBranch, name: "Git", desc: "Versionamiento." },
  { icon: BrainCircuit, name: "OpenAI", desc: "Análisis Inteligente." },
  { icon: Bot, name: "UiPath", desc: "Automatización RPA." },
];
const methodologySteps = [
  "Comprensión del proceso de negocio", "Identificación de las fuentes de información",
  "Extracción y limpieza de datos", "Modelado del dato",
  "Creación de medidas DAX", "Diseño del Dashboard",
  "Validación con usuarios", "Implementación y mejora continua",
];

export default function PowerBiPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link>
        <ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack Tecnológico</span>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">Power BI</span>
      </nav>

      {/* HERO */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Business Intelligence</Badge>
            <Badge variant="secondary">Data Analytics</Badge>
            <Badge variant="tertiary">Power BI Developer</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">Power BI</h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">Transformando datos en decisiones inteligentes</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Power BI es la plataforma que utilizo para convertir datos provenientes de múltiples fuentes en información clara, interactiva y orientada a la toma de decisiones. Integrado con SQL, Python, Pandas y procesos automatizados, me permite desarrollar dashboards ejecutivos, indicadores estratégicos y soluciones de Business Intelligence preparadas para organizaciones modernas.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg"><a href="#experience">Ver experiencia<ExternalLink className="size-4" /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/projects">Explorar dashboards<ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#f2c811]/25 via-[#f2c811]/15 to-transparent blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#f2c811]/20 bg-slate-950/60">
            <Image
              src="/stack/powerbi/hero-powerbi.webp"
              alt="Power BI — Business Intelligence & Analytics"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f2c811]/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* STATS CARDS */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{statsCards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f2c811]/50 hover:shadow-[0_0_24px_-8px_rgba(242,200,17,0.4)]">
            <c.icon className="size-8 text-[#f2c811]" /><h3 className="mt-3 font-semibold">{c.title}</h3>
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

      {/* CICLO COMPLETO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">El ciclo completo del dato</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Fuentes de Información", "SQL", "Python", "Pandas", "Power BI", "Dashboards", "Indicadores", "Toma de Decisiones"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#f2c811]/30 bg-[#f2c811]/10 px-4 py-2 font-mono text-sm text-[#f2c811]">{item}</span>
                {i < 7 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Dentro de mi metodología de trabajo, Power BI representa la etapa donde los datos ya transformados y validados se convierten en información útil para apoyar decisiones estratégicas. Cada dashboard es construido sobre datos confiables, procesos automatizados y modelos de información diseñados para responder preguntas de negocio.</p>
        </div>
      </Reveal>

      {/* ¿QUÉ ES POWER BI? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#f2c811] to-transparent" />Plataforma</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué es Power BI?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Power BI es una plataforma de Business Intelligence desarrollada por Microsoft que permite transformar datos provenientes de múltiples fuentes en información clara, visual e interactiva. Más allá de crear gráficos, su verdadero valor consiste en convertir grandes volúmenes de datos en conocimiento útil para apoyar la toma de decisiones estratégicas.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Dentro de mi ecosistema tecnológico utilizo Power BI como la capa de visualización y análisis de la información. Después de extraer, limpiar y transformar los datos mediante SQL, Python y Pandas, desarrollo modelos analíticos y dashboards interactivos que permiten a las organizaciones comprender el comportamiento de sus procesos.</p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#f2c811]/20 via-transparent to-transparent blur-2xl" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/powerbi/powerbi-dashboards.webp"
              alt="Business Intelligence empresarial con Power BI"
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
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">La evolución de Power BI</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-[#f2c811] via-[#3b82f6] to-[#8b5cf6]" />
          {timelineEvents.map((item) => (
            <Reveal key={item.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#f2c811]/40 bg-background font-display text-xs font-bold text-[#f2c811] shadow-[0_0_22px_-6px_#f2c811]">{item.year}</span>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ¿POR QUÉ POWER BI? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{whyPowerBi.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f2c811]/50">
              <item.icon className="size-6 text-[#f2c811]" /><h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}</div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#f2c811] to-transparent" />Importancia</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo Power BI?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Power BI se ha convertido en mi plataforma principal de Business Intelligence por su capacidad para transformar datos en información visual, interactiva y accesible para toda la organización.</p>
        </div>
      </Reveal>

      {/* COMPONENTES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Componentes</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Elementos fundamentales de Power BI</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{coreComponents.map((comp) => (
          <Reveal key={comp.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#f2c811]/50">
              <comp.icon className="size-6 text-[#f2c811]" /><h3 className="mt-2 text-sm font-semibold">{comp.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{comp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ARQUITECTURA BI */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Arquitectura de Business Intelligence</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["ERP", "Excel", "CRM", "APIs", "SQL", "Python", "Pandas", "Power Query", "Modelo de Datos", "Power BI", "Dashboard Ejecutivo", "Toma de Decisiones"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#f2c811]/30 bg-[#f2c811]/10 px-4 py-2 font-mono text-sm text-[#f2c811]">{item}</span>
                {i < 11 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Power BI representa la etapa donde la información procesada se convierte en conocimiento para la organización. Cada dashboard es construido sobre datos previamente validados, automatizados y transformados, garantizando indicadores confiables para la toma de decisiones.</p>
        </div>
      </Reveal>

      {/* DAX */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">DAX</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Análisis avanzado mediante DAX</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{daxFunctions.map((dax) => (
          <Reveal key={dax.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#f2c811]/50">
              <dax.icon className="mx-auto size-6 text-[#f2c811]" /><h3 className="mt-2 text-sm font-semibold">{dax.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{dax.desc}</p>
            </div>
          </Reveal>
        ))}</div>
        <p className="mt-8 text-center leading-relaxed text-muted-foreground">DAX permite construir modelos analíticos dinámicos donde cada indicador responde automáticamente a los filtros aplicados por el usuario, facilitando análisis interactivos y escenarios de negocio.</p>
      </Reveal>

      {/* ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que complemento con Power BI</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{ecosystemCards.map((eco) => (
          <Reveal key={eco.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#f2c811]/50">
              <eco.icon className="mx-auto size-6 text-[#f2c811]" /><h3 className="mt-2 text-sm font-semibold">{eco.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{eco.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* APLICACIONES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Aplicaciones</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Dónde utilizo Power BI?</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{enterpriseApps.map((app) => (
          <Reveal key={app.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f2c811]/50">
              <app.icon className="size-6 text-[#f2c811]" /><h3 className="mt-3 font-semibold">{app.title}</h3>
              <ul className="mt-3 flex flex-col gap-1.5">{app.tags.map((tag) => (
                <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-3.5 shrink-0 text-[#06b6d4]" />{tag}</li>
              ))}</ul>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* EXPERIENCIA */}
      <section id="experience">
        <Reveal className="mt-24">
          <div className="flex flex-col gap-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria profesional</span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi experiencia desarrollando soluciones con Power BI</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Power BI representa la última etapa dentro de mi ecosistema de datos. Después de extraer, transformar y validar la información mediante SQL, Python y Pandas, utilizo Power BI para convertir esos datos en dashboards interactivos, indicadores estratégicos y herramientas que facilitan la toma de decisiones dentro de las organizaciones.</p>
          </div>
        </Reveal>
        {experienceBlocks.map((block) => (
          <Reveal key={block.company} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
              <h3 className="text-xl font-semibold">{block.role}</h3>
              <p className="mt-1 text-[#f2c811]">{block.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{block.indicators.map((ind) => (
                <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                  <p className="font-display text-lg font-bold text-[#f2c811]">{ind.value}</p>
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
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que integro con Power BI</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{integratedTechs.map((tech) => (
          <Reveal key={tech.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#f2c811]/50">
              <tech.icon className="size-6 text-[#f2c811]" /><h3 className="mt-2 font-semibold">{tech.name}</h3>
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
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#f2c811]/40 bg-background font-display text-xs font-bold text-[#f2c811] shadow-[0_0_22px_-6px_#f2c811]">{i + 1}</span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">Cada dashboard que desarrollo parte de la comprensión del negocio antes que del diseño visual. Mi objetivo es construir herramientas que permitan responder preguntas estratégicas, detectar oportunidades y facilitar la toma de decisiones mediante información confiable.</p>
      </Reveal>

      {/* BUENAS PRÁCTICAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Calidad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Buenas prácticas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{bestPractices.map((bp) => (
          <Reveal key={bp.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#f2c811]/50">
              <bp.icon className="mx-auto size-6 text-[#f2c811]" /><h3 className="mt-2 text-sm font-semibold">{bp.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{bp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* CASOS DE USO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Escenarios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Escenarios donde utilizo Power BI</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{useCases.map((uc) => (
          <Reveal key={uc.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f2c811]/50">
              <uc.icon className="size-6 text-[#f2c811]" /><h3 className="mt-3 font-semibold">{uc.title}</h3>
              <ul className="mt-3 flex flex-col gap-1.5">{uc.tags.map((tag) => (
                <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#f2c811]" />{tag}</li>
              ))}</ul>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* INDICADORES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Indicadores</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Indicadores que suelo construir</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{indicators.map((ind) => (
          <Reveal key={ind.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#f2c811]/50">
              <ind.icon className="size-6 text-[#f2c811]" /><h3 className="mt-3 font-semibold">{ind.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{ind.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ¿POR QUÉ? */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#f2c811]/10 via-transparent to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisión</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo Power BI?</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Considero que la información únicamente genera valor cuando puede interpretarse rápidamente y apoyar decisiones de negocio. Power BI me permite transformar grandes volúmenes de datos en paneles intuitivos donde directivos, analistas y equipos operativos pueden comprender el estado de sus procesos en tiempo real.</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Dentro de mi ecosistema tecnológico representa la capa de visualización que conecta ingeniería de datos, automatización e Inteligencia Artificial.</p>
        </div>
      </Reveal>

      {/* ARQUITECTURA COMPLETA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi arquitectura de Business Intelligence</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {["ERP", "CRM", "Excel", "APIs", "SQL", "Python", "Pandas", "Power Query", "Modelo", "Power BI", "Dashboards", "KPIs", "Decisiones", "Automatización", "IA"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i}>
                <div className="rounded-xl border border-[#f2c811]/30 bg-[#f2c811]/10 px-3 py-3 text-center font-mono text-xs text-[#f2c811]">{item}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center leading-relaxed text-muted-foreground">Esta arquitectura representa la forma en que desarrollo soluciones analíticas dentro de las organizaciones. Cada dashboard es el resultado de un proceso donde los datos son extraídos, transformados, validados y enriquecidos antes de convertirse en información estratégica.</p>
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
            { q: "¿Para qué utilizas Power BI?", a: "Utilizo Power BI para convertir datos provenientes de diferentes fuentes en dashboards interactivos e indicadores estratégicos que apoyan la toma de decisiones dentro de las organizaciones." },
            { q: "¿Power BI puede integrarse con SQL?", a: "Sí. SQL constituye una de las principales fuentes de información para los modelos analíticos que desarrollo en Power BI." },
            { q: "¿Qué papel desempeña Python dentro de una solución Power BI?", a: "Python permite automatizar procesos de extracción, limpieza y transformación de datos antes de ser visualizados mediante Power BI, facilitando análisis más completos y confiables." },
            { q: "¿Qué tipo de dashboards desarrollas?", a: "Desarrollo dashboards ejecutivos, operativos, financieros, comerciales y de seguimiento de procesos, adaptados a las necesidades de cada organización." },
            { q: "¿Por qué Power BI forma parte de tu stack tecnológico?", a: "Porque representa la etapa donde los datos se convierten en información útil para el negocio. Integrado con SQL, Python, Pandas, Automatización e Inteligencia Artificial, permite construir soluciones completas orientadas a resultados." },
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
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">Convirtamos los datos en decisiones estratégicas.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Diseño soluciones de Business Intelligence donde los datos son transformados en información clara, confiable y accionable. Mi objetivo es ayudar a las organizaciones a tomar mejores decisiones mediante dashboards interactivos, automatización y analítica avanzada.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg"><a href="mailto:jorge.ramtroz1989@gmail.com">Conversemos sobre su proyecto<ArrowRight /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/stack/sql">Explorar mi Stack Tecnológico<ExternalLink /></Link></Button>
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
            { name: "SQL", href: "/stack/sql", icon: Database, accent: "#3b82f6" },
            { name: "Python", href: "/stack/python", icon: Cpu, accent: "#8b5cf6" },
            { name: "Pandas", href: "/stack/pandas", icon: BarChart3, accent: "#06b6d4" },
            { name: "UiPath", href: "/stack/uipath", icon: Cog, accent: "#3b82f6" },
            { name: "Azure", href: "#", icon: Cloud, accent: "#06b6d4" },
            { name: "Excel", href: "#", icon: FileText, accent: "#f2c811" },
            { name: "OpenAI", href: "#", icon: BrainCircuit, accent: "#8b5cf6" },
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
