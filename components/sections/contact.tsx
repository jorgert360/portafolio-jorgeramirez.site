"use client";

import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SocialLinks } from "@/components/layout/social-links";
import { WhatsappIcon } from "@/components/icons/brand";
import { site, socials } from "@/content/site";

const whatsapp = socials.find((s) => s.platform === "whatsapp");

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-8 sm:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40vh] w-[40vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]"
      />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Info */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" />
              Contacto
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
              ¿Tienes un proyecto <span className="text-gradient">en mente</span>?
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              Hablemos y construyamos algo increíble juntos. Cuéntame tu proceso y
              te propongo cómo la automatización y la IA pueden transformarlo.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface-2/40 p-4 transition-colors hover:border-primary/50"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-primary/12 text-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">Email</span>
                  <span className="font-medium">{site.email}</span>
                </span>
              </a>

              {whatsapp && (
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface-2/40 p-4 transition-colors hover:border-primary/50"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-emerald-500/12 text-emerald-400">
                    <WhatsappIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      WhatsApp
                    </span>
                    <span className="font-medium">Chatea conmigo</span>
                  </span>
                </a>
              )}

              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface-2/40 p-4">
                <span className="grid size-11 place-items-center rounded-lg bg-secondary/12 text-secondary">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Ubicación
                  </span>
                  <span className="font-medium">{site.location}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8">
              <p className="mb-3 text-sm text-muted-foreground">Sígueme en</p>
              <SocialLinks />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
