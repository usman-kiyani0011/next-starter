/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  env: {
    REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  },
  NODE_PATH: '.',
}

module.exports = nextConfig
