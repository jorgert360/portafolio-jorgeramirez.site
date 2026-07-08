import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, FileText, GitBranch, Stethoscope, Factory, Truck, Store, Landmark, ArrowRight, Code, Cable, ChartPie, Globe, Server, Cog, Search, Table2, Filter, Merge, KeyRound, Lock, Activity, ListOrdered, Split, Braces, Eye } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "SQL | Jorge Luis Ramírez | Data Engineering & Automation",
  description:
    "Especialista en SQL para automatización empresarial, ingeniería de datos, análisis de información, Business Intelligence e integración de sistemas.",
  keywords: [
    "SQL", "SQL Developer", "Data Engineering", "Automation",
    "Business Intelligence", "Database", "PostgreSQL", "SQL Server",
    "MySQL", "Data Analysis",
  ],
  alternates: { canonical: "/stack/sql" },
  openGraph: {
    title: "SQL | Jorge Luis Ramírez | Data Engineering & Automation",
    description:
      "Especialista en SQL para automatización empresarial, ingeniería de datos, análisis de información y Business Intelligence.",
    url: "/stack/sql",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
    { "@type": "ListItem", position: 3, name: "SQL", item: `${site.url}/stack/sql` },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  jobTitle: "Data Engineering & Automation",
  description: "Especialista en SQL para automatización empresarial, ingeniería de datos, análisis de información y Business Intelligence.",
  url: site.url,
};

const techArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "SQL — El Lenguaje que Impulsa los Datos Empresariales",
  author: { "@type": "Person", name: site.fullName },
  description: "SQL como tecnología estratégica para automatización empresarial, ingeniería de datos, business intelligence e inteligencia artificial.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Para qué utilizo SQL?", acceptedAnswer: { "@type": "Answer", text: "Utilizo SQL para consultar, transformar, integrar y administrar información almacenada en bases de datos relacionales, permitiendo desarrollar soluciones empresariales orientadas a automatización, analítica e Inteligencia Artificial." } },
    { "@type": "Question", name: "¿SQL puede integrarse con Python?", acceptedAnswer: { "@type": "Answer", text: "Sí. Python complementa SQL permitiendo automatizar consultas, desarrollar procesos ETL, transformar datos y construir aplicaciones empresariales escalables." } },
    { "@type": "Question", name: "¿SQL es importante para Business Intelligence?", acceptedAnswer: { "@type": "Answer", text: "Sí. SQL es la base sobre la cual trabajan la mayoría de herramientas de Business Intelligence, permitiendo consultar información que posteriormente será transformada en dashboards e indicadores estratégicos." } },
    { "@type": "Question", name: "¿SQL puede utilizarse junto con UiPath?", acceptedAnswer: { "@type": "Answer", text: "Sí. La integración entre SQL y UiPath permite desarrollar automatizaciones empresariales capaces de consultar, validar, actualizar y procesar información almacenada en bases de datos." } },
    { "@type": "Question", name: "¿Qué motores de bases de datos utilizo con mayor frecuencia?", acceptedAnswer: { "@type": "Answer", text: "Principalmente SQL Server y PostgreSQL, aunque también trabajo con MySQL y soluciones SQL en la nube dependiendo de la arquitectura de cada organización." } },
  ],
};

const statsCards = [
  { icon: Search, title: "Consultas Inteligentes", description: "Obtención rápida y eficiente de información." },
  { icon: Merge, title: "Integración de Datos", description: "Conexión entre múltiples sistemas empresariales." },
  { icon: Activity, title: "Optimización", description: "Consultas diseñadas para alto rendimiento." },
  { icon: BarChart3, title: "Business Intelligence", description: "Preparación de datos para análisis y toma de decisiones." },
];

const capabilities = [
  "Data Query", "Data Integration", "Database Design", "Performance",
  "Normalization", "Transactions", "Security", "Business Intelligence",
];

const timelineEvents = [
  { year: "1974", text: "IBM desarrolla los primeros conceptos del lenguaje SQL." },
  { year: "1986", text: "SQL es adoptado como estándar ANSI." },
  { year: "1990", text: "Expansión de las bases de datos relacionales." },
  { year: "2000", text: "Consolidación de SQL Server, Oracle y MySQL." },
  { year: "2015", text: "Integración con Big Data, Cloud Computing y Business Intelligence." },
  { year: "Actualidad", text: "SQL continúa siendo la base del almacenamiento de datos para IA, Analítica y Automatización." },
];

