import type { StaticImageData } from "next/image";
import uipath from "@/imagenes-globo/uipath.png";
import python from "@/imagenes-globo/python.png";
import pandas from "@/imagenes-globo/pandas.png";
import sql from "@/imagenes-globo/sql.png";
import javascript from "@/imagenes-globo/javascript.png";
import nextjs from "@/imagenes-globo/nextjs.png";
import powerbi from "@/imagenes-globo/powerbi.png";
import azure from "@/imagenes-globo/azure.png";
import github from "@/imagenes-globo/github.png";
import apis from "@/imagenes-globo/apis.png";
import bizagi from "@/imagenes-globo/bizagi.png";
import automatizacionRpa from "@/imagenes-globo/automatizacion-rpa.png";
import pythonData from "@/imagenes-globo/python-data.png";
import inteligenciaArtificial from "@/imagenes-globo/inteligencia-artificial.png";
import desarrolloWeb from "@/imagenes-globo/desarrollo-web.png";

export interface TechImage {
  name: string;
  img: StaticImageData;
}

/** Logos de tecnología (cada imagen ya incluye su nombre). */
export const techLogos: TechImage[] = [
  { name: "UiPath", img: uipath },
  { name: "Python", img: python },
  { name: "Pandas", img: pandas },
  { name: "SQL", img: sql },
  { name: "JavaScript", img: javascript },
  { name: "Next.js", img: nextjs },
  { name: "Power BI", img: powerbi },
  { name: "Azure", img: azure },
  { name: "GitHub", img: github },
  { name: "APIs", img: apis },
  { name: "Bizagi", img: bizagi },
];

/** Tarjetas de capacidades (cada imagen ya incluye título y descripción). */
export const capabilities: TechImage[] = [
  { name: "Automatización RPA", img: automatizacionRpa },
  { name: "Python & Data", img: pythonData },
  { name: "Inteligencia Artificial", img: inteligenciaArtificial },
  { name: "Desarrollo Web", img: desarrolloWeb },
];
