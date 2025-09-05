import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // TEMP: let builds pass while we fix lint errors
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
