import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { Innovation } from "@/components/sections/innovation";
import { Testimonials } from "@/components/sections/testimonials";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stack Tecnológico",
    description: "Tecnologías que domino como Automation Engineer",
    url: `${site.url}/#stack`,
    numberOfItems: 11,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UiPath" },
      { "@type": "ListItem", position: 2, name: "Python" },
      { "@type": "ListItem", position: 3, name: "Pandas" },
      { "@type": "ListItem", position: 4, name: "SQL" },
      { "@type": "ListItem", position: 5, name: "JavaScript" },
      { "@type": "ListItem", position: 6, name: "Next.js" },
      { "@type": "ListItem", position: 7, name: "Power BI" },
      { "@type": "ListItem", position: 8, name: "Microsoft Azure" },
      { "@type": "ListItem", position: 9, name: "Git & GitHub" },
      { "@type": "ListItem", position: 10, name: "REST APIs" },
      { "@type": "ListItem", position: 11, name: "Bizagi" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Innovation />
      <Testimonials />
      <Experience />
      <Contact />
    </>
  );
}
