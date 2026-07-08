# Stack Tecnológico

## Del sitio (cómo está construido)

Next.js 16 · React 19 · TypeScript · Tailwind v4 · Framer Motion · GSAP · Three.js / R3F / Drei · Lenis · Radix · RHF + Zod · MDX · Vercel Analytics. Detalle en [`README.md`](../README.md) y [`CLAUDE.md`](../CLAUDE.md).

## De Jorge (lo que domina)

**Fuente de verdad:** [`content/stack.ts`](../content/stack.ts). Se renderiza en la sección Stack por categorías con tarjetas 3D y barras de nivel.

Categorías: RPA & Automatización · Lenguajes · Datos & IA · Frontend · Cloud & DevOps · Herramientas.

## Cómo actualizar

Edita el array `stack` en `content/stack.ts` (interfaz `TechItem`: name, category, accent, level). El acento sigue la paleta de marca (azul/violeta/cian) — nada de colores fuera de sistema.
