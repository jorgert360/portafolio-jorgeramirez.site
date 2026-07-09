"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "@/content/site";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = nav.filter((n) => n.href.startsWith("#")).map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isHome]);

  const hrefFor = (href: string) =>
    href.startsWith("#") ? (isHome ? href : `/${href}`) : href;

  const onHashClick = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (!href.startsWith("#") || !isHome) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -90 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3">
      <div
        className={cn(
          "mx-auto mt-3 flex h-14 max-w-6xl items-center justify-between gap-4 rounded-2xl px-3 transition-all duration-300 sm:px-4",
          scrolled
            ? "glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]"
            : "border border-transparent",
        )}
      >
        <Logo />

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = isHome && item.href === `#${active}`;
              return (
                <li key={item.href}>
                  <Link
                    href={hrefFor(item.href)}
                    onClick={(e) => onHashClick(e, item.href)}
                    className={cn(
                      "relative whitespace-nowrap rounded-full px-3.5 py-2 text-sm transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-surface-2" />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="gradient"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href="https://wa.me/573124249342?text=Hola%20Jorge%2C%20vi%20tu%20portafolio%20y%20quiero%20una%20consultor%C3%ADa" target="_blank" rel="noopener noreferrer">
              Consultoría gratuita
              <ArrowRight />
            </a>
          </Button>

          {/* Menú móvil */}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Abrir menú"
                className="grid size-10 place-items-center rounded-full border border-border-strong bg-surface-2/60 text-foreground lg:hidden"
              >
                <Menu className="size-4" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70 backdrop-blur-xl data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=open]:fade-in lg:hidden" />
              <Dialog.Content className="fixed inset-x-3 top-3 z-50 flex flex-col gap-2 rounded-2xl glass-strong p-4 shadow-2xl data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=open]:slide-in-from-top-4 lg:hidden">
                <div className="flex items-center justify-between">
                  <Logo />
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Cerrar menú"
                      className="grid size-10 place-items-center rounded-full border border-border-strong bg-surface-2/60"
                    >
                      <X className="size-4" />
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Title className="sr-only">Navegación</Dialog.Title>
                <nav aria-label="Móvil" className="mt-2">
                  <ul className="flex flex-col">
                    {nav.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={hrefFor(item.href)}
                          onClick={(e) => onHashClick(e, item.href)}
                          className="flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-surface-2"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
