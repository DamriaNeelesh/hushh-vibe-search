/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable SWC compiler
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    unoptimized: true,
    domains: [
      // Add your image domains here
    ],
  },
  
  // Use 'standalone' instead of 'export' to support dynamic routes
  output: 'standalone',
  
  // Handle browser APIs in webpack
  webpack: (config, { isServer }) => {
    if (isServer) {
      // When on the server, don't attempt to load modules that depend on document/window
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig; 