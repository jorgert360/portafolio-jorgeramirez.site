import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { sortedPosts, blogCategories } from "@/content/blog";
import { formatDate } from "@/lib/format";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre automatización RPA, UiPath, Python, inteligencia artificial, APIs, Next.js y SEO técnico.",
  alternates: { canonical: "/blog" },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `Blog de ${site.fullName}`,
  url: `${site.url}/blog`,
  inLanguage: "es",
  blogPost: sortedPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    url: `${site.url}/blog/${p.slug}`,
  })),
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={blogJsonLd} />

      <nav
        aria-label="Ruta de navegación"
        className="flex items-center gap-1 text-sm text-muted-foreground"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">Blog</span>
      </nav>

      <Reveal className="mt-8 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Notas técnicas
        </span>
        <h1 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
          El <span className="text-gradient">blog</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Automatización, IA y desarrollo explicados desde la trinchera. Lo que
          aprendo construyendo, documentado para que a ti te tome menos tiempo.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
        {blogCategories.map((c) => (
          <Badge key={c} variant="outline">
            {c}
          </Badge>
        ))}
      </Reveal>

      <div className="mt-12 flex flex-col gap-4">
        {sortedPosts.map((post, i) => (
          <Reveal key={post.slug} delay={0.04 * i}>
            <article className="group relative rounded-2xl border border-border bg-surface-2/40 p-6 transition-colors hover:border-border-strong sm:p-7">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <Badge
                  variant="primary"
                  style={{ color: post.accent, backgroundColor: `${post.accent}1f` }}
                >
                  {post.category}
                </Badge>
                <span>{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {post.readingMinutes} min
                </span>
              </div>

              <h2 className="mt-3 text-xl font-semibold sm:text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors after:absolute after:inset-0 group-hover:text-primary"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                {post.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Leer artículo
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
