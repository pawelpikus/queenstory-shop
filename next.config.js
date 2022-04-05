/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/",
        destination: "products/1",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["naszsklep-api.vercel.app", "media.graphcms.com"],
  },
  formats: ["image/avif", "image/webp"],
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
