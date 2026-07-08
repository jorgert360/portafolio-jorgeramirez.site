@AGENTS.md

# CLAUDE.md — Portafolio Jorge Ramírez

Guía operativa para agentes de IA. **Léelo completo antes de tocar cualquier archivo.**
El contexto extendido vive en `/docs`. Empieza por `docs/PROJECT_VISION.md`, `docs/DESIGN_SYSTEM.md` y `docs/AI_RULES.md`.

## Qué es esto

Portafolio de marca personal de Jorge Luis Ramírez (Automation Engineer · AI Engineer · RPA/UiPath · Python).
Objetivo: que parezca la home de una startup de IA de Silicon Valley y provoque un "WOW" inmediato.
No es una web corporativa; es una **experiencia interactiva** premium candidata a Awwwards.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript estricto
- Tailwind CSS v4 (config CSS-first en `app/globals.css`, tokens con `@theme`)
- Framer Motion + GSAP (`@gsap/react`) para motion
- Three.js + React Three Fiber + Drei + postprocessing para 3D
- Lenis para smooth scroll
- Componentes UI estilo shadcn (Radix + CVA) en `components/ui`
- React Hook Form + Zod (formularios), MDX (blog), next-themes (tema)
- Vercel Analytics + Speed Insights

## Next.js 16 — cuidado con estos breaking changes

- `params` y `searchParams` son **async** (`Promise`). Usa `const { slug } = await params`.
- `next/dynamic` con `ssr: false` **solo dentro de Client Components**. Los wrappers 3D llevan `"use client"`.
- Metadata: `viewport`/`themeColor` van en `export const viewport: Viewport`, no en `metadata`.
- MDX requiere `mdx-components.tsx` en la raíz y `createMDX` en `next.config.ts`.
- Turbopack es el bundler por defecto (dev y build).

## Arquitectura de carpetas

```
app/                 Rutas (App Router). Home compone secciones; /blog usa MDX.
components/
  ├─ ui/             Primitivas reutilizables estilo shadcn (button, input…).
  ├─ layout/         Header, Footer, navegación.
  ├─ sections/       Secciones de la home (Hero, Stack, Projects, Timeline…).
  ├─ three/          Escenas y objetos R3F (aislados, cargados con dynamic()).
  └─ motion/         Wrappers de animación reutilizables (Reveal, Magnetic…).
content/             Datos tipados (projects, experience, stack, stats, site…).
lib/                 Utilidades y hooks (cn, useMousePosition, seo…).
docs/                Documentación de marca, diseño y estrategia.
public/              Imágenes, video, CV, OG.
```

## Reglas de oro (resumen de docs/AI_RULES.md)

1. **Nunca reemplaces un componente completo si solo cambias una parte.** Edita quirúrgicamente.
2. **Nunca rompas el responsive** (mobile-first) ni elimines animaciones existentes sin pedirlo.
3. **Reutiliza** componentes y tokens; no dupliques código ni valores de color hardcodeados.
4. **TypeScript estricto**: sin `any` implícito, props tipadas, datos desde `content/`.
5. **Rendimiento primero**: todo lo 3D/pesado va con `next/dynamic` (`ssr:false`), lazy loading y `prefers-reduced-motion`. No sacrifiques Lighthouse por una animación.
6. **Accesibilidad WCAG 2.2**: foco visible, contraste AA, `aria-*`, navegación por teclado.
7. Colores y tipografía **solo** vía tokens definidos en `app/globals.css`. Cero colores tipo arcoíris.
8. Comentarios solo donde aporten; el código limpio se explica solo.

## Comandos

```bash
npm run dev      # desarrollo (Turbopack)
npm run build    # build de producción
npm run lint     # ESLint
```

## Identidad visual (tokens en app/globals.css)

- Fondo `#030712` · Primario `#3B82F6` · Secundario `#8B5CF6` · Terciario `#06B6D4`
- Texto `#F8FAFC` · Texto secundario `#94A3B8`
- Display: Space Grotesk · Cuerpo: Inter · Alt: Poppins · Mono: Geist Mono
- Estética: dark-first, glassmorphism, glow sutil, mucho espacio, bordes hairline, radios XL.
