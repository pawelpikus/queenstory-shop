/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
