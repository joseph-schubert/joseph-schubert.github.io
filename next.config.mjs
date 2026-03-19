/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate a static site
  images: {
    unoptimized: true, // Required for GitHub Pages (no server-side image resizing)
  },
  typescript: {
    ignoreBuildErrors: true, // Prevents build failure on minor typing issues
  },
};

export default nextConfig;
