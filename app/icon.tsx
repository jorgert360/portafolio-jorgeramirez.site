import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon branded: monograma JR sobre gradiente de marca. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "sans-serif",
          borderRadius: 14,
        }}
      >
        JR
      </div>
    ),
    { ...size },
  );
}
