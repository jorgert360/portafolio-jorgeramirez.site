# Reglas para la IA

Estas reglas son obligatorias para cualquier agente o persona que modifique el proyecto.
Su propósito: mantener la calidad, coherencia y rendimiento de una web premium.

## Principios inquebrantables

1. **Edición quirúrgica.** Nunca reemplaces un componente completo si solo vas a modificar una parte. Cambia únicamente lo necesario.
2. **No rompas el responsive.** Todo es mobile-first y debe verse perfecto en 375px, 768px, 1024px, 1366px, 1440px, 1600px y 1920px.
3. **No elimines animaciones existentes** sin autorización explícita. Si una animación estorba, propónlo.
4. **Reutiliza siempre.** Antes de crear algo nuevo, busca un componente, hook o token existente.
5. **Cero duplicación.** DRY en componentes, estilos y datos. Los datos viven en `content/`.
6. **TypeScript estricto.** Nada de `any`. Props e interfaces tipadas. Deriva tipos de `content/types.ts`.
7. **Arquitectura limpia y modular.** Separación por responsabilidad (ui / layout / sections / three / motion).
8. **Documenta lo nuevo.** Todo componente nuevo lleva una breve descripción de su propósito.
9. **Rendimiento por encima de todo.** No sacrifiques Lighthouse ni Core Web Vitals por una animación.
10. **Coherencia visual.** Cada cambio respeta el sistema de diseño (`docs/DESIGN_SYSTEM.md`).

## Rendimiento (Core Web Vitals > 95)

- Todo componente 3D/WebGL se importa con `next/dynamic` y `ssr: false`, con un placeholder ligero.
- Usa `next/image` con `sizes` correctos y formatos modernos.
- Respeta `prefers-reduced-motion`: si está activo, desactiva parallax, autoplay y animaciones no esenciales.
- Nada de librerías pesadas para tareas triviales. Prefiere CSS/Tailwind antes que JS.
- Memoiza escenas R3F y evita re-renders en el loop de animación.

## Accesibilidad (WCAG 2.2 AA)

- Contraste mínimo AA para texto; el texto secundario nunca por debajo de `#94A3B8` sobre fondo oscuro.
- Foco visible en todos los elementos interactivos (`:focus-visible`).
- Estructura semántica (`header`, `nav`, `main`, `section`, `footer`, headings jerárquicos).
- Alternativas textuales (`alt`, `aria-label`) y roles correctos.
- El canvas 3D es decorativo: `aria-hidden` y jamás bloquea el contenido ni el teclado.

## Estilo de código

- Nombres descriptivos; funciones puras cuando sea posible.
- Comentarios solo donde el "por qué" no sea evidente. El código limpio no necesita narrar el "qué".
- Componentes de servidor por defecto; `"use client"` solo cuando haga falta interactividad.
- Colores, radios, sombras y tipografía **exclusivamente** vía tokens de `app/globals.css`.

## Prohibido

- Colores tipo arcoíris o saturados fuera de la paleta.
- Bootstrap, jQuery, o componentes/patrones anticuados.
- CSS inline con colores hardcodeados fuera del sistema de tokens.
- Romper el modo oscuro o el smooth scroll (Lenis).
