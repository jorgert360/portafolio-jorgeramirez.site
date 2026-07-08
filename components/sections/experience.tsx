"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/content/experience";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-8 sm:py-10">
      <SectionHeading
        eyebrow="Trayectoria"
        title={
          <>
            Mi <span className="text-gradient">experiencia</span>
          </>
        }
        description="De la operación en zona franca a liderar automatizaciones en banca. Cada paso, una capa más de ingeniería."
      />

      <ol ref={ref} className="relative mt-14 flex flex-col gap-12">
        {/* Rail base */}
        <span
          aria-hidden
          className="absolute bottom-2 left-5 top-2 w-px bg-border"
        />
        {/* Rail que se dibuja con el scroll */}
        <motion.span
          aria-hidden
          className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-primary via-secondary to-tertiary"
          style={reduced ? undefined : { scaleY }}
        />

        {experience.map((exp, i) => (
          <li key={exp.period} className="relative pl-16">
            {/* Nodo */}
            <Reveal
              delay={0.05}
              className="absolute left-0 top-0"
            >
              <span
                className="relative grid size-10 place-items-center rounded-full border bg-background font-display text-xs font-bold"
                style={{
                  color: exp.accent,
                  borderColor: `${exp.accent}66`,
                  boxShadow: `0 0 22px -6px ${exp.accent}`,
                }}
              >
                {exp.badge}
              </span>
            </Reveal>

            <Reveal delay={0.08 * i}>
              <div className="rounded-2xl border border-border bg-surface-2/40 p-5 transition-colors hover:border-border-strong sm:p-6">
                <span
                  className="font-mono text-xs font-medium"
                  style={{ color: exp.accent }}
                >
                  {exp.period}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {exp.summary}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full"
                        style={{ background: exp.accent }}
                      />
                      <span className="text-foreground/90">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="default" className="text-[11px]">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
