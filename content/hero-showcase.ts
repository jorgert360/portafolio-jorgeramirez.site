import type { StaticImageData } from "next/image";
// Imágenes reales importadas desde /imagenes-globo (optimizadas por next/image).
import tengoya from "@/imagenes-globo/tengoya.jpg";
import carweb from "@/imagenes-globo/carweb.jpg";
import histech from "@/imagenes-globo/histech.jpg";
import emisoras from "@/imagenes-globo/emisoras-latinas.jpg";

export interface ShowcaseCard {
  name: string;
  blurb: string;
  domain: string;
  href: string;
  image: StaticImageData;
  accent: string;
}

/**
 * Proyectos que se proyectan dentro del holograma (cuadrícula 2x2).
 * Para añadir uno nuevo: coloca la imagen en /imagenes-globo, impórtala arriba
 * y agrega una entrada aquí. El holograma se adapta automáticamente.
 */
export const showcase: ShowcaseCard[] = [
  {
    name: "TengoYa",
    blurb: "Marketplace de servicios locales",
    domain: "tengoya.com.co",
    href: "https://www.tengoya.com.co/",
    image: tengoya,
    accent: "#3b82f6",
  },
  {
    name: "CarWeb",
    blurb: "Diagnóstico automotriz OBD2",
    domain: "carweb.com.co",
    href: "https://www.carweb.com.co/",
    image: carweb,
    accent: "#06b6d4",
  },
  {
    name: "HiSTECH",
    blurb: "Infraestructura e Inteligencia Artificial",
    domain: "histech.com.co",
    href: "https://www.histech.com.co/",
    image: histech,
    accent: "#8b5cf6",
  },
  {
    name: "Emisoras Latinas",
    blurb: "Plataforma de radios online",
    domain: "emisoraslatinas.online",
    href: "https://www.emisoraslatinas.online/",
    image: emisoras,
    accent: "#22d3ee",
  },
];
