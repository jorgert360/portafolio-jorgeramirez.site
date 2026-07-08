import type { TechItem, TechCategory } from "./types";

const BLUE = "#3B82F6";
const VIOLET = "#8B5CF6";
const CYAN = "#06B6D4";

export const stack: TechItem[] = [
  // RPA & Automatización
  { name: "UiPath", category: "RPA & Automatización", accent: BLUE, level: 95 },
  { name: "Bizagi", category: "RPA & Automatización", accent: BLUE, level: 80 },
  { name: "SAP", category: "RPA & Automatización", accent: BLUE, level: 78 },
  // Lenguajes
  { name: "Python", category: "Lenguajes", accent: VIOLET, level: 92 },
  { name: "TypeScript", category: "Lenguajes", accent: VIOLET, level: 85 },
  { name: "JavaScript", category: "Lenguajes", accent: VIOLET, level: 88 },
  { name: "SQL", category: "Lenguajes", accent: VIOLET, level: 85 },
  // Datos & IA
  { name: "Pandas", category: "Datos & IA", accent: CYAN, level: 88 },
  { name: "NumPy", category: "Datos & IA", accent: CYAN, level: 82 },
  { name: "OpenAI", category: "Datos & IA", accent: CYAN, level: 84 },
  { name: "Power BI", category: "Datos & IA", accent: CYAN, level: 80 },
  // Frontend
  { name: "React", category: "Frontend", accent: BLUE, level: 87 },
  { name: "Next.js", category: "Frontend", accent: BLUE, level: 88 },
  // Cloud & DevOps
  { name: "Azure", category: "Cloud & DevOps", accent: VIOLET, level: 78 },
  { name: "Docker", category: "Cloud & DevOps", accent: VIOLET, level: 76 },
  { name: "Node.js", category: "Cloud & DevOps", accent: VIOLET, level: 82 },
  // Herramientas
  { name: "Git", category: "Herramientas", accent: CYAN, level: 88 },
  { name: "GitHub", category: "Herramientas", accent: CYAN, level: 88 },
  { name: "REST APIs", category: "Herramientas", accent: CYAN, level: 86 },
];

/** Orden canónico de categorías para render. */
export const techCategories: TechCategory[] = [
  "RPA & Automatización",
  "Lenguajes",
  "Datos & IA",
  "Frontend",
  "Cloud & DevOps",
  "Herramientas",
];

/** Tecnologías destacadas para el marquee/hexágonos del hero-stack. */
export const featuredTech: string[] = [
  "UiPath",
  "Python",
  "Pandas",
  "SQL",
  "JavaScript",
  "Next.js",
  "Power BI",
  "Azure",
];
