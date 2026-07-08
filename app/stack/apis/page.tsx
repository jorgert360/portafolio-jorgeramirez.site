import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, Bot, Cpu, Database, Cloud, Shield, BarChart3, FileText, GitBranch, ArrowRight, Cable, Globe, Cog, Layers, Eye, BrainCircuit, Users, RefreshCw, Code, Lock, KeyRound, Zap, Activity, Bell } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "REST APIs | Jorge Luis Ramírez | System Integration & Automation",
  description: "Desarrollo e integro APIs REST para conectar aplicaciones, automatizar procesos empresariales, consumir servicios externos e integrar IA dentro de soluciones modernas.",
  keywords: ["REST API", "API Integration", "RESTful Services", "JSON", "HTTP", "Web Services", "System Integration", "Automation", "OpenAI API", "Azure API", "Next.js API", "Python API"],
  alternates: { canonical: "/stack/apis" },
  openGraph: { title: "REST APIs | Jorge Luis Ramírez | System Integration & Automation", description: "Integración de sistemas mediante APIs REST para conectar aplicaciones, automatizar procesos e integrar IA.", url: "/stack/apis" },
};

const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
  { "@type": "ListItem", position: 2, name: "Stack Tecnológico", item: `${site.url}/stack` },
  { "@type": "ListItem", position: 3, name: "REST APIs", item: `${site.url}/stack/apis` },
]};
const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: site.fullName, jobTitle: "System Integration & Automation", description: "Integración de sistemas mediante APIs REST.", url: site.url };
const techArticleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: "REST APIs — Integración de Sistemas Empresariales", author: { "@type": "Person", name: site.fullName }, description: "APIs REST como eje central de la integración empresarial." };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "¿Para qué utilizas las REST APIs?", acceptedAnswer: { "@type": "Answer", text: "Utilizo REST APIs para conectar aplicaciones, automatizar el intercambio de información y construir soluciones donde diferentes tecnologías pueden comunicarse de manera segura y eficiente." } },
  { "@type": "Question", name: "¿Cómo integras APIs con Inteligencia Artificial?", acceptedAnswer: { "@type": "Answer", text: "Las APIs permiten conectar aplicaciones empresariales con modelos de IA como OpenAI, facilitando la automatización de procesos y asistentes inteligentes." } },
  { "@type": "Question", name: "¿Qué tecnologías integras mediante APIs?", acceptedAnswer: { "@type": "Answer", text: "Integro aplicaciones Next.js, servicios Python, bases de datos SQL, Azure, UiPath, Power BI y plataformas de terceros dentro de una arquitectura unificada." } },
  { "@type": "Question", name: "¿Cómo garantizas la seguridad de una API?", acceptedAnswer: { "@type": "Answer", text: "Implemento autenticación mediante JWT y OAuth 2.0, comunicación segura HTTPS, validación de datos y control de acceso." } },
  { "@type": "Question", name: "¿Por qué las APIs son fundamentales en tu stack?", acceptedAnswer: { "@type": "Answer", text: "Porque permiten que todas las tecnologías trabajen de forma coordinada, integrando aplicaciones, automatización, analítica e IA." } },
]};

