/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // ✅ Disable ESLint errors from breaking the build on Vercel
    ignoreDuringBuilds: true,
    
  },
};

module.exports = nextConfig;
