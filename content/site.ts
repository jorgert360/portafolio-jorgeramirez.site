import type { NavItem, SocialLink } from "./types";

/**
 * Configuración global del sitio.
 * TODO(jorge): reemplaza los handles marcados con "// verificar" por los reales.
 */
export const site = {
  name: "Jorge Ramírez",
  fullName: "Jorge Luis Ramírez Trochez",
  initials: "JR",
  role: "Automation Engineer · AI Engineer",
  url: "https://www.jorgeramirez.site",
  locale: "es_CO",
  location: "Bogotá, Colombia",
  email: "jorge.ramtroz1989@gmail.com",
  phone: "+57 312 424 9342",
  description:
    "Construyo soluciones inteligentes mediante Automatización, Inteligencia Artificial y Desarrollo de Software. Especialista en RPA con UiPath, Python e IA.",
  keywords: [
    "Automation Engineer",
    "RPA Developer",
    "UiPath Specialist",
    "Python Developer",
    "AI Engineer",
    "Ingeniero de Automatización",
    "Jorge Ramírez",
    "Next.js",
    "Inteligencia Artificial",
  ],
} as const;

export const nav: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre mí", href: "/about" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#projects" },
  { label: "Innovación", href: "#innovacion" },
  { label: "Experiencia", href: "#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "#contact" },
];

export const socials: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/Jorgert360",
    handle: "@Jorgert360",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jorge-luis-ramirez-trochez-19b4a7286",
    handle: "in/jorge-luis-ramirez-trochez-19b4a7286",
  },
  {
    platform: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/573124249342",
    handle: "Escríbeme",
  },
  {
    platform: "email",
    label: "Email",
    href: "mailto:jorge.ramtroz1989@gmail.com",
    handle: "jorge.ramtroz1989@gmail.com",
  },
];
