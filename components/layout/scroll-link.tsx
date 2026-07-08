"use client";

import { useLenis } from "lenis/react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/** Ancla con smooth-scroll via Lenis (fallback nativo si Lenis está inactivo). */
export function ScrollLink({ href, children, onClick, ...props }: ScrollLinkProps) {
  const lenis = useLenis();
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (!href.startsWith("#")) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -80 });
        else target.scrollIntoView({ behavior: "smooth" });
      }}
      {...props}
    >
      {children}
    </a>
  );
}