const statsCards = [
  { icon: Cable, title: "Integración de Sistemas", description: "Comunicación entre plataformas." },
  { icon: RefreshCw, title: "Automatización", description: "Intercambio automático de información." },
  { icon: Cloud, title: "Servicios Cloud", description: "Conexión con plataformas modernas." },
  { icon: Layers, title: "Escalabilidad", description: "Arquitecturas preparadas para crecer." },
];
const capabilities = ["REST", "HTTP", "HTTPS", "JSON", "CRUD", "OAuth", "JWT", "Webhooks"];
const whyApis = [
  { icon: Cable, title: "Integración", desc: "Conectan sistemas diferentes." },
  { icon: Layers, title: "Escalabilidad", desc: "Facilitan el crecimiento." },
  { icon: RefreshCw, title: "Automatización", desc: "Eliminan procesos manuales." },
  { icon: Globe, title: "Interoperabilidad", desc: "Comunicación entre plataformas." },
  { icon: Cog, title: "Reutilización", desc: "Servicios reutilizables." },
  { icon: Zap, title: "Tiempo Real", desc: "Intercambio inmediato de información." },
];
const httpMethods = [
  { icon: FileText, name: "GET", desc: "Consultar información." },
  { icon: Database, name: "POST", desc: "Crear nuevos recursos." },
  { icon: Cog, name: "PUT", desc: "Actualizar información." },
  { icon: Shield, name: "DELETE", desc: "Eliminar recursos." },
];
const authCards = [
  { icon: Lock, name: "JWT", desc: "Tokens seguros." },
  { icon: KeyRound, name: "OAuth 2.0", desc: "Autorización delegada." },
  { icon: Shield, name: "API Keys", desc: "Autenticación simple." },
  { icon: Lock, name: "Bearer Tokens", desc: "Acceso autorizado." },
  { icon: Shield, name: "HTTPS", desc: "Comunicación segura." },
  { icon: Users, name: "Control de Acceso", desc: "Permisos." },
];
const ecosystemCards = [
  { icon: Globe, name: "Next.js", desc: "Aplicaciones web." },
  { icon: Cpu, name: "Python", desc: "Automatización." },
  { icon: Database, name: "SQL", desc: "Persistencia." },
  { icon: Cloud, name: "Azure", desc: "Cloud." },
  { icon: BrainCircuit, name: "OpenAI", desc: "IA." },
  { icon: BarChart3, name: "Power BI", desc: "Analítica." },
  { icon: Bot, name: "UiPath", desc: "RPA." },
  { icon: Code, name: "JavaScript", desc: "Lenguaje base." },
  { icon: GitBranch, name: "GitHub", desc: "Versionamiento." },
  { icon: Cog, name: "Docker", desc: "Contenedores." },
  { icon: Globe, name: "Servicios Cloud", desc: "Infraestructura." },
  { icon: Globe, name: "Aplicaciones Empresariales", desc: "Soluciones." },
];
const useCases = [
  { icon: Lock, title: "Autenticación", tags: [] },
  { icon: Database, title: "Consulta de Datos", tags: [] },
  { icon: FileText, title: "Carga de Información", tags: [] },
  { icon: BrainCircuit, title: "Integración de IA", tags: [] },
  { icon: Cog, title: "Procesamiento de Archivos", tags: [] },
  { icon: RefreshCw, title: "Sincronización", tags: [] },
  { icon: Bell, title: "Notificaciones", tags: [] },
  { icon: Cog, title: "Automatización", tags: [] },
  { icon: BarChart3, title: "Análisis", tags: [] },
  { icon: Eye, title: "Dashboards", tags: [] },
];
const bestPractices = [
  { icon: GitBranch, title: "Versionado de APIs", desc: "Evolución controlada." },
  { icon: FileText, title: "Documentación", desc: "Claridad." },
  { icon: Shield, title: "Manejo de Errores", desc: "Robustez." },
  { icon: Lock, title: "Seguridad", desc: "Protección." },
  { icon: Activity, title: "Rate Limiting", desc: "Control." },
  { icon: Check, title: "Validación", desc: "Calidad." },
  { icon: FileText, title: "Logs", desc: "Trazabilidad." },
  { icon: Eye, title: "Monitoreo", desc: "Visibilidad." },
  { icon: Layers, title: "Escalabilidad", desc: "Crecimiento." },
  { icon: Check, title: "Pruebas", desc: "Confiabilidad." },
  { icon: Cog, title: "Mantenibilidad", desc: "Sostenibilidad." },
  { icon: Eye, title: "Observabilidad", desc: "Transparencia." },
];
const projects = [
  { name: "Tengoya", desc: "Marketplace desarrollado con Next.js donde las APIs permiten conectar el frontend con servicios de backend, autenticación, gestión de productos y futuras integraciones con pasarelas de pago." },
  { name: "HISTECH", desc: "Portal corporativo optimizado para SEO, AEO y GEO que integra formularios de contacto, servicios web y futuras conexiones con herramientas de automatización e IA mediante APIs." },
  { name: "Emisoras Latinas", desc: "Plataforma de emisoras online donde las APIs permiten administrar contenidos, integrar servicios de streaming y automatizar la actualización de información." },
  { name: "CarWeb", desc: "Plataforma enfocada al sector automotriz diseñada para integrar catálogos, consultas y futuras conexiones mediante APIs con sistemas externos." },
];
const experienceBlocks = [
  {
    company: "Proyectos Empresariales", role: "Full Stack Developer",
    content: "En proyectos propios como Tengoya, HISTECH, Emisoras Latinas y CarWeb, las APIs constituyen el mecanismo principal para conectar el frontend con la lógica de negocio, administrar la autenticación de usuarios, intercambiar información entre módulos e integrar servicios externos. Cada integración es diseñada buscando mantener una arquitectura desacoplada, escalable y preparada para incorporar nuevas funcionalidades sin afectar el resto del sistema.",
    indicators: [
      { value: "REST APIs", label: "" }, { value: "JSON", label: "" },
      { value: "HTTP", label: "" }, { value: "Integración de Sistemas", label: "" },
      { value: "Arquitectura Modular", label: "Escalabilidad" },
    ],
  },
  {
    company: "Automatización e IA", role: "Automation & AI Developer",
    content: "Las APIs permiten conectar procesos automatizados desarrollados con UiPath, servicios construidos en Python, modelos de Inteligencia Artificial y plataformas Cloud dentro de una única arquitectura tecnológica. Esta integración facilita el intercambio automático de información entre aplicaciones, reduciendo tareas manuales, mejorando la disponibilidad de los datos y permitiendo construir soluciones empresariales mucho más eficientes.",
    indicators: [
      { value: "OpenAI API", label: "" }, { value: "Azure API", label: "" },
      { value: "UiPath", label: "" }, { value: "Automatización", label: "" },
      { value: "Python", label: "Integración Empresarial" },
    ],
  },
];
const integratedTechs = [
  { icon: Globe, name: "Next.js", desc: "Aplicaciones web." },
  { icon: Code, name: "JavaScript", desc: "Lenguaje base." },
  { icon: Cpu, name: "Python", desc: "Automatización." },
  { icon: Database, name: "SQL", desc: "Persistencia." },
  { icon: Cloud, name: "Azure", desc: "Cloud." },
  { icon: BarChart3, name: "Power BI", desc: "Analítica." },
  { icon: Bot, name: "UiPath", desc: "RPA." },
  { icon: BrainCircuit, name: "OpenAI", desc: "IA." },
  { icon: GitBranch, name: "Git & GitHub", desc: "Versionamiento." },
  { icon: Cog, name: "Docker", desc: "Contenedores." },
  { icon: Lock, name: "JWT", desc: "Autenticación." },
  { icon: KeyRound, name: "OAuth 2.0", desc: "Autorización." },
];
const methodologySteps = [
  "Análisis del proceso de negocio", "Identificación de sistemas involucrados",
  "Diseño de endpoints", "Implementación de autenticación",
  "Desarrollo de la integración", "Pruebas funcionales",
  "Despliegue", "Monitoreo y mejora continua",
];
const apiTypes = [
  { icon: Globe, name: "REST APIs", desc: "Comunicación estándar entre aplicaciones." },
  { icon: Zap, name: "Webhooks", desc: "Eventos en tiempo real." },
  { icon: BrainCircuit, name: "OpenAI API", desc: "Integración con modelos de IA generativa." },
  { icon: Cloud, name: "Azure APIs", desc: "Servicios Cloud." },
  { icon: Users, name: "Authentication APIs", desc: "Gestión de usuarios y seguridad." },
  { icon: Globe, name: "External APIs", desc: "Conexión con plataformas de terceros." },
];

