/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;
