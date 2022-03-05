/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com", "naszsklep-api.vercel.app"],
  },
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
