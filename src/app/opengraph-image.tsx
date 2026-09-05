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
          background: "#F4F1EA",
          color: "#1F2937",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#D97706",
            letterSpacing: 6,
            fontWeight: 600,
          }}
        >
          ENGINEERING JOURNAL
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 20 }}>
          Himanshu Singh
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#1D4ED8",
            marginTop: 12,
            fontWeight: 600,
          }}
        >
          Healthcare Systems Architect
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#4B5563",
            marginTop: 28,
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
