/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
  images: {
    domains: ['images.ctfassets.net', 'downloads.ctfassets.net'],
  },
  experimental: { appDir: false },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
}
