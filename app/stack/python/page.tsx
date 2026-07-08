import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, Layers, Workflow, FileText, Settings, GitBranch, Stethoscope, Factory, Truck, Store, Landmark, ArrowRight, Code, Cable, ChartPie, Globe, Server, BrainCircuit, Eye, Search, Cog, Sparkles, Bug } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Python | Jorge Luis Ramírez | Automation Engineer & AI Developer",
  description:
    "Especialista en desarrollo con Python para Automatización Empresarial, Ciencia de Datos, Inteligencia Artificial, Integración de APIs y soluciones escalables orientadas al negocio.",
  keywords: [
    "Python",
    "Python Developer",
    "Automation",
    "Data Science",
    "Artificial Intelligence",
    "Pandas",
    "NumPy",
    "REST API",
    "Machine Learning",
    "Automation Engineer",
  ],
  alternates: { canonical: "/stack/python" },
  openGraph: {
    title: "Python | Jorge Luis Ramírez | Automation Engineer & AI Developer",
    description:
      "Especialista en desarrollo con Python para Automatización Empresarial, Ciencia de Datos e Inteligencia Artificial.",
    url: "/stack/python",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Stack", item: `${site.url}/stack` },
    { "@type": "ListItem", position: 3, name: "Python", item: `${site.url}/stack/python` },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  jobTitle: "Automation Engineer & AI Developer",
  description: "Especialista en desarrollo con Python para Automatización Empresarial, Ciencia de Datos e Inteligencia Artificial.",
  url: site.url,
};

const techArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Python — Automatización, Datos, Inteligencia Artificial e Integración Empresarial",
  author: { "@type": "Person", name: site.fullName },
  description: "Python como herramienta estratégica para automatización empresarial, ciencia de datos, inteligencia artificial e integración de sistemas.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Para qué utilizo Python?",
      acceptedAnswer: { "@type": "Answer", text: "Lo utilizo para automatización empresarial, desarrollo backend, análisis de datos, Inteligencia Artificial, integración de APIs y procesamiento masivo de información." },
    },
    {
      "@type": "Question",
      name: "¿Python puede integrarse con UiPath?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. Python complementa perfectamente las automatizaciones RPA permitiendo ejecutar procesos avanzados de análisis de datos, Machine Learning, OCR y comunicación con servicios externos." },
    },
    {
      "@type": "Question",
      name: "¿Python sirve para Inteligencia Artificial?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. Actualmente es el lenguaje líder para desarrollar modelos de Machine Learning, Deep Learning, IA Generativa y Ciencia de Datos." },
    },
    {
      "@type": "Question",
      name: "¿Qué ventajas ofrece Python frente a otros lenguajes?",
      acceptedAnswer: { "@type": "Answer", text: "Su facilidad de desarrollo, enorme ecosistema de librerías, escalabilidad y capacidad para integrarse con prácticamente cualquier plataforma tecnológica." },
    },
    {
      "@type": "Question",
      name: "¿En qué industrias puede utilizarse Python?",
      acceptedAnswer: { "@type": "Answer", text: "Banca, manufactura, logística, salud, retail, telecomunicaciones, gobierno, educación, energía y cualquier organización que requiera automatizar procesos o analizar grandes volúmenes de información." },
    },
  ],
};

const statsCards = [
  { icon: Cog, title: "Automatización", description: "Desarrollo de scripts para automatizar procesos empresariales." },
  { icon: BarChart3, title: "Data Science", description: "Procesamiento y análisis de grandes volúmenes de datos." },
  { icon: BrainCircuit, title: "Artificial Intelligence", description: "Integración con modelos de IA y Machine Learning." },
  { icon: Server, title: "Backend & APIs", description: "Desarrollo de servicios escalables e integración entre plataformas." },
];

const ecosystemCards = [
  { icon: BarChart3, name: "Pandas", desc: "Manipulación y análisis eficiente de datos estructurados." },
  { icon: Cpu, name: "NumPy", desc: "Computación numérica de alto rendimiento." },
  { icon: ChartPie, name: "Matplotlib", desc: "Visualización profesional de datos." },
  { icon: BrainCircuit, name: "Scikit-learn", desc: "Machine Learning clásico." },
  { icon: Layers, name: "TensorFlow", desc: "Modelos de IA y Deep Learning." },
  { icon: Cable, name: "FastAPI", desc: "Desarrollo de APIs modernas de alto rendimiento." },
  { icon: Globe, name: "Flask", desc: "Aplicaciones web ligeras y servicios REST." },
  { icon: Eye, name: "OpenCV", desc: "Procesamiento de imágenes y visión artificial." },
  { icon: Search, name: "BeautifulSoup", desc: "Extracción inteligente de información desde sitios web." },
  { icon: Bug, name: "Selenium", desc: "Automatización de navegadores web." },
  { icon: Cable, name: "Requests", desc: "Integración con APIs REST y servicios externos." },
  { icon: Database, name: "SQLAlchemy", desc: "Conexión y administración de bases de datos." },
];

