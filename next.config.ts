import type { NextConfig } from "next";

/**
 * @file next.config.ts
 * @description Next.js configuration optimized for static export to GitHub Pages.
 */

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },
};

export default nextConfig;
