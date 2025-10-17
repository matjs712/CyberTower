import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { domains: ["cyberhub.cl"] },
  trailingSlash: true,
};
export default nextConfig;
