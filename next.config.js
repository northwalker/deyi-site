/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: process.env.RESUME_URL,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
