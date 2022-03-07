/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com", "naszsklep-api.vercel.app"],
  },
  formats: ["image/avif", "image/webp"],
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
