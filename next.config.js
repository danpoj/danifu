/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.waifu.im'],
    unoptimized: true,
  },
}

module.exports = nextConfig
