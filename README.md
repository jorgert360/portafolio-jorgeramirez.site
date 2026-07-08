# Jorge Ramírez — Portfolio

> No es un simple portafolio. Es una marca profesional: una experiencia interactiva que transmite **innovación, ingeniería e inteligencia artificial**.

Portafolio de **Jorge Luis Ramírez Trochez** — Automation Engineer · AI Engineer · RPA/UiPath Specialist · Python Developer. Construido para parecer la home de una startup de IA de Silicon Valley.

## Antes de modificar cualquier archivo

Lee, en este orden:

1. [`docs/PROJECT_VISION.md`](docs/PROJECT_VISION.md) — la visión y el objetivo.
2. [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — identidad visual y tokens.
3. [`docs/PERSONAL_BRAND.md`](docs/PERSONAL_BRAND.md) — quién es Jorge y qué comunica la marca.
4. [`docs/AI_RULES.md`](docs/AI_RULES.md) — reglas obligatorias de desarrollo.

Todo el desarrollo debe respetar esos documentos. `CLAUDE.md` resume lo esencial para agentes de IA.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · GSAP · Three.js + React Three Fiber + Drei · Lenis · Radix UI · React Hook Form + Zod · MDX · Vercel Analytics.

## Desarrollo

```bash
npm install      # instala dependencias
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # build de producción
npm run start    # sirve el build
npm run lint     # ESLint
```

Requisitos: Node.js 20+.

## Estructura

```
app/                 Rutas (App Router): home, /projects, /blog, API, rutas SEO
components/
  ├─ ui/             Primitivas estilo shadcn (button, input, badge…)
  ├─ layout/         Header, Footer, navegación, redes
  ├─ sections/       Secciones de la home (Hero, Stack, Projects, Experience…)
  ├─ three/          Escena 3D (React Three Fiber) — carga perezosa
  ├─ motion/         Animaciones reutilizables (Reveal, TiltCard, Counter…)
  └─ projects/       Tarjeta de proyecto
content/             Datos tipados: projects, experience, stack, stats, site, blog
  └─ blog/           Artículos en MDX
lib/                 Utilidades: cn, seo, validaciones, formato
docs/                Marca, diseño y estrategia
public/              Imágenes, video, CV
```

## Pendientes para Jorge (personalización)

Búscalos con `// TODO(jorge)` o `// verificar`:

- **CV**: agrega `public/resume/Jorge_Ramirez_CV.pdf` (y `_EN.pdf`). Ver [`public/resume/README.md`](public/resume/README.md).
- **Redes**: confirma URLs de GitHub, LinkedIn y WhatsApp en [`content/site.ts`](content/site.ts).
- **Dominio**: actualiza `site.url` en `content/site.ts`.
- **Foto**: reemplaza el monograma de "Sobre mí" por tu foto (`components/sections/about.tsx`).
- **Imágenes de proyectos**: añade capturas en `public/projects/<slug>/cover.webp`.

## Despliegue

Optimizado para [Vercel](https://vercel.com): conecta el repo e importa. `sitemap.xml`, `robots.txt`, imagen OG y datos estructurados se generan automáticamente.

---

Diseñado y desarrollado con ingeniería. © Jorge Luis Ramírez Trochez.
