import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ScrollLink } from "@/components/layout/scroll-link";
import { about } from "@/content/profile";
import { site } from "@/content/site";
import { capabilities } from "@/content/hero-tech";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 pb-8 pt-5 sm:pb-10 sm:pt-5">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Retrato */}
        <Reveal className="relative mx-auto w-full max-w-[30rem] lg:mx-0">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-secondary/20 to-tertiary/20 blur-2xl"
          />
          <div className="border-gradient relative aspect-[4/5] overflow-hidden rounded-[1.75rem] glass">
            <div className="bg-dots absolute inset-0 opacity-40" />
            <Image
              src="/foto-perfil.png"
              alt={site.fullName}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl glass-strong px-3 py-2 text-xs">
              <span className="font-medium">{site.fullName}</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <MapPin className="size-3" />
                {site.location}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" />
              Sobre mí
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.15] sm:text-4xl">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-6 flex flex-col gap-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div
                  key={c.name}
                  className="relative w-full transition-transform duration-300 hover:-translate-y-1"
                  style={{ aspectRatio: `${c.img.width} / ${c.img.height}` }}
                >
                  <Image src={c.img} alt={c.name} fill sizes="240px" className="object-contain mix-blend-lighten" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gradient">
                <ScrollLink href="#contact">
                  Trabajemos juntos
                  <ArrowUpRight />
                </ScrollLink>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