const dbEngines = [
  { icon: Server, name: "Microsoft SQL Server", desc: "Bases de datos empresariales de alto rendimiento." },
  { icon: Database, name: "PostgreSQL", desc: "Motor Open Source avanzado." },
  { icon: Database, name: "MySQL", desc: "Aplicaciones web y soluciones empresariales." },
  { icon: Globe, name: "Oracle Database", desc: "Grandes corporaciones." },
  { icon: Cpu, name: "SQLite", desc: "Aplicaciones ligeras y embebidas." },
  { icon: Database, name: "MariaDB", desc: "Alternativa Open Source para aplicaciones modernas." },
  { icon: Cloud, name: "Azure SQL Database", desc: "Base de datos administrada en la nube." },
  { icon: Cloud, name: "Amazon RDS", desc: "Servicios administrados para bases de datos SQL." },
];

const coreComponents = [
  { icon: Table2, name: "Tablas", desc: "Almacenan información estructurada." },
  { icon: Eye, name: "Vistas", desc: "Consultas reutilizables." },
  { icon: ListOrdered, name: "Índices", desc: "Optimización de búsquedas." },
  { icon: Cog, name: "Stored Procedures", desc: "Automatización de lógica de negocio." },
  { icon: Braces, name: "Funciones", desc: "Procesamiento reutilizable." },
  { icon: Activity, name: "Triggers", desc: "Eventos automáticos." },
  { icon: Shield, name: "Transacciones", desc: "Garantizan integridad de los datos." },
  { icon: Lock, name: "Constraints", desc: "Validación de reglas de negocio." },
  { icon: KeyRound, name: "Keys", desc: "Relaciones entre tablas." },
  { icon: Split, name: "Schemas", desc: "Organización de objetos." },
];

const queryTypes = [
  { icon: Search, name: "SELECT", desc: "Consulta de información." },
  { icon: Database, name: "INSERT", desc: "Inserción de registros." },
  { icon: Cog, name: "UPDATE", desc: "Actualización de datos." },
  { icon: Filter, name: "DELETE", desc: "Eliminación controlada." },
  { icon: Merge, name: "JOIN", desc: "Integración entre tablas." },
  { icon: Split, name: "GROUP BY", desc: "Agrupación de información." },
  { icon: ListOrdered, name: "ORDER BY", desc: "Ordenamiento." },
  { icon: Filter, name: "HAVING", desc: "Filtros sobre agrupaciones." },
  { icon: Merge, name: "UNION", desc: "Combinación de resultados." },
  { icon: Braces, name: "WITH (CTE)", desc: "Consultas complejas reutilizables." },
  { icon: BarChart3, name: "Window Functions", desc: "Análisis avanzado." },
  { icon: Search, name: "Subqueries", desc: "Consultas anidadas." },
];

const whyImportant = [
  { icon: Shield, title: "Confiabilidad", desc: "Protección e integridad de datos." },
  { icon: Server, title: "Escalabilidad", desc: "Soporta millones de registros." },
  { icon: Activity, title: "Rendimiento", desc: "Consultas optimizadas." },
  { icon: Lock, title: "Seguridad", desc: "Control de acceso y permisos." },
  { icon: Cable, title: "Integración", desc: "Compatible con cientos de tecnologías." },
  { icon: Globe, title: "Estándar Global", desc: "Utilizado por prácticamente todas las organizaciones." },
];

const integratedTechs = [
  { icon: Code, name: "Python", desc: "Automatización y procesamiento." },
  { icon: BarChart3, name: "Pandas", desc: "Transformación de datos." },
  { icon: ChartPie, name: "Power BI", desc: "Dashboards empresariales." },
  { icon: Bot, name: "UiPath", desc: "Automatización Robótica." },
  { icon: Cloud, name: "Azure SQL", desc: "Bases de datos Cloud." },
  { icon: Database, name: "PostgreSQL", desc: "Motor Open Source." },
  { icon: Server, name: "SQL Server", desc: "Bases de datos empresariales." },
  { icon: Database, name: "MySQL", desc: "Aplicaciones Web." },
  { icon: Globe, name: "FastAPI", desc: "APIs REST." },
  { icon: FileText, name: "Excel", desc: "Importación y Exportación." },
  { icon: GitBranch, name: "Git", desc: "Versionamiento." },
  { icon: Cpu, name: "OpenAI", desc: "Preparación de datos para IA." },
];

