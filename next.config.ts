export default {
  webpack(config, { isServer }) {
      const prefix = config.assetPrefix ?? config.basePath ?? '';
      config.module.rules.push({
        test: /\.mp4$/,
        use: [{
          loader: 'file-loader',
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${dev ? '' : '../'}${isServer ? '../' : ''}static/media/`,
            name: '[name].[hash:8].[ext]',
          },
        }],
      });
  
      return config;
    },
  };
