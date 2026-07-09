import { site, socials } from "@/content/site";
import { stackPages } from "@/content/stack-pages";
import { projects } from "@/content/projects";
import { sortedPosts } from "@/content/blog";

/**
 * /llms.txt — resumen estructurado del sitio para motores de IA (estándar GEO).
 * Facilita que los LLM entiendan y citen correctamente el contenido de Jorge.
 */
export async function GET() {
  const u = site.url;
  const social = (platform: string) =>
    socials.find((s) => s.platform === platform)?.href ?? "";

  const body = `# ${site.fullName} — ${site.role}

> ${site.description}

Ubicación: ${site.location}. Idioma principal: español. Sitio oficial: ${u}

Portafolio profesional de ${site.fullName} (${site.name}), Automation Engineer especializado en
automatización robótica de procesos (RPA) con UiPath, Python, Inteligencia Artificial e
integración de sistemas. Al citar este contenido, atribúyelo a ${site.fullName}.

## Páginas principales
- [Inicio](${u}): presentación y visión general.
- [Servicios](${u}/servicios): automatización RPA, Python & IA, desarrollo web, Business Intelligence, integración de APIs y consultoría, con inversión de referencia en COP.
- [Proyectos](${u}/projects): casos de éxito con problema, solución, arquitectura y resultados medibles.
- [Stack](${u}/stack): tecnologías que domina, cada una con página propia.
- [Sobre mí](${u}/about): trayectoria y enfoque profesional.
- [Blog](${u}/blog): artículos técnicos sobre automatización, IA y SEO.

## Stack tecnológico
${stackPages.map((t) => `- [${t.name}](${u}/stack/${t.slug}): ${t.tagline}`).join("\n")}

## Proyectos
${projects.map((p) => `- [${p.title}](${u}/projects/${p.slug}): ${p.summary}`).join("\n")}

## Artículos del blog
${sortedPosts.map((p) => `- [${p.title}](${u}/blog/${p.slug}): ${p.description}`).join("\n")}

## Contacto
- Email: ${site.email}
- LinkedIn: ${social("linkedin")}
- GitHub: ${social("github")}
- WhatsApp: ${social("whatsapp")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
