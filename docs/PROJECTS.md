# Proyectos

**Fuente de verdad:** [`content/projects.ts`](../content/projects.ts) (datos tipados que consumen las páginas). Edita ahí, no dupliques aquí.

Cada proyecto es un caso de éxito con: descripción, problema, solución, arquitectura, resultados, lecciones, métricas, tecnologías y enlaces. Se renderiza en `/projects` y en `/projects/[slug]`.

## Proyectos actuales

| Slug | Tipo | Destacado |
| --- | --- | --- |
| `emisoras-latinas` | Web | ✅ |
| `tengoya` | Web | ✅ |
| `carweb` | Web | ✅ |
| `histech` | Web | — |
| `christmas-radio` | Web | — |
| `robot-alejo` | RPA | ✅ |
| `migracion-pega-uipath` | RPA | — |
| `banco-colpatria` | RPA | — |

## Cómo añadir un proyecto

1. Agrega un objeto al array en `content/projects.ts` (respeta la interfaz `Project`).
2. Añade portada en `public/projects/<slug>/cover.webp` (y vídeo opcional).
3. Marca `featured: true` para mostrarlo en la home.

> Amplía cada caso con contexto real (métricas, decisiones de arquitectura). Cuanto más concreto, más creíble.
