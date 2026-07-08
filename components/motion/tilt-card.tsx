"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Color del glow que sigue al cursor. */
  glow?: string;
  /** Amplitud de la inclinación en grados. */
  intensity?: number;
}

/** Tarjeta con inclinación 3D y glow radial que sigue al puntero. */
export function TiltCard({
  children,
  className,
  glow = "#3b82f6",
  intensity = 7,
}: TiltCardProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 160,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 160,
    damping: 16,
  });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);
  const glowBg = useMotionTemplate`radial-gradient(280px circle at ${glowX} ${glowY}, ${glow}26, transparent 72%)`;

  if (reduced) {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={cn("group relative [transform-style:preserve-3d]", className)}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBg }}
      />
      {children}
    </motion.div>
  );
}
