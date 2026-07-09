/**
 * Tecnologías con página propia en /stack/<slug>.
 * Fuente única de verdad para el hub (`app/stack/page.tsx`) y el `sitemap.ts`.
 * El destino de cada tarjeta coincide con el de los logos del hero: /stack/<slug>.
 */
export interface StackPage {
  slug: string;
  /** Nombre visible; coincide con el usado en el breadcrumb de cada página. */
  name: string;
  tagline: string;
  accent: string;
}

const BLUE = "#3B82F6";
const VIOLET = "#8B5CF6";
const CYAN = "#06B6D4";

export const stackPages: StackPage[] = [
  { slug: "uipath", name: "UiPath", tagline: "Automatización robótica de procesos (RPA) empresarial.", accent: BLUE },
  { slug: "python", name: "Python", tagline: "Automatización, datos e Inteligencia Artificial.", accent: VIOLET },
  { slug: "pandas", name: "Pandas", tagline: "Análisis y transformación de datos a escala.", accent: CYAN },
  { slug: "sql", name: "SQL", tagline: "Modelado y consultas sobre bases de datos relacionales.", accent: VIOLET },
  { slug: "javascript", name: "JavaScript", tagline: "Interactividad y lógica para la web moderna.", accent: VIOLET },
  { slug: "nextjs", name: "Next.js", tagline: "Aplicaciones web full-stack de alto rendimiento.", accent: BLUE },
  { slug: "powerbi", name: "Power BI", tagline: "Dashboards y business intelligence para decidir con datos.", accent: CYAN },
  { slug: "azure", name: "Microsoft Azure", tagline: "Servicios cloud e infraestructura escalable.", accent: VIOLET },
  { slug: "github", name: "Git & GitHub", tagline: "Control de versiones y flujos DevOps.", accent: CYAN },
  { slug: "apis", name: "REST APIs", tagline: "Integración entre sistemas, servicios y plataformas.", accent: CYAN },
  { slug: "bizagi", name: "Bizagi", tagline: "Modelado de procesos BPMN y automatización.", accent: BLUE },
];
