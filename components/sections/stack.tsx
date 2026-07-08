"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/motion/marquee";
import { Reveal } from "@/components/motion/reveal";
import { stack } from "@/content/stack";

export function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-8 sm:py-10">
      <SectionHeading
        eyebrow="Stack"
        title={
          <>
            Tecnologías que <span className="text-gradient">domino</span>
          </>
        }
        description="De la automatización robótica a la ingeniería de software: las herramientas con las que construyo soluciones de punta a punta."
      />

      <Reveal className="mt-10">
        <Marquee className="border-y border-border py-4">
          {stack.map((t) => (
            <span
              key={t.name}
              className="mx-5 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground"
            >
              <span
                className="size-1.5 rounded-full"
                style={{ background: t.accent }}
              />
              {t.name}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
