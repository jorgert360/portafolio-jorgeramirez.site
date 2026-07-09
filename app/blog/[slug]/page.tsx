import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { getPost, posts, postComponents } from "@/content/blog";
import { formatDate } from "@/lib/format";
import { site } from "@/content/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const loader = postComponents[slug];
  if (!loader) notFound();
  const { default: Content } = await loader();

  const pageUrl = `${site.url}/blog/${slug}`;
  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `${site.url}/opengraph-image`,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "es",
      articleSection: post.category,
      keywords: post.tags.join(", "),
      author: { "@type": "Person", name: site.fullName, url: site.url },
      publisher: { "@type": "Person", name: site.fullName },
      mainEntityOfPage: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ];

  if (post.faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:pt-40">
      <JsonLd data={jsonLd} />

      <nav
        aria-label="Ruta de navegación"
        className="flex items-center gap-1 text-sm text-muted-foreground"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="size-4" />
        <Link href="/blog" className="transition-colors hover:text-foreground">
          Blog
        </Link>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">{post.title}</span>
      </nav>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <Badge
            variant="primary"
            style={{ color: post.accent, backgroundColor: `${post.accent}1f` }}
          >
            {post.category}
          </Badge>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.readingMinutes} min de lectura
          </span>
        </div>
        <h1 className="mt-4 text-balance text-3xl font-bold leading-[1.15] sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>
      </header>

      <div className="mt-10 h-px w-full bg-border" />

      <div className="prose prose-lg mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:rounded-md prose-code:border prose-code:border-border prose-code:bg-surface-2 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-foreground prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:rounded-2xl prose-pre:border prose-pre:border-border prose-pre:bg-surface-2 prose-blockquote:border-l-primary prose-blockquote:text-foreground/90 prose-li:marker:text-primary">
        <Content />
      </div>

      {post.faq?.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
          <dl className="mt-6 flex flex-col gap-4">
            {post.faq.map((f) => (
              <div
                key={f.question}
                className="rounded-2xl border border-border bg-surface-2/40 p-5"
              >
                <dt className="font-medium">{f.question}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  {f.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="ghost">
          <Link href="/blog">
            <ArrowLeft />
            Volver al blog
          </Link>
        </Button>
        <Button asChild variant="gradient">
          <Link href="/#contact">
            ¿Hablamos?
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
