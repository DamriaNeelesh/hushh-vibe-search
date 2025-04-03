/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['hushh-button-sdk-1'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;