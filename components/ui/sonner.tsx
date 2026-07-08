"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  const { resolvedTheme } = useTheme();
  return (
    <Sonner
      theme={(resolvedTheme as ToasterProps["theme"]) ?? "dark"}
      position="bottom-right"
      className="pointer-events-auto"
      toastOptions={{
        classNames: {
          toast:
            "glass !rounded-xl !border-border !text-foreground !bg-surface-2/80",
          description: "!text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}
