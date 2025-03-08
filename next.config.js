/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  // If your repo is username.github.io, leave basePath empty
  // If it's a project repo, use the project name
  basePath: '',
}

module.exports = nextConfig