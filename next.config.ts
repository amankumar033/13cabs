import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-ilcacnl.nitrocdn.com',
      }
    ]
  }
};

export default nextConfig;
