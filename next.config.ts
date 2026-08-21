import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Deployed as a fully static site (no image optimization server needed).
    unoptimized: true,
  },
};

export default nextConfig;
