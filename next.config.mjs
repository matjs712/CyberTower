// next.config.mjs

import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // output: "export", // ✅ exportación estática
  trailingSlash: true, // ✅ rutas amigables para IIS/FTP
  images: {
    unoptimized: true,
    domains: ["cyberhub.cl", "flagcdn.com", "px.ads.linkedin.com"],
  },
  typescript: { ignoreBuildErrors: true }, // ✅ omite errores de tipos generados
  eslint: { ignoreDuringBuilds: true }, // ✅ omite eslint durante build
};

// ✅ plugin de next-intl
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
