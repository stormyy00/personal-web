/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// module.exports = nextConfig
module.exports = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
module.exports = {
  images: {
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
