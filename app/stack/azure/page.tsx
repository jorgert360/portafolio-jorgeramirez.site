import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, FileText, GitBranch, ArrowRight, Cable, Globe, Cog, Activity, Layers, Eye, BrainCircuit, Lock, Server, Users, KeyRound, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Microsoft Azure | Jorge Luis Ramírez | Cloud Solutions & AI",
  description: "Desarrollo soluciones empresariales utilizando Microsoft Azure para desplegar aplicaciones web, integrar servicios Cloud, automatización e Inteligencia Artificial.",
  keywords: ["Microsoft Azure", "Cloud Computing", "Azure App Service", "Azure SQL", "Azure Functions", "Azure OpenAI", "Cloud Solutions", "DevOps", "Artificial Intelligence", "Automation"],
  alternates: { canonical: "/stack/azure" },
  openGraph: { title: "Microsoft Azure | Jorge Luis Ramírez | Cloud Solutions & AI", description: "Soluciones empresariales utilizando Microsoft Azure para aplicaciones web, servicios Cloud, automatización e IA.", url: "/stack/azure" },
};

const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
  { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
  { "@type": "ListItem", position: 3, name: "Microsoft Azure", item: `${site.url}/stack/azure` },
]};
const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: site.fullName, jobTitle: "Cloud Solutions & AI", description: "Desarrollo soluciones empresariales en Microsoft Azure.", url: site.url };
const techArticleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: "Microsoft Azure — Cloud Computing Empresarial", author: { "@type": "Person", name: site.fullName }, description: "Azure como plataforma Cloud para aplicaciones empresariales, automatización e IA." };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "¿Para qué utilizas Microsoft Azure?", acceptedAnswer: { "@type": "Answer", text: "Utilizo Azure para desplegar aplicaciones, integrar servicios empresariales, conectar bases de datos y construir soluciones Cloud preparadas para automatización e IA." } },
  { "@type": "Question", name: "¿Qué ventajas ofrece Azure para una empresa?", acceptedAnswer: { "@type": "Answer", text: "Azure proporciona escalabilidad, seguridad, alta disponibilidad e integración con una amplia variedad de servicios que permiten desarrollar soluciones modernas y sostenibles." } },
  { "@type": "Question", name: "¿Cómo integras Azure con otras tecnologías?", acceptedAnswer: { "@type": "Answer", text: "Azure conecta aplicaciones Next.js, servicios Python, bases de datos SQL, dashboards Power BI y procesos automatizados UiPath dentro de un ecosistema unificado." } },
  { "@type": "Question", name: "¿Qué tipo de soluciones puedes desplegar en Azure?", acceptedAnswer: { "@type": "Answer", text: "Portales corporativos, aplicaciones empresariales, APIs, plataformas de automatización, soluciones analíticas y sistemas impulsados por IA." } },
  { "@type": "Question", name: "¿Por qué Azure forma parte de tu stack tecnológico?", acceptedAnswer: { "@type": "Answer", text: "Porque permite integrar todas las tecnologías que utilizo dentro de una infraestructura moderna, segura y preparada para evolucionar." } },
]};

