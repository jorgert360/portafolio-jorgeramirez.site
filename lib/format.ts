/** Formatea una fecha ISO (YYYY-MM-DD) en español, sin desfase de zona horaria. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
