import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
