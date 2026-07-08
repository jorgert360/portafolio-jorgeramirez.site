"use client";

import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Gerente de Operaciones",
    company: "Industria Manufacturera",
    text: "El robot que desarrolló Jorge automatizó por completo nuestro proceso de ingreso de datos. Pasamos de 3 horas diarias de digitación manual a cero errores en tiempo récord. La inversión se recuperó en menos de 4 meses.",
    rating: 5,
    highlight: "Inversión recuperada en 4 meses",
  },
  {
    name: "María Fernanda López",
    role: "Directora de TI",
    company: "Sector Bancario",
    text: "Necesitábamos migrar procesos críticos de Pega a UiPath sin interrumpir la operación. Jorge diseñó una arquitectura escalable que nos permitió migrar progresivamente con cero downtime.",
    rating: 5,
    highlight: "Migración con cero downtime",
  },
  {
    name: "Andrés Torres",
    role: "CEO",
    company: "Agencia Digital",
    text: "Jorge desarrolló la plataforma web de nuestra empresa con Next.js. La velocidad de carga, el SEO y la experiencia de usuario superaron nuestras expectativas. 100% recomendado para proyectos serios.",
    rating: 5,
    highlight: "Plataforma web de alto rendimiento",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-6xl px-6 py-8 sm:py-10">
      <Reveal className="flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" />
          Testimonios
        </span>
        <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
          Lo que dicen quienes han trabajado conmigo
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Clientes y colegas que han visto los resultados de primera mano.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={0.08 * i} className="flex">
            <div className="relative flex flex-col rounded-2xl border border-border bg-surface-2/40 p-6 transition-all duration-300 hover:border-border-strong">
              <Quote className="absolute right-5 top-5 size-8 text-primary/20" />
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-4 fill-[#f2c811] text-[#f2c811]" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                {t.highlight}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