const whyEnterprise = [
  { icon: Sparkles, title: "Desarrollo Rápido", desc: "Reduce tiempos de implementación." },
  { icon: BarChart3, title: "Escalabilidad", desc: "Permite crecer sin rediseñar toda la solución." },
  { icon: Cable, title: "Integración", desc: "Compatible con miles de librerías y plataformas." },
  { icon: Globe, title: "Comunidad Global", desc: "Uno de los ecosistemas tecnológicos más grandes del mundo." },
  { icon: Layers, title: "Versatilidad", desc: "IA, automatización, datos, backend, cloud y scripting." },
  { icon: Workflow, title: "Productividad", desc: "Soluciones complejas con menos código." },
];

const industryApps = [
  { icon: Landmark, title: "Sector Bancario", tags: ["Análisis financiero", "Automatización", "Fraude", "Scoring"] },
  { icon: Factory, title: "Industria Manufacturera", tags: ["Producción", "Calidad", "Predicción", "Inventarios"] },
  { icon: Truck, title: "Sector Logístico", tags: ["Optimización de rutas", "Procesamiento documental", "Analítica"] },
  { icon: Stethoscope, title: "Sector Salud", tags: ["Predicción clínica", "Procesamiento de datos", "IA"] },
  { icon: Store, title: "Sector Retail", tags: ["Recomendadores", "Inventarios", "Ventas"] },
  { icon: Landmark, title: "Gobierno", tags: ["Analítica", "Procesamiento masivo", "Servicios digitales"] },
];

const methodologySteps = [
  "Comprensión del problema de negocio.",
  "Diseño de la solución.",
  "Modelado de datos.",
  "Desarrollo en Python.",
  "Integración con APIs y sistemas.",
  "Pruebas automatizadas.",
  "Despliegue.",
  "Optimización continua.",
];

const bestPractices = [
  { icon: Code, title: "Código limpio", desc: "Funciones reutilizables." },
  { icon: Layers, title: "Programación Modular", desc: "Separación de responsabilidades." },
  { icon: Check, title: "PEP8", desc: "Buenas prácticas oficiales de Python." },
  { icon: Shield, title: "Manejo de Excepciones", desc: "Procesos robustos." },
  { icon: FileText, title: "Logging", desc: "Trazabilidad." },
  { icon: Settings, title: "Virtual Environments", desc: "Aislamiento de dependencias." },
  { icon: GitBranch, title: "Git", desc: "Control de versiones." },
  { icon: Cable, title: "APIs REST", desc: "Arquitecturas desacopladas." },
  { icon: Cpu, title: "Optimización", desc: "Código eficiente." },
  { icon: FileText, title: "Documentación", desc: "Proyectos mantenibles." },
];

const useCases = [
  { icon: Cog, title: "Automatización Empresarial", tags: ["Procesamiento masivo", "Integración entre plataformas", "Validaciones automáticas"] },
  { icon: BarChart3, title: "Ciencia de Datos", tags: ["Limpieza", "Transformación", "Modelado", "Visualización"] },
  { icon: BrainCircuit, title: "Inteligencia Artificial", tags: ["Modelos predictivos", "IA Generativa", "Procesamiento inteligente"] },
  { icon: Server, title: "Backend", tags: ["Servicios REST", "Microservicios", "Integraciones"] },
  { icon: Bot, title: "Automatización RPA", tags: ["Complemento para UiPath", "Scripts inteligentes"] },
  { icon: Database, title: "ERP", tags: ["Integración con bases de datos"] },
  { icon: Cloud, title: "Servicios Cloud", tags: ["Azure", "APIs", "Automatización"] },
];

