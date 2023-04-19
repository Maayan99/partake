/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  cssLoaderOptions: {
    importLoaders: 1,
    modules: {
      localIdentName: '[local]__[hash:base64:5]',
    },
  },
}

module.exports = nextConfig
