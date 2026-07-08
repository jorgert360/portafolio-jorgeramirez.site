import type { ComponentType } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  /** Fecha de publicación en ISO (YYYY-MM-DD). */
  date: string;
  readingMinutes: number;
  tags: string[];
  accent: string;
  faq?: FaqItem[];
}

export const posts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-automatizar-proceso",
    title: "¿Cuánto cuesta automatizar un proceso en Colombia?",
    description:
      "Guía con precios reales, factores que determinan la inversión y ejemplos de proyectos RPA para que sepas exactamente cuánto presupuestar.",
    category: "Automatización",
    date: "2026-07-08",
    readingMinutes: 6,
    tags: ["Automatización", "RPA", "Costos", "UiPath"],
    accent: "#3b82f6",
    faq: [
      {
        question: "¿Cuánto cuesta un robot RPA básico?",
        answer: "Un proceso simple, como extraer datos de Excel y cargarlos en un formulario web, puede costar entre $1.5M y $3M COP dependiendo del volumen y las validaciones necesarias.",
      },
      {
        question: "¿Cuánto tiempo toma implementar un robot?",
        answer: "Un proceso simple puede estar listo en 1-2 semanas. Procesos complejos con integraciones múltiples pueden tomar 4-8 semanas incluyendo pruebas y documentación.",
      },
    ],
  },
  {
    slug: "rpa-vs-ia-cual-necesito",
    title: "RPA vs IA: ¿cuál necesito para mi empresa?",
    description:
      "Diferencias clave entre Automatización Robótica de Procesos e Inteligencia Artificial, cuándo usar cada una y cómo combinarlas para obtener el máximo ROI.",
    category: "IA",
    date: "2026-07-07",
    readingMinutes: 5,
    tags: ["RPA", "IA", "Automatización", "Machine Learning"],
    accent: "#8b5cf6",
    faq: [
      {
        question: "¿RPA reemplaza a la IA?",
        answer: "No. Son tecnologías complementarias. RPA automatiza acciones basadas en reglas; IA automatiza decisiones basadas en datos. Juntas son más poderosas.",
      },
      {
        question: "¿Qué es más caro, RPA o IA?",
        answer: "Generalmente la IA requiere una inversión inicial mayor (datos, entrenamiento, infraestructura), mientras que RPA tiene un costo más predecible por proyecto. La combinación de ambas ofrece el mejor retorno.",
      },
    ],
  },
  {
    slug: "automatiza-primer-proceso-uipath",
    title: "Automatiza tu primer proceso con UiPath y ReFramework",
    description:
      "Guía práctica para pasar de un flujo manual a un robot mantenible con el Robotic Enterprise Framework: colas, excepciones y buenas prácticas.",
    category: "UiPath",
    date: "2026-06-18",
    readingMinutes: 8,
    tags: ["UiPath", "RPA", "ReFramework"],
    accent: "#3b82f6",
    faq: [
      {
        question: "¿Qué es ReFramework en UiPath?",
        answer:
          "El Robotic Enterprise Framework es una plantilla de UiPath basada en máquina de estados que estandariza el manejo de transacciones, excepciones y reintentos para automatizaciones de nivel empresarial.",
      },
      {
        question: "¿Necesito Orchestrator para empezar?",
        answer:
          "No es obligatorio para practicar, pero Orchestrator es lo que te permite desplegar robots desatendidos, gestionar colas y monitorear ejecuciones en producción.",
      },
    ],
  },
  {
    slug: "python-pandas-automatizacion-datos",
    title: "De datos a decisiones: automatización con Python y Pandas",
    description:
      "Cómo convertir reportes manuales de Excel en pipelines reproducibles con Python y Pandas, listos para escalar y auditar.",
    category: "Python",
    date: "2026-05-30",
    readingMinutes: 7,
    tags: ["Python", "Pandas", "Automatización"],
    accent: "#8b5cf6",
  },
  {
    slug: "seo-tecnico-para-desarrolladores",
    title: "SEO técnico para desarrolladores: de Core Web Vitals al AEO",
    description:
      "Qué mueve realmente el posicionamiento en 2026: rendimiento, datos estructurados y optimización para respuestas de IA (AEO/GEO).",
    category: "SEO",
    date: "2026-05-12",
    readingMinutes: 9,
    tags: ["SEO", "Next.js", "AEO"],
    accent: "#06b6d4",
    faq: [
      {
        question: "¿Qué es AEO?",
        answer:
          "AEO (Answer Engine Optimization) es la optimización de tu contenido para que motores de respuesta e IA generativa lo citen. Se apoya en datos estructurados claros, respuestas concisas y autoridad temática.",
      },
      {
        question: "¿Los Core Web Vitals siguen importando en 2026?",
        answer:
          "Sí. LCP, INP y CLS siguen siendo señales de experiencia de página. Un sitio rápido y estable mejora tanto el ranking como la conversión.",
      },
    ],
  },
];

/** Mapa slug → cargador dinámico del MDX (specifiers estáticos para el bundler). */
export const postComponents: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "automatiza-primer-proceso-uipath": () =>
    import("./blog/automatiza-primer-proceso-uipath.mdx"),
  "python-pandas-automatizacion-datos": () =>
    import("./blog/python-pandas-automatizacion-datos.mdx"),
  "seo-tecnico-para-desarrolladores": () =>
    import("./blog/seo-tecnico-para-desarrolladores.mdx"),
  "cuanto-cuesta-automatizar-proceso": () =>
    import("./blog/cuanto-cuesta-automatizar-proceso.mdx"),
  "rpa-vs-ia-cual-necesito": () =>
    import("./blog/rpa-vs-ia-cual-necesito.mdx"),
};

export const sortedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export const blogCategories = [
  "Automatización",
  "RPA",
  "UiPath",
  "IA",
  "Python",
  "APIs",
  "Next.js",
  "SEO",
  "Costos",
];
