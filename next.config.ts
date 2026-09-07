import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Avatar is tiny on-page; keep quality high enough without overserving.
    qualities: [75, 80],
  },
};

export default nextConfig;
