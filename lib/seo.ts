import type { Metadata } from "next";
import { site, socials } from "@/content/site";

/**
 * Metadata base reutilizable por todas las rutas.
 * La imagen OG la inyecta automáticamente `app/opengraph-image.tsx`.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Automatización e Inteligencia Artificial · ${site.name}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  applicationName: `${site.name} Portfolio`,
  alternates: { canonical: "/" },
  // Verificación de Google Search Console: se emite solo si defines
  // GOOGLE_SITE_VERIFICATION en el entorno (Vercel → Environment Variables).
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: `${site.fullName} — Portfolio`,
    title: `Automatización e Inteligencia Artificial · ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Automatización e Inteligencia Artificial · ${site.name}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

/** JSON-LD: identidad profesional (Person). */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: "Automation Engineer · AI Engineer",
  description: site.description,
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: "+573124249342",
  image: `${site.url}/foto-perfil.png`,
  nationality: { "@type": "Country", name: "Colombia" },
  knowsLanguage: ["es", "en"],
  hasOccupation: {
    "@type": "Occupation",
    name: "Automation Engineer",
    occupationalCategory: "15-1252.00",
    skills:
      "RPA, UiPath, Python, Inteligencia Artificial, Next.js, Integración de sistemas, APIs",
  },
  sameAs: socials
    .filter((s) => s.platform !== "email")
    .map((s) => s.href),
  knowsAbout: [
    "RPA",
    "UiPath",
    "Automatización de procesos",
    "Python",
    "Inteligencia Artificial",
    "Next.js",
    "Integración de sistemas",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  areaServed: { "@type": "Country", name: "Colombia" },
};

/** JSON-LD: sitio web con búsqueda. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.fullName} — Portfolio`,
  url: site.url,
  inLanguage: "es",
  publisher: { "@type": "Person", name: site.fullName },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
