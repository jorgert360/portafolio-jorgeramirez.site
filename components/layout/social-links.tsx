import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { socials } from "@/content/site";
import type { SocialPlatform } from "@/content/types";
import { cn } from "@/lib/utils";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
  XIcon,
} from "@/components/icons/brand";

const icons: Record<SocialPlatform, ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
  email: Mail,
  x: XIcon,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map((s) => {
        const Icon = icons[s.platform];
        return (
          <li key={s.platform}>
            <a
              href={s.href}
              aria-label={s.label}
              target={s.platform === "email" ? undefined : "_blank"}
              rel={s.platform === "email" ? undefined : "noopener noreferrer"}
              className="group grid size-10 place-items-center rounded-full border border-border-strong bg-surface-2/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
            >
              <Icon className="size-4 transition-transform group-hover:scale-110" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
