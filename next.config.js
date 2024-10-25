const nextI18NextConfig = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com',
    ],
  },
  i18n: nextI18NextConfig.i18n,
};

module.exports = nextConfig;
