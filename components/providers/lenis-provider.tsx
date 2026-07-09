"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function ScrollToTop() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

/**
 * Smooth scroll global con Lenis.
 * Se desactiva automáticamente si el usuario prefiere reducir el movimiento.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.5 }}
    >
      <ScrollToTop />
      {children}
    </ReactLenis>
  );
}
