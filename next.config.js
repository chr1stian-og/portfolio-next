/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/files",
          outputPath: "static/files",
          name: "[name].[hash].[ext]",
          esModule: true,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
