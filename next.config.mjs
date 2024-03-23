/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [480, 768, 1024, 1280, 1366, 1440, 1920, 2048],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
