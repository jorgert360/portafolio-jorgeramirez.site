import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { nav, site } from "@/content/site";
import { featuredTech } from "@/content/stack";
import { Logo } from "./logo";
import { SocialLinks } from "./social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-8">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Automatización, Inteligencia Artificial y desarrollo de software que
            convierten procesos en ventaja competitiva.
          </p>
          <SocialLinks />
        </div>

        <nav aria-label="Enlaces del pie">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Navegación
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4" />
              {site.location}
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {featuredTech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-surface-2/50 px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {site.fullName}. Todos los derechos reservados.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Diseñado y desarrollado con Next.js, Three.js y mucha ingeniería.
          </p>
        </div>
      </div>
    </footer>
  );
}
