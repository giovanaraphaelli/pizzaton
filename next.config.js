/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/menu/pizzas',
        destination: '/menu',
        permanent: true,
      },
    ];
  },
};
