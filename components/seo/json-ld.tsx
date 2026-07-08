/**
 * Inyecta datos estructurados JSON-LD.
 * Server Component: el script se renderiza en el HTML inicial (ideal para SEO/AEO).
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // El contenido es estático y controlado por nosotros.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
