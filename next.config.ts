import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // Optional: you can also specify port and pathname if needed
        // port: '',
        // pathname: '/some/path/**', 
      },
    ],
  },
};

export default nextConfig;
