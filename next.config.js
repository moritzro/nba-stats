/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: '@import "./styles/mixins.scss" ;',
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/**/**",
      },
      {
        protocol: "https",
        hostname: "a.espncdn.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
