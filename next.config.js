/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["sayyid-nft-marketplace.infura-ipfs.io"],
    formats: ["image/webp"],
  },
}

module.exports = nextConfig
