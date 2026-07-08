import { ImageResponse } from "next/og";

export const alt = "Jorge Ramirez — Automation Engineer & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Nota: texto en ASCII para no depender de fuentes con glifos acentuados en Satori.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(1000px 600px at 78% 12%, rgba(59,130,246,0.28), transparent), radial-gradient(800px 500px at 10% 100%, rgba(139,92,246,0.22), transparent), #030712",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            JR
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, lineHeight: 1.05 }}>
            Jorge Ramirez
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#cbd5e1" }}>
            Automation Engineer · AI Developer
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {["UiPath", "Python", "IA", "Next.js"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.25)",
                  fontSize: 24,
                  color: "#e2e8f0",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#64748b",
          }}
        >
          <div style={{ display: "flex" }}>jorgeramirez.dev</div>
          <div style={{ display: "flex" }}>RPA · IA · Software</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
