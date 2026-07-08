"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ShowcaseCard } from "@/content/hero-showcase";

/** Flotación desincronizada por tarjeta (máx. ~5px / ~2°). */
const floatConfigs = [
  { y: 4, r: 1.4, d: 5.6, z: 34, delay: 0 },
  { y: 5, r: -1.2, d: 6.9, z: 12, delay: 0.7 },
  { y: 3.6, r: 1.8, d: 6.3, z: -16, delay: 1.2 },
  { y: 4.6, r: -1.6, d: 7.5, z: 22, delay: 0.35 },
];

/** Perspectiva sutil diferente por tarjeta para romper el plano. */
const perspectives = [
  { rotateX: 3, rotateY: -4, scale: 0.97 },
  { rotateX: -2, rotateY: 5, scale: 0.96 },
  { rotateX: 4, rotateY: 3, scale: 0.99 },
  { rotateX: -3, rotateY: -2, scale: 1.0 },
];

/**
 * Tarjeta de proyecto holográfica con efecto 3D, iluminación esférica
 * y profundidad variable para simular suspensión dentro del holograma.
 */
export function ProjectCard3D({
  card,
  index,
}: {
  card: ShowcaseCard;
  index: number;
}) {
  const reduced = useReducedMotion();
  const cfg = floatConfigs[index % floatConfigs.length];
  const p = perspectives[index % perspectives.length];

  return (
    <div
      style={{
        transform: `translateZ(${cfg.z}px) rotateX(${reduced ? 0 : p.rotateX}deg) rotateY(${reduced ? 0 : p.rotateY}deg) scale(${p.scale})`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${card.name} — ${card.domain}`}
        className="group relative block aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-sky-300/20 bg-slate-950/60"
        style={{
          pointerEvents: "auto",
          boxShadow:
            "inset 0 1px 0 0 rgba(255,255,255,.12), inset 0 0 18px -6px rgba(56,189,248,.35), 0 0 26px -10px rgba(59,130,246,.45), 0 0 40px -14px rgba(139,92,246,.5)",
        }}
        initial={false}
        animate={
          reduced ? undefined : { y: [0, -cfg.y, 0, cfg.y, 0], rotateZ: [0, cfg.r, 0, -cfg.r, 0] }
        }
        transition={{ duration: cfg.d, repeat: Infinity, ease: "easeInOut", delay: cfg.delay }}
        whileHover={
          reduced ? undefined : { scale: 1.05, z: 70, rotateZ: 0, transition: { duration: 0.3, ease: "easeOut" } }
        }
      >
        {/* Imagen a sangre completa */}
        <Image
          src={card.image}
          alt={`Vista del proyecto ${card.name}`}
          fill
          sizes="220px"
          quality={72}
          placeholder="blur"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
        />

        {/* Iluminación esférica: brillo azul inferior */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sky-400/20 via-sky-400/5 to-transparent" />
        {/* Iluminación esférica: resplandor morado lateral */}
        <span className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-purple-500/10 to-transparent" />
        <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-purple-500/10 to-transparent" />
        {/* Reflexión superior */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/25 to-transparent" />
        {/* Scrim inferior para legibilidad del nombre */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/10 to-transparent" />

        {/* Solo el nombre del proyecto */}
        <span
          className="absolute inset-x-0 bottom-0 truncate px-2 pb-2 text-center text-[12px] font-semibold text-white"
          style={{ textShadow: "0 0 10px rgba(56,189,248,.65)" }}
        >
          {card.name}
        </span>

        {/* Borde luminoso en hover */}
        <span className="pointer-events-none absolute inset-0 rounded-[1.4rem] ring-1 ring-inset ring-sky-300/0 transition-all duration-300 group-hover:ring-sky-300/60" />
      </motion.a>
    </div>
  );
}