const industryApps = [
  { icon: Landmark, title: "Sector Bancario", tags: ["Consultas financieras", "Conciliaciones", "Reportes"] },
  { icon: Factory, title: "Industria Manufacturera", tags: ["Producción", "Inventarios", "Calidad"] },
  { icon: Truck, title: "Sector Logístico", tags: ["Despachos", "Trazabilidad", "Rutas"] },
  { icon: Stethoscope, title: "Sector Salud", tags: ["Historias clínicas", "Indicadores"] },
  { icon: Store, title: "Sector Retail", tags: ["Ventas", "Clientes", "Inventarios"] },
  { icon: Landmark, title: "Sector Gobierno", tags: ["Servicios digitales", "Analítica"] },
];

const optimizationItems = [
  "Uso adecuado de índices", "Optimización de consultas JOIN",
  "Evitar SELECT *", "Uso eficiente de WHERE",
  "Particionamiento", "Estadísticas actualizadas",
  "Planes de ejecución", "Consultas parametrizadas",
];

const methodologySteps = [
  "Análisis del proceso empresarial",
  "Comprensión del modelo de datos",
  "Diseño de consultas SQL",
  "Optimización del rendimiento",
  "Validación de resultados",
  "Integración con APIs y Automatización",
  "Visualización mediante Power BI",
  "Monitoreo y mejora continua",
];

const bestPractices = [
  { icon: Activity, title: "Optimización de Consultas", desc: "Reducir tiempos de respuesta." },
  { icon: ListOrdered, title: "Uso Correcto de Índices", desc: "Mejorar rendimiento." },
  { icon: Table2, title: "Normalización", desc: "Eliminar redundancia." },
  { icon: KeyRound, title: "Integridad Referencial", desc: "Garantizar consistencia." },
  { icon: Lock, title: "Consultas Parametrizadas", desc: "Mayor seguridad." },
  { icon: Shield, title: "Transacciones", desc: "Protección de la información." },
  { icon: Lock, title: "Control de Permisos", desc: "Seguridad empresarial." },
  { icon: Cog, title: "Stored Procedures", desc: "Lógica reutilizable." },
  { icon: FileText, title: "Documentación", desc: "Facilidad de mantenimiento." },
  { icon: GitBranch, title: "Versionamiento", desc: "Gestión mediante Git." },
];

const useCases = [
  { icon: Cog, title: "Automatización Empresarial", tags: ["Extracción de información para robots RPA"] },
  { icon: BarChart3, title: "Business Intelligence", tags: ["Preparación de datos para dashboards"] },
  { icon: Cable, title: "Integración de Sistemas", tags: ["Consolidación de información empresarial"] },
  { icon: Database, title: "Data Engineering", tags: ["Procesamiento y transformación de datos"] },
  { icon: Landmark, title: "Sector Bancario", tags: ["Consultas financieras", "Conciliaciones", "Indicadores"] },
  { icon: Factory, title: "Industria Manufacturera", tags: ["Producción", "Inventarios", "Control de calidad", "Reportes operativos"] },
];

const experienceBlocks = [
  {
    company: "Industria Manufacturera",
    role: "Analista de Automatización de Procesos",
    content: "En proyectos desarrollados para el sector manufacturero participé en la construcción de soluciones donde SQL desempeñó un papel fundamental para acceder, validar y transformar grandes volúmenes de información provenientes de diferentes sistemas corporativos. Diseñé consultas optimizadas para automatizar procesos de extracción de datos, validar información utilizada por robots RPA y consolidar datos provenientes de múltiples fuentes antes de ser procesados mediante Python y Pandas. También participé en la optimización de consultas complejas reduciendo tiempos de ejecución y mejorando significativamente el rendimiento de procesos empresariales críticos. La integración entre SQL, Python y UiPath permitió construir procesos ETL completamente automatizados que aumentaron la calidad de la información utilizada por las diferentes áreas de negocio.",
    indicators: [
      { value: "Optimización SQL", label: "" },
      { value: "Automatización ETL", label: "" },
      { value: "Integración Python + SQL", label: "" },
      { value: "Integración UiPath", label: "" },
      { value: "Business Intelligence", label: "Procesamiento Masivo" },
    ],
  },
  {
    company: "Sector Bancario",
    role: "Automation Engineer",
    content: "Durante mi experiencia en el sector financiero utilicé SQL para consultar información proveniente de diferentes plataformas empresariales y soportar automatizaciones desarrolladas sobre arquitecturas RPA. Implementé consultas para validar información transaccional, consolidar registros, preparar datos utilizados por automatizaciones y alimentar procesos analíticos utilizados por distintas áreas del negocio. SQL fue utilizado como punto central de integración entre bases de datos, APIs empresariales, robots RPA y plataformas de Business Intelligence, garantizando consistencia, trazabilidad y disponibilidad de la información. La correcta optimización de consultas permitió reducir tiempos de procesamiento y mejorar la eficiencia de procesos que manejaban miles de registros diariamente.",
    indicators: [
      { value: "Consultas Avanzadas", label: "" },
      { value: "Procesamiento Bancario", label: "" },
      { value: "Optimización", label: "" },
      { value: "Integración Empresarial", label: "" },
      { value: "Alta Disponibilidad", label: "Calidad de Datos" },
    ],
  },
];

