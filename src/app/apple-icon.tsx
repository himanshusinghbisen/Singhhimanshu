import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4F1EA",
          color: "#1D4ED8",
          fontSize: 72,
          fontWeight: 700,
          border: "2px solid #D6D0C4",
        }}
      >
        HS
      </div>
    ),
    { ...size },
  );
}
