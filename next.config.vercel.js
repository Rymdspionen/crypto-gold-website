/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Vercel handles image optimization automatically
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
