# Experiencia

**Fuente de verdad:** [`content/experience.ts`](../content/experience.ts). Se renderiza en el timeline animado de la home (`components/sections/experience.tsx`).

No es una copia del CV: cada rol amplía problema, qué se hizo, tecnologías y resultados.

## Trayectoria

1. **2026 — Actualidad · Desarrollador RPA UiPath** — AOS · Banco Colpatria (Davivienda). Migración Pega → UiPath, ReFramework, Orchestrator, integración C#/Python/APIs.
2. **2023 — 2026 · Analista de Automatización (RPA)** — Productos Familia (Cajicá). Robot "Alejo 2.0": 100% del ingreso de datos automatizado (PICI2), −45% en SLA.
3. **2019 — 2023 · Auxiliar Zona Franca** — Productos Familia (Cajicá). Interoperabilidad SAP ↔ comercio exterior (PICI2, SIGLO, MUISCA).

## Cómo actualizar

Edita el array `experience` en `content/experience.ts`. Cada entrada respeta la interfaz `ExperienceItem` (period, role, company, summary, highlights, tech, badge, accent).