const experienceBlocks = [
  {
    company: "Industria Papelera",
    role: "Analista de Automatización de Procesos",
    content: "Dentro del sector manufacturero participé en el diseño e implementación de soluciones inteligentes orientadas a mejorar la eficiencia operativa mediante Python. Desarrollé scripts especializados para procesar grandes volúmenes de información utilizando Pandas, automatizando validaciones, transformaciones y cargas masivas de datos que anteriormente eran ejecutadas de forma manual. Python fue integrado con UiPath y Bizagi para crear procesos completamente automatizados, permitiendo que diferentes sistemas intercambiaran información de forma segura y confiable. Estas soluciones redujeron significativamente los tiempos de procesamiento, eliminaron errores derivados de la digitación manual y permitieron liberar recursos humanos para actividades de análisis y mejora continua.",
    indicators: [
      { value: "Procesamiento inteligente de datos", label: "" },
      { value: "Integración Python + UiPath", label: "" },
      { value: "Automatización empresarial", label: "" },
      { value: "Transformación de datos", label: "" },
      { value: "Validación automática", label: "Optimización de procesos" },
    ],
  },
  {
    company: "Sector Bancario",
    role: "Automation Engineer",
    content: "Durante mi experiencia en el sector financiero utilicé Python como complemento para automatizaciones desarrolladas en UiPath. Desarrollé componentes reutilizables para validar información, transformar estructuras de datos y ejecutar procesos especializados que requerían mayor flexibilidad que una automatización tradicional. Python permitió integrar servicios externos mediante APIs REST, manipular archivos complejos, procesar información estructurada y complementar arquitecturas RPA bajo estándares empresariales. Gracias a esta integración fue posible desarrollar automatizaciones más robustas, escalables y fáciles de mantener en ambientes de alta transaccionalidad.",
    indicators: [
      { value: "Integración con APIs", label: "" },
      { value: "Procesamiento avanzado", label: "" },
      { value: "Automatización bancaria", label: "" },
      { value: "Python + RPA", label: "" },
      { value: "Arquitectura empresarial", label: "Alta disponibilidad" },
    ],
  },
];

const integratedTechs = [
  { icon: BarChart3, name: "Pandas", desc: "Manipulación y análisis de datos." },
  { icon: Cpu, name: "NumPy", desc: "Procesamiento numérico." },
  { icon: Bot, name: "UiPath", desc: "Automatización Robótica de Procesos." },
  { icon: Database, name: "SQL", desc: "Bases de datos relacionales." },
  { icon: ChartPie, name: "Power BI", desc: "Visualización de indicadores." },
  { icon: Cable, name: "REST APIs", desc: "Integración entre aplicaciones." },
  { icon: Cloud, name: "Azure", desc: "Servicios Cloud." },
  { icon: GitBranch, name: "Git", desc: "Control de versiones." },
  { icon: BrainCircuit, name: "OpenAI", desc: "Modelos de Inteligencia Artificial." },
  { icon: Globe, name: "FastAPI", desc: "Servicios REST modernos." },
  { icon: FileText, name: "Excel", desc: "Automatización documental." },
];

const indicators = [
  "Interpretado", "Multiplataforma", "Escalable", "Open Source",
  "Orientado a Objetos", "Multiparadigma", "Gran Ecosistema", "Alta Integración",
];

const timelineEvents = [
  { year: "1991", text: "Publicación oficial de Python por Guido van Rossum." },
  { year: "2000", text: "Lanzamiento de Python 2 y crecimiento de la comunidad." },
  { year: "2008", text: "Nacimiento de Python 3 con mejoras en rendimiento y estructura." },
  { year: "2015", text: "Explosión del uso de Python en Ciencia de Datos y Machine Learning." },
  { year: "2020", text: "Consolidación como lenguaje líder para IA, Automatización y Cloud Computing." },
  { year: "Actualidad", text: "Python impulsa soluciones de IA Generativa, Automatización Empresarial, Ciencia de Datos, APIs, Ciberseguridad y Computación Científica." },
];

