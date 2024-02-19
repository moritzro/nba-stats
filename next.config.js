/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: '@import "./styles/mixins.scss" ;',
  },
};

module.exports = nextConfig;
