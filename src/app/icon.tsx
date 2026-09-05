import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#F4F1EA",
          color: "#1D4ED8",
          fontSize: 15,
          fontWeight: 700,
          border: "1px solid #D6D0C4",
        }}
      >
        HS
      </div>
    ),
    { ...size },
  );
}
