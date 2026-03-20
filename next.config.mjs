/** @type {import('next').NextConfig} */
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