export default function PythonPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />

      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack</span>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">Python</span>
      </nav>

      {/* ===== HERO ===== */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Python Developer</Badge>
            <Badge variant="secondary">Automation Engineer</Badge>
            <Badge variant="tertiary">AI Integration</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Python
          </h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            The Language Behind Automation, Data &amp; Artificial Intelligence
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Python es el lenguaje que utilizo para desarrollar soluciones inteligentes que integran automatización de procesos, análisis de datos, Inteligencia Artificial y desarrollo backend. Su flexibilidad me permite construir aplicaciones escalables, integrar plataformas empresariales y acelerar la transformación digital de las organizaciones.
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
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#8b5cf6]/25 via-[#3b82f6]/20 to-[#06b6d4]/20 blur-2xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#8b5cf6]/20 bg-slate-950/60">
            <Image
              src="/stack/python/hero-python.webp"
              alt="Python — Automation, Data & Artificial Intelligence"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#8b5cf6]/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* ===== STATS CARDS ===== */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {statsCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.5)]"
            >
              <card.icon className="size-8 text-[#8b5cf6]" />
              <h3 className="mt-3 font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ===== INDICADORES ===== */}
      <Reveal className="mt-16">
        <div className="flex flex-wrap justify-center gap-2">
          {indicators.map((ind) => (
            <Badge key={ind} variant="outline" className="text-xs">
              {ind}
            </Badge>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿QUÉ ES PYTHON? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#8b5cf6] to-transparent" />
            Lenguaje
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Qué es Python?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Python es un lenguaje de programación de alto nivel, interpretado y multiparadigma, reconocido mundialmente por su simplicidad, legibilidad y enorme ecosistema de librerías.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Gracias a su versatilidad, se ha convertido en uno de los pilares tecnológicos para el desarrollo de aplicaciones empresariales, automatización de procesos, inteligencia artificial, análisis de datos, desarrollo web y computación en la nube.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Su sintaxis clara permite desarrollar soluciones robustas en menos tiempo, reduciendo la complejidad del código y facilitando el mantenimiento de proyectos de cualquier tamaño. Actualmente es utilizado por millones de desarrolladores y empresas para construir aplicaciones escalables, automatizar procesos críticos y desarrollar soluciones basadas en Inteligencia Artificial.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#8b5cf6]/20 via-[#3b82f6]/15 to-transparent blur-2xl"
          />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/python/python-concepts.webp"
              alt="Python para soluciones empresariales"
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
            ¿Por qué Python es uno de los lenguajes más utilizados del mundo?
          </h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4]" />
          {timelineEvents.map((item) => (
            <Reveal key={item.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#8b5cf6]/40 bg-background font-display text-xs font-bold text-[#8b5cf6] shadow-[0_0_22px_-6px_#8b5cf6]">
                {item.year}
              </span>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== ECOSISTEMA ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ecosistema
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Un ecosistema preparado para cualquier desafío tecnológico
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemCards.map((lib) => (
            <Reveal key={lib.name} delay={0.03}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.4)]">
                <lib.icon className="size-6 text-[#8b5cf6]" />
                <h3 className="mt-3 font-semibold">{lib.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{lib.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ===== ¿POR QUÉ PYTHON EN MIS PROYECTOS? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#3b82f6]/20 via-[#8b5cf6]/15 to-transparent blur-2xl"
            />
            <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-surface-2/40">
              {/* TODO(jorge): Insertar ilustración Python conectado con tecnologías */}
              <div className="flex flex-col items-center gap-3 p-8 text-center">
                <Cpu className="size-16 text-[#3b82f6]" />
                <p className="text-sm text-muted-foreground">Python como núcleo de integración</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-[#3b82f6] to-transparent" />
            Integración
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Python como núcleo de mis soluciones tecnológicas
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Python es la tecnología que conecta la mayoría de mis proyectos. Gracias a su enorme ecosistema puedo integrar automatización robótica de procesos, Inteligencia Artificial, análisis de datos, APIs, procesamiento documental y aplicaciones empresariales dentro de una misma solución.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Su capacidad para interactuar con plataformas como UiPath, Power BI, Azure, SAP, SQL Server, PostgreSQL y servicios REST permite desarrollar arquitecturas flexibles y escalables adaptadas a diferentes sectores industriales.
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
            ¿Cómo utilizan las empresas Python?
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryApps.map((app) => (
            <Reveal key={app.title} delay={0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#06b6d4]/50">
                <app.icon className="size-6 text-[#06b6d4]" />
                <h3 className="mt-3 font-semibold">{app.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {app.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-[11px]">{tag}</Badge>
                  ))}
                </div>
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
            Arquitectura de una solución desarrollada con Python
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Usuario", "Frontend", "API REST", "Python", "Procesamiento", "Base de Datos", "Servicios Cloud", "Machine Learning", "Dashboard Power BI"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 font-mono text-sm text-[#8b5cf6]">
                  {item}
                </span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">
            Python permite construir arquitecturas modulares capaces de integrar múltiples tecnologías dentro de un mismo flujo de trabajo, facilitando el desarrollo de soluciones escalables y mantenibles.
          </p>
        </div>
      </Reveal>

      {/* ===== ¿POR QUÉ LAS EMPRESAS ELIGEN PYTHON? ===== */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyEnterprise.map((item) => (
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
            Ventajas
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Por qué las empresas eligen Python?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Python se ha convertido en el lenguaje preferido por organizaciones de todos los sectores gracias a su equilibrio entre productividad, rendimiento y facilidad de adopción.
          </p>
        </div>
      </Reveal>

      {/* ===== SECTORES ===== */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Sectores
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            Sectores donde Python genera valor
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
              Mi experiencia desarrollando soluciones con Python
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Python es una de las tecnologías más importantes dentro de mi perfil profesional. Lo utilizo para construir soluciones empresariales capaces de automatizar procesos, analizar información, integrar plataformas y potenciar proyectos de Inteligencia Artificial.
            </p>
          </div>
        </Reveal>

        {experienceBlocks.map((block) => (
          <Reveal key={block.company} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
              <h3 className="text-xl font-semibold">{block.role}</h3>
              <p className="mt-1 text-[#8b5cf6]">{block.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {block.indicators.map((ind) => (
                  <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                    <p className="font-display text-lg font-bold text-[#8b5cf6]">{ind.value}</p>
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
            Tecnologías que integro con Python
          </h2>
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
          Mi enfoque de desarrollo busca construir soluciones mantenibles, escalables y orientadas al negocio. Antes de escribir una sola línea de código analizo el proceso, identifico oportunidades de optimización y posteriormente implemento soluciones que puedan evolucionar con el crecimiento de la organización.
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
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#8b5cf6]/50">
                <bp.icon className="mx-auto size-6 text-[#8b5cf6]" />
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
            Escenarios donde utilizo Python
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <Reveal key={uc.title} delay={0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.4)]">
                <uc.icon className="size-6 text-[#8b5cf6]" />
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

      {/* ===== ¿POR QUÉ PYTHON? ===== */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#8b5cf6]/10 via-[#3b82f6]/5 to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Decisión
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            ¿Por qué utilizo Python?
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Python es mucho más que un lenguaje de programación. Representa la base tecnológica que utilizo para conectar automatización, análisis de datos, Inteligencia Artificial e integración de sistemas dentro de una misma solución.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Su enorme ecosistema me permite desarrollar aplicaciones escalables, automatizar procesos complejos y construir arquitecturas flexibles adaptadas a diferentes industrias.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Cada proyecto desarrollado con Python está orientado a resolver problemas reales del negocio mediante soluciones eficientes, mantenibles y preparadas para evolucionar.
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
            { q: "¿Para qué utilizo Python?", a: "Lo utilizo para automatización empresarial, desarrollo backend, análisis de datos, Inteligencia Artificial, integración de APIs y procesamiento masivo de información." },
            { q: "¿Python puede integrarse con UiPath?", a: "Sí. Python complementa perfectamente las automatizaciones RPA permitiendo ejecutar procesos avanzados de análisis de datos, Machine Learning, OCR y comunicación con servicios externos." },
            { q: "¿Python sirve para Inteligencia Artificial?", a: "Sí. Actualmente es el lenguaje líder para desarrollar modelos de Machine Learning, Deep Learning, IA Generativa y Ciencia de Datos." },
            { q: "¿Qué ventajas ofrece Python frente a otros lenguajes?", a: "Su facilidad de desarrollo, enorme ecosistema de librerías, escalabilidad y capacidad para integrarse con prácticamente cualquier plataforma tecnológica." },
            { q: "¿En qué industrias puede utilizarse Python?", a: "Banca, manufactura, logística, salud, retail, telecomunicaciones, gobierno, educación, energía y cualquier organización que requiera automatizar procesos o analizar grandes volúmenes de información." },
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
            ¿Busca desarrollar soluciones inteligentes con Python?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Diseño soluciones empresariales utilizando Python para automatización, Inteligencia Artificial, Ciencia de Datos e integración de sistemas, construyendo arquitecturas escalables enfocadas en generar resultados reales para las organizaciones.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <a href="mailto:jorge.ramtroz1989@gmail.com">
                Conversemos sobre su proyecto
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/stack/uipath">
                Ver tecnologías relacionadas
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
            { name: "Pandas", href: "#", icon: BarChart3, accent: "#8b5cf6" },
            { name: "NumPy", href: "#", icon: Cpu, accent: "#06b6d4" },
            { name: "SQL", href: "#", icon: Database, accent: "#3b82f6" },
            { name: "Power BI", href: "#", icon: ChartPie, accent: "#8b5cf6" },
            { name: "Azure", href: "#", icon: Cloud, accent: "#06b6d4" },
            { name: "Git", href: "#", icon: GitBranch, accent: "#3b82f6" },
          ].map((tech) => (
            <Reveal key={tech.name} delay={0.04}>
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
