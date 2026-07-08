/**
 * Tipos de dominio del portafolio.
 * Fuente única de verdad para el contenido tipado que consumen las secciones.
 */

export interface NavItem {
  label: string;
  href: string;
}

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "whatsapp"
  | "email"
  | "x";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  handle: string;
}

export interface Stat {
  /** Valor numérico final del contador animado. */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Cuando el valor no es contable (p. ej. "Miles"), se usa este texto. */
  display?: string;
  label: string;
  description: string;
}

export type TechCategory =
  | "RPA & Automatización"
  | "Lenguajes"
  | "Datos & IA"
  | "Frontend"
  | "Cloud & DevOps"
  | "Herramientas";

export interface TechItem {
  name: string;
  category: TechCategory;
  /** Color de acento para el glow de la tarjeta (HSL-friendly hex). */
  accent: string;
  /** Nivel de dominio 0-100 para barras de progreso. */
  level: number;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  /** Etiqueta corta para el nodo del timeline (marca/logo textual). */
  badge: string;
  accent: string;
}

export type ProjectType = "web" | "rpa" | "ai";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: ProjectType;
  featured: boolean;
  year: string;
  /** Descripción corta para la tarjeta. */
  summary: string;
  /** Descripción extendida para la cabecera del case study. */
  description: string;
  tech: string[];
  /** Chips visibles en la tarjeta (Next.js, SEO, AEO...). */
  tags: string[];
  problem: string;
  solution: string;
  architecture: string;
  results: string[];
  lessons: string[];
  metrics: ProjectMetric[];
  links: {
    live?: string;
    github?: string;
  };
  /** Ruta de imagen de portada en /public. */
  cover: string;
  video?: string;
  accent: string;
}
