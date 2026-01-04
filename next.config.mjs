/** @type {import('next').NextConfig} */
const nextConfig = {
output: "export",
 trailingSlash: true,
  images: {
    unoptimized: true, // 👈 REQUIRED
  },
};

export default nextConfig;
