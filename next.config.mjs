import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,

  images: {
    unoptimized: true,
    domains: ["cybertower.com", "flagcdn.com", "px.ads.linkedin.com"],
  },

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  experimental: {
    turbo: false,
    serverSourceMaps: false,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
