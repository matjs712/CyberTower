import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { domains: ["Cyberhub.cl", "flagcdn.com", "px.ads.linkedin.com"] },
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
