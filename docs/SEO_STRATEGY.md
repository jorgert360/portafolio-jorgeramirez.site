# Estrategia SEO / AEO / GEO

Objetivo: **Lighthouse 100 en SEO**, Core Web Vitals en verde y elegibilidad para ser citado por motores de respuesta e IA.

## Implementado

### Técnico
- **Metadata por ruta** (`lib/seo.ts` + `generateMetadata`): title templado, description, canonical, keywords.
- **`sitemap.xml`** dinámico (`app/sitemap.ts`) con home, proyectos y artículos.
- **`robots.txt`** (`app/robots.ts`) con referencia al sitemap.
- **`manifest.webmanifest`** (`app/manifest.ts`).
- **Imagen OG dinámica** (`app/opengraph-image.tsx`) + Twitter Cards.
- Rendimiento: 3D perezoso, fuentes con `swap`, imágenes optimizadas, prerender estático.

### Datos estructurados (JSON-LD)
- `Person` y `WebSite` en el layout raíz.
- `BreadcrumbList` en proyectos y blog.
- `CreativeWork` por proyecto.
- `BlogPosting` + `BreadcrumbList` por artículo.
- `FAQPage` en artículos con preguntas frecuentes → clave para **AEO/GEO**.

### AEO / GEO (optimización para respuestas e IA)
- Encabezados claros que responden intenciones concretas.
- Bloques de FAQ marcados y visibles.
- Contenido conciso, con autoridad temática y consistencia.

## Checklist al publicar contenido nuevo

- [ ] Metadata única (title < 60c, description < 160c).
- [ ] Canonical correcta.
- [ ] Estructura de encabezados jerárquica (un solo `h1`).
- [ ] JSON-LD apropiado (Article/FAQ si aplica).
- [ ] Enlaces internos relevantes.
- [ ] Imágenes con `alt` descriptivo.
- [ ] Core Web Vitals verificados en móvil.

## Pendiente / mejora continua

- Añadir imágenes OG por proyecto y por artículo (`opengraph-image.tsx` anidados).
- Página `/blog` con filtros por categoría y RSS.
- Traducción EN para captar tráfico internacional (i18n).
