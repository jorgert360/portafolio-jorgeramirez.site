import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Convención requerida por @next/mdx (App Router).
 * El estilo tipográfico se aplica con `prose` en la página del artículo;
 * aquí solo ajustamos comportamientos (enlaces internos/externos).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
      if (href.startsWith("http")) {
        return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
      }
      return <Link href={href} {...props} />;
    },
    ...components,
  };
}
