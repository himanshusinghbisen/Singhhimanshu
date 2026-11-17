import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Avatar is tiny on-page; keep quality high enough without overserving.
    qualities: [75, 80],
  },
  async redirects() {
    return [
      {
        source: "/blog/data-cleaning-and-preparation",
        destination: "/blog/data-understanding-and-preparation",
        permanent: true,
      },
      {
        source: "/blog/data-wrangling-and-feature-engineering",
        destination: "/blog/data-understanding-and-preparation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
