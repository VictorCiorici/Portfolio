import type { NextConfig } from "next";

/**
 * @file next.config.ts
 * @description Next.js configuration optimized for static export to GitHub Pages.
 */

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages compatibility
  output: "export",

  // GitHub Pages usually hosts on https://<username>.github.io/<repo-name>/
  // We need to set the basePath to the repository name to ensure links work correctly.
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",

  // Disable image optimization as GitHub Pages doesn't support the Next.js image API
  images: {
    unoptimized: true,
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

  // Ensure trailing slashes for cleaner static URLs and to avoid 404s on refresh
  trailingSlash: true,
};

export default nextConfig;
