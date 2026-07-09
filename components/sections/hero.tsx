"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Send, ChevronDown, Bot, BrainCircuit, Webhook, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollLink } from "@/components/layout/scroll-link";
import { SocialLinks } from "@/components/layout/social-links";
import { ProjectCard3D } from "@/components/three/ProjectCard3D";
import { showcase } from "@/content/hero-showcase";
import robotImg from "@/imagenes-globo/imagen-robot.webp";
import { techLogos } from "@/content/hero-tech";

/** Posición de la esfera DENTRO de la imagen del robot (% del contenedor). */
const SPHERE = { left: "34%", top: "40%", size: "26%" };

const sideTech = [
  { icon: Bot, label: "UiPath", sub: "" },
  { icon: Code2, label: "Python", sub: "" },
  { icon: BrainCircuit, label: "Inteligencia\nArtificial", sub: "" },
  { icon: Webhook, label: "APIs", sub: "Integraciones" },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#050816]">
      {/* ============ FONDO ============ */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <div className="absolute left-[42%] top-[6%] h-[52vh] w-[52vh] -translate-x-1/2 rounded-full bg-[#3b82f6]/30 blur-[140px]" />
        <div className="absolute right-[14%] top-[8%] h-[48vh] w-[48vh] rounded-full bg-[#8b5cf6]/30 blur-[140px]" />
        <div className="absolute bottom-[2%] left-[26%] h-[38vh] w-[38vh] rounded-full bg-[#22d3ee]/18 blur-[140px]" />
      </div>
      <div aria-hidden className="bg-grid absolute inset-0 -z-20 opacity-[0.25]" />

      {/* ============ BARRA SOCIAL DERECHA ============ */}
      <SocialLinks className="fixed right-3 top-[55%] z-40 hidden -translate-y-1/2 flex-col md:flex" />

      {/* ============ PANEL DERECHO ============ */}
      <div className="absolute right-3 top-28 z-30 hidden flex-col gap-2.5 xl:flex">
        {sideTech.map((t) => (
          <div key={t.label} className="glass flex items-center gap-2.5 rounded-xl border border-white/10 px-3 py-2 shadow-[0_0_24px_-8px_rgba(59,130,246,0.5)] transition-transform hover:-translate-x-0.5">
            <span className="grid size-8 place-items-center rounded-lg bg-[#3b82f6]/15 text-[#60a5fa]">
              <t.icon className="size-4" />
            </span>
            <span className="whitespace-pre-line text-xs font-medium leading-tight text-slate-200">
              {t.label}
              {t.sub && <span className="block text-[10px] text-slate-400">{t.sub}</span>}
            </span>
          </div>
        ))}
      </div>

      {/* ============ CONTENIDO PRINCIPAL (ancho casi completo) ============ */}
      <motion.div
        initial={reduced ? false : "hidden"}
        animate="show"
        transition={{ staggerChildren: 0.07 }}
        className="relative z-10 mx-auto w-full max-w-[2200px] px-[3vw] pb-16 pt-24 sm:pb-24"
      >
        {/* --- TEXTO --- */}
        <motion.span variants={fade} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur">
          <span className="text-[#3b82f6]">Automation Engineer</span>
          <span className="text-[#8b5cf6]">& Python Developer</span>
        </motion.span>

        <motion.h1 variants={fade} className="mt-4 max-w-[820px] font-display text-[clamp(2.25rem,4.14vw,4.05rem)] font-bold leading-[1.02] tracking-tight text-white">
          Automatizo tus procesos,
          <br />
          reduzco costos y
          <br />
          potencio tu
          <br />
          negocio con IA
        </motion.h1>

        <motion.p variants={fade} className="mt-5 max-w-[600px] text-[15px] leading-relaxed text-slate-300 sm:text-base">
          Construyo soluciones inteligentes mediante{" "}
          <span className="text-[#60a5fa]">Automatización</span>,{" "}
          <span className="text-[#a78bfa]">Inteligencia Artificial</span> y Desarrollo de Software que optimizan procesos, ahorran tiempo y generan valor real para las empresas.
        </motion.p>

        <motion.div variants={fade} className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="gradient" size="lg">
            <a href="https://wa.me/573124249342?text=Hola%20Jorge%2C%20vi%20tu%20portafolio%20y%20quiero%20consultar%20por%20una%20automatizaci%C3%B3n" target="_blank" rel="noopener noreferrer">
              Solicitar consultoría
              <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <ScrollLink href="#projects">
              Ver proyectos
              <Send />
            </ScrollLink>
          </Button>
        </motion.div>

        {/* --- COMPOSICIÓN ROBOT + ESFERA + TARJETAS --- */}
        <div
          className="pointer-events-none relative z-0 mx-auto mt-8 w-full max-w-[540px] lg:absolute lg:left-[30%] lg:top-[4.5rem] lg:mt-0 lg:w-[74%] lg:max-w-none xl:left-[30%] xl:w-[72%]"
          style={{ aspectRatio: `${robotImg.width} / ${robotImg.height}` }}
        >
          <div
            aria-hidden
            className="absolute -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35),rgba(59,130,246,0.16),transparent_62%)] blur-2xl"
            style={{ left: "34%", top: "40%", width: "46%", height: "46%", transform: "translate(-50%,-50%)" }}
          />
          {/* Halo interno de la esfera */}
          <div
            aria-hidden
            className="absolute rounded-full blur-xl"
            style={{ left: "34%", top: "40%", width: "34%", height: "34%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(56,189,248,0.15), rgba(139,92,246,0.08), transparent 70%)" }}
          />
          {/* Reflejo especular superior */}
          <div
            aria-hidden
            className="absolute rounded-full blur-sm"
            style={{ left: "28%", top: "33%", width: "12%", height: "8%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)" }}
          />
          <Image
            src={robotImg}
            alt="Robot JR sosteniendo una esfera holográfica con proyectos"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 72vw"
            className="object-contain [filter:drop-shadow(0_18px_50px_rgba(59,130,246,0.5))_drop-shadow(0_0_90px_rgba(139,92,246,0.35))] [mask-image:radial-gradient(ellipse_95%_92%_at_50%_47%,#000_72%,transparent)]"
          />
          <p className="absolute left-[30%] -translate-x-1/2 text-center font-display text-[12px] font-bold uppercase tracking-[0.28em] text-[#22d3ee] lg:text-[23px] lg:left-[47%] lg:top-[7%]" style={{ bottom: "6%", textShadow: "0 0 14px rgba(34,211,238,.9)" }}>
            Proyectos destacados
          </p>
          <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: SPHERE.top, left: SPHERE.left, width: SPHERE.size, perspective: "800px" }}>
            {/* Máscara circular: las tarjetas se desvanecen al acercarse al borde de la esfera */}
            <div className="grid grid-cols-2 gap-1 [mask-image:radial-gradient(circle_at_50%_50%,#000_60%,#000_75%,transparent_92%)]">
              {showcase.map((card, i) => (
                <ProjectCard3D key={card.name} card={card} index={i} />
              ))}
            </div>
            {/* Capa frontal de cristal (solo visual, sin blur sobre las tarjetas) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent" />
            {/* Reflejo tipo cristal */}
            <div aria-hidden className="pointer-events-none absolute top-[6%] left-[12%] right-[12%] h-[22%] rounded-full bg-gradient-to-b from-white/10 to-transparent blur-sm" />
          </div>
        </div>

        {/* --- TECNOLOGÍAS (logos individuales, fondo fundido) --- */}
        <motion.div variants={fade} className="mt-16 max-w-[900px]">
          <h2 className="mb-3 font-display text-lg font-semibold text-white">Tecnologías que domino</h2>
          <div className="flex flex-wrap items-start gap-x-1.5 gap-y-1">
            {techLogos.map((t) => {
              const isUiPath = t.name === "UiPath";
              const isPython = t.name === "Python";
              const isPandas = t.name === "Pandas";
              const isSql = t.name === "SQL";
              const isJs = t.name === "JavaScript";
              const isNext = t.name === "Next.js";
              const isPowerBi = t.name === "Power BI";
              const isAzure = t.name === "Azure";
              const isGitHub = t.name === "GitHub";
              const isApis = t.name === "APIs";
              const isBizagi = t.name === "Bizagi";
              const content = (
                <div
                  key={t.name}
                  className="relative w-[64px] shrink-0 transition-transform duration-300 hover:-translate-y-1"
                  style={{ aspectRatio: `${t.img.width} / ${t.img.height}` }}
                >
                  <Image src={t.img} alt={t.name} fill sizes="72px" className="object-contain mix-blend-lighten" />
                </div>
              );
              if (isUiPath) return <Link key={t.name} href="/stack/uipath">{content}</Link>;
              if (isPython) return <Link key={t.name} href="/stack/python">{content}</Link>;
              if (isPandas) return <Link key={t.name} href="/stack/pandas">{content}</Link>;
              if (isSql) return <Link key={t.name} href="/stack/sql">{content}</Link>;
              if (isJs) return <Link key={t.name} href="/stack/javascript">{content}</Link>;
              if (isNext) return <Link key={t.name} href="/stack/nextjs">{content}</Link>;
              if (isPowerBi) return <Link key={t.name} href="/stack/powerbi">{content}</Link>;
              if (isAzure) return <Link key={t.name} href="/stack/azure">{content}</Link>;
              if (isGitHub) return <Link key={t.name} href="/stack/github">{content}</Link>;
              if (isApis) return <Link key={t.name} href="/stack/apis">{content}</Link>;
              if (isBizagi) return <Link key={t.name} href="/stack/bizagi">{content}</Link>;
              return content;
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <ScrollLink href="#about" aria-label="Desplazarse hacia abajo" className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-white lg:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll para descubrir más</span>
        <motion.span animate={reduced ? undefined : { y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ChevronDown className="size-4" />
        </motion.span>
      </ScrollLink>
    </section>
  );
}
