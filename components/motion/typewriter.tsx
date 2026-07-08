"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

/** Efecto de escritura dinámica que cicla una lista de palabras. */
export function Typewriter({
  words,
  className,
  typingSpeed = 65,
  deletingSpeed = 35,
  pause = 1700,
}: TypewriterProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const current = words[index % words.length];
    const atEnd = !deleting && sub === current.length;
    const atStart = deleting && sub === 0;

    const delay = atEnd ? pause : atStart ? 400 : deleting ? deletingSpeed : typingSpeed;

    // Toda transición de estado ocurre dentro del timeout (nunca síncrona en el efecto).
    const t = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
      } else if (atStart) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setSub((s) => s + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [sub, deleting, index, words, reduced, pause, typingSpeed, deletingSpeed]);

  const current = words[index % words.length];
  const text = reduced ? words[0] : current.slice(0, sub);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      <span aria-label={words.join(", ")}>{text}</span>
      {!reduced && (
        <motion.span
          aria-hidden
          className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] rounded-full bg-primary"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, times: [0, 0.5, 0.5, 1], repeat: Infinity }}
        />
      )}
    </span>
  );
}
