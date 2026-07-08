import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    period: "2026 — Actualidad",
    role: "Desarrollador RPA UiPath",
    company: "AOS · Banca",
    location: "Bogotá, Colombia",
    summary:
      "Lidero la migración de procesos legados de Pega hacia UiPath y su puesta en producción sobre Orchestrator.",
    highlights: [
      "Migración de procesos de Pega a UiPath sin interrumpir la operación bancaria.",
      "Desarrollo sobre ReFramework con manejo robusto de excepciones y reintentos.",
      "Integración con C#, Python y APIs REST para orquestar sistemas internos.",
      "Despliegue y monitoreo de robots desatendidos vía Orchestrator.",
    ],
    tech: ["UiPath", "ReFramework", "Orchestrator", "C#", "Python", "REST APIs"],
    badge: "Ui",
    accent: "#3B82F6",
  },
  {
    period: "2023 — 2026",
    role: "Analista de Automatización (RPA)",
    company: "Industria de Papel",
    location: "Cajicá, Colombia",
    summary:
      "Diseñé y mantuve el robot 'Alejo 2.0', que automatizó por completo el ingreso de datos del proceso PICI2.",
    highlights: [
      "Robot Alejo 2.0 en UiPath para automatizar el 100% del ingreso de datos (PICI2).",
      "Reducción del 45% en los tiempos de respuesta (SLA) del área.",
      "Reglas de negocio y validaciones que eliminaron errores de digitación manual.",
      "Documentación y handover para operación continua del bot.",
    ],
    tech: ["UiPath", "Python", "SQL", "Excel", "Orchestrator"],
    badge: "Py",
    accent: "#8B5CF6",
  },
  {
    period: "2019 — 2023",
    role: "Auxiliar Zona Franca",
    company: "Industria de Papel",
    location: "Cajicá, Colombia",
    summary:
      "Aseguré la interoperabilidad entre SAP y los sistemas de comercio exterior del país.",
    highlights: [
      "Interoperabilidad entre SAP y sistemas de comercio exterior (PICI2, SIGLO, MUISCA).",
      "Control documental y trazabilidad de operaciones de zona franca.",
      "Base operativa que originó las primeras iniciativas de automatización.",
    ],
    tech: ["SAP", "PICI2", "SIGLO", "MUISCA", "Excel"],
    badge: "SAP",
    accent: "#06B6D4",
  },
];
