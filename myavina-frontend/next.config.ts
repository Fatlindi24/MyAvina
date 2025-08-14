// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /products  -> /treatments
      // (does NOT affect /products/:slug pages)
      { source: "/products", destination: "/treatments", permanent: true },
    ];
  },
};

export default nextConfig;
