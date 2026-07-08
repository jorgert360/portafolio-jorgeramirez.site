import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  /** Pausa la animación al pasar el cursor. */
  pauseOnHover?: boolean;
}

/** Banda de scroll infinito y continuo (duplica el contenido para el loop). */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("group mask-fade-x flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
