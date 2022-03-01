/** @type {import('next').NextConfig} */
const nextConfig = {
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' }
  //   }
  // },
  images: {
    loader: 'akamai',
    path: '/',
  },
}

module.exports = nextConfig
