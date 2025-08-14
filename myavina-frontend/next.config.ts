// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /treatments -> /shop
      { source: "/shop", destination: "/treatments", permanent: true },

      // /products -> /treatments (and keep subpaths)
      { source: "/products", destination: "/treatments", permanent: true },
      { source: "/treatments/:path*", destination: "/products/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
