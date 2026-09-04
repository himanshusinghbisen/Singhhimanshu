import { ImageResponse } from "next/og";

export const alt = "Himanshu Singh — Healthcare Systems Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0f172a",
          color: "#e2e8f0",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 22, color: "#5eead4", letterSpacing: 4 }}>
          HEALTHCARE SYSTEMS ARCHITECT
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16 }}>
          Himanshu Singh
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Designing and building scalable claims and payment integrity
          platforms.
        </div>
      </div>
    ),
    { ...size },
  );
}
