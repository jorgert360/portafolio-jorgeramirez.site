import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Logo({
  className,
  showName = true,
}: {
  className?: string;
  showName?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`Inicio — ${site.fullName}`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-border-strong bg-surface-2">
        <span className="font-display text-sm font-bold text-gradient">
          {site.initials}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: "0 0 26px -6px rgba(59,130,246,0.75)" }}
        />
      </span>
      {showName && (
        <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight sm:inline">
          {site.name}
        </span>
      )}
    </Link>
  );
}