const statsCards = [
  { icon: Cloud, title: "Cloud Computing", description: "Infraestructura moderna para aplicaciones empresariales." },
  { icon: Layers, title: "Escalabilidad", description: "Servicios preparados para crecer con el negocio." },
  { icon: Shield, title: "Alta Disponibilidad", description: "Soluciones confiables y resilientes." },
  { icon: Cable, title: "Integración Inteligente", description: "Conexión entre aplicaciones, datos e IA." },
];
const capabilities = ["App Services", "Azure SQL", "Azure Storage", "Azure Functions", "Azure OpenAI", "Virtual Machines", "API Management", "Monitor"];
const timelineEvents = [
  { year: "2010", text: "Lanzamiento oficial de Microsoft Azure." },
  { year: "2014", text: "Expansión de servicios PaaS e IaaS." },
  { year: "2018", text: "Integración avanzada con Inteligencia Artificial." },
  { year: "2021", text: "Mayor adopción de arquitecturas Serverless." },
  { year: "2023", text: "Azure OpenAI Service y crecimiento del ecosistema Cloud." },
  { year: "Actualidad", text: "Una de las plataformas Cloud líderes para empresas, software e IA." },
];
const whyAzure = [
  { icon: Layers, title: "Escalabilidad", desc: "Aplicaciones crecen según la demanda." },
  { icon: Shield, title: "Alta Disponibilidad", desc: "Infraestructura preparada para operar continua." },
  { icon: Lock, title: "Seguridad", desc: "Protección mediante estándares empresariales." },
  { icon: Cable, title: "Integración", desc: "Conecta aplicaciones, bases de datos y servicios." },
  { icon: Globe, title: "Cloud Native", desc: "Preparado para arquitecturas modernas." },
  { icon: BrainCircuit, title: "Inteligencia Artificial", desc: "Integración con servicios cognitivos y Azure OpenAI." },
];
const services = [
  { icon: Globe, name: "Azure App Service", desc: "Despliegue de aplicaciones web." },
  { icon: Database, name: "Azure SQL Database", desc: "Base de datos administrada." },
  { icon: Server, name: "Azure Storage", desc: "Almacenamiento seguro y escalable." },
  { icon: Cog, name: "Azure Functions", desc: "Procesamiento Serverless." },
  { icon: BrainCircuit, name: "Azure OpenAI", desc: "Integración con modelos de IA." },
  { icon: Lock, name: "Azure Key Vault", desc: "Gestión segura de secretos y credenciales." },
  { icon: Activity, name: "Azure Monitor", desc: "Monitoreo de aplicaciones y recursos." },
  { icon: Eye, name: "Application Insights", desc: "Análisis del rendimiento y telemetría." },
  { icon: Cog, name: "Azure DevOps", desc: "Automatización del ciclo de desarrollo." },
  { icon: Cable, name: "API Management", desc: "Publicación y administración de APIs." },
  { icon: Server, name: "Virtual Machines", desc: "Infraestructura cuando es necesaria." },
  { icon: Users, name: "Microsoft Entra ID", desc: "Gestión de identidad y autenticación." },
];
const cloudModels = [
  { icon: Server, title: "IaaS", desc: "Infraestructura como servicio para administrar servidores y recursos." },
  { icon: Globe, title: "PaaS", desc: "Plataforma administrada para desarrollar y desplegar aplicaciones rápidamente." },
  { icon: Cog, title: "Serverless", desc: "Servicios bajo demanda donde solo se ejecuta el código necesario, optimizando costos y escalabilidad." },
];
const ecosystemCards = [
  { icon: Globe, name: "Next.js", desc: "Aplicaciones web modernas." },
  { icon: Cpu, name: "Python", desc: "Automatización y procesamiento." },
  { icon: Database, name: "SQL", desc: "Persistencia de información." },
  { icon: BarChart3, name: "Power BI", desc: "Visualización de datos." },
  { icon: Bot, name: "UiPath", desc: "Automatización RPA." },
  { icon: GitBranch, name: "Git", desc: "Control de versiones." },
  { icon: Cable, name: "REST APIs", desc: "Integración entre plataformas." },
  { icon: Cog, name: "Docker", desc: "Contenedores." },
  { icon: Cog, name: "Azure DevOps", desc: "CI/CD." },
  { icon: BrainCircuit, name: "Azure OpenAI", desc: "Modelos de IA." },
];
const enterpriseApps = [
  { icon: Globe, title: "Aplicaciones Corporativas", tags: ["Portales empresariales"] },
  { icon: Globe, title: "Plataformas Web", tags: ["Sitios modernos con alta disponibilidad"] },
  { icon: Cable, title: "APIs Empresariales", tags: ["Integración entre sistemas"] },
  { icon: Cog, title: "Automatización Inteligente", tags: ["Servicios conectados con RPA"] },
  { icon: BarChart3, title: "Dashboards", tags: ["Business Intelligence en la nube"] },
  { icon: Cpu, title: "Aplicaciones con IA", tags: ["Integración con modelos inteligentes"] },
  { icon: Cloud, title: "Servicios Cloud", tags: ["Arquitecturas escalables"] },
  { icon: Globe, title: "Soluciones Empresariales", tags: ["Ecosistemas tecnológicos completos"] },
];
const securityCards = [
  { icon: Users, title: "Autenticación", desc: "Microsoft Entra ID." },
  { icon: Lock, title: "Control de Acceso", desc: "Roles y permisos." },
  { icon: KeyRound, title: "Key Vault", desc: "Protección de credenciales." },
  { icon: Shield, title: "HTTPS", desc: "Comunicación segura." },
  { icon: Activity, title: "Monitoreo", desc: "Azure Monitor." },
  { icon: Database, title: "Backups", desc: "Protección de la información." },
  { icon: Shield, title: "Alta Disponibilidad", desc: "Continuidad del servicio." },
  { icon: Layers, title: "Escalabilidad", desc: "Recursos bajo demanda." },
];
const bestPractices = [
  { icon: Layers, title: "Arquitectura Modular", desc: "Escalabilidad." },
  { icon: Cog, title: "Servicios Administrados", desc: "Eficiencia." },
  { icon: Activity, title: "Alta Disponibilidad", desc: "Confiabilidad." },
  { icon: Layers, title: "Escalabilidad", desc: "Crecimiento." },
  { icon: RefreshCw, title: "Automatización de Despliegues", desc: "Agilidad." },
  { icon: Lock, title: "Principio de Menor Privilegio", desc: "Seguridad." },
  { icon: Eye, title: "Monitoreo Continuo", desc: "Visibilidad." },
  { icon: KeyRound, title: "Gestión de Secretos", desc: "Protección." },
  { icon: BarChart3, title: "Optimización de Costos", desc: "Eficiencia." },
  { icon: GitBranch, title: "Versionamiento", desc: "Control." },
  { icon: FileText, title: "Documentación", desc: "Mantenibilidad." },
  { icon: Eye, title: "Observabilidad", desc: "Transparencia." },
];
const useCases = [
  { icon: Globe, title: "Aplicaciones Empresariales", tags: [] },
  { icon: Globe, title: "Portales Corporativos", tags: [] },
  { icon: Globe, title: "Servicios Web", tags: [] },
  { icon: Cable, title: "APIs Empresariales", tags: [] },
  { icon: Cog, title: "Automatización Inteligente", tags: [] },
  { icon: BrainCircuit, title: "Integración con IA", tags: [] },
  { icon: BarChart3, title: "Business Intelligence", tags: [] },
  { icon: Cpu, title: "Procesamiento de Datos", tags: [] },
  { icon: Cloud, title: "Plataformas Cloud", tags: [] },
  { icon: Layers, title: "Arquitecturas Escalables", tags: [] },
];
const premiumServices = [
  { icon: Globe, name: "Azure App Service", desc: "Hospedaje de aplicaciones web." },
  { icon: Database, name: "Azure SQL Database", desc: "Persistencia de información." },
  { icon: Server, name: "Azure Storage", desc: "Archivos y almacenamiento." },
  { icon: Cog, name: "Azure Functions", desc: "Procesamiento Serverless." },
  { icon: BrainCircuit, name: "Azure OpenAI", desc: "Integración con modelos de IA." },
  { icon: Activity, name: "Azure Monitor", desc: "Supervisión de recursos." },
  { icon: Cog, name: "Azure DevOps", desc: "Automatización del ciclo de desarrollo." },
  { icon: KeyRound, name: "Azure Key Vault", desc: "Protección de credenciales." },
  { icon: Eye, name: "Application Insights", desc: "Monitoreo del rendimiento." },
  { icon: Cable, name: "API Management", desc: "Administración de APIs." },
];
const experienceBlocks = [
  {
    company: "Industria Manufacturera", role: "Analista de Automatización de Procesos",
    content: "En proyectos del sector manufacturero participé en soluciones donde la integración entre aplicaciones, bases de datos y automatizaciones era un factor clave. Azure permitió estructurar una arquitectura preparada para conectar servicios, facilitar el despliegue de aplicaciones y ofrecer una plataforma escalable para futuras integraciones con analítica de datos e Inteligencia Artificial. Mi participación estuvo enfocada en el desarrollo de soluciones modernas, integración tecnológica y adopción de buenas prácticas de arquitectura Cloud.",
    indicators: [
      { value: "Cloud Computing", label: "" }, { value: "Integración Empresarial", label: "" },
      { value: "Aplicaciones Web", label: "" }, { value: "Arquitectura Escalable", label: "" },
      { value: "Servicios Cloud", label: "Automatización" },
    ],
  },
  {
    company: "Sector Bancario", role: "Automation Engineer",
    content: "Dentro del sector financiero participé en proyectos donde la disponibilidad, seguridad e integración entre plataformas eran aspectos fundamentales. Azure proporcionó un entorno adecuado para conectar aplicaciones, servicios y bases de datos, facilitando arquitecturas modernas orientadas a la automatización de procesos y al intercambio seguro de información. El uso de servicios administrados permitió mejorar la mantenibilidad de las soluciones y reducir la complejidad operativa.",
    indicators: [
      { value: "Alta Disponibilidad", label: "" }, { value: "Seguridad", label: "" },
      { value: "Escalabilidad", label: "" }, { value: "Servicios Administrados", label: "" },
      { value: "Cloud Solutions", label: "Integración" },
    ],
  },
];
const integratedTechs = [
  { icon: Globe, name: "Next.js", desc: "Aplicaciones web modernas." },
  { icon: Cpu, name: "Python", desc: "Automatización y procesamiento." },
  { icon: Database, name: "SQL", desc: "Persistencia de información." },
  { icon: BarChart3, name: "Power BI", desc: "Visualización de datos." },
  { icon: Bot, name: "UiPath", desc: "Automatización RPA." },
  { icon: BrainCircuit, name: "Azure OpenAI", desc: "Modelos de IA." },
  { icon: Globe, name: "Azure App Service", desc: "Web Apps." },
  { icon: Database, name: "Azure SQL Database", desc: "Base de datos." },
  { icon: Cog, name: "Azure Functions", desc: "Serverless." },
  { icon: Server, name: "Azure Storage", desc: "Almacenamiento." },
  { icon: GitBranch, name: "Git", desc: "Control de versiones." },
  { icon: Cog, name: "Azure DevOps", desc: "CI/CD." },
];
const methodologySteps = [
  "Análisis de la arquitectura", "Diseño de la solución Cloud", "Configuración de servicios Azure",
  "Integración con aplicaciones", "Pruebas funcionales", "Despliegue", "Monitoreo", "Optimización continua",
];