export default function ApisPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, personJsonLd, techArticleJsonLd, faqJsonLd]} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link><ChevronRight className="size-4" />
        <span className="text-muted-foreground">Stack Tecnológico</span><ChevronRight className="size-4" />
        <span className="truncate text-foreground">REST APIs</span>
      </nav>

      {/* HERO */}
      <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">REST APIs</Badge>
            <Badge variant="secondary">System Integration</Badge>
            <Badge variant="tertiary">Automation</Badge>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">REST APIs</h1>
          <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">Conectando aplicaciones, datos y procesos inteligentes</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Las APIs representan el núcleo de la integración entre aplicaciones modernas. Gracias a ellas puedo conectar plataformas web, bases de datos, automatizaciones RPA, servicios Cloud e Inteligencia Artificial para construir soluciones empresariales escalables, seguras y altamente interoperables.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg"><a href="#experience">Ver experiencia<ExternalLink className="size-4" /></a></Button>
            <Button asChild variant="outline" size="lg"><Link href="/stack/nextjs">Explorar arquitectura<ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#8b5cf6]/25 via-[#3b82f6]/15 to-transparent blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#8b5cf6]/20 bg-slate-950/60">
            <Image
              src="/stack/apis/hero-apis.webp"
              alt="REST APIs — Integration, Automation & AI"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#8b5cf6]/10 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* STATS CARDS */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{statsCards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.4)]">
            <c.icon className="size-8 text-[#8b5cf6]" /><h3 className="mt-3 font-semibold">{c.title}</h3>
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

      {/* ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Integración</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">El ecosistema de integración</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["App Next.js", "REST API", "SQL DB", "Python", "OpenAI", "Azure", "UiPath", "Power BI", "Usuario"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 font-mono text-sm text-[#8b5cf6]">{item}</span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Las APIs permiten integrar todas las tecnologías que conforman mi stack. Gracias a ellas puedo desarrollar soluciones donde diferentes plataformas intercambian información de forma segura, automatizada y en tiempo real.</p>
        </div>
      </Reveal>

      {/* ¿QUÉ ES UNA API? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#8b5cf6] to-transparent" />REST API</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Qué es una REST API?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Una REST API es un mecanismo de comunicación que permite que diferentes aplicaciones intercambien información de manera segura, organizada y estandarizada utilizando protocolos HTTP.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">En mi experiencia profesional las APIs representan el punto de conexión entre aplicaciones web, bases de datos, plataformas Cloud, automatizaciones RPA e Inteligencia Artificial.</p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mx-0">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#8b5cf6]/20 via-transparent to-transparent blur-2xl" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2/40">
            <Image
              src="/stack/apis/apis-integration.webp"
              alt="Comunicación entre aplicaciones con APIs REST"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </Reveal>

      {/* ¿POR QUÉ? */}
      <Reveal className="mt-24 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{whyApis.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50">
              <item.icon className="size-6 text-[#8b5cf6]" /><h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}</div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-gradient-to-r from-[#8b5cf6] to-transparent" />Importancia</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué las APIs son tan importantes?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Las APIs constituyen el eje central de las soluciones empresariales modernas, permitiendo integrar aplicaciones web, bases de datos, automatización e IA dentro de una única arquitectura tecnológica.</p>
        </div>
      </Reveal>

      {/* ARQUITECTURA REST */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Arquitectura de comunicación moderna</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Cliente", "REST API", "Controlador", "Lógica de Negocio", "Base de Datos", "Respuesta JSON"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 font-mono text-sm text-[#8b5cf6]">{item}</span>
                {i < 5 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">La arquitectura REST desacopla la interfaz del usuario de la lógica del negocio, permitiendo desarrollar aplicaciones escalables, fáciles de mantener y preparadas para integrarse con otros servicios empresariales.</p>
        </div>
      </Reveal>

      {/* MÉTODOS HTTP */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Métodos</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Métodos HTTP</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">{httpMethods.map((hm) => (
          <Reveal key={hm.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 text-center transition-all duration-300 hover:border-[#8b5cf6]/50">
              <hm.icon className="mx-auto size-8 text-[#8b5cf6]" /><h3 className="mt-3 font-semibold">{hm.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{hm.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* AUTENTICACIÓN */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Seguridad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Seguridad en las integraciones</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{authCards.map((ac) => (
          <Reveal key={ac.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#8b5cf6]/50">
              <ac.icon className="mx-auto size-6 text-[#8b5cf6]" /><h3 className="mt-2 text-sm font-semibold">{ac.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{ac.desc}</p>
            </div>
          </Reveal>
        ))}</div>
        <p className="mt-8 text-center leading-relaxed text-muted-foreground">Toda integración empresarial debe implementar mecanismos de autenticación y autorización que garanticen la protección de la información intercambiada entre aplicaciones.</p>
      </Reveal>

      {/* ECOSISTEMA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que conecto mediante APIs</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{ecosystemCards.map((eco) => (
          <Reveal key={eco.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#8b5cf6]/50">
              <eco.icon className="size-6 text-[#8b5cf6]" /><h3 className="mt-2 font-semibold">{eco.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{eco.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ARQUITECTURA EMPRESARIAL */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Empresarial</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Arquitectura empresarial</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            {["Frontend Next.js", "REST API", "Backend", "SQL Database", "Azure", "OpenAI", "Power BI", "UiPath", "Usuario"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i} className="flex flex-col items-center gap-2">
                <span className="rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 font-mono text-sm text-[#8b5cf6]">{item}</span>
                {i < 8 && <ChevronRight className="size-4 rotate-90 text-muted-foreground" />}
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center leading-relaxed text-muted-foreground">Las APIs constituyen el eje central de las soluciones empresariales modernas. Gracias a ellas es posible integrar aplicaciones web, bases de datos, automatización e IA dentro de una única arquitectura tecnológica.</p>
        </div>
      </Reveal>

      {/* EXPERIENCIA */}
      <section id="experience">
        <Reveal className="mt-24">
          <div className="flex flex-col gap-4 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria profesional</span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi experiencia desarrollando integraciones mediante REST APIs</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Las APIs representan el núcleo de la comunicación entre las soluciones que desarrollo. Gracias a ellas puedo integrar aplicaciones web, bases de datos, automatización RPA, Inteligencia Artificial y plataformas Cloud dentro de arquitecturas empresariales escalables.</p>
          </div>
        </Reveal>
        {experienceBlocks.map((block) => (
          <Reveal key={block.company} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-8">
              <h3 className="text-xl font-semibold">{block.role}</h3>
              <p className="mt-1 text-[#8b5cf6]">{block.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.content}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{block.indicators.map((ind) => (
                <div key={ind.value} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                  <p className="font-display text-lg font-bold text-[#8b5cf6]">{ind.value}</p>
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
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Proyectos donde las APIs son fundamentales</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">{projects.map((p) => (
          <Reveal key={p.name} delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50">
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
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tecnologías que integro mediante APIs</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{integratedTechs.map((tech) => (
          <Reveal key={tech.name} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 transition-all duration-300 hover:border-[#8b5cf6]/50">
              <tech.icon className="size-6 text-[#8b5cf6]" /><h3 className="mt-2 font-semibold">{tech.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{tech.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* METODOLOGÍA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proceso</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi metodología de integración</h2>
        </div>
        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-px bg-border" />
          {methodologySteps.map((step, i) => (
            <Reveal key={step} delay={0.05 * i} className="relative pl-16 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#8b5cf6]/40 bg-background font-display text-xs font-bold text-[#8b5cf6] shadow-[0_0_22px_-6px_#8b5cf6]">{i + 1}</span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">Cada integración comienza comprendiendo el proceso de negocio antes de escribir una sola línea de código. Mi objetivo es construir APIs seguras, escalables, fáciles de mantener y preparadas para futuras integraciones.</p>
      </Reveal>

      {/* BUENAS PRÁCTICAS */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Calidad</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Buenas prácticas</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{bestPractices.map((bp) => (
          <Reveal key={bp.title} delay={0.03}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#8b5cf6]/50">
              <bp.icon className="mx-auto size-6 text-[#8b5cf6]" /><h3 className="mt-2 text-sm font-semibold">{bp.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{bp.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* CASOS DE USO */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Escenarios</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Escenarios donde desarrollo integraciones</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{useCases.map((uc) => (
          <Reveal key={uc.title} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-4 text-center transition-all duration-300 hover:border-[#8b5cf6]/50">
              <uc.icon className="mx-auto size-6 text-[#8b5cf6]" /><h3 className="mt-2 text-sm font-semibold">{uc.title}</h3>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* TIPOS DE API */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Tipos</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Tipos de APIs con las que trabajo</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{apiTypes.map((at) => (
          <Reveal key={at.name} delay={0.04}>
            <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-5 transition-all duration-300 hover:border-[#8b5cf6]/50">
              <at.icon className="size-6 text-[#8b5cf6]" /><h3 className="mt-3 font-semibold">{at.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{at.desc}</p>
            </div>
          </Reveal>
        ))}</div>
      </Reveal>

      {/* ¿POR QUÉ? */}
      <Reveal className="mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-transparent p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisión</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">¿Por qué las APIs forman parte de mi stack?</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Las APIs son el mecanismo que conecta todas las tecnologías que utilizo. Gracias a ellas puedo integrar aplicaciones desarrolladas con Next.js, automatizaciones en UiPath, procesamiento de datos con Python, bases de datos SQL, servicios de Microsoft Azure, modelos de OpenAI y dashboards en Power BI dentro de una arquitectura unificada.</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Diseñar buenas integraciones significa construir soluciones más flexibles, escalables y preparadas para adaptarse a nuevos requerimientos sin necesidad de rehacer toda la plataforma.</p>
        </div>
      </Reveal>

      {/* ARQUITECTURA */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Arquitectura</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">Mi arquitectura de integración</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Usuario", "Next.js", "REST API", "JWT Auth", "Backend", "SQL DB", "Azure", "OpenAI", "UiPath", "Power BI", "JSON Response", "Usuario"].map((item, i) => (
              <Reveal key={item} delay={0.03 * i}>
                <div className="rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3 py-3 text-center font-mono text-xs text-[#8b5cf6]">{item}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center leading-relaxed text-muted-foreground">Esta arquitectura representa la forma en que desarrollo soluciones empresariales modernas. Cada componente cumple una función específica y las APIs actúan como el mecanismo de comunicación que permite integrar aplicaciones, automatización, analítica e IA de forma segura y escalable.</p>
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal className="mt-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Preguntas frecuentes</span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">FAQ</h2>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {[{q:"¿Para qué utilizas las REST APIs?",a:"Utilizo REST APIs para conectar aplicaciones, automatizar el intercambio de información y construir soluciones donde diferentes tecnologías pueden comunicarse de manera segura y eficiente."},{q:"¿Cómo integras APIs con Inteligencia Artificial?",a:"Las APIs permiten conectar aplicaciones empresariales con modelos de IA como OpenAI, facilitando la automatización de procesos, generación de contenido y asistentes inteligentes."},{q:"¿Qué tecnologías integras mediante APIs?",a:"Integro aplicaciones Next.js, servicios Python, bases de datos SQL, Azure, UiPath, Power BI y plataformas de terceros dentro de una arquitectura unificada."},{q:"¿Cómo garantizas la seguridad de una API?",a:"Implemento autenticación mediante JWT y OAuth 2.0, comunicación segura HTTPS, validación de datos, control de acceso y buenas prácticas de desarrollo."},{q:"¿Por qué las APIs son fundamentales en tu stack tecnológico?",a:"Porque permiten que todas las tecnologías trabajen de forma coordinada, facilitando la integración entre aplicaciones, automatización, analítica e IA."}].map((faq) => (
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
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] sm:text-3xl">Conectemos aplicaciones para construir soluciones inteligentes.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Diseño e implemento integraciones mediante REST APIs que permiten comunicar aplicaciones, automatizar procesos y conectar plataformas empresariales con servicios Cloud e Inteligencia Artificial.</p>
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
            {name:"Next.js",href:"/stack/nextjs",icon: Globe,accent:"#fff"},
            {name:"Python",href:"/stack/python",icon: Cpu,accent:"#8b5cf6"},
            {name:"SQL",href:"/stack/sql",icon: Database,accent:"#3b82f6"},
            {name:"Azure",href:"/stack/azure",icon: Cloud,accent:"#0078d4"},
            {name:"OpenAI",href:"#",icon: BrainCircuit,accent:"#8b5cf6"},
            {name:"UiPath",href:"/stack/uipath",icon: Bot,accent:"#3b82f6"},
            {name:"Power BI",href:"/stack/powerbi",icon: BarChart3,accent:"#f2c811"},
            {name:"Git & GitHub",href:"/stack/github",icon: GitBranch,accent:"#c9510c"},
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
