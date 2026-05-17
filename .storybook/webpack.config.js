const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: { implementation: require('sass') },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
}