export default function AzurePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link><ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack Tecnológico</span><ChevronRight className="size-4" />
        <span className="truncate text-foreground">Microsoft Azure</span>
      </nav>

      {/* HERO */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Cloud Computing</Badge>
            <Badge variant="secondary">Microsoft Azure</Badge>
            <Badge variant="tertiary">AI Ready</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">Microsoft Azure</h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">Construyendo soluciones empresariales en la nube</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Microsoft Azure es la plataforma Cloud que utilizo para desplegar aplicaciones, integrar servicios empresariales y construir soluciones modernas preparadas para crecer. Gracias a su amplio ecosistema de servicios puedo combinar desarrollo web, bases de datos, automatización e Inteligencia Artificial dentro de una infraestructura segura, escalable y de alta disponibilidad.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg"><a href="#experience">Ver experiencia<ExternalLink className="size-4" /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/stack/nextjs">Explorar arquitectura<ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#0078d4]/25 via-[#0078d4]/15 to-transparent blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#0078d4]/20 bg-slate-950/60">
            <Image
              src="/stack/azure/hero-azure.webp"
              alt="Microsoft Azure — Cloud Computing & AI"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0078d4]/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* STATS CARDS */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{statsCards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0078d4]/50 hover:shadow-[0_0_24px_-8px_rgba(0,120,212,0.4)]">
            <c.icon className="size-8 text-[#0078d4]" /><h3 className="mt-3 font-semibold">{c.title}</h3>
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

      {/* ECOSISTEMA CLOUD */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Plataforma</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">El ecosistema Cloud</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Usuario", "Aplicación Next.js", "Azure App Service", "Azure SQL Database", "Azure Storage", "Azure Functions", "Azure OpenAI", "Power BI", "Automatización UiPath"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#0078d4]/30 bg-[#0078d4]/10 px-4 py-2 font-mono text-sm text-[#0078d4]">{item}</span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Dentro de mi arquitectura tecnológica, Azure representa la plataforma donde convergen las aplicaciones, los datos y los servicios inteligentes. Su integración con el resto de tecnologías permite construir soluciones empresariales escalables, seguras y preparadas para el crecimiento.</p>
        </div>
      </Reveal>

      {/* ¿QUÉ ES AZURE? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#0078d4] to-transparent" />Plataforma</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué es Microsoft Azure?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Microsoft Azure es una plataforma de computación en la nube que proporciona un amplio conjunto de servicios para desarrollar, desplegar, administrar y escalar aplicaciones empresariales. Más que un proveedor de infraestructura, Azure permite integrar aplicaciones, bases de datos, automatización, analítica e Inteligencia Artificial dentro de un único ecosistema seguro y altamente disponible.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Dentro de mi stack tecnológico utilizo Azure como la plataforma donde convergen las soluciones desarrolladas con Next.js, Python, SQL, Power BI y automatización RPA, permitiendo construir aplicaciones modernas preparadas para crecer junto con las necesidades de cada organización.</p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#0078d4]/20 via-transparent to-transparent blur-2xl" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/azure/azure-services.webp"
              alt="Cloud Computing empresarial con Microsoft Azure"
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
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">La evolución de Microsoft Azure</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-[#0078d4] via-[#3b82f6] to-[#8b5cf6]" />
          {timelineEvents.map((item) => (
            <Reveal key={item.year} className="relative pl-16 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#0078d4]/40 bg-background font-display text-xs font-bold text-[#0078d4] shadow-[0_0_22px_-6px_#0078d4]">{item.year}</span>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ¿POR QUÉ AZURE? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{whyAzure.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0078d4]/50">
              <item.icon className="size-6 text-[#0078d4]" /><h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}</div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#0078d4] to-transparent" />Ventajas</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo Azure?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Azure se ha convertido en mi plataforma Cloud de referencia por su capacidad para integrar aplicaciones, datos y servicios inteligentes en un ecosistema unificado, escalable y seguro.</p>
        </div>
      </Reveal>

      {/* SERVICIOS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Servicios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Servicios clave para construir soluciones empresariales</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map((svc) => (
          <Reveal key={svc.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0078d4]/50 hover:shadow-[0_0_24px_-8px_rgba(0,120,212,0.4)]">
              <svc.icon className="size-6 text-[#0078d4]" /><h3 className="mt-3 font-semibold">{svc.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{svc.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* MODELOS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Modelos</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Modelos de servicio en la nube</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">{cloudModels.map((model) => (
          <div key={model.title} className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-all duration-300 hover:border-[#0078d4]/50">
            <model.icon className="size-8 text-[#0078d4]" /><h3 className="mt-3 font-semibold">{model.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{model.desc}</p>
          </div>
        ))}</div>
        <p className="mt-8 text-center leading-relaxed text-muted-foreground">En la mayoría de los proyectos priorizo servicios administrados (PaaS) y arquitecturas Serverless, ya que permiten concentrar el esfuerzo en el desarrollo de soluciones y no en la administración de infraestructura.</p>
      </Reveal>

      {/* ARQUITECTURA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Arquitectura Cloud</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Usuario", "Next.js", "Azure App Service", "API Management", "Azure Functions", "Azure SQL", "Azure Storage", "Azure OpenAI", "Power BI", "UiPath"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#0078d4]/30 bg-[#0078d4]/10 px-4 py-2 font-mono text-sm text-[#0078d4]">{item}</span>
                {i < 9 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Azure funciona como la plataforma de integración donde aplicaciones web, bases de datos, automatización e Inteligencia Artificial trabajan conjuntamente. Esta arquitectura facilita el desarrollo de soluciones escalables, seguras y preparadas para evolucionar con el negocio.</p>
        </div>
      </Reveal>

      {/* ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que complemento con Azure</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{ecosystemCards.map((eco) => (
          <Reveal key={eco.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#0078d4]/50">
              <eco.icon className="mx-auto size-6 text-[#0078d4]" /><h3 className="mt-2 text-sm font-semibold">{eco.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{eco.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* APLICACIONES */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Aplicaciones</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué tipo de soluciones despliego en Azure?</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{enterpriseApps.map((app) => (
          <Reveal key={app.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0078d4]/50">
              <app.icon className="size-6 text-[#0078d4]" /><h3 className="mt-3 font-semibold">{app.title}</h3>
              <ul className="mt-3 flex flex-col gap-1.5">{app.tags.map((tag) => (
                <li key={tag} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-3.5 shrink-0 text-[#06b6d4]" />{tag}</li>
              ))}</ul>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* SEGURIDAD */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Seguridad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Seguridad como parte de la arquitectura</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{securityCards.map((sc) => (
          <Reveal key={sc.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#0078d4]/50">
              <sc.icon className="mx-auto size-6 text-[#0078d4]" /><h3 className="mt-2 text-sm font-semibold">{sc.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{sc.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* DESPLIEGUE */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ciclo</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">El ciclo de despliegue</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Repositorio Git", "GitHub", "Azure DevOps", "Build", "Pruebas", "Deploy", "Azure App Service", "Monitoreo", "Mejora Continua"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#0078d4]/30 bg-[#0078d4]/10 px-4 py-2 font-mono text-sm text-[#0078d4]">{item}</span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">La automatización del despliegue permite entregar aplicaciones con mayor calidad, reducir errores manuales y acelerar la evolución de las soluciones empresariales.</p>
        </div>
      </Reveal>

      {/* EXPERIENCIA */}
      <section id="experience">
        <Reveal className="mt-24">
          <div className="flex flex-col gap-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria profesional</span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi experiencia desarrollando soluciones sobre Microsoft Azure</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Microsoft Azure representa la plataforma Cloud donde integro aplicaciones web, bases de datos, automatización e Inteligencia Artificial. Mi enfoque consiste en diseñar soluciones modernas utilizando servicios administrados que permitan desplegar aplicaciones escalables, seguras y preparadas para evolucionar con las necesidades del negocio.</p>
          </div>
        </Reveal>
        {experienceBlocks.map((block) => (
          <Reveal key={block.company} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
              <h3 className="text-xl font-semibold">{block.role}</h3>
              <p className="mt-1 text-[#0078d4]">{block.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{block.indicators.map((ind) => (
                <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                  <p className="font-display text-lg font-bold text-[#0078d4]">{ind.value}</p>
                  {ind.label && <p className="mt-1 text-xs text-muted-foreground">{ind.label}</p>}
                </div>
              ))}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* TECNOLOGÍAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que integro con Azure</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{integratedTechs.map((tech) => (
          <Reveal key={tech.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#0078d4]/50">
              <tech.icon className="size-6 text-[#0078d4]" /><h3 className="mt-2 font-semibold">{tech.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{tech.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* METODOLOGÍA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proceso</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi metodología de despliegue</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          {methodologySteps.map((step, i) => (
            <Reveal key={step} delay={0.05 * i} className="relative pl-16 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#0078d4]/40 bg-background font-display text-xs font-bold text-[#0078d4] shadow-[0_0_22px_-6px_#0078d4]">{i + 1}</span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">Cada despliegue busca garantizar estabilidad, rendimiento y facilidad de mantenimiento. Mi objetivo es construir soluciones que puedan evolucionar sin comprometer la seguridad, la disponibilidad ni la experiencia del usuario.</p>
      </Reveal>

      {/* BUENAS PRÁCTICAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Calidad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Buenas prácticas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{bestPractices.map((bp) => (
          <Reveal key={bp.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#0078d4]/50">
              <bp.icon className="mx-auto size-6 text-[#0078d4]" /><h3 className="mt-2 text-sm font-semibold">{bp.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{bp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* CASOS DE USO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Escenarios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Escenarios donde utilizo Microsoft Azure</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{useCases.map((uc) => (
          <Reveal key={uc.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#0078d4]/50">
              <uc.icon className="mx-auto size-6 text-[#0078d4]" /><h3 className="mt-2 text-sm font-semibold">{uc.title}</h3>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* SERVICIOS PREMIUM */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Servicios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Servicios Cloud que utilizo</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{premiumServices.map((ps) => (
          <Reveal key={ps.name} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#0078d4]/50">
              <ps.icon className="size-6 text-[#0078d4]" /><h3 className="mt-3 font-semibold">{ps.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{ps.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ¿POR QUÉ? */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#0078d4]/10 via-transparent to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisión</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué utilizo Azure?</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Microsoft Azure me permite construir soluciones empresariales preparadas para el crecimiento, integrando desarrollo web, bases de datos, automatización, analítica e Inteligencia Artificial dentro de una plataforma segura y escalable.</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Su ecosistema de servicios facilita el desarrollo de aplicaciones modernas con altos estándares de disponibilidad, rendimiento y mantenibilidad.</p>
        </div>
      </Reveal>

      {/* ARQUITECTURA COMPLETA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi arquitectura Cloud</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {["Usuario", "Next.js", "App Service", "API Mgmt", "Functions", "SQL DB", "Storage", "OpenAI", "Power BI", "UiPath"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i}>
                <div className="rounded-xl border border-[#0078d4]/30 bg-[#0078d4]/10 px-3 py-3 text-center font-mono text-xs text-[#0078d4]">{item}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center leading-relaxed text-muted-foreground">Esta arquitectura representa la forma en que diseño soluciones empresariales modernas utilizando Microsoft Azure como plataforma central de integración. Cada componente cumple una función específica dentro del ecosistema, permitiendo desarrollar aplicaciones escalables, conectar servicios, procesar información y facilitar la automatización de procesos empresariales.</p>
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
            { q: "¿Para qué utilizas Microsoft Azure?", a: "Utilizo Microsoft Azure para desplegar aplicaciones, integrar servicios empresariales, conectar bases de datos y construir soluciones Cloud preparadas para automatización e Inteligencia Artificial." },
            { q: "¿Qué ventajas ofrece Azure para una empresa?", a: "Azure proporciona escalabilidad, seguridad, alta disponibilidad e integración con una amplia variedad de servicios que permiten desarrollar soluciones modernas y sostenibles." },
            { q: "¿Cómo integras Azure con otras tecnologías?", a: "Azure forma parte de mi ecosistema tecnológico conectando aplicaciones Next.js, servicios Python, bases de datos SQL, dashboards Power BI y procesos automatizados UiPath." },
            { q: "¿Qué tipo de soluciones puedes desplegar en Azure?", a: "Portales corporativos, aplicaciones empresariales, APIs, plataformas de automatización, soluciones analíticas, sistemas impulsados por IA y arquitecturas Full Stack." },
            { q: "¿Por qué Azure forma parte de tu stack tecnológico?", a: "Porque permite integrar todas las tecnologías que utilizo dentro de una infraestructura moderna, segura y preparada para evolucionar con las necesidades de cada organización." },
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
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">Construyamos soluciones empresariales preparadas para la nube.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Diseño e implemento aplicaciones modernas utilizando Microsoft Azure como plataforma para integrar desarrollo web, automatización, analítica de datos e Inteligencia Artificial. Mi objetivo es entregar soluciones escalables, seguras y orientadas a resultados.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg"><a href="mailto:jorge.ramtroz1989@gmail.com">Conversemos sobre su proyecto<ArrowRight /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/stack/nextjs">Explorar mi Stack Tecnológico<ExternalLink /></Link></Button>
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
            { name: "Next.js", href: "/stack/nextjs", icon: Globe, accent: "#fff" },
            { name: "Python", href: "/stack/python", icon: Cpu, accent: "#8b5cf6" },
            { name: "SQL", href: "/stack/sql", icon: Database, accent: "#3b82f6" },
            { name: "Power BI", href: "/stack/powerbi", icon: BarChart3, accent: "#f2c811" },
            { name: "UiPath", href: "/stack/uipath", icon: Bot, accent: "#3b82f6" },
            { name: "Git", href: "#", icon: GitBranch, accent: "#f7df1e" },
            { name: "OpenAI", href: "#", icon: BrainCircuit, accent: "#8b5cf6" },
            { name: "JavaScript", href: "/stack/javascript", icon: Cog, accent: "#f7df1e" },
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
