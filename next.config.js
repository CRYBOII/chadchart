/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    URL: process.env.URL || 'http://localhost:3000',
  },
}
