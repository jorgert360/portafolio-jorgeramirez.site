/**
 * Identidad y narrativa personal.
 * Ver docs/PERSONAL_BRAND.md para el porqué de cada mensaje.
 */

/** Roles que rotan en el efecto typewriter del hero. */
export const roles: string[] = [
  "Automation Engineer",
  "Python Developer",
  "AI Engineer",
  "UiPath Specialist",
];

export const hero = {
  eyebrow: "Automation Engineer & AI Developer",
  /** Tres líneas del titular; la última se resalta con gradiente. */
  headline: ["Automatizo procesos.", "Desarrollo soluciones.", "Impulso resultados."],
  highlight: "resultados",
  subheadline:
    "Construyo soluciones inteligentes mediante Automatización, Inteligencia Artificial y Desarrollo de Software que optimizan procesos, ahorran tiempo y generan valor real para las empresas.",
} as const;

export const about = {
  title: "Ingeniería que convierte procesos en ventaja competitiva",
  paragraphs: [
    "Soy Jorge Luis Ramírez, Automation Engineer especializado en Inteligencia Artificial, Automatización de Procesos (RPA) y Desarrollo de Software. Ayudo a empresas a transformar procesos manuales en soluciones inteligentes mediante la integración de tecnologías como UiPath, Python, APIs, análisis de datos e Inteligencia Artificial, creando plataformas que automatizan operaciones, conectan sistemas y optimizan la toma de decisiones.",
    "Mi enfoque combina visión de negocio y desarrollo tecnológico para diseñar soluciones escalables, seguras y de alto impacto, capaces de reducir tiempos de ejecución, minimizar errores operativos y generar un valor tangible para cada organización.",
  ],
  focus: [
    "Automatización robótica de procesos (RPA)",
    "Ingeniería de IA y agentes",
    "Desarrollo web de alto rendimiento",
    "Integración de sistemas y APIs",
  ],
} as const;
