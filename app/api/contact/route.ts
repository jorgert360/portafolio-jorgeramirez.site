import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { Resend } from "resend";
import { site } from "@/content/site";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;
  const timestamp = new Date().toISOString();

  // 1. Always log to console (works on every environment)
  console.info(`[contacto] ${timestamp} — ${name} <${email}> — ${subject}: ${message}`);

  // 2. Try to send via Resend if API key is configured
  if (resend) {
    try {
      await resend.emails.send({
        from: "Portafolio <onboarding@resend.dev>",
        to: [site.email],
        replyTo: email,
        subject: `[Contacto Web] ${subject} — ${name}`,
        html: `
          <h2>Nuevo mensaje desde el portafolio</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold">Nombre</td><td style="padding:8px">${name}</td></tr>
            <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>
            <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold">Asunto</td><td style="padding:8px">${subject}</td></tr>
            <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold">Mensaje</td><td style="padding:8px">${message}</td></tr>
            <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold">Fecha</td><td style="padding:8px">${new Date().toLocaleString("es-CO")}</td></tr>
          </table>
        `,
      });
      console.info(`[contacto] ✅ Email enviado a ${site.email}`);
    } catch (err) {
      console.error("[contacto] ❌ Error al enviar email:", err);
    }
  } else {
    console.info("[contacto] ⚠️ RESEND_API_KEY no configurada. El mensaje solo se registró en consola.");
    console.info("[contacto] → Configura RESEND_API_KEY en .env.local para recibir correos.");
  }

  return NextResponse.json({
    ok: true,
    sent: !!resend,
    message: resend
      ? "Mensaje recibido. Te responderé muy pronto."
      : "Mensaje registrado. Para recibir correos, configura RESEND_API_KEY.",
  });
}