export default function SqlPage() {
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
        <span className="truncate text-foreground">SQL</span>
      </nav>

      {/* ===== HERO ===== */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Database Developer</Badge>
            <Badge variant="secondary">Automation Engineer</Badge>
            <Badge variant="tertiary">Data Engineering</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            SQL
          </h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            The Foundation of Business Data
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            SQL es una de las tecnologías fundamentales dentro de mi ecosistema de desarrollo. Lo utilizo para consultar, transformar y administrar información proveniente de diferentes sistemas empresariales, permitiendo construir soluciones escalables que integran automatización, analítica de datos e Inteligencia Artificial.
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
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#3b82f6]/25 via-[#06b6d4]/20 to-[#8b5cf6]/20 blur-2xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#3b82f6]/20 bg-slate-950/60">
            <Image
              src="/stack/sql/hero-sql.webp"
              alt="SQL — Data Engineering & Business Intelligence"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#3b82f6]/10 to-transparent" />
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

      {/* ===== CAPACIDADES ===== */}
      <Reveal className="mt-16">
        <div className="flex flex-wrap justify-center gap-2">
          {capabilities.map((cap) => (
            <Badge key={cap} variant="outline" className="text-xs">{cap}</Badge>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿QUÉ ES SQL? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#3b82f6] to-transparent" />
            Lenguaje
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Qué es SQL?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            SQL (Structured Query Language) es el lenguaje estándar utilizado para consultar, administrar y manipular bases de datos relacionales. Durante más de cuatro décadas ha sido una de las tecnologías más importantes para el almacenamiento y gestión de información empresarial.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            En mi experiencia profesional utilizo SQL como una herramienta estratégica para consultar información, integrar sistemas, construir procesos automatizados y preparar datos que posteriormente son utilizados por soluciones de Inteligencia Artificial, Business Intelligence y Automatización Robótica de Procesos.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            SQL permite trabajar con grandes volúmenes de información de manera segura, eficiente y escalable, siendo una tecnología indispensable en sectores como banca, manufactura, logística, salud, gobierno y comercio.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#3b82f6]/20 via-[#06b6d4]/15 to-transparent blur-2xl" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/sql/sql-queries.webp"
              alt="Bases de datos empresariales con SQL"
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
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Historia</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">La evolución de SQL</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6]" />
          {timelineEvents.map((item) => (
            <Reveal key={item.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#3b82f6]/40 bg-background font-display text-xs font-bold text-[#3b82f6] shadow-[0_0_22px_-6px_#3b82f6]">
                {item.year}
              </span>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== MOTORES DE BD ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Plataformas</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Principales plataformas compatibles con SQL</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dbEngines.map((db) => (
            <Reveal key={db.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_0_24px_-8px_rgba(59,130,246,0.4)]">
                <db.icon className="size-6 text-[#3b82f6]" />
                <h3 className="mt-3 font-semibold">{db.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{db.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== COMPONENTES ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Estructura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Elementos principales de una base de datos relacional</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {coreComponents.map((comp) => (
            <Reveal key={comp.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#3b82f6]/50">
                <comp.icon className="mx-auto size-6 text-[#3b82f6]" />
                <h3 className="mt-2 text-sm font-semibold">{comp.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{comp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== CONSULTAS ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Operaciones</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Consultas SQL más utilizadas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {queryTypes.map((qt) => (
            <Reveal key={qt.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#3b82f6]/50">
                <qt.icon className="size-6 text-[#3b82f6]" />
                <h3 className="mt-2 text-sm font-semibold">{qt.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{qt.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== NORMALIZACIÓN ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Diseño</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Diseño eficiente de bases de datos</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-2/40 p-6">
            <h3 className="font-semibold text-[#3b82f6]">Primera Forma Normal (1FN)</h3>
            <p className="mt-2 text-sm text-muted-foreground">Elimina grupos repetitivos y garantiza atomicidad de los datos. Cada columna contiene un único valor por registro.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-2/40 p-6">
            <h3 className="font-semibold text-[#3b82f6]">Segunda Forma Normal (2FN)</h3>
            <p className="mt-2 text-sm text-muted-foreground">Elimina dependencias parciales. Cada columna no clave depende completamente de la clave primaria.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-2/40 p-6">
            <h3 className="font-semibold text-[#3b82f6]">Tercera Forma Normal (3FN)</h3>
            <p className="mt-2 text-sm text-muted-foreground">Elimina dependencias transitivas. Las columnas no clave dependen únicamente de la clave primaria.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-2/40 p-6">
            <h3 className="font-semibold text-[#3b82f6]">Desnormalización</h3>
            <p className="mt-2 text-sm text-muted-foreground">Aplicada estratégicamente para optimizar rendimiento en consultas complejas o procesos de Business Intelligence.</p>
          </div>
        </div>
      </Reveal>

      {/* ===== ARQUITECTURA ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Infraestructura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Arquitectura de una solución basada en SQL</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Aplicación Web", "API REST", "SQL Server", "Procedimientos", "Consultas", "Datos", "Power BI", "Dashboard", "Usuarios"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-4 py-2 font-mono text-sm text-[#3b82f6]">{item}</span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">
            SQL representa el núcleo de almacenamiento y consulta de información dentro de muchas arquitecturas empresariales. Permite integrar aplicaciones, automatizar procesos y suministrar datos confiables para plataformas analíticas y modelos de Inteligencia Artificial.
          </p>
        </div>
      </Reveal>

      {/* ===== ¿POR QUÉ ES IMPORTANTE? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyImportant.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#3b82f6]/50">
                <item.icon className="size-6 text-[#3b82f6]" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#3b82f6] to-transparent" />Importancia
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué SQL continúa siendo tan importante?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A pesar de la evolución tecnológica, SQL sigue siendo el lenguaje estándar para gestionar datos estructurados. Su confiabilidad, rendimiento y universalidad lo convierten en una habilidad fundamental en cualquier perfil tecnológico.
          </p>
        </div>
      </Reveal>

      {/* ===== INTEGRACIÓN ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">SQL como centro de integración empresarial</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {integratedTechs.map((tech) => (
            <Reveal key={tech.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_0_20px_-8px_rgba(59,130,246,0.4)]">
                <tech.icon className="size-6 text-[#3b82f6]" />
                <h3 className="mt-2 font-semibold">{tech.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tech.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== APLICACIONES EMPRESARIALES ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Aplicaciones</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Cómo utilizan las empresas SQL?</h2>
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
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#06b6d4]" />{tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== OPTIMIZACIÓN ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Rendimiento</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Optimización del rendimiento</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {optimizationItems.map((opt) => (
            <Badge key={opt} variant="primary" className="text-xs sm:text-sm">{opt}</Badge>
          ))}
        </div>
      </Reveal>

      {/* ===== MI EXPERIENCIA ===== */}
      <section id="experience">
        <Reveal className="mt-24">
          <div className="flex flex-col gap-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria profesional</span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi experiencia utilizando SQL en proyectos empresariales</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              SQL representa uno de los pilares fundamentales dentro de mi ecosistema tecnológico. Lo utilizo para consultar, transformar, integrar y administrar información crítica proveniente de múltiples sistemas empresariales, permitiendo construir soluciones robustas orientadas a Automatización, Ciencia de Datos, Business Intelligence e Inteligencia Artificial.
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
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que integro con SQL</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {integratedTechs.slice(0, 8).map((tech) => (
            <Reveal key={tech.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_0_20px_-8px_rgba(59,130,246,0.4)]">
                <tech.icon className="size-6 text-[#3b82f6]" />
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
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proceso</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi metodología de desarrollo</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          {methodologySteps.map((step, i) => (
            <Reveal key={step} delay={0.05 * i} className="relative pl-16 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#3b82f6]/40 bg-background font-display text-xs font-bold text-[#3b82f6] shadow-[0_0_22px_-6px_#3b82f6]">{i + 1}</span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">
          Antes de desarrollar cualquier solución analizo la estructura de los datos y el flujo completo de información. Esto me permite diseñar consultas eficientes, garantizar la calidad de los datos y construir soluciones escalables que posteriormente pueden integrarse con Automatización Robótica de Procesos, Inteligencia Artificial y plataformas analíticas.
        </p>
      </Reveal>

      {/* ===== BUENAS PRÁCTICAS ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Calidad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Buenas prácticas</h2>
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
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Escenarios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Escenarios donde utilizo SQL</h2>
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
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#06b6d4]" />{tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿POR QUÉ SQL? ===== */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#3b82f6]/10 via-[#06b6d4]/5 to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisión</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo SQL?</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Considero que la calidad de una solución tecnológica depende directamente de la calidad de la información sobre la cual trabaja. SQL me permite acceder a esa información de manera eficiente, transformarla en conocimiento y convertirla en el punto de partida para automatizaciones inteligentes, plataformas analíticas y modelos de Inteligencia Artificial.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Dentro de mi ecosistema tecnológico SQL representa el centro de integración entre aplicaciones empresariales, automatización, procesamiento de datos y Business Intelligence.
          </p>
        </div>
      </Reveal>

      {/* ===== DIAGRAMA INTEGRACIÓN ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Integración</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Cómo se integra SQL dentro de mi ecosistema?</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Aplicaciones Empresariales", "SQL", "Consultas", "Python", "Pandas", "Power BI", "Dashboards", "UiPath", "Automatización", "Modelos de Inteligencia Artificial"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-4 py-2 font-mono text-sm text-[#3b82f6]">{item}</span>
                {i < 9 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">
            SQL constituye el núcleo de almacenamiento y consulta de información dentro de mi arquitectura tecnológica. A partir de datos correctamente estructurados puedo desarrollar automatizaciones, construir modelos analíticos, alimentar algoritmos de Inteligencia Artificial y generar indicadores estratégicos para la toma de decisiones.
          </p>
        </div>
      </Reveal>

      {/* ===== FAQ ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Preguntas frecuentes</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">FAQ</h2>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {[
            { q: "¿Para qué utilizo SQL?", a: "Utilizo SQL para consultar, transformar, integrar y administrar información almacenada en bases de datos relacionales, permitiendo desarrollar soluciones empresariales orientadas a automatización, analítica e Inteligencia Artificial." },
            { q: "¿SQL puede integrarse con Python?", a: "Sí. Python complementa SQL permitiendo automatizar consultas, desarrollar procesos ETL, transformar datos y construir aplicaciones empresariales escalables." },
            { q: "¿SQL es importante para Business Intelligence?", a: "Sí. SQL es la base sobre la cual trabajan la mayoría de herramientas de Business Intelligence, permitiendo consultar información que posteriormente será transformada en dashboards e indicadores estratégicos." },
            { q: "¿SQL puede utilizarse junto con UiPath?", a: "Sí. La integración entre SQL y UiPath permite desarrollar automatizaciones empresariales capaces de consultar, validar, actualizar y procesar información almacenada en bases de datos." },
            { q: "¿Qué motores de bases de datos utilizo con mayor frecuencia?", a: "Principalmente SQL Server y PostgreSQL, aunque también trabajo con MySQL y soluciones SQL en la nube dependiendo de la arquitectura tecnológica de cada organización." },
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
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">Los datos son el punto de partida para la transformación digital.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Utilizo SQL para construir soluciones empresariales donde la información se convierte en un activo estratégico. Mi objetivo es desarrollar arquitecturas de datos preparadas para automatización, Business Intelligence e Inteligencia Artificial, generando valor mediante información confiable y procesos eficientes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <a href="mailto:jorge.ramtroz1989@gmail.com">
                Hablemos sobre su proyecto
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/stack/pandas">
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
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Navegación</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías relacionadas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { name: "Python", href: "/stack/python", icon: Code, accent: "#8b5cf6" },
            { name: "Pandas", href: "/stack/pandas", icon: BarChart3, accent: "#06b6d4" },
            { name: "Power BI", href: "#", icon: ChartPie, accent: "#8b5cf6" },
            { name: "UiPath", href: "/stack/uipath", icon: Bot, accent: "#3b82f6" },
            { name: "Azure", href: "#", icon: Cloud, accent: "#06b6d4" },
            { name: "PostgreSQL", href: "#", icon: Database, accent: "#3b82f6" },
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
