# Sistema de Diseño

La fuente de verdad viva son los tokens en [`app/globals.css`](../app/globals.css). Este documento explica el *porqué*.

## Inspiración

OpenAI · Vercel · Stripe · NVIDIA · Apple · Linear · Raycast · Framer.
Dark-first, minimalista, técnico. Mucho espacio en blanco, glassmorphism, glow sutil, bordes hairline, radios amplios. **Nada de colores tipo arcoíris.**

## Paleta

Tokens semánticos que cambian entre tema oscuro (principal) y claro. Definidos como custom properties y mapeados a utilidades Tailwind.

| Rol | Oscuro | Claro |
| --- | --- | --- |
| Fondo | `#030712` | `#ffffff` |
| Superficie | `#0a0f1c` | `#ffffff` |
| Superficie 2 | `#111a2e` | `#f6f8fc` |
| Texto | `#f8fafc` | `#050914` |
| Texto secundario | `#94a3b8` | `#475569` |
| Primario | `#3b82f6` | `#2563eb` |
| Secundario | `#8b5cf6` | `#7c3aed` |
| Terciario | `#06b6d4` | `#0891b2` |

Colores de marca (independientes del tema, para 3D/gradientes/glow): `--color-brand-blue`, `--color-brand-violet`, `--color-brand-cyan`.
El gradiente de marca es `azul → violeta → cian` (utilidad `.text-gradient`).

**Regla de oro:** la audacia se concentra en el Hero 3D y en un acento por sección. El resto, tranquilo y neutro.

## Tipografía

- **Display** (`--font-display`): Space Grotesk — títulos, cifras, hero.
- **Cuerpo** (`--font-sans`): Inter — texto e interfaz.
- **Alt** (`--font-alt`): Poppins — usos puntuales.
- **Mono** (`--font-mono`): Geist Mono — eyebrows, código, datos.

Escala fluida con `clamp` vía utilidades Tailwind. Títulos con `text-wrap: balance` y `tracking` negativo. Cifras con `tabular-nums`.

## Componentes

- **Botones** (`components/ui/button.tsx`): variantes `primary`, `gradient`, `outline`, `ghost`, `glass`. Radio completo (pill), glow en gradiente, `active:scale`.
- **Cards**: `rounded-2xl`, borde hairline, superficie translúcida, hover que eleva y activa glow. Muchas usan `TiltCard` (inclinación 3D + glow que sigue al cursor).
- **Glass**: utilidades `.glass` / `.glass-strong` (blur + saturación + borde translúcido).

## Movimiento

- Entradas con `Reveal`/`RevealGroup` (fade + desplazamiento al entrar en viewport).
- Microinteracciones en hover (elevación, glow, escala sutil).
- Parallax del 3D con el mouse; timeline que se "dibuja" con el scroll.
- **Todo respeta `prefers-reduced-motion`**: si está activo, se desactivan parallax, autoplay, smooth-scroll y animaciones no esenciales.

## No hacer

- Colores saturados fuera de la paleta.
- Sombras duras o degradados chillones.
- Animaciones que perjudiquen Core Web Vitals.
- Romper el modo oscuro o el smooth scroll (Lenis).
