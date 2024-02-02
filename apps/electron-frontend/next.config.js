const path = require("path");
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  transpilePackages: ["ui", "@comflowy/common", "antd", "@ant-design"],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
}

module.exports = nextConfig
