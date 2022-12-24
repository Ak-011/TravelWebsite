/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
      config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
      });

      return config;
  },
  images: {
      domains: ['cdn.sanity.io'],
      formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
