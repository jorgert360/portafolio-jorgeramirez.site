import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Check, ExternalLink, ArrowRight, Bot, Cpu, Globe, BarChart3, Workflow, Shield, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios de Automatización | Jorge Luis Ramírez",
  description: "Automatización RPA con UiPath, desarrollo con Python e IA, integración de APIs y consultoría en transformación digital para empresas en Colombia.",
  alternates: { canonical: "/servicios" },
  openGraph: { title: "Servicios de Automatización | Jorge Luis Ramírez", description: "Automatización RPA, desarrollo con Python e IA, integración de APIs y consultoría.", url: "/servicios" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}/servicios` },
  ],
};

const services = [
  {
    icon: Bot, title: "Automatización RPA (UiPath)", badge: "Más demandado",
    desc: "Diseño e implementación de robots de software que automatizan procesos repetitivos: facturación, conciliaciones, validaciones, carga de datos en ERP y más.",
    features: ["Reducción de hasta 80% en tiempo de ejecución", "Cero errores de digitación", "Robots desatendidos 24/7 vía Orchestrator", "Integración con SAP, Excel, SQL y APIs"],
    investment: "Desde $2.500.000 COP / mes o por proyecto",
    priceFrom: 2500000,
  },
  {
    icon: Cpu, title: "Desarrollo con Python & IA", badge: "Alto impacto",
    desc: "Soluciones inteligentes con Python: procesamiento masivo de datos, modelos de Machine Learning, integración con APIs de IA generativa y automatización de procesos analíticos.",
    features: ["Procesamiento de datos con Pandas y NumPy", "Integración con OpenAI y modelos de IA", "APIs REST escalables con FastAPI", "Automatización de reportes e indicadores"],
    investment: "Desde $3.000.000 COP / mes o por proyecto",
    priceFrom: 3000000,
  },
  {
    icon: Globe, title: "Desarrollo Web (Next.js)", badge: "Full Stack",
    desc: "Aplicaciones web modernas con Next.js, React y TypeScript: portales corporativos, dashboards, plataformas SaaS y sitios optimizados para SEO y rendimiento.",
    features: ["Aplicaciones Full Stack con Next.js", "Optimización SEO, Core Web Vitals 100", "Dashboard interactivos con Power BI", "Despliegue en Vercel o Azure"],
    investment: "Desde $4.000.000 COP / proyecto",
    priceFrom: 4000000,
  },
  {
    icon: BarChart3, title: "Business Intelligence", badge: "Datos",
    desc: "Dashboards gerenciales en Power BI, modelos de datos, indicadores KPI y automatización de reportes para toma de decisiones basada en datos.",
    features: ["Dashboards ejecutivos en Power BI", "Modelos de datos optimizados (Star Schema)", "KPIs y alertas automatizadas", "Integración con SQL, Python y Excel"],
    investment: "Desde $2.000.000 COP / dashboard",
    priceFrom: 2000000,
  },
  {
    icon: Workflow, title: "Integración de Sistemas", badge: "APIs",
    desc: "Conexión entre plataformas mediante APIs REST, automatización de flujos de datos entre ERP, CRM, bases de datos y servicios Cloud.",
    features: ["APIs REST con autenticación JWT/OAuth", "Integración Azure, SQL, Python y UiPath", "Automatización de flujos ETL", "Documentación OpenAPI"],
    investment: "Desde $2.500.000 COP / integración",
    priceFrom: 2500000,
  },
  {
    icon: Shield, title: "Consultoría en Automatización", badge: "Estratégico",
    desc: "Análisis de procesos, modelado BPMN, identificación de oportunidades de automatización y hoja de ruta tecnológica para tu empresa.",
    features: ["Diagnóstico de procesos con BPMN", "Roadmap de automatización", "Análisis ROI y ahorro estimado", "Recomendación de stack tecnológico"],
    investment: "Desde $1.500.000 COP / diagnóstico",
    priceFrom: 1500000,
  },
];

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Servicios de automatización, IA y desarrollo de software",
  provider: { "@type": "Person", name: site.fullName, url: site.url },
  itemListElement: services.map((svc) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: svc.title,
      serviceType: svc.title,
      description: svc.desc,
      provider: { "@type": "Person", name: site.fullName },
      areaServed: { "@type": "Country", name: "Colombia" },
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "COP",
      minPrice: svc.priceFrom,
    },
  })),
};

const faqs = [
  {
    q: "¿Cuánto cuesta automatizar un proceso en Colombia?",
    a: "Depende del volumen y las integraciones. Un robot RPA sencillo parte desde $1.500.000–$2.500.000 COP; los proyectos de Python/IA o desarrollo web a la medida se cotizan por alcance. Cada servicio indica su inversión de referencia.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Diagnóstico del proceso, propuesta con alcance y ROI estimado, desarrollo iterativo, pruebas, despliegue y acompañamiento. Trabajo con estándares empresariales: control de versiones, documentación y buenas prácticas.",
  },
  {
    q: "¿Trabajas de forma remota o solo en Bogotá?",
    a: "Trabajo con empresas de toda Colombia y también en remoto. La mayoría de proyectos de automatización y desarrollo se ejecutan de forma remota con reuniones de seguimiento.",
  },
  {
    q: "¿Ofreces soporte y mantenimiento después de entregar?",
    a: "Sí. Ofrezco esquemas de soporte y mantenimiento para robots y aplicaciones, incluyendo monitoreo, ajustes y mejoras continuas.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Escríbeme por WhatsApp o correo con una breve descripción de tu proceso. Te respondo con una propuesta y un estimado de inversión y tiempos.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={[breadcrumbJsonLd, offerCatalogJsonLd, faqJsonLd]} />
      <nav aria-label="Ruta de navegación" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Inicio</Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">Servicios</span>
      </nav>

      <Reveal className="mt-8 max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Qué ofrezco</span>
        <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl">
          Soluciones de <span className="text-gradient">automatización</span> para tu empresa
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Más de 5 años transformando procesos manuales en soluciones inteligentes. 
          Cada servicio está diseñado para reducir costos, eliminar errores y liberar 
          el talento de tu equipo.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-col gap-8">
        {services.map((svc, i) => (
          <Reveal key={svc.title} delay={0.05 * i}>
            <div className="group rounded-2xl border border-border bg-surface-2/40 p-6 transition-all duration-300 hover:border-border-strong sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
                    <svc.icon className="size-7" />
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold sm:text-2xl">{svc.title}</h2>
                      <Badge variant="primary" className="text-[10px]">{svc.badge}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{svc.desc}</p>
                  </div>
                </div>
              </div>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#06b6d4]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <p className="font-mono text-sm text-[#3b82f6]">{svc.investment}</p>
                <Button asChild variant="gradient" size="sm">
                  <a href={`https://wa.me/573124249342?text=Hola%20Jorge%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(svc.title)}`} target="_blank" rel="noopener noreferrer">
                    Solicitar cotización
                    <MessageSquare className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Preguntas frecuentes</span>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Antes de <span className="text-gradient">empezar</span>
          </h2>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-surface-2/40 transition-all duration-300 hover:border-border-strong">
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-medium sm:text-base">
                {f.q}
                <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-90" />
              </summary>
              <div className="border-t border-border px-5 pb-5 pt-3">
                <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#3b82f6]/5 via-[#8b5cf6]/5 to-transparent p-8 text-center sm:p-12">
        <h2 className="text-balance text-2xl font-semibold sm:text-3xl">¿No encuentras lo que buscas?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Cada empresa es diferente. Cuéntame tu proceso y te propongo una solución a la medida, 
          sin compromiso.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gradient" size="lg">
            <a href="https://wa.me/573124249342?text=Hola%20Jorge%2C%20quiero%20una%20asesor%C3%ADa%20personalizada" target="_blank" rel="noopener noreferrer">
              Agenda una asesoría gratuita
              <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              Ver mi portafolio
              <ExternalLink />
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
