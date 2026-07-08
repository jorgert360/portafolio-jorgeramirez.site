import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Ingresa tu nombre")
    .max(80, "Nombre demasiado largo"),
  email: z.string().email("Ingresa un correo válido"),
  subject: z
    .string()
    .min(3, "Añade un asunto")
    .max(120, "Asunto demasiado largo"),
  message: z
    .string()
    .min(10, "Cuéntame un poco más (mín. 10 caracteres)")
    .max(2000, "Mensaje demasiado largo"),
});

export type ContactInput = z.infer<typeof contactSchema>;
