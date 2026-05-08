import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/LEGROW',
  // Allow the local IP so HMR (Hot Module Replacement) works properly on other devices
  serverExternalPackages: [],
  allowedDevOrigins: ['192.168.18.12', 'localhost']
};

export default nextConfig;